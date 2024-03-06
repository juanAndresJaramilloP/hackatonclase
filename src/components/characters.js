import Character from "./character";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Characters() {
 const [characters, setCharacters] = useState([]);
 useEffect(() => {
   const URL =
     "https://rickandmortyapi.com/api/character";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setCharacters(data.results);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Personajes!</h2>
     <hr></hr>
     <Row>
       {characters.map((character) => (
         <Col key={character.id}>
           <Character character={character} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Characters;