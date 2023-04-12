import Navbar from './navbar'
import Footer from './footer'
import Container from '@mui/material/Container'
import {Fragment} from "react";

export default function Layout({children}) {
    return (
        <Fragment>
            <Navbar/>
            <Container maxWidth="xl" disableGutters={true}>
                <main>{children}</main>
            </Container>
            <Footer/>
        </Fragment>
    )
}
