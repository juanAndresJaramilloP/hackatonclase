import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Acceder1() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [isEmailValid, setValidationStates] = useState(true);

    const validateEmail = (email) => {
        const isValid = (email.length > 0 && email.includes('@'));
        setValidationStates(isValid);
        return isValid;
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const clickNext = () => {
        const dataToSend = email;
        if(validateEmail(email)){
            navigate('/acceder2', {
                    state: {email: dataToSend}
                    });
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height:'70vh' }}>
            <Card className="d-flex justify-content-center align-items-center" style={{ border: '1px solid grey', borderRadius: '15px', width: '30%' }}>
               <Card.Title className="m-3">Acceder</Card.Title>
               <Card.Subtitle className="mb-5">Usa tu cuenta Uniandes</Card.Subtitle>
                <Form style={{width: '70%'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="text" placeholder="ja.jaramillop@uniandes.edu.co" value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <div className='d-flex flex-row-reverse'>
                        <Button variant="primary m-2" onClick={clickNext}>
                            Siguiente
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>

    );
}

export default Acceder1;