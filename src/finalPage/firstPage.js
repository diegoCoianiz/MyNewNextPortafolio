"use client" 
import ProfileImg from '../components/profileImg'
import SingleCard from '@/components/cards/singleCard'
import { mainNews, mainRecomendedReadings } from '@/data/data'
import { useState, useEffect } from 'react'
import WhatsApp from '@/components/boxes/whatsappBox'
import IndexPageFooterBox from '@/components/boxes/indexPageFooterBox'

export default function FirstPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div style={opacityTransition(isMounted, 2)}>
      <header className='header'>
        <h1>Juan Diego Coianiz</h1>
        <h3>Software Dev.</h3>
        <ProfileImg />
        <div className='profile-technologies'>
          <h4>Tecnologías:</h4>
          <p>Node.Js, React - Next, Express, Socket.io, Mongoose, Typescript, Python, C#, SQL, MongoDB, React-Native</p>
          <h4 style={{ marginTop: "10px" }}>Trabajo en:</h4>
          <p>Diseño de paginas Web & E-Commerce, Blogs, Chatbots personalizados para tu emprendimiento, desarrollo backend.</p>
        </div>

      </header>
      <section className='cardSection'>
        <h3>Hello = () = {">"} </h3>
        <SingleCard photo={"https://cdn-icons-png.flaticon.com/512/5986/5986092.png"} title={"Hey, tú! Bienvenid@ a mi rincón en la web"} shortDescription={"Abril 2023"} message={"Fullstack dev apasionado de lenguajes como Node y Python, amante del código. Aquí encontrarás información sobre mis proyectos, habilidades y experiencia.. una muestra de mi trabajo! Estoy siempre en busca de nuevos desafíos y crecimiento, así que siéntete libre de contactarme si necesitas ayuda con algún proyecto o, si quieres, simplemente para saludar!"}/>
        <h3 style={{marginTop:"20px"}}>Comunicados:</h3>
        {
          mainNews.map((news, id) => (
            <div key={id}>
              <SingleCard photo={news.photo} title={news.title} shortDescription={news.shortDescription} message={news.message} link={news?.link}/>
            </div>
          ))
        }
        
      </section>
      <section className='cardSection'>
      <h3>Contactate conmigo via whatsapp!</h3>
        <WhatsApp />
      <h3 style={{margin:"30px 0px -30px"}}>Mis links:</h3>
      </section>
      <footer className='footer'> 
        <IndexPageFooterBox />
      </footer>
      <section className='cardSection'>
      <h3 style={{ marginTop: "-5px" }}>Lecturas recomendadas, post interesantes:</h3>
        {
          mainRecomendedReadings.map((recomended, id) => (
            <div key={id}>
              <SingleCard photo={recomended.photo} title={recomended.title} shortDescription={recomended.shortDescription} message={recomended.message} link={recomended.link} />
            </div>
          ))
        }
        </section>
    </div >
  )
}

const opacityTransition = (effect, seconds) => {
  return {
    opacity: effect ? '1' : '0',
    transition: `opacity ${seconds}s ease-in-out`
  }
}