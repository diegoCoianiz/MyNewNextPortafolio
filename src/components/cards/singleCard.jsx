import Image from 'next/image'
import Link from 'next/link'

const SingleCard = ({ title, shortDescription, photo, message, link }) => {
    return (
        <div className='card'>
            <Image src={photo} width={120} height={120} alt={"img"} />
            {link && typeof link === "string" && link.trim() !== "" ?
                <Link href={link} target={"_blank"} style={{textDecoration:"none", cursor:"pointer"}}>
                    <div className='singleTitleAndSubtitle'>
                        <h1>{title}</h1>
                        <h5>{shortDescription}</h5>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                        {message}
                    </p>
                </Link> :
                <div >
                    <div className='singleTitleAndSubtitle'>
                        <h1>{title}</h1>
                        <h5>{shortDescription}</h5>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                        {message}
                    </p>
                </div>
            }
        </div>
    )
}

export default SingleCard