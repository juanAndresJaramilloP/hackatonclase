import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import React from 'react';

function Mundo({ mundo }) {
    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src= {process.env.PUBLIC_URL + "/worlds.jpg"}
                alt={mundo.name}
            />
            <Card.Body>
                <Card.Title>
                    <Link to={"/mundos/" + mundo.id} state={{url: mundo.url}}>
                        {mundo.name}
                    </Link>
                </Card.Title>
                <Card.Text>
                    <span style={{ fontWeight: "bold" }}>{mundo.type}</span>
                    <br />
                    <span style={{ fontWeight: "bold" }}>{mundo.dimension}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Mundo;