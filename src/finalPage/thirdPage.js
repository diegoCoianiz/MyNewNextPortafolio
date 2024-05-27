import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ThirdPage = () => {

    return (
        <div>
            <Head />
            <Main />
            <Footer />
        </div>
    )
}

const Head = () => {
    const portfolioImage = "https://scontent.cdninstagram.com/v/t51.29350-15/405502682_1384389415837086_3590486465330245094_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=4Drwo2Wvh9UQ7kNvgGjicKi&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0OTE1NDc3Mzc1MDY4Njk2NA%3D%3D.2-ccb7-5&oh=00_AYDO7LtlXG2dCS4w7KWwKGWCY6BvUxsVAjm4MwRbsoQD3g&oe=66524D1D&_nc_sid=10d13b"

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
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px", padding: "0px 70px", paddingBottom: "5px" }}>
                {Object.keys(data).map((platform, index) => (
                    <Link key={index} href={data[platform].link} target='_blank'>
                        <Image
                            key={index}
                            src={data[platform].img}
                            alt={`Link to ${platform}`}
                            width={30}
                            height={30}
                        />
                    </Link>
                ))}
            </div>
        );
    }

    const WhatsappChat = () => {
        const sayHi = "Hola Juan Diego."

        return (
            <div>
                <Link href={`https://api.whatsapp.com/send?phone=34603795321&text=${sayHi}`} target='_blank'>
                    <Image
                        key={"index"}
                        src={"https://cdn-icons-png.flaticon.com/512/3670/3670051.png"}
                        alt={`Link to whatsapp`}
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        )
    }

    return (
        <div className='head'>
            <div>
                <div className='whatsappChat'>
                    <p style={{ color: "white", fontSize: "20px", marginRight: "5px" }}>Let's work togheter </p>
                    <WhatsappChat />
                </div>
                <Image style={{}} src={portfolioImage} width={500} height={470} alt="Portfolio Image" />
                <div className='descriptionStyle marginRight21ForPhones' style={{ position: "sticky", top: "0px" }}>
                    <h1>Juan Diego Coianiz</h1>
                    <p style={{ color: "white", marginTop: "-20px" }}>Frontend, Backend & Data Science software Dev</p>
                    <ProfileLinks />
                </div>
            </div>
        </div>
    )
}

const Main = () => {
    const imageData = {
        instagram: {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/60163898_301517464107784_4636035682614686851_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NTN4NTY4LnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=f1lxHfp2e5QQ7kNvgEULwI6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjAzOTY1Nzk3NjU3NjEyMTU5MQ%3D%3D.2-ccb7-5&oh=00_AYAMdNRqVkEhDx_p3qJb6xb8Hk04_z72Q3HyUZIi9tmHCg&oe=6655D295&_nc_sid=10d13b",
            title: "Instagram",
            link: "https://www.instagram.com/diego_coianiz/?hl=es"
        },
        facebook: {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/18721922_661104984078256_7976446398356783104_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIuZjI4ODUifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=GcQxF-NSB8oQ7kNvgGILpet&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTUyMzQ0MTI2Mjk3MTM2ODgwNA%3D%3D.2-ccb7-5&oh=00_AYBzQ0M3frLUbm9bGOq4wQSu3N1IUf4gA-4XW8ymusdImA&oe=6653DB00&_nc_sid=10d13b",
            title: "Facebook",
            link: "https://www.facebook.com/juandiego.coianiz"
        },
        twiter: {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/29416557_418225135285480_751430959663939584_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIuZjI4ODUifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=OExtpmdTjFUQ7kNvgEdA47m&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTc0NDYxNzk2NDA1MTQ2MzU1OA%3D%3D.2-ccb7-5&oh=00_AYA2GqwqO_iJ9cnvhzPuR0YardgAbdRtcMvjW_lIZruppw&oe=6653EC04&_nc_sid=10d13b",
            title: "X",
            link: "https://x.com/jdiegocoianiz"
        }
    };

    const githubImageData = {
        instagram: {
            img: "https://socket.io/assets/images/homepage-server-40e4108715950ea259baf9ff4a30d3ef.png",
            title: "JS Socket.io Chat",
            link: "https://github.com/diegoCoianiz/Socket.io-Chat.js"
        },
        facebook: {
            img: "https://play-lh.googleusercontent.com/U0Re_PSVXwD_dl2owMJjuERpK8UXLwMQysoMDB0kGOL73-TMBOurSbZLLEBQMxA5Lg=w240-h480-rw",
            title: "C# deck of cards",
            link: "https://github.com/diegoCoianiz/deckOfCards.cs"
        },
        twiter: {
            img: "https://media.licdn.com/dms/image/C5612AQHm4tg5c35tLg/article-cover_image-shrink_600_2000/0/1584175590822?e=2147483647&v=beta&t=qm5hr2_27kVDNVn_sE3GbMazFcsr0i-6HeQrF807dEw",
            title: "Py tic-tac-toe",
            link: "https://github.com/diegoCoianiz/tic-tac-toe.py"
        }
    };

    const MainProgrammingLanguages = () => {
        const data = ['C#', 'Typescript', 'Node.Js', 'React.js', 'React Native', 'Socket.io', 'Express', 'Next.js', 'Mongoose', 'MongoDB', 'SQL', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'SciPy', 'scikit-learn', 'MP4PY', 'MLFlow', "PowerBI"]

        return (
            <div className='MainProgrammingLanguages'>
                {
                    data.map((language, index) => (
                        <div key={index} className='tecnologies' style={{
                            margin: `${Math.floor(Math.random() * 8)}px`,
                        }}>
                            <h1>{language}</h1>
                        </div>
                    ))
                }
            </div>
        )
    }

    const ProyectCard = ({ title, description, img, link }) => {
        const square = 30
        const titleParts = title.split(':');

        return (
            <Link href={link} target='_blank' style={{ textDecoration: "none", color: "white" }}>
                <div className='proyectCard'>
                    <div className='proyectCardTitle' style={{ display: "flex", justifyContent: "flex-end", paddingRight: "5%" }}>
                        {/* ICONO */}
                        <div style={{ paddingTop: "10px", paddingRight: "5%" }}>
                            <Image src={img} alt={title} width={square} height={square} />
                        </div>
                        {/* LENGUAJE y PLATAFORMA */}
                        <h5 style={{ textAlign: "end", marginBottom: "0px", color: "rgb(0 255 208)" }}>{titleParts[0]}</h5>
                    </div>
                    {/* " */}
                    <hr style={{ margin: "0px", marginBottom: "-20px", width: "50%", marginLeft: "50%" }}></hr>
                    <div className='proyectCardDescription' style={{ padding: "0px 10px" }}>
                        {/* TITULO */}
                        <h2 style={{ textAlign: "start", color: "rgb(255 255 255)" }}> {titleParts[1]}.</h2>
                        {/* DESCRIPCIÓN */}
                        <p style={{ margin: "-10px 0px", textAlign: "start" }}>{description} </p>
                    </div>
                </div>
            </Link>
        )
    }

    const Proyects = () => {
        const data = {
            digitalOrganizer: {
                link: "https://digitalorganizer.vercel.app/",
                img: `
                https://cdn-icons-png.flaticon.com/512/7768/7768607.png
                `,
                title: "Node.js - Web Site: Expense Manager",
                description: "Designed with Next.js 13 and MongoDB for expense and income management, plus a simple and effective calendar."
            },
            Python_scrapper: {
                link: "https://github.com/diegoCoianiz/climateWebScraping.py",
                img: `
                https://cdn-icons-png.flaticon.com/512/7768/7768657.png
                `,
                title: "Python - GitHub: Weather DataScrapper",
                description: "Built with Selenium and BeautifulSoup for collection, MySQL and Tableau for visualization and analysis."
            },
            chatBot: {
                link: "https://github.com/diegoCoianiz/BurgerCity_ChatBotAndAdmin.js",
                img: `
                https://cdn-icons-png.flaticon.com/512/8705/8705342.png
                `,
                title: "Node.js - GitHub: Food ChatBot",
                description: "Built with whatsapp-Web.js, Express, Socket.IO and MongoDB for automated order taking."
            },
        }

        return (
            <>
                <div className='proyectsItems' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {Object.values(data).map((item, index) => (
                        <div key={index}>
                            {index > 0 && <hr></hr>}
                            <div>
                                <ProyectCard img={item.img} title={item.title} description={item.description} link={item.link} />
                            </div>
                            {index + 1 < Object.values(data).length && <div style={{ margin: "25px 0px" }}> </div>}
                        </div>
                    ))}
                </div>
            </>
        );

    }

    const ImgCardsContainer = ({data}) => {


        const ImgCard = ({ img, title, link }) => (
            <div style={{ margin: '0 5px', display: 'inline-block', padding: "0px" }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image src={img} alt={title} width={200} height={200} style={{ borderRadius: '10px', marginTop: "15px" }} />
                    <div className='descriptionStyle'>
                        <p style={{ textAlign: 'center', color: '#fff', marginTop: "50px", height: "28px", paddingTop: "2px", fontSize: "20px" }}>{title}</p>
                    </div>
                </a>
            </div>
        );

        return (
            <div className={"imgCardsContainer"} style={{ marginTop: "5px", marginBottom: "-25px" }}>
                {Object.values(data).map((item, index) => (
                    <div key={index}>
                        <ImgCard img={item.img} title={item.title} link={item.link} />
                    </div>

                ))}
            </div>
        );
    };

    const VideoSection = ({ src }) => {
        return (
            <div className='VideoSection'>
                <div className='VideoWrapper'>
                    <iframe width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        );
    };


    return (
        <div>
            <div className='mainTitle description' style={{ marginTop: "-40px" }}>
                <p style={{ paddingTop: "40px" }}> From Rosario,🧉 - living in Ibiza,👽 </p>
                <p > I like solid and scalable craftsmanship of frontend, backend and Machine Learning products. I study and improve myself constantly, with my gaze fixed on the horizon of my goals. </p>
            </div>
            {/* ABOUT */}
            <div className='TitleDiv' style={{ marginTop: "-10px", marginBottom: "-10px", }}>
                <p> {"About me:"} </p>
            </div>
            <div className='mainTitle description' style={{ marginBottom: "-10px" }}>
                <p >Currently living in Ibiza, working as a receptionist for a hotel chain, while I'm finishing a data science & AI course taught by the CodeSpace technology school at Malaga, Spain. In Argentina I've complemented my studies in this area by the Instituto Politécnico Superior de Cordoba, where I was simultaneously studying Fullstack Dev and data science. </p>
            </div>
            <ImgCardsContainer data={imageData} />
            <br></br>
            {/* MY STACK  */}
            <div className='TitleDiv' style={{ marginTop: "-20px", marginBottom: "-30px", }}>
                <p> My stack: </p>
            </div>
            <br></br>
            <MainProgrammingLanguages />
            {/*  */}
            <br></br>
            {/* BLOG */}
            <div>
                <div className='TitleDiv' style={{ marginTop: "-30px", marginBottom: "-10px", }}>
                    <p> Blog </p>
                </div>
                <div className='mainTitle description' style={{ marginBottom: "-10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p style={{ fontFamily: "cursive", fontSize: "30px" }}>Kaggle Competition </p>
                        <p style={{ fontFamily: "cursive", fontSize: "20px" }}>Mar/2024</p>
                    </div>
                    <hr style={{ marginTop: "-2px", borderColor: "#d100ae", }}></hr>
                    <p className="blogDescription" > My Google Colab notebook about the Kaggle's Machine Learning classification competition "Spaceshipe Titanic" where I obtained, using a parameterized Gradient Boosting Classifier, an accuracy of 0.78% on a cleaned, encoded and strategically manipulated database for the training of binary classification models.</p>
                </div>
                <div className='proyectsItems' style={{ marginTop: "3px" }}>
                    <ProyectCard img={"https://cdn-icons-png.flaticon.com/512/11103/11103355.png"} title={"Python - Notebook : Gradient Boosting Classifier"} description={""} link={"lorem ipsum"} />
                </div>
                <div className='mainTitle description' style={{ marginBottom: "-10px", boxShadow: "0 4px 30px rgb(255 212 132 / 49%)" }}>
                    <p> In this notebook, multiple null filling and manipulation strategies are applied with Pandas to achieve maximum assertiveness.</p>
                </div>
            </div>
            <br></br>
            {/* GITHUB CODE */}
            <div className='TitleDiv' style={{ marginTop: "-20px", marginBottom: "-10px", }}>
                <p> {"<Github Code />"} </p>
            </div>
            <Proyects />
            <ImgCardsContainer data={githubImageData} />
            <br></br>
            {/* YOUTUBE VIDEOS */}
            <div className='TitleDiv' style={{ marginTop: "-20px", marginBottom: "-10px", }}>
                <p> {"awsome video about LLM proyect!"} </p>
            </div>
            <div className='mainTitle description' style={{ marginBottom: "-10px" }}>
                <p className="blogDescription" >In this dissemination channel, machinelearnear, Nicolás Metallo presents and explains all types of Machine Learning projects in Spanish. In this case, this is the first in a series of videos about creating a large language model (LLM) that responds as if it were a specific person.</p>
            </div>
            <VideoSection src={"https://www.youtube.com/embed/bIZMgHK8Y-8?si=UVIiAeChzcAew9ia"} />
        </div>
    )
}

const Footer = () => {

    return (
        <div>
            <footer style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
                <p style={{ paddingTop: "10px", marginRight: "1%", color: "white", marginBottom: "10px" }}>Copyright © 2023 Juan Diego Coianiz</p>
            </footer>
            <footer style={{ background: "white", display: "flex", justifyContent: "space-around", paddingTop: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image src={"/next.svg"} width={80} height={40} alt='alt' />
                    <Image src={"/thirteen.svg"} width={20} height={10} alt='alt' />
                </div>
                <h1 style={{ color: "black", fontSize: "15px" }}>POWERED BY</h1>
                <div>
                    <Image src={"/vercel.svg"} width={80} height={40} alt='alt' />
                </div>
            </footer>
        </div>
    )
}

export default ThirdPage