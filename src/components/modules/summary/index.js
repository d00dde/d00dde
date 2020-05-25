import React from "react";
import "./summary.css";

export default ({ language, data }) => {
  console.log(data);
  console.log(language);
  const {
    personal,
    about,
    skills,
    education,
    experience,
    additional
  } = data.summary[language];
  return (
    <div className="summary-container">
      <div className="personal">
        <div className="photo">
          <img src={personal.personImgSrc} alt="person" />
        </div>
        <div className="personal-data">
          <h2 className="name">{personal.name}</h2>
          <h3 className="position">{personal.position}</h3>
          <div className="contacts">
            {personal.contacts.map(contact => {
              return (
                <div key={contact.title}>
                  <div className="icon">
                    <i className={contact.icon}></i>
                  </div>
                  <span>{contact.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="left-col">
          <h3>
            <i className={about.icon}></i>
            {about.title}
          </h3>
          <div className="info">{about.info}</div>
        </div>
        <div className="right-col">
          <div className="skills">
            <h3>
              <i className={skills.icon}></i>
              {skills.title}
            </h3>
            <ul>
              {skills.values.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="education">
            <h3>
              <i className={education.icon}></i>
              {education.title}
            </h3>
            <ul>
              {education.values.map(item => (
                <li key={item.description}>
                  <span className="time">{item.time}</span>
                  <span className="description">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience">
            <h3>
              <i className={experience.icon}></i>
              {experience.title}
            </h3>
            <ul>
              {experience.values.map(work => (
                <li key={work.__html} dangerouslySetInnerHTML={work}></li>
              ))}
              <div className="footnote">{experience.footnote}</div>
            </ul>
          </div>
          <div className="additional">
            <h3>
              <i className={additional.icon}></i>
              {additional.title}
            </h3>
            <ul>
              {additional.values.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
