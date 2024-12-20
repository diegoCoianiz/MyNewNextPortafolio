import "@/styles/ResumeSection.css";


const ResumeSection = ({data}) => {

  const summary = data.summary
  const careerHistory = data.careerHistory
  const educationCertificates = data.educationCertificates

  return (
    <div className="resume-section">
      <section className="resume-section__intro">
        <h2>Summary</h2>
        {summary.map((paragraph, id) => (
          <div key={id}>
            <p> {paragraph} </p>
            <br />
          </div>
        ))}
      </section>

      <section className="resume-section__careers" style={{marginTop:"-20px"}}>
        <h2>Career History</h2>
        {careerHistory.map((career) => (
          <CareerCard key={career.name} data={career} />
        ))}
      </section>

      <section className="resume-section__education">
        <h2>Education Certificates</h2>
        {educationCertificates.map((certificate) => (
          <EducationCard key={certificate.name} data={certificate} />
        ))}
      </section>
    </div>
  );
};

export default ResumeSection

const EducationCard = ({ data }) => {
  return (
    <div className="education-card">
      <h3 className="education-card__title">{data.name}</h3>
      <p className="education-card__info">
        <strong>{data.institute}</strong> | {data.date}
      </p>
      <h5 className="career-card__info" style={{marginTop:"-10px"}}>{data.location}</h5>
      <ul className="education-card__details">
        {data.descriptionList.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

const CareerCard = ({ data }) => {
  return (
    <div className="career-card">
      <h3 className="career-card__title">{data.name}</h3>
      <p className="career-card__info">
        <strong>{data.typeOfWork}</strong> | {data.date}
      </p>
      <h5 className="career-card__info" style={{marginTop:"-10px"}}>{data.location}</h5>
      <ul className="career-card__details">
        {data.descriptionList.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};