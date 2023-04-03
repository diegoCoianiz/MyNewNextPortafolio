'use client'
import BackBotton from "@/components/bottons/backBotton"
import { useState, useEffect } from "react";
import SingleCard from "@/components/cards/singleCard";
import { githubRepositories } from "@/data/data";
import Link from "next/link";

const GitHub = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const githubData = await getGithubData();
      setUserData(githubData);
    };
    fetchData();
  }, []);

  return (
    <>
      <main style={{ display: "block", textAlign: "center", minHeight: "450px", marginTop: "0px" }}>
        <div>
      <h5>nombre de usuario en GitHub: @diegoCoianiz<Link href={"https://github.com/diegoCoianiz"} target={"_blank"} style={{textDecoration:"none", border:"3px solid rgb(78 67 67)", cursor:"pointer", borderRadius:"20px", marginLeft:"10px", color:"aliceblue"}}>IR!</Link></h5>
        </div>
        <h5>repositorios creados: {userData?.public_repos} </h5>
        <h5>seguidores: {userData?.followers}, seguidos: {userData?.following}</h5>
        <h5>miembro desde hace {Math.floor((new Date() - new Date(userData?.created_at)) / 86400000)} días!</h5>
        <h5>- ultima modificación a mis repos hace {Math.floor((new Date() - new Date(userData?.updated_at)) / 86400000)} días (:  -</h5>
        <br></br>
        <h5>Algunos repos de interes:</h5>
        <section className="cardSection">
          {
            githubRepositories.map((repo, id) => (
              <div key={id}>
                <SingleCard link={repo.link} title={repo.title} shortDescription={repo.shortDescription} message={repo.message} photo={repo.photo} />
              </div>
            ))
          }
        </section>
      </main>
      <hr style={{ marginBottom: "5px" }} />
      <footer>
        <BackBotton />
      </footer>
    </>
  )
}

const getGithubData = async () => {
  try {
    const res = await fetch('https://api.github.com/users/diegoCoianiz');
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export default GitHub