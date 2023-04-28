import { useContext} from 'react'
import authContext from '@/context/auth/authContext'
import appContext from '@/context/app/appContext'

export default function Alerta() {

    //AuthContext = useContext(authContext)
    //const {mensaje} = AuthContext

    const { mensaje } = useContext( authContext )
    const { mensaje_archivo } = useContext( appContext )

  return (
    <div className='bg-red-500 py-2 px-3 w-full my-3 max-w-lg 
        text-center text-white mx-auto'>
        {mensaje || mensaje_archivo}
    </div>
  )
}
