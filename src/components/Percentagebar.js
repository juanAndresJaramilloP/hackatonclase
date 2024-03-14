import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const PercentageBar = () => {
    const [percentage, setPercentage] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 0 && value <= 100) {
            setPercentage(value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    // const handleButtonClick = () => {
    //     // Convert the input value to a number
    //     const newPercentage = parseInt(inputValue, 10);

    //     // Check if the input value is a valid percentage
    //     if (!isNaN(newPercentage) && newPercentage >= 0 && newPercentage <= 100) {
    //         setPercentage(newPercentage);
    //     } else {
    //         // Handle invalid input
    //         alert('Please enter a valid percentage between 0 and 100.');
    //     }
    // };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="PercentageBar-Card" style={{ border: '5px solid black', borderRadius: '0px' }}>
                <Card.Title className="mb-3">ProgressBar</Card.Title>
                <ProgressBar now={percentage} label={`${percentage}%`} animated variant="danger" />
                {/* <input className="PercentageBar-input" type="number" value={inputValue} onChange={handleInputChange} /> */}
                {/* <Button className="PercentageBar-button" variant="primary" onClick={handleButtonClick}>Set Percentage</Button> */}
                <div className="d-flex flex-row-reverse">
                    <Form.Control style={{margin:"2%", width:'40%', borderRadius: '20px', border: '1px solid black'}} type="number" min="0" max="100" placeholder="Number" onChange={handleInputChange} onKeyUp={handleKeyPress}/>
                    <Form.Label style={{margin:"2%", padding:'7px'}}>Set Percentage</Form.Label>
                </div>
            </Card>
        </div>
    );
};

export default PercentageBar;