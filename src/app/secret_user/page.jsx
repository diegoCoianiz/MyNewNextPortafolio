'use client'
import SingleCard from '@/components/cards/singleCard'
import WhatsappMessageCard from '@/components/cards/whatsappMessageCard'
import { useState } from 'react'
import BackBotton from '@/components/bottons/backBotton'

const Secret_Page = () => {
    const [cardSection, setCardSection] = useState({
        method: "POST"
    });
    const [generatedCard, setGeneratedCard] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cardSection.method === "POST" && cardSection.password && cardSection.section && cardSection.title && cardSection.shortDescription && cardSection.photo && cardSection.message) {
            setGeneratedCard({
                password: cardSection.password,
                section: cardSection.section,
                title: cardSection.title,
                shortDescription: cardSection.shortDescription,
                _link: cardSection._link,
                photo: cardSection.photo,
                message: cardSection.message,
                _check: "POST"
            })
        } else if (cardSection.method === "PUT" && cardSection.password && cardSection.section && cardSection.title && (cardSection.newTitle || cardSection.newShortDescription || cardSection.new_link || cardSection.newPhoto || cardSection.newMessage)) {
            setGeneratedCard({
                password: cardSection.password,
                section: cardSection.section,
                title: cardSection.title,
                newTitle: cardSection.newTitle,
                newShortDescription: cardSection.newShortDescription,
                new_link: cardSection.new_link,
                newPhoto: cardSection.newPhoto,
                newMessage: cardSection.newMessage,
                _check: "PUT"
            })
        } else if (cardSection.method === "DELETE" && cardSection.password && cardSection.section && cardSection.title) {
            setGeneratedCard({
                password: cardSection.password,
                section: cardSection.section,
                title: cardSection.title,
                _check: "DELETE"
            })
        }
        else {
            setGeneratedCard({
                _check: false,
                ["error"]: "Hay un problema en la construcción API!!"
            })
        }
    }

    const handleChange = (e) => {
        setCardSection({
            ...cardSection,
            [e.target.name]: e.target.value
        })
        setGeneratedCard({
            _check: "",
        })
    }

    const handleMethod = async (e) => {
        console.log(generatedCard._check)
        console.log(generatedCard)
        e.preventDefault()
        try {
            const response = await fetch("/api/updatedSection", {
                method: cardSection.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(generatedCard)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                });
        } catch (error) {
            console.error("Error al enviar el mensaje al server:", error);
        }
    }
    return (
        <>
            <header>
                <form className='whatsappForm' onSubmit={handleSubmit}>
                    <input className="whatsappInput" type={"password"} name='password' id='password' placeholder="Contraseña"
                        onChange={handleChange}>
                    </input>
                    <input className="whatsappInput" type={"text"} name='section' id='section' placeholder="Sección" onChange={handleChange}>
                    </input>
                    <select className='whatsappInput' name='method' onChange={handleChange}>
                        <option value={"POST"}>POST</option>
                        <option value={"PUT"}>PUT</option>
                        <option value={"DELETE"}>DELETE</option>
                    </select>
                    {
                        cardSection.method === "POST" ? (
                            <div key={"post"} className='whatsappForm'>
                                <br></br>
                                <input className="whatsappInput" type={"text"} name='title' id='title' placeholder="Titulo" onChange={handleChange}>
                                </input>
                                <input className="whatsappInput" type={"text"} name='shortDescription' id='shortDescription' placeholder="Sub-titulo" onChange={handleChange}>
                                </input>
                                <input className="whatsappInput" type={"text"} name='_link' id='_link' placeholder="Link" onChange={handleChange}>
                                </input>
                                <input className="whatsappInput" type={"text"} name='photo' id='photo' placeholder="Fotografía" onChange={handleChange}>
                                </input>
                                <textarea style={{ height: "200px", marginTop: "10px", marginBottom: "10px" }} className="whatsappInput" name='message' id='message' placeholder="Descripción" onChange={handleChange}></textarea>
                            </div>)
                            :
                            cardSection.method === "PUT" ? (
                                <div key={"put"} className='whatsappForm'>
                                    <input className="whatsappInput" type={"text"} name='title' id='title' placeholder="Titulo" onChange={handleChange}>
                                    </input>
                                    <br></br>
                                    <input className="whatsappInput" type={"text"} name='newTitle' id='newTitle' placeholder="Nuevo titulo" onChange={handleChange}>
                                    </input>
                                    <input className="whatsappInput" type={"text"} name='newShortDescription' id='newShortDescription' placeholder="Nuevo sub-titulo" onChange={handleChange}>
                                    </input>
                                    <input className="whatsappInput" type={"text"} name='new_link' id='new_link' placeholder="Nuevo link" onChange={handleChange}>
                                    </input>
                                    <input className="whatsappInput" type={"text"} name='newPhoto' id='newPhoto' placeholder="Fotografía" onChange={handleChange}>
                                    </input>
                                    <textarea style={{ height: "200px", marginTop: "10px", marginBottom: "10px" }} className="whatsappInput" name='newMessage' id='newMessage' placeholder="Nueva Descripción" onChange={handleChange}></textarea>
                                </div>)
                                : (
                                    <div key={"delete"} className='whatsappForm'>
                                        <input className="whatsappInput" type={"text"} name='title' id='title' placeholder="Titulo" onChange={handleChange}>
                                        </input>
                                    </div>)
                    }
                    <input className="whatsappInputBotton" type={"submit"} value={"Enviar al server"} style={{ border: "2px solid rgb(15, 99, 69)", borderRadius: "10px", height: "50px", cursor: "pointer" }}>
                    </input>
                </form>
            </header>
            <section className='cardSection'>
                {
                    generatedCard._check === "POST" ?
                        <div onClick={handleMethod} style={{ cursor: "pointer" }}>
                            <SingleCard photo={generatedCard.photo} title={generatedCard.title} shortDescription={generatedCard.shortDescription} message={generatedCard.message} link={generatedCard._link} />
                            <p style={{ textAlign: "center" }}>volvé a generar el mensaje o dale click a la caja ¡y gestioná el POST!</p>
                        </div>
                        : generatedCard._check === "PUT" ?
                            <div onClick={handleMethod} style={{ cursor: "pointer" }}>
                                <SingleCard photo={"https://cdn-icons-png.flaticon.com/512/1601/1601884.png"} title={"Modificar archivo"} message={`Modificar de forma permanente el archivo con el titulo: ${generatedCard.title}`} />
                                <p style={{ textAlign: "center" }}>volvé a generar el mensaje o dale click a la caja ¡y gestioná el UPDATE!</p>
                            </div>
                            : generatedCard._check === "DELETE" ?
                                <div onClick={handleMethod} style={{ cursor: "pointer" }}>
                                    <SingleCard photo={"https://cdn-icons-png.flaticon.com/512/3221/3221897.png"} title={"Eliminar archivo"} message={`Eliminar de forma permanente el archivo con el titulo: ${generatedCard.title} ?`} />
                                    <p style={{ textAlign: "center" }}>volvé a generar el mensaje o dale click a la caja ¡y gestioná el DELETE!</p>
                                </div>
                                : generatedCard._check === false ?
                                    <WhatsappMessageCard photo={"https://cdn-icons-png.flaticon.com/512/2731/2731804.png"} issue={"Ups, algo no esta bien.."} userData={""} message={generatedCard.error} /> : ""
                }
            </section>
            <hr style={{ marginBottom: "5px" }} />
            <footer>
                <BackBotton />
            </footer>
        </>
    )
}

export default Secret_Page