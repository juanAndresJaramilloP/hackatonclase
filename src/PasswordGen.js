import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
        <div>
             <div>
                <h3>Generated Password:</h3>
                <p>{password}</p>
            </div>
            <Form>
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

                <Button variant="primary" onClick={generatePassword}>
                    Generate Password
                </Button>
            </Form>

            <Form.Group controlId="length">
                    <Form.Label>Password Length</Form.Label>
                    <Form.Control
                        type="range"
                        min={8}
                        max={20}
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                    />
                    <Form.Text>{length}</Form.Text>
                </Form.Group>
        </div>
    );
};

export default PasswordGen;