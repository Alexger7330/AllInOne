import { Header } from "../../components/Header"
import { Outlet } from 'react-router-dom'
import { Footer } from "../../components/Footer"

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}