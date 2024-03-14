import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

function Form2() {

    const [formValues, setFormValues] = useState({ username: "", name: "", age: "" });
    const [validationStates, setValidationStates] = useState({ usernameState: true, nameState: true, ageState: true });


    const validateAge = (age) => {
        const isValid = (!isNaN(age) && age >= 0 && age <= 130 && age !== "");
        setValidationStates({ ...validationStates, ageState: isValid });
        return isValid;
    };

    const validateName = (name) => {
        const isValid = (name.length > 0);
        setValidationStates({ ...validationStates, nameState: isValid });
        return isValid;
    }

    const validateUsername = (username) => {
        const isValid = (username.length > 0);
        setValidationStates({ ...validationStates, usernameState: isValid });
        return isValid;
    }



    const handleUsernameChange = (event) => {
        setFormValues({ ...formValues, username: event.target.value });
    }

    const handleNameChange = (event) => {
        setFormValues({ ...formValues, name: event.target.value });
    }

    const handleAgeChange = (event) => {
        setFormValues({ ...formValues, age: event.target.value });
        validateAge(event.target.value);
    }

    const clickSubmit = () => {
        if (validateName(formValues.name) && validateUsername(formValues.username) && validateAge(formValues.age)) {
            alert(JSON.stringify(formValues));
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="d-flex justify-content-center align-items-center" style={{ border: '1px solid grey', borderRadius: '15px', width: '50%' }}>
               <Card.Title className="m-3">Acceder</Card.Title>
               <Card.Subtitle className="mb-5">Usa tu cuenta Uniandes</Card.Subtitle>
                <Form style={{width: '70%'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="ja.jaramillop" value={formValues.username} onChange={handleUsernameChange} isInvalid={!validationStates.usernameState} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={formValues.name} onChange={handleNameChange} isInvalid={!validationStates.nameState} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" onChange={handleAgeChange} value={formValues.age} isInvalid={!validationStates.ageState} />
                    </Form.Group>
                    <div className='d-flex flex-row-reverse'>
                        <Button variant="primary m-2" onClick={clickSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>

    );
}

export default Form2;