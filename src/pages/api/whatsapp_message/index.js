// app/api/whatsapp_message

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { body } = req;
        const textToWhatsapp = trasformBodyInToASCII(body)
        res.status(200).json({ message: `https://api.whatsapp.com/send?phone=34603795321&text=${textToWhatsapp}` });
    } else {
        res.status(405).json({ message: 'Método no permitido.' });
    }
}

const trasformBodyInToASCII = (body) => {
    let transformedBody = ""
    for (let part in body) {
        let newValue = body[part].replace(/ /g, "%20")
        transformedBody += newValue + "%0A"
    }
    return transformedBody
}