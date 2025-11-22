import React from "react";
import "..//Style/TrainingCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faChalkboardTeacher,
  faGraduationCap,
  faCogs,
  faLaptopCode,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const TrainingCards = () => {
  const trainings = [
    { icon: faSchool, title: "CAMPUS TRAINING" },
    { icon: faChalkboardTeacher, title: "CORPORATE TRAINING" },
    { icon: faGraduationCap, title: "FRESHER TRAINING" },
    { icon: faCogs, title: "INDUSTRIAL TRAINING" },
    { icon: faLaptopCode, title: "IT DEVELOPMENT" },
    { icon: faDesktop, title: "ONLINE TRAINING" },
  ];

  return (
    <div className="training-container">
      {trainings.map((training, index) => (
        <div className="training-card" key={index}>
          <FontAwesomeIcon icon={training.icon} className="training-icon" />
          <div className="training-title">{training.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TrainingCards;