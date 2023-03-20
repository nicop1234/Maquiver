import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import {Navar} from '../../profile'
import { Nav, Navbar,  Container, Button, } from 'react-bootstrap'





const Layout = ({children}) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg='white'>
          <Container>
            <Nav.Link ><Image alt="maquinas" src='/assets/logo.PNG'  width={135} height={33} layout='intrinsic'/></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
              <Nav className="me-auto mx-auto d-flex  ">
                {
                  Navar.map(({texto, clas, href}, i,index) =>(
                    <div className='text-center' key={index}>
                      <Nav.Link className= {clas} href= {href}>{texto}</Nav.Link>
                    </div>
                  ))
                }
              </Nav>
              <Nav>
                <Button className='d-inline' variant="dark">contactanos</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      {children}
      <div className='text-white d-flex justify-content-center  bg-dark ' >
        <div >
          <p ><span className='ancho-letra-copy'> © </span> DivGeeks Industries/ From SFFN</p>
        </div>
      </div>
    </>
  );
}
export default Layout;