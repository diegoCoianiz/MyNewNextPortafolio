import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SecondPage() {
    return (
        <div>
            <Header />
            <Main />
            <hr style={{ marginTop: "30px", margin: "10px 0px", }} />
            <Proyects />
            <hr style={{ marginTop: "30px", margin: "10px 0px", }} />
            <WhoAmI />
            <Footer />
        </div>
    )
}

const ProfileLinks = () => {
    const data = {
        linkedin: {
            link: "https://www.linkedin.com/in/juan-diego-coianiz-2b4561165/",
            img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
        },
        github: {
            link: "https://github.com/diegoCoianiz",
            img: "https://cdn-icons-png.flaticon.com/512/270/270798.png"
        },
        instagram: {
            link: "https://www.instagram.com/diego_coianiz/",
            img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
            {Object.keys(data).map((platform, index) => (
                <Link key={index} href={data[platform].link} target='_blank'>
                    <Image
                        key={index}
                        src={data[platform].img}
                        alt={`Link to ${platform}`}
                        width={50}
                        height={50}
                    />
                </Link>
            ))}
        </div>
    );
}

const Header = () => {
    return (
        <header style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='underlined' style={{ display: "flex" }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/8786/8786222.png" alt="Picture of the author" width={50} height={50} />
                <h1 >Juan Diego Coianiz</h1>
            </div>
        </header>
    )
}

const Main = () => {

    const MainProgrammingLanguages = () => {
        const data = ['C#', 'Typescript', 'Node.Js', 'React-Native', 'React.js', 'Next.js', 'Express', 'Socket.io', 'Mongoose', 'MongoDB', 'SQL', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'SciPy', 'scikit-learn', 'MP4PY', 'J-Notebook', "PowerBI"]

        return (
            <div className='mainContainer MainProgrammingLanguages'>
                <h1 className="MPL_tecnologies">Tecnologías.</h1>
                <h1 style={{ marginBottom: "10px", marginRight: "-80px", fontSize: "52px", color: "#ff00c6c7" }}> MI STACK:</h1>
                {
                    data.map((language, index) => (
                        <div key={index} className='tecnologies' style={{
                            margin: `${Math.floor(Math.random() * 10)}px`,
                        }}>
                            <h1>{language}</h1>
                        </div>
                    ))
                }
                <div className='MPL_subTitle'>
                    <h4 >Frontend & Backend software.</h4>
                    <div className='MPL_subTitle2' style={{ display: "flex" }}>
                        <h1 style={{ marginTop: "-35px", marginLeft: "65px", fontSize: "92px", color: "#ff00c6c7" }}>+</h1>
                        <h4 style={{ marginLeft: "-25px", fontSize: "25px" }}>Data Science, Machine Learning developer.</h4>
                    </div>
                </div>
            </div>
        )
    }

    const WhatsaapChat = () => {
        const sayHi = "Hola Juan Diego."
        return (
            <Link href={`https://api.whatsapp.com/send?phone=34603795321&text=${sayHi}`} target='_blank'>
                <button className='whatsappButton'>
                    <h1>Whatsapp Chat</h1>
                </button>
            </Link>
        )
    }

    return (
        <main>
            <MainProgrammingLanguages />
            <div className='mainContainer MainPortrait'>
                <div style={{ marginTop: "-25px" }}>
                    <div className='portrait'>
                        <Image src="/portrait.jpg" alt="Picture of the author" width={300} height={300} />
                    </div>
                    <div>
                        <h1 >/Software Dev.</h1>
                    </div>
                    <h4>Node.js y Python apasionado, amante del código. Siempre en busca de nuevos desafíos y crecimiento. Siéntete libre de contactarme si necesitas ayuda con algún proyecto o, si quieres, simplemente para saludar! Buscame en redes:</h4>
                    <ProfileLinks />
                    <div style={{ textAlign: "end", marginTop: "15px" }}>
                        <h4 >mandame un mail a: diego.c.coianiz@gmail.com</h4>
                        <h4 style={{ marginTop: "10px" }}>o mandame un mensaje a mi whatsaap</h4>
                        <WhatsaapChat />
                    </div>
                </div>

            </div>
        </main>
    )
}

const Proyects = () => {
    const data = {
        digitalOrganizer: {
            link: "https://digitalorganizer.vercel.app/",
            img: `
            https://cdn-icons-png.flaticon.com/512/7768/7768607.png
            `,
            title: "Node.js - Web Site: Administrador de gastos",
            description: "Diseñado con Next.js 13 y MongoDB para gestión de gastos e ingresos, mas un sencillao y eficaz calendario."
        },
        Python_scrapper: {
            link: "https://github.com/diegoCoianiz/climateWebScraping.py",
            img: `
            https://cdn-icons-png.flaticon.com/512/7768/7768657.png
            `,
            title: "Python - GitHub: DataScrapper de clima",
            description: "Diseñado con Selenium y BeautifulSoup para recolección, MySQL y Tableau para visualización y análisis."
        },
        chatBot: {
            link: "https://github.com/diegoCoianiz/BurgerCity_ChatBotAndAdmin.js",
            img: `
            https://cdn-icons-png.flaticon.com/512/8705/8705342.png
            `,
            title: "Node.js - GitHub: ChatBot gastronómico",
            description: "Diseñado con whatsapp-Web.js, Express, Socket.IO y MongoDB para toma de pedidos automatizada."
        },
    }

    const ProyectCard = ({ title, description, img, link }) => {
        const square = 60
        const titleParts = title.split(':');


        return (
            <Link href={link} target='_blank' style={{ textDecoration: "none", color: "white" }}>
                <div className='proyectCard'>
                    <h3 style={{ textAlign: "end", margin: "0px", color: "rgb(0 255 208 / 65%)", marginRight: "45px", }}>{titleParts[0]}</h3>
                    <div style={{ margin: "0px", marginTop: "-40px" }}>
                        <Image src={img} alt={title} width={square} height={square} />
                    </div>
                    <div style={{ padding: "0px 10px" }}>
                        <h2 style={{ textAlign: "start" }}> {titleParts[1]}.</h2>
                        <p style={{ margin: "20px 0px", fontFamily: "system-ui" }}>{description} </p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <>
            <div className='proyects' style={{ padding: "0px 10%" }}>
                <h1 className='title' style={{ margin: "10px 0px", fontSize: "50px" }}>PROYECTOS</h1>
                <h5>
                    " Encontrar un propósito implica mirar más allá de nuestras identidades externas. Implica conectarnos con nuestras motivaciones internas y reflexionar <span style={{ color: "#d100ae", fontFamily: "League Spartan,sans-serif"}}>¿Qué te hace sentir más vivo, más auténtico? </span>
                    Bien, hoy por hoy puedo decir que el desarrollo se ha convertido en mi vía para expresar esa autenticidad. Es, definitivamente, lo que da vida a mi propósito. La capacidad de crear, innovar y aprender nuevas tecnologías no solo me desafía constantemente, sino que también me brinda la oportunidad de impactar positivamente en el mundo a través del poder de la tecnología. "
                </h5>
            </div>
            <div className='proyectsItems' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {Object.values(data).map((item, index) => (
                    <div key={index}>
                        <ProyectCard img={item.img} title={item.title} description={item.description} link={item.link} />
                    </div>
                ))}
            </div>
        </>
    );

}

const WhoAmI = () => {

    const instagramPhotos = ["https://scontent.cdninstagram.com/v/t51.2885-15/345050087_937687680773013_2891906736320831147_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=7MDvX1Yv4GMAX8lqRMm&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA5NjY3MzA0MjM2NDA4ODMyMA%3D%3D.2-ccb7-5&oh=00_AfBPAwcPnPEYmjhGghUO1ACpe-kpKAeZz2Pr6tfGd6TnIw&oe=65E4F97E&_nc_sid=10d13b", "https://scontent.cdninstagram.com/v/t51.2885-15/405502682_1384389415837086_3590486465330245094_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=1R4-X4WiDSoAX8wmRsx&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0OTE1NDc3Mzc1MDY4Njk2NA%3D%3D.2-ccb7-5&oh=00_AfDeto93-tHq2XkuJ7R3A-lLkeX5Hz5t77ppdlpJbo044Q&oe=65E72F30&_nc_sid=10d13b", "https://scontent.cdninstagram.com/v/t51.2885-15/18721922_661104984078256_7976446398356783104_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=WyG71g6XG2MAX_TzVyj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTUyMzQ0MTI2Mjk3MTM2ODgwNA%3D%3D.2-ccb7-5&oh=00_AfBHY_eq9jmp4u-LosnIQ4isoabVh3_jXHd5xuq2kvLZQQ&oe=65E43C00&_nc_sid=10d13b", "https://scontent.cdninstagram.com/v/t51.2885-15/16788937_983550981777655_1702353860212817920_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=IFxoQ5rt01cAX-6Ap_J&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTQ1NTczNjMwNzY4MzEwNTcwNQ%3D%3D.2-ccb7-5&oh=00_AfAARH_GozT2KFwfxn4qTNS1jXXojiAxk9YvpOnmfEiMMw&oe=65E58298&_nc_sid=10d13b", "https://scontent.cdninstagram.com/v/t51.2885-15/18809304_1882061425402031_6635324954462126080_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=aIa1wNqD8hMAX_p1931&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTUyOTExOTQwOTY3OTM0MTQ5Ng%3D%3D.2-ccb7-5&oh=00_AfDFMbqrTCHVsMnSZ3oWEkORcNEJKHM_N_VRq9NO6yGd4A&oe=65E4EADC&_nc_sid=10d13b"]

    const square = 287
    return (
        <div className='WhoAmI'>
            <h1 className='title' style={{ margin: "10px 0px", fontSize: "50px", color: "black" }}>SOBRE MI</h1>
            <div className='WhoAmI_items' style={{ display: "flex", flexWrap: "wrap" }}>
                {instagramPhotos.map((photo, index) => (
                    <div key={index} style={{ margin: "5px", textAlign: "center" }}>
                        <Image src={photo} width={square + 20} height={square} alt="photo" />
                    </div>
                ))}
            </div>
            <h5>
                " Explorar el mundo que nos rodea, una de mis mayores fuentes de inspiración. Poder <span style={{ color: "#d100ae", fontFamily: "League Spartan,sans-serif", fontSize: "27px" }}>sumergirme en diversas culturas, descubrir nuevas perspectivas y aprender de cada experiencia</span>. Cada lugar que visito es una oportunidad para ampliar mi comprensión del mundo y enriquecerme de conocimientos. La diversidad de tradiciones, historias y formas vivir encontradas en mis viajes me han enseñado valiosas lecciones sobre la humanidad y la belleza de la diversidad. "
            </h5>


        </div>
    );

}

const Footer = () => {

    return (
        <div>
            <footer style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
                <p style={{ paddingTop: "25px", marginRight: "1%" }}>Copyright © 2023 Juan Diego Coianiz. Página desplegada en Vercel</p>

                <ProfileLinks />
            </footer>
            <footer style={{ background: "white", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image src={"/next.svg"} width={150} height={50} alt='alt' />
                    <Image src={"/thirteen.svg"} width={50} height={50} alt='alt' />
                </div>
                <h1 style={{ color: "black" }}>POWERED BY</h1>
                <div>
                    <Image src={"/vercel.svg"} width={150} height={50} alt='alt' />
                </div>
            </footer>
        </div>
    )
}