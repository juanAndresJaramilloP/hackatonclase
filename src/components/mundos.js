import Mundo from "./mundo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Mundos() {
  const [mundos, setMundos] = useState([]);
  useEffect(() => {
    const URL =
      "https://rickandmortyapi.com/api/location";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMundos(data.results);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-2">Mundos!</h2>
      <hr></hr>
      <Row>
        {mundos.map((mundo) => (
          <Col key={mundo.id}>
            <Mundo mundo={mundo} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Mundos;