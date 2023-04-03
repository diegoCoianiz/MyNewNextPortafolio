// app/api/updatedSection
import fs from "fs"
import path from "path";
import { mainNews, mainRecomendedReadings, githubRepositories } from "@/data/data.js"
const allowedSections = ["mainNews", "mainRecomendedReadings", "githubRepositories"]

export default async function handler({ method, body }, res) {
    const filePath = path.join(process.cwd(), "src", "data", "data.js");
    if (body.password === "Alicia161192" && allowedSections.includes(body.section)) {  
        let listToUpdate;
        switch (body.section) {
            case "mainNews":
                listToUpdate = mainNews;
                break;
            case "mainRecomendedReadings":
                listToUpdate = mainRecomendedReadings;
                break;
            case "githubRepositories":
                listToUpdate = githubRepositories;
                break;
            default:
                return res.status(400).json({ message: "Hay problemas en la solicitud de la sección!" });
        }
        try {
            if (method === 'POST' && body.photo && body.title && body.shortDescription && body.message) {
                listToUpdate.unshift({
                    photo: body.photo,
                    title: body.title,
                    shortDescription: body.shortDescription,
                    message: body.message,
                    link: body._link
                })
            } else if (method === 'PUT' && body.title && (body.newTitle || body.newShortDescription || body.new_link || body.newPhoto || body.newMessage)) {  
                const indexToUpdate = listToUpdate.findIndex(item => item.title === body.title);
                if (indexToUpdate !== -1) {
                    if (body.newTitle) listToUpdate[indexToUpdate].title = body.newTitle;
                    if (body.newShortDescription) listToUpdate[indexToUpdate].shortDescription = body.newShortDescription;
                    if (body.new_link) listToUpdate[indexToUpdate].link = body.new_link;
                    if (body.newPhoto) listToUpdate[indexToUpdate].photo = body.newPhoto;
                    if (body.newMessage) listToUpdate[indexToUpdate].message = body.newMessage;
                } else return res.status(404).json({ message: "Problema en el item solicitado para modificar!" });
            } else if (method === 'DELETE' && body.title) {
                const indexToDelete = listToUpdate.findIndex(item => item.title === body.title);
                if (indexToDelete !== -1) listToUpdate.splice(indexToDelete, 1);
                else return res.status(404).json({ message: "Problema en el item solicitado para eliminar!" });
            } else res.status(405).json({ message: 'Método no permitido.' });
            
            fs.writeFileSync(filePath, 'export const mainNews = ' + JSON.stringify(mainNews) + ';\n' +
                'export const mainRecomendedReadings = ' + JSON.stringify(mainRecomendedReadings) + ';\n' +
                'export const githubRepositories = ' + JSON.stringify(githubRepositories) + ';\n');
            res.status(200).json({ message: `mensaje recibido con exito` });

        }
        catch (error) {
            console.log(error)
        }
    } else
        res.status(200).json({ message: `mensaje recibido` });
}
