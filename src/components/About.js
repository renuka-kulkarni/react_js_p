import React from "react";
import { Card, CardBody, Container } from "reactstrap";

const AboutUs = () => {
    return (
        <Container>
            <Card className="my-3">
                <CardBody>
                    <h1>About Us</h1>
                    <p>
                        This is developed by Success Magic for learning purposes. Its backend is on Spring Boot and frontend on React.js.
                    </p>
                </CardBody>
            </Card>
        </Container>
    );
};

export default AboutUs;


