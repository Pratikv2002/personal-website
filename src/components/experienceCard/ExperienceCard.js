import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"]}
        </p>
       {experience["task1"]==="#"&&experience["task2"]==="#"?<span></span>:<p className="experience-card-description">Work I do?</p>}
        {experience["task1"]==="#"?<span></span>:<a style={{color:"#fc2b2b"}} className="experience-card-task" href={experience["task1"]} target ="_blank">Task 1</a>}
        {experience["task2"]==="#"?<span></span>:<a style={{color:"#fc2b2b"}}className="experience-card-task" href={experience["task2"]} target ="_blank">Task 2</a>}
      </div>
    </div>
  );
}

export default ExperienceCard;
