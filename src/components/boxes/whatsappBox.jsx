import WhatsappMessageCard from '@/components/cards/whatsappMessageCard'
import { useState } from 'react'

const WhatsApp = () => {

  const [whatsappMessage, setWhatsappMessage] = useState({
    userName: "",
    issue: "",
    message: ""
  })
  const [generatedMessage, setGeneratedMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (whatsappMessage.userName && whatsappMessage.issue && whatsappMessage.message) {
      setGeneratedMessage({
        ["issue"]: `Asunto: ${whatsappMessage.issue}.`,
        ["user"]: `Cliente: ${whatsappMessage.userName}. ${whatsappMessage.email ? ` - Email: ${whatsappMessage.email} ` : ""} ${whatsappMessage.phoneNumber ? `- Num: ${whatsappMessage.phoneNumber} -` : ""}`,
        ["message"]: whatsappMessage.message
      })
    } else {
      setGeneratedMessage({
        ["error"]: "Hay un problema en la construcción del mensaje!!! chequeá por favor que figuren al menos tu nombre, el asunto y claramente.. el mensaje! (: "
      })
    }
  }
  const handleChange = (e) => {
    setWhatsappMessage({
      ...whatsappMessage,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <header style={{margin:"0px"}}>
        <form className='whatsappForm' onSubmit={handleSubmit}>
          <input className="whatsappInput" type={"text"} name='userName' id='userName' placeholder="Nombre: 'Maria' (*)" onChange={handleChange}>
          </input>
          <input className="whatsappInput" type={"text"} name='issue' id='issue' placeholder="Asunto: 'Consulta por servicio de Chatbot' (*)" onChange={handleChange}>
          </input>
          <input className="whatsappInput" type={"text"} name='email' id='email' placeholder="Email: 'Maria@mail.com'" onChange={handleChange}>
          </input>
          <input className="whatsappInput" type={"text"} name='phoneNumber' id='phoneNumber' placeholder="Otro número de contacto, si  tenés.. '+12 333 556677'" onChange={handleChange}>
          </input>
          <textarea style={{ height: "200px", marginTop: "10px", marginBottom: "10px" }} className="whatsappInput" name='message' id='message' placeholder="El mensaje (*)" onChange={handleChange}></textarea>
          <input className="whatsappInputBotton" type={"submit"} value={"Generar mensaje"} style={{ border: "2px solid rgb(15, 99, 69)", borderRadius: "10px", height: "50px" }}>
          </input>
        </form>
      </header>
      <section >
        {
          generatedMessage.issue ?
            <div>
              <WhatsappMessageCard photo={"https://cdn-icons-png.flaticon.com/512/9283/9283437.png"} issue={generatedMessage.issue} userData={generatedMessage.user} message={generatedMessage.message} check={"yes"}/>
              <p style={{textAlign:"center"}}>podés volver a generar el mensaje o bien darle click a la caja ¡y se enviará a mi whatsapp!</p>
            </div>
            : generatedMessage.error ?
              <WhatsappMessageCard photo={"https://cdn-icons-png.flaticon.com/512/2731/2731804.png"} issue={"Ups, algo no esta bien.."} userData={""} message={generatedMessage.error} /> : ""
        }
      </section>
    </>
  )
}

export default WhatsApp