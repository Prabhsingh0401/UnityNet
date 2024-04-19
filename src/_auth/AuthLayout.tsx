import { Outlet , Navigate } from "react-router-dom"

const Authlayout = () => {

  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? (
      <Navigate to='/'></Navigate>
    ):(
    <>
    <section>
      <Outlet></Outlet>
    </section>
    </>
    )}
    </>
  )
}

export default Authlayout
 