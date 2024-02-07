import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ title, description, specifics, icon }) => {
  return (
    <Card className="skill_card">
      <Card.Body>
        <Card.Title className="skill_title">
          <span>
            <FontAwesomeIcon icon={["fab", icon]} className="skill_icon" size="2xl"/>
          </span>
          {" "}
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Footer className="specifics">
          {specifics.map((skill) => {
            return (
              <h5 key={skill} className="skill_specific">
                {skill}
              </h5>
            );
          })}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Skill;
