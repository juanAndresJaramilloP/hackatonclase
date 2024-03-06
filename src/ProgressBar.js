import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from "react";
import Button from "react-bootstrap/Button";

function StackedExample(props) {

    const [likes, setLikes] = useState(props.likes);

    const renderLikes1 = () => {
        return likes;        
    };

    const renderLikes2 = () => {
        return likes;        
    };

    const renderLikes3 = () => {
        return likes;        
    };

    const handleLikes = () => {
        console.log("Button clicked...");
        setLikes(likes + 1);
    };

    return (
        <>
            <ProgressBar>
                <ProgressBar striped variant="success" now={renderLikes1()} key={1} />
                <ProgressBar variant="warning" now={renderLikes2()} key={2} />
                <ProgressBar striped variant="danger" now={renderLikes3()} key={3} />
            </ProgressBar>
            <Button variant="primary" onClick={handleLikes}>
                Like
            </Button>
        </>

    );
}

export default StackedExample;