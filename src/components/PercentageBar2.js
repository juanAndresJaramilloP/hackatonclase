import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';

const PercentageBar2 = () => {
    const [progress, setProgress] = useState(0);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= 100) {
            setProgress(value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <div>
            <Form.Control
                type="number"
                min="0"
                max="100"
                placeholder="Enter a number"
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <ProgressBar now={progress} label={`${progress}%`} />
        </div>
    );
};

export default PercentageBar2;