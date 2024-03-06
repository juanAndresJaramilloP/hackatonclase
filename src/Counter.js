import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{formatTime(time)}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleStart}>
                        Start
                    </Button>
                    <Button variant="danger" onClick={handleStop}>
                        Stop
                    </Button>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Timer;