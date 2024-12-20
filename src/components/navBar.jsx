// components/NavBar.js
import "@/styles/NavBar.css";


const NavBar = ({ setActiveSection, activeSection }) => {
  const sections = [["Links",'➤ My links'],["Res",'✎ Resume'], ["Post",'🗯 Blog']];

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <button
          key={section}
          className={`navbar__button ${activeSection === section[0] ? 'navbar__button--active' : ''
            }`}
          onClick={() => setActiveSection(section[0])}
        >
          <h3>
            {section[1]}
          </h3>
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
