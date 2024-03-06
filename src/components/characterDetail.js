import { useParams, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CharacterDetail() {
    let { state } = useLocation();
    const params = useParams();
    const characterId = params.characterId; // Access the state object
    const character = state.character;

    const urlParts = character.origin.url.split('/'); // para redirigir al mundo.
    const lastPart = urlParts[urlParts.length - 1];
    const digitsAfterLastSlash = parseInt(lastPart, 10);

    return (
        <Card>
            <Card.Img variant="top" src={character.image} alt={character.name} style={{ width: '70%', margin: 'auto' }}/>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    <strong>id: </strong> {characterId}
                    <br />
                    <strong>Status: </strong> {character.status}
                    <br />
                    <strong>Species: </strong> {character.species}
                    <br />
                    <Link to={"/mundos/" + digitsAfterLastSlash} state= {{url: character.origin.url }}> <strong>Origin: </strong> {character.origin.name}</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
