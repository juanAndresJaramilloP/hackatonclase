import { useParams, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect,useState } from 'react';

export default function MundoDetail() {
    let { state } = useLocation();
    const params = useParams();
    const mundoId = params.mundoId; // Access the state object
    const url = state.url;
    
    const [origin, setOrigin] = useState({});
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrigin(data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    },[url]);
    
    return (
        <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/worlds.jpg"} alt={origin.name} style={{ width: '70%', margin: 'auto' }} />
            <Card.Body>
                <Card.Title>{origin.name}</Card.Title>
                <Card.Text>
                    <strong>id:</strong> {mundoId || "Unknown"}
                    <br />
                    <strong>Type:</strong> {origin.type ||"Unknown"}
                    <br />
                    <strong>Dimension:</strong> {origin.dimension||"Unknown"}
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
