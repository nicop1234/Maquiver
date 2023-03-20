import React from "react";
import { Container,Image } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



export const Nosotros = [
    {
        img: '/assets/1-conseguimos.png',
        text: 'Retroescabadoras'
    },

    {
        img: '/assets/2-conseguimos.png',
        text: 'Excavadoras'
    },

    {
        img: '/assets/3-conseguimos.png',
        text: 'Tractor oruga'
    },

    {
        img: '/assets/4-conseguimos.png',
        text: 'Mini cargador'
    },
]
export const Navar = [
    {
        texto: 'quienes somos',
        clas: 'text-dark',
        href: '#Quienessomos'
    },
    {
        texto: 'maquinarias',
        clas: 'text-dark',
        href: '#maquinarias'

    },
    {
        texto: 'testimonios',
        clas: 'text-dark',
        href: '#testimonios'
    },

]
export const Gruas4 = [
    {
        variable: 'año:',
        content:'2011'
    },
    {
        variable: 'odometro:',
        content:'4,300 horas'
    },
    {
        variable: 'condicion:',
        content:'usada,Perfecto estado.'
    },
    {
        variable:'Precio:',
        content:'$55,000 USD'
    }
  ]

export const Gruas3 = [
    {
        variable: 'capacidad:',
        content:'Desde 20 a 80 toneladas.'
    },
    {
        variable: 'condicion:',
        content:'usada,Perfecto estado.'
    },
  ]



export const Gruas1 = [
    {
        variable: 'año:',
        content:'2014'
    },
  
    {
        variable: 'odometro:',
        content:'11.037'
    },
    {
        variable: 'condicion:',
        content:'USADA, Perfecto estado.'
    },
  ]


  export const Gruas2 = [
    {
        variable: 'año:',
        content:'2013'
    },
    {
        variable: 'odometro:',
        content:'-'
    },
    {
        variable: 'condicion:',
        content:'usada,Perfecto estado.'
    },
    {
        variable:'Precio:',
        content:'$145,000 USD'
    }
  ]



export const Brands2 =() => {
    return(
        <Swiper 
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        pagination={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        className="mySwiper-4">
                <SwiperSlide>
                    <div  className="mb-5" >
                        <Image alt="maquinas" src='/assets/rodillo.png'  width={220} height={207} layout='intrinsic' ></Image>
                        <p className='d-flex justify-content-center'>Rodillo compactador</p> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-5">
                        <Image alt="maquinas" src='/assets/dumper.png'  width={220} height={207} layout='intrinsic'></Image>
                        <p className='d-flex justify-content-center'>Dumper</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-5">
                        <Image alt="maquinas" src='/assets/Hormigonera.png'  width={220} height={207} layout='intrinsic'></Image>
                        <p className='d-flex justify-content-center'>Hormigonera todo terreno</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-5">
                        <Image  alt="maquinas" src='/assets/camion-bomba.png'  width={220} height={207} layout='intrinsic'></Image>
                        <p className='d-flex justify-content-center'>Camion bomba de hormigon </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-5">
                        <Image alt="maquinas" src='/assets/Camiones-volquetes.png'  width={220} height={207} layout='intrinsic'></Image>
                        <p className='d-flex justify-content-center'>Camiones volquetes articulado </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-5">
                        <Image alt="maquinas" src='/assets/Gruas-sobre-orugas.png'  width={220} height={207} layout='intrinsic'></Image>
                        <p className='d-flex justify-content-center'>Gruas sobre orugas </p> 
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}





export const Brands = () => {
  return (
    <Container fluid className="section-brands">
      <Swiper
        modules={[Navigation, Pagination, Autoplay,Grid, A11y]}
        spaceBetween={10}
        className="my-swiper-brands"
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1920: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide style={{ height: "100%" }}>
        <div className="brand-14  brand-15 h-100">
        <img
            src="/assets/new-sin.png"
            alt="maq"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-13 brand-15 h-100">
                <img
                src="/assets/bocat-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-12 brand-15 h-100">
                <img
                src="/assets/case-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-11 brand-15 h-100">
                <img
                src="/assets/cat-sin.png"
                alt="maq"
                />
            </div>

        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-10 brand-15  h-100">
                <img
                src="/assets/cater-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-9 brand-15 h-100">
                <img
                src="/assets/doosan-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-8 brand-15 h-100">
                <img
                src="/assets/hitachi-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-7 brand-15 h-100">
                <img
                src="/assets/hyundai-sin.png"
                alt="maq"
                />
            </div>          
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-6 brand-15 ">
                <img
                src="/assets/jcb-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-5 brand-15 h-100">
                <img
                src="/assets/john-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-4 brand-15 h-100">
                <img
                src="/assets/komatsu-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
                <div className="brand-3 brand-15 h-100">
                    <img
                    src="/assets/kubata-sin.png"
                    alt="maq"
                    />
                </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="brand-2 brand-15 h-100">
                <img
                src="/assets/liebherr-sin.png"
                alt="maq"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-1 brand-15 h-100">
                <img
                src="/assets/volvo-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Brands;