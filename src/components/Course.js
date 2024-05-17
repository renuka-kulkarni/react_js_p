import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, CardBody, CardSubtitle, CardText, Button, Container, Input } from "reactstrap";

const Course = ({ course, base_url, update, updateCourse, isEditing, setEditingCourseId }) => {
    const [editableCourse, setEditableCourse] = useState(course);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableCourse({ ...editableCourse, [name]: value });
    };

    const handleUpdateCourse = () => {
        updateCourse(editableCourse);
    };

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`)
            .then(() => {
                toast.success("Course deleted successfully");
                update(id);
            })
            .catch(() => {
                toast.error("Failed to delete course! Server problem");
            });
    };

    return (
        <Card>
            <CardBody className="text-center">
                {isEditing ? (
                    <>
                        <Input 
                            type="text" 
                            name="title" 
                            value={editableCourse.title} 
                            onChange={handleInputChange} 
                        />
                        <Input 
                            type="textarea" 
                            name="description" 
                            value={editableCourse.description} 
                            onChange={handleInputChange} 
                        />
                        <Container className="text-center">
                            <Button color="success" onClick={handleUpdateCourse}>Save</Button>
                            <Button color="secondary" className="ml-3" onClick={() => setEditingCourseId(null)}>Cancel</Button>
                        </Container>
                    </>
                ) : (
                    <>
                        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                        <CardText>{course.description}</CardText>
                        <Container className="text-center">
                            <Button color="danger" onClick={() => deleteCourse(course.id)}>Delete</Button>
                            <Button color="warning" className="ml-3" onClick={() => setEditingCourseId(course.id)}>Update</Button>
                        </Container>
                    </>
                )}
            </CardBody>
        </Card>
    );
};

export default Course;
