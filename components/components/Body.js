import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import {Button, Container, Row} from 'react-bootstrap'
import { Controller, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation  } from "swiper";
import {Brands, Gruas1,Gruas2,Gruas3,Gruas4, Brands2, Nosotros} from '../../profile'



const Body = () => {
    return (  
        <main>
            {/* PRIMER HERO*/}
            <div className="hero  d-flex align-items-center col-12 " >
                <Container >
                    <Row className='d-flex justify-content-center  text-center'>
                        <div className='d-flex justify-content-center '>
                            <h1 className='quienes-somos  text-white' >Máquinas para el desarrollo</h1>
                        </div>
                    </Row>
                    <Row  className='d-flex justify-content-center align-items-center text-center '>
                        <div>
                            <h3 className='text-white' > Importamos todo tipo de maquinaria pesada, para obras publicas y minería.</h3>
                        </div> 
                    </Row>
                    <Row  className='d-flex justify-content-center  '> 
                        <Button className='medio-imgaen col-3  col-md-2  col-lg-1' variant="light">cotizar</Button>
                    </Row>
                </Container>    
            </div>
            {/* QUIENES SOMOS*/}
            <div >
                <h1 id='Quienessomos' className="text-dark d-flex justify-content-center quienes-somos mt-5">¿Quienes somos?</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            {/* QUIENES SOMOS CONTENEDOR*/}
            <Container className="mt-5 mb-5">
                <Row>
                    <div className="col-12 order-1 order-lg-0 col-lg-6 d-flex  justify-content-center align-items-center ">
                        <div >
                            <div className='text-center'>
                                <p>Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner</p>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <Button variant="dark">contactanos</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 order-0 order-lg-1 col-lg-6  mb-5 ">
                        <div>
                            <Image alt="maquinas" src='/assets/2imagen.png'  width={600} height={400} layout='intrinsic'></Image>
                        </div>
                    </div>
                </Row>
            </Container>
            {/* SEGUNDO HERO*/}
            <div className="hero2 col-12 " >
                <Container >
                    <Row className='d-flex justify-content-center align-items-center text-center'>
                        <div>
                            <h1 className="quienes-somos text-white mt-5"> Nuestro servicio </h1>
                        </div>
                    </Row>
                    <Row className='d-flex justify-content-center align-items-center text-center mb-4'>
                        <div>
                            <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
                        </div>
                    </Row>
                    <Row className='d-flex justify-content-center text-center align-items-center mt-3 mb-4 '>
                        <div >
                            <Image alt="maquinas" src='/assets/excavator.png'  width={56} height={54} layout='intrinsic'></Image>
                        </div>
                    </Row>
                    <Row  className='d-flex justify-content-center text-center align-items-center mt-3 '>
                        <div >
                            <h2 className='text-light'>Venta de maquinaria usada</h2>
                        </div> 
                    </Row>
                    <Row  className='d-flex justify-content-center   '> 
                        <div className='text-center '>
                            <h4 className='text-align-center texto-hero2 text-white'>Importamos todo tipo de maquinaria de segunda mano para la minería y las obras públicas directamente de los mercados de Europa y de Estados Unidos</h4>
                        </div>      
                    </Row>
                </Container>    
            </div>
            {/* MAQUINARIA EN VENTA*/}
            <div >
                <h1 id='maquinarias' className="text-dark d-flex justify-content-center mt-5 quienes-somos">Maquinaria en venta</h1>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
           
            {/* VIDEO PRIMER MAQUINA EN VENTA*/}
            <Container>
                <div className='col-12 imagen-de-video mb-5 mt-5 d-flex  '>
                    <Container className=' d-flex justify-content-center text-center align-items-center'>
                        <a target="_blank" href='https://www.facebook.com/watch/?v=521585079352621' rel="noopener noreferrer" className='boton-video'> <Button   variant="light"> <Image alt='maquinas' src='/assets/play.png'  width={100} height={58} layout='intrinsic'></Image> </Button></a>
                    </Container>
                </div>
            </Container>
            {/* segunda MAQUINA VENTA*/}
            <Container className='mb-3'>
<Row >
    <div className=" d-flex col-12 order-1 order-lg-1 col-lg-6  align-items-center">
        <div className='col-12'>
            <Row >
                <div className='d-flex justify-content-center'>
                    <h1 className='titulos-venta text-center'>Excavadora CAT 336 ELH</h1>
                </div>
            </Row>
            {
             Gruas2.map(({variable, content}, i,index) =>(
                <Row className='d-flex justify-content-center' key={index}>
                    <div className=" d-flex col-12 order-1 order-lg-0 col-lg-6 text-center align-items-center  ">
                        <div className=' me-auto mx-auto '>
                            <div className='d-flex '>
                                <div className=' order-0 w-20 'style={{width: 70}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'>{variable} </p>
                                    </div>
                                </div>
                                <div className='order-1   d-flex  ' style={{width: 190}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'> {content} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                ))       
            }
            <div className='d-flex justify-content-center mt-2'>
                <div className='div-info-lado '>
                    <Button variant="dark">contactanos</Button>
                </div>                     
            </div>
        </div>
    </div>
    <div className="col-12 order-0 order-lg-1 col-lg-6 ">
        <div className="Cat-imagen mb-5">
            <div className='w-100 h-100 d-flex align-items-end justify-content-end'>
                <Image alt="maquinas" src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
            </div>
        </div>
    </div>
</Row>
</Container>
            {/* Tercer MAQUINARIA EN VENTA*/}
            <Container>
<Row >
    <div className=" d-flex col-12 order-1 order-lg-1 col-lg-6  align-items-center">
        <div className='col-12'>
            <Row >
                <div className='d-flex justify-content-center'>
                    <h1 className='titulos-venta text-center'>Gruas de marca Link Belt</h1>
                </div>
            </Row>
            {
            Gruas3.map(({variable, content}, i,index) =>(
                <Row className='d-flex justify-content-center' key={index}>
                    <div className=" d-flex col-12 order-1 order-lg-0 col-lg-6 text-center align-items-center  ">
                        <div className=' me-auto mx-auto '>
                            <div className='d-flex '>
                                <div className=' order-0 w-20 'style={{width: 70}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'>{variable} </p>
                                    </div>
                                </div>
                                <div className='order-1   d-flex  ' style={{width: 190}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'> {content} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                ))       
            }
            <div className='d-flex justify-content-center mt-2'>
                <div className='div-info-lado '>
                    <Button variant="dark">contactanos</Button>
                </div>                     
            </div>
        </div>
    </div>
    <div className="col-12 order-0 order-lg-0 col-lg-6 mb-5 ">
                        <Swiper pagination={true} navigation={true} slidesPerView={1} spaceBetween={20} centeredSlides={true} modules={[Pagination, Navigation]} className="mySwiper">
                            <SwiperSlide >
                                <div className="swiper2-1 mb-5 w-100" >
                                    <div className='w-100 h-100 d-flex align-items-end justify-content-end'>
                                        <Image alt="maquinas" src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="swiper2-2 mb-5 w-100" > </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="swiper2-3 mb-5 w-100" >  </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="swiper2-4 mb-5 w-100" > </div>
                            </SwiperSlide>      
                            <SwiperSlide >
                                <div className="swiper2-5 mb-5 w-100" > </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper2-6 mb-5 w-100" > </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper2-7 mb-5 w-100" > </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper2-8 mb-5 w-100" > </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
</Row>
</Container>      
            {/* Nosotros lo conseguimos*/}
            <div >
                <h1 className="text-dark d-flex justify-content-center text-center mt-5 quienes-somos">Nosotros te lo conseguimos</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            <div className='mt-4 text-center align-items-center '>
                <p className=' d-flex justify-content-center '>¿Tienes un proyecto y necesitas maquinaria pesada de segunda mano?  </p>
                <p className='text-dark d-flex justify-content-center align-item-center'>¡Cuenta con nosotros! Te traemos la maquinaria deseada por flotas o individual desde Estados unidos o Europa. </p>
            </div>
            <div className=' d-flex justify-content-center'>
                <Button className=' justify-content-center' variant="dark">contactanos</Button>
            </div>
            {/* Nosotros te lo conseguimos-imagenes*/}
            <Container  > 
                <Row>
                {
                    Nosotros.map(({img, text}, i,index) =>(
                        <div className='col-lg-6 col-12' key={index}>
                            <div className='d-flex justify-content-center mt-4  '>
                                <Image alt="maquinas" src={img} width={600} height={326} layout='intrinsic' ></Image>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h3 className='text-dark  py-2'>{text}</h3>
                            </div>
                        </div>
                    ))
                }
                </Row>
            </Container>
            {/*  Y mucho mas*/}
            <Container className='mt-5 mb-5 text-center align-items-center '>
                    <div >
                        <h2 className=" d-flex justify-content-center mb-5 ">Y MUCHO MAS</h2>
                    </div>
            </Container>
            {/* Swiper de Y mucho mas*/}     
            <Brands2></Brands2>
            {/* Marcas comerciales*/}
            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos mt-5">Marcas comerciales</h1>
            </div>
            <div className='d-flex justify-content-center mb-4'>
                <Image  alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            {/*Swiper de  Marcas comerciales*/}
            <Brands></Brands>
            {/* Recien vendida*/}
            <div >
                <h1 className="text-dark d-flex justify-content-center mt-10 quienes-somos">Recien vendida</h1>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            {/* Recien vendida container*/}
            <Container>
<Row >
    <div className=" d-flex col-12 order-1 order-lg-1 col-lg-6  align-items-center">
        <div className='col-12'>
            <Row >
                <div className='d-flex justify-content-center'>
                    <h1 className='titulos-venta text-center'>Retroexcavadora CASE  570MXT 4x4 cargador basculante</h1>
                </div>
            </Row>
            {
            Gruas4.map(({variable, content}, i,index) =>(
                <Row className='d-flex justify-content-center' key={index}>
                    <div className=" d-flex col-12 order-1 order-lg-0 col-lg-6 text-center align-items-center  ">
                        <div className=' me-auto mx-auto '>
                            <div className='d-flex '>
                                <div className=' order-0 w-20 'style={{width: 70}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'>{variable} </p>
                                    </div>
                                </div>
                                <div className='order-1   d-flex  ' style={{width: 190}}>
                                    <div className='div-info-lado'>
                                        <p className='lado-izquierdo d-inline'> {content} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                ))       
            }
            <div className='d-flex justify-content-center'>
                <div className='div-info-lado '>
                    <h2 className='titulos-venta'>Vendido</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 order-0 order-lg-1 col-lg-6 ">
                        <div className="vendido-imagen mb-5 mt-5">
                            <div className=' w-100 h-100 d-flex  align-items-start justify-content-start '>
                                <Image alt="maquinas" src='/assets/logo-vendido.png'  width={158} height={161} layout='intrinsic'></Image>
                            </div>
                        </div>
                    </div>
</Row>
</Container>
            {/* testimonios*/}
            <div className='mt-5' >
                <h1 id='testimonios' className="text-dark d-flex justify-content-center quienes-somos  ">Testimonios</h1>
            </div>
            <div className='d-flex justify-content-center mb-4 '>
                <Image alt="maquinas" src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            {/* Swiper de testimonios*/}
            <Container className=" mb-5 ">
                <Row className='d-flex justify-content-center'>
                    <div className="col-12 ">
                        <Swiper slidesPerView={1} pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper2" >
                            <SwiperSlide >
                                <Container className='mb-5'>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className='andrea mb-3'>Andrea</h2>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className=' d-flex justify-content-center'>
                                            <div>
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrilla-vacia.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                        </div>
                                    </Row> 
                                    <div className=' d-flex justify-content-center text-center align-items-center  '>
                                        <div className='d-flex justify-content-center text-center align-items-center col-12 col-lg-5 '>
                                            <p>
                                                Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner 
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Container className='mb-5'>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className='andrea mb-3'>Lautaro</h2>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className=' d-flex justify-content-center'>
                                            <div>
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic' ></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className=' d-flex justify-content-center align-items-center text-center '>
                                        <div className='d-flex justify-content-center text-center align-items-center col-12 col-lg-5 '>
                                            <p>
                                                Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner 
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Container className='mb-5'>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className='andrea mb-3'>Santiago</h2>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className=' d-flex justify-content-center'>
                                            <div>
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrilla-vacia.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className=' d-flex justify-content-center align-items-center text-center '>
                                        <div className='d-flex justify-content-center text-center align-items-center col-12 col-lg-5 '>
                                            <p>
                                                Realmente no estoy del todo comodo todavia, pero debo admitir que a un nivel objetivo alcanza las espectativas, y de hecho en un futuro espero poder realizar mas negocos. 
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Container className='mb-5'>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className='andrea mb-3'>Nicolas</h2>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className=' d-flex justify-content-center'>
                                            <div>
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div className='ms-2 me-2' >
                                                <Image alt="maquinas" src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                            <div>
                                                <Image alt="maquinas" src='/assets/estrilla-vacia.png' width={20} height={20} layout='intrinsic'></Image>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className=' d-flex justify-content-center align-items-center text-center '>
                                        <div className='d-flex justify-content-center text-center  align-items-center col-12 col-lg-5 '>
                                            <p>
                                                Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner 
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Row>
            </Container>
        </main>
    );
}
export default Body;
