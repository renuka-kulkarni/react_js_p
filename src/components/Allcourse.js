import React, { useEffect, useState } from "react";
import Course from "./Course";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import base_url from "../API/bootapi";
import 'react-toastify/dist/ReactToastify.css';

const Allcourse = () => {
    const [courses, setCourses] = useState([]);
    const [editingCourseId, setEditingCourseId] = useState(null);

    const getAllCoursesFromServer = async () => {
        try {
            const response = await axios.get("/courses", { baseURL: base_url });
            console.log(response.data);
            toast.success("Courses have been loaded", { position: "bottom-center" });
            setCourses(response.data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to load courses! Error occurred.", { position: "bottom-center" });
        }
    };

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    const updateCourse = async (updatedCourseData) => {
        try {
            await axios.put(`${base_url}/courses`, updatedCourseData);
            toast.success("Course updated successfully", { position: "bottom-center" });
            getAllCoursesFromServer();
            setEditingCourseId(null);
        } catch (error) {
            console.error("Failed to update course:", error);
            toast.error(`Failed to update course! Server problem: ${error.response?.data || error.message}`, { position: "bottom-center" });
        }
    };

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    return (
        <div>
            <ToastContainer />
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {courses.length > 0 ? (
                courses.map((item) => (
                    <Course 
                        key={item.id} 
                        course={item} 
                        update={updateCourses} 
                        updateCourse={updateCourse} 
                        isEditing={editingCourseId === item.id}
                        setEditingCourseId={setEditingCourseId}
                        base_url={base_url} 
                    />
                ))
            ) : (
                <p>No courses</p>
            )}
        </div>
    );
};

export default Allcourse;


