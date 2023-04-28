import { useContext, useEffect} from 'react'
import Link from 'next/link'
import authContext from '@/context/auth/authContext'
import appContext from '@/context/app/appContext'

export default function Header() {

  // Extraer el usuario autenticado
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext)

  // Context de la app
  const { limpiarState } = useContext(appContext)
  
  useEffect(() => {
    usuarioAutenticado()
  },[])


  return (
    <header className='py-8 flex flex-col md:flex-row items-center justify-between'>
        <Link href="/" onClick={() =>limpiarState()}>
          <img className='w-64 mb-8 md:mb-0 cursor-pointer' src='/logo.svg' />
        </Link>
        
        <div>
          { usuario ? (
            <div className='flex items-center'>
            <p className='mr-2'>Hola: {usuario.nombre}</p>
            <button type='button' 
              className='bg-black px-5 py-3 rounded text-white font-bold uppercase'
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className='bg-red-500 px-5 py-3 rounded text-white font-bold uppercase mr-2'>Iniciar Sesión</Link>
              <Link href="/crear_cuenta" className='bg-black px-5 py-3 rounded text-white font-bold uppercase'>Crear Cuenta</Link>
            </>
            )
          }
        </div>
    </header>
  )
}
