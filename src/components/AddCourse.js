import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Label } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const base_url = "http://localhost:8080";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        e.preventDefault();
        postDatatoServer(course);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const clearForm = () => {
        setCourse({});
    };

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data)
            .then((response) => {
                console.log(response);
                toast.success("Course added successfully");
                setCourse({id:"",title:"",description:""})
            })
            .catch((error) => {
                console.log(error);
                toast.error("Error! Something went wrong");
            });
    };

    return (
        <Fragment>
            <ToastContainer />
            <h1 className='text-center'>Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label htmlFor="userId">Course Id</Label>
                    <input type='text' placeholder='Enter here' name='id' id='userId' value={course.id || ''}
                        onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='title'>Course Title</Label>
                    <input type='text' placeholder='Enter title here' name='title' id='title' value={course.title || ''}
                        onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='description'>Course description</Label>
                    <input type="textarea" placeholder="Enter Description here" name="description" id="description" style={{ height: 150 }}
                        value={course.description || ''} onChange={handleInputChange} />
                </FormGroup>

                <Container className='text-center'>
                    <Button type='submit' color='success'>
                        Add Course
                    </Button>
                    <Button type='reset' onClick={()=>{
                        setCourse({id:"",title:"",description:""})
                    }} color='warning m-l-2' >
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;

