import { Card, Button } from "react-bootstrap";

const Project = ({title, description, bg, url}) => {
  return (
      <Card className="project_card" style={{backgroundImage: `url(${bg})`}}>
        <Card.Body className="project_content">
          <Card.Title className="card_title">{title}</Card.Title>
          <Card.Text className="card_body">{description}</Card.Text>
          <Button href={url} target="blank" className="project_btn">See more</Button>
        </Card.Body>
      </Card>
  );
};

export default Project;
