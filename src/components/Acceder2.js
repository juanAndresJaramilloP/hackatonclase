import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Acceder2({onLogin}) {
    const location = useLocation();
    const receivedData = location.state?.email;

    const navigate = useNavigate();

    const [contrasena, setContrasena] = useState("");
    const [isContrasenaValid, setValidationStates] = useState(true);

    const validateContrasena = (contrasena) => {
        const isValid = /^(?=.*[A-Za-z])(?=.*\d).{9,}$/.test(contrasena);
        setValidationStates(isValid);
        return isValid;
    }

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
        validateContrasena(event.target.value);
        
    }

    const clickNext = () => {
        onLogin();
        navigate('/characters');
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="d-flex justify-content-center align-items-center" style={{ border: '1px solid grey', borderRadius: '15px', width: '30%', margin:'2%'}}>
               <Card.Title className="m-3">{receivedData}</Card.Title>
                <Form style={{width: '70%'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu contraseña" value={contrasena} onChange={handleContrasenaChange} isInvalid={!isContrasenaValid} />
                        {!isContrasenaValid && <Form.Text className="text-muted">Your password should have numbers and letters and should be at least 9 characters long.</Form.Text>}
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary m-2" onClick={clickNext}>
                            Siguiente
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>

    );
}

export default Acceder2;