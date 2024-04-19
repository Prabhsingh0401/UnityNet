import Authlayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import './Globals.css'
import { Route , Routes } from 'react-router-dom'

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<Authlayout />}>
            {/* Public Routes */}
            <Route path='/sign-in' element={<SigninForm />}></Route>
            <Route path='/sign-up' element={<SignupForm />}></Route>
            </Route>
            {/* Private Routes */}
            <Route element={<RootLayout />}>
            <Route index element={<Home/>} ></Route>
            </Route>
        </Routes>
    </main>
  )
}

export default App
