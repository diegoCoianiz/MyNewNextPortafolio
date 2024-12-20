import "@/styles/Header.css";

const Header = ({data}) => {
  const { profilePic, backgroundImage, name, description, location, isOpenToWork } = data
  return (
    <header className="header">
      <div
        className="header__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="header__content">
        <div className="header__profile-pic-wrapper">
          <img
            src={profilePic}
            alt={`${name}'s Profile`}
            className={`header__profile-pic ${isOpenToWork ? "header__profile-pic--open" : "header__profile-pic--working"
              }`}
          />
        </div>
        <div className="header__info">
          <h1 className="header__name">{name}</h1>
          <br /> 
          <div className="header__description">
            <h4 >{description}</h4>
            <h5 style={{ marginBottom: "-20px" }}>🏠︎ {location}</h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
