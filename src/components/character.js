import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import React from 'react';

function Character({character }) {
    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src={character.image}
                alt={character.name}
            />
            <Card.Body>
                <Card.Title>
                    <Link to={"/characters/" + character.id} state={{character}}>
                        {character.name}
                    </Link>
                </Card.Title>
                <Card.Text>
                    <span style={{ fontWeight: "bold" }}>Status: {character.status}</span>
                    <br />
                    <span style={{ fontWeight: "bold" }}>Species: {character.species}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Character;