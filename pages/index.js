import { useContext, useEffect } from "react"
import Layout from "@/components/Layout"
import Alerta from "@/components/Alerta"
import Dropzone from "@/components/Dropzone"
import authContext from "@/context/auth/authContext"
import appContext from "@/context/app/appContext"
import Link from "next/link"

export default function Home() {
  
  // Extraer el usuario autenticado
  const { usuarioAutenticado } = useContext(authContext)
  const { mensaje_archivo, url } = useContext(appContext)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      usuarioAutenticado()
    }
  },[])

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        {url ? (
          <>
            <p className="text-center text-4xl mt-10">
              <span className="font-bold text-red-700 text-3xl uppercase">Tu URL es: </span>
              {`${process.env.frontendURL}/enlaces/${url}`}
            </p>

            <button
                type="button"
                className="bg-red-500 mt-10 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                onClick={()=> navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`)}
              >Copiar Enlace</button>
          </>
        ) : (
          <>
            {mensaje_archivo && <Alerta /> }
            <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
              <Dropzone />
              <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
                <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">Compartir archivos de forma sencilla y privada</h2>
                <p className="text-lg leading-loose">
                  <span className="text-red-500 font-bold">ReactNodeSend</span>te permite enviar archivos de forma segura. Cuando subes un archivo, genera un enlace que puedes compartir con el recipiente. Para más seguridad, también tienes la opción de establecer una contraseña y cambiar la configuración de la fecha de validez. Los archivos no se guardan en la nube.
                </p>
                <Link className="text-red-500 font-bold text-lg hover:text-red-700" href="/crear_cuenta">Crea una cuenta para mejores beneficios</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
