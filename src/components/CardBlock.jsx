import { Card } from "react-bootstrap";

const CardBlock = ({title, children}) => {
  return (
    <div className="block">
      <div className="block__body">
        <Card.Body>
          <h4 className="card__title">{title}</h4>
          <hr/>
          <br/>
          {children}
        </Card.Body>
      </div>
    </div>
  );
}
 
export default CardBlock;