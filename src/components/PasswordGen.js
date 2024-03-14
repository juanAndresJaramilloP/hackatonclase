import React, { useState } from 'react';
import { Form, Button, Card, CardTitle } from 'react-bootstrap';

const PasswordGen = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

    const generatePassword = () => {
        // Define the character sets based on the user's options
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()';

        let chars = '';

        // Add the selected character sets to the available characters
        if (includeUppercase) {
            chars += uppercaseChars;
        }
        if (includeLowercase) {
            chars += lowercaseChars;
        }
        if (includeNumbers) {
            chars += numberChars;
        }
        if (includeSpecialChars) {
            chars += specialChars;
        }

        let generatedPassword = '';

        // Generate the password by randomly selecting characters from the available characters
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomIndex];
        }

        setPassword(generatedPassword);
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Card className='d-flex justify-content-center align-items-center' style={{ border: '1px solid grey', borderRadius: '15px', width: '50%', margin: '2%', backgroundColor:'#cdd8ed'}}>
                <CardTitle className='m-3'>Generate a Password</CardTitle>
                <Form style={{ width: 'fit-content' }}>
                    <Form.Group controlId="includeUppercase">
                        <Form.Check
                            type="checkbox"
                            label="Include Uppercase Letters"
                            checked={includeUppercase}
                            onChange={(e) => setIncludeUppercase(e.target.checked)}
                        />
                    </Form.Group>

                    <Form.Group controlId="includeLowercase">
                        <Form.Check
                            type="checkbox"
                            label="Include Lowercase Letters"
                            checked={includeLowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)}
                        />
                    </Form.Group>

                    <Form.Group controlId="includeNumbers">
                        <Form.Check
                            type="checkbox"
                            label="Include Numbers"
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                        />
                    </Form.Group>

                    <Form.Group controlId="includeSpecialChars">
                        <Form.Check
                            type="checkbox"
                            label="Include Special Characters"
                            checked={includeSpecialChars}
                            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                        />
                    </Form.Group>

                    <Button className='m-3' variant="primary" onClick={generatePassword}>
                        Generate Password
                    </Button>
                </Form>

                <Form.Group controlId="length">
                    <Form.Label>Password Length</Form.Label>
                    <div className='d-flex flex-row'>
                        <Form.Control
                            type="range"
                            min={8}
                            max={20}
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                        />
                        <Form.Text className='m-2'>{length}</Form.Text>
                    </div>
                </Form.Group>
                <div className='d-flex flex-row' style={{margin:'3px', padding:'5px'}}>
                    <h4>Generated Password:</h4>
                    <p style={{marginLeft:'3px', padding:'5px'}}>{password}</p>
                </div>
            </Card>
        </div>
    );
};

export default PasswordGen;