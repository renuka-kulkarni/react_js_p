import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
    useEffect(() => {
       document.title = "Home";
    }, []); // Pass empty dependency array to run the effect only once

    return (
        <div className="jumbotron text-center">
            <Container>
                <h1 className="display-4">Success Magic</h1>
                <p className="lead">
                    This is developed by Success Magic for learning purposes.
                    Its backend is on Spring Boot and frontend on React.js.
                </p>
                
                <Button color="primary" outline size="lg">Start Using</Button>
            </Container>
        </div>
    );
}

export default Home;