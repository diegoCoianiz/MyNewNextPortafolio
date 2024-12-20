export const links = {
    princialLinks:
        [
            {
                name: "LinkedIn 📝",
                url: "https://www.linkedin.com/in/juan-diego-coianiz-2b4561165/",
                description: "",
            },
            {
                name: "GitHub 💻",
                url: "https://github.com/diegoCoianiz",
                description: ["Proyectos de desarrollo en frontend, backend y Machine Learning."],
            },
            {
                name: "Instagram 📷",
                url: "https://www.instagram.com/diego_coianiz/?hl=es",
                description: "",
            },
            {
                name: "WhatsApp 📞",
                url: "https://wa.me/34603795321",
                description: ["Empieza un chat conmigo"],
            },
            {
                name: "Gmail 📭",
                toCopy: "diego.c.coianiz@gmail.com",
                description: ["Haz click para copiar mi mail", "mail copiado con exito!"],
            },
        ],
        sudoku: {
            name: "Sudoku",
            url: "https://sudokudev.vercel.app/",
            description: ["App para divertirse.. y pensar un rato"],
        },
        datathon_codeSpace: {
            name: "Datathon. Examen final de Machine Learning",
            url: "https://github.com/diegoCoianiz/Datathon_CodeSpace/blob/main/mlflow_predictions.ipynb",
            description: ["examen final del instituto CodeSpace de Ciencia de datos & IA"],

        }
}

export const posts = [
    {
        title: "Arrived in Cairns!!",
        category: "travels",
        date: "19/12/24",
        contentType: "image",
        imgAlt: "Cairns",
        imgPhoto: "/post_Cairns.jpg",
        videoUrl: "",
        description:
            "After (almost) two years living in Spain, between Ibiza and Valencia, the time has finally come. The path calls me, once again, to seek new horizons to aim for and new countries, with their languages and cultures, to discover. After a technical stop in Sydney I finally find myself in Cairns, state of Queensland // considered the gateway to Australia's Great Barrier Reef // to comply with the visa extension requirement and spend a good and long season(s) in the country!",
        leyend: "This photo is of the city's public pool, located in the coastal center, an extremely beautiful area!",
    },
    {
        title: "Reunion with my mother & exploring Thailand ",
        category: "adventure",
        date: "15/11/24",
        contentType: "image",
        imgAlt: "",
        imgPhoto: "/post_Thailand.jpg",
        videoUrl: "",
        description:
            "Thankss you, mother!!! for being the best companion in this world!",
        leyend: "The lying buddha, Wat Pho temple, Bangkok",
    },
    {
        title: "Final course project. Machine Learning & Data Science",
        category: "informatics",
        date: "10/07/24",
        contentType: "image",
        imgAlt: "",
        imgPhoto: "/post_Datathon.jpg",
        videoUrl: "",
        description:
            "This study, designed partly in Google Colab and partly in a CONDA environment, corresponds to the final module of the Data Science & AI bootcamp of the Spanish CodeSpace academy, and its purpose is to develop a predictive temporal regression model to determine , in a period of time X (1 month, for the presentation of this project), the future sales of each of the products that this company, divided into 3 ventures, has. You can watch this proyect deployed on my Github account by using the Datathon link on my links section.",
        leyend: "Time series with historical sales (orange) and predicted (blue) for a company, designed with Machine Learning",
    },

];

export const resume = {
    summary: ["Hospitality professional with two years of hotel front office experience, bringing interpersonal skills and a passion for personalized customer service. In Ibiza I provide personalized experiences to guests of the company's boutique hotels, combining natural friendliness and a proactive approach in interactions with clients.", "As I advance my career in hospitality, I simultaneously pursue my passion for software development, demonstrating my commitment to continued personal and professional growth. I have solid computer skills and extensive experience with hotel management software and various applications, which demonstrates my adaptability and technical competence."],

    careerHistory: [
        { name: 'Hides Hotel', typeOfWork: 'Hotel Reception', date: 'Currently', location: 'Cairns - Australia', descriptionList: ['Managing guest experience at hospitality venue, handling:  customer needs and reservations,  check-in and check-out processes, ensuring guest satisfaction and security'] },
        { name: 'Mambo Group Hotels', typeOfWork: 'Hotel Reception', date: 'Jun - 2023 ; Nov - 2024', location: 'Ibiza - Spain', descriptionList: ['Managed guest experience at hospitality venue, handling:  customer needs and reservations,  check-in and check-out processes, ensuring guest satisfaction and security', 'Proficient in software management tools: GuestPro, CoverManager, NeoBookings, Microsoft Teams ', 'Developed a Python Web Scraping application using Selenium to analyze competitor hotel rooms and pricing, create comparative pricing reports  and support strategic business decision-making'] },
        { name: 'Entrepreneurship: BurgerCity', typeOfWork: 'gastronomic business', date: 'Jul - 2020 ; Jan - 2023', location: 'Rosario - Argentina', descriptionList: ['Management of online delivery burger restaurant during pandemic period', 'Customer service and operations management:  Supervised team of over 5 employees, managed supplier relationships, resolved complex problems and unexpected situations, implemented strategic planning and organizational processes', 'Developed a Node.js chatbot using Express.js ecosystem: integrated API for optimized processing of customer orders through WhatsApp, improving efficiency in customer communication.'] },
        { name: 'English teacher', typeOfWork: 'AIESEC - international  ONG', date: 'Dec - 2016 ; Apr - 2017', location: 'Cairo - Egypt', descriptionList: ['Cairo, Egypt. Full-time English Language Instructor at Tadamon State Institute'] },
    ],

    educationCertificates: [
        { name: 'Certificate in Machine Learning and Predictive Analytics', institute: 'CodeSpace Academy Institute', date: 'Finished 2024', location: 'Málaga - Spain', descriptionList: ['Used ML and DataScience Python libraries for classification and regression developing, as a final degree project, a time series regression app wich presents sells predictions for difernt products for diferent bussines of a company, presenting all of them using PowerBI.'] },
    ],
}

export const header = {
    profilePic: "/portrait.jpg",
    backgroundImage: "/background_portrait.jpg",
    name: "Juan Diego Coianiz",
    description: "Enthusiastic software dev. | Open to Opportunities",
    location: "Cairns, QNL, Australia",
    isOpenToWork: true
}