import Image from 'next/image'
import { useRouter } from "next/navigation"

const WhatsappMessageCard = ({ issue, userData, photo, message, check }) => {
  const router = useRouter()
  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      issue: issue,
      userData: userData,
      message: message
    };
    try {
      const response = await fetch("/api/whatsapp_message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          router.push(data.message)
        });
    } catch (error) {
      console.error("Error al enviar el mensaje de WhatsApp:", error);
    }
  };

  return (
    <>
      {check === "yes" ?
        <div className='card' onClick={handleClick} style={{ cursor: "pointer" }}>
          <Image src={photo} width={120} height={120} alt={"img"} style={{marginRight:"2%"}}/>
          <div >
            <h1 style={{ textAlign: "start" }}>{issue}</h1>
            <hr style={{ marginLeft: "0px", marginBottom: "5px" }} />
            <h4>{userData}</h4>
            <hr style={{ marginLeft: "0px", marginBottom: "5px" }} />
            <p style={{ textAlign: "justify" }}>
              {message}
            </p>
          </div>
        </div>
        :
        <div className='card'>
          <Image src={photo} width={120} height={120} alt={"img"} />
          <div >
            <h1 style={{ textAlign: "start" }}>{issue}</h1>
            <hr style={{ marginLeft: "0px", marginBottom: "5px" }} />
            <h4>{userData}</h4>
            <hr style={{ marginLeft: "0px", marginBottom: "5px" }} />
            <p style={{ textAlign: "justify" }}>
              {message}
            </p>
          </div>
        </div>
      }
    </>
  )
}

export default WhatsappMessageCard