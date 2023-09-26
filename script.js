// Sample data (replace with actual data retrieval and manipulation logic)
let courses = [
    { id: 1, name: 'Course 1', teacher: 'Teacher A' },
    { id: 2, name: 'Course 2', teacher: 'Teacher B' },
];

document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    const addCourseBtn = document.getElementById('add-course-btn');
    const addCourseForm = document.getElementById('add-course-form');
    const courseDetailsContainer = document.getElementById('course-details');

    // Function to display the list of courses
    function displayCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="view_course.html?id=${course.id}">${course.name}</a>
                <button class="edit-btn" data-id="${course.id}">Edit</button>
                <button class="delete-btn" data-id="${course.id}">Delete</button>
            `;
            courseList.appendChild(listItem);

            // Attach event listeners for edit and delete buttons
            const editBtn = listItem.querySelector('.edit-btn');
            const deleteBtn = listItem.querySelector('.delete-btn');

            editBtn.addEventListener('click', () => editCourse(course.id));
            deleteBtn.addEventListener('click', () => deleteCourse(course.id));
        });
    }

    // Function to add a new course
    function addCourse(name) {
        // Generate a unique ID (replace with your logic)
        const newId = courses.length + 1;
        const newCourse = { id: newId, name, teacher: 'Teacher C' }; // Replace 'Teacher C' with the actual teacher

        courses.push(newCourse);
        displayCourses();
    }

    // Function to edit a course
    function editCourse(id) {
        // Replace with a form or modal for editing the course details
        const newName = prompt('Edit course name:');
        if (newName !== null && newName !== '') {
            const courseIndex = courses.findIndex(course => course.id === id);
            if (courseIndex !== -1) {
                courses[courseIndex].name = newName;
                displayCourses();
            }
        }
    }

    // Function to delete a course
    function deleteCourse(id) {
        const confirmDelete = confirm('Are you sure you want to delete this course?');
        if (confirmDelete) {
            courses = courses.filter(course => course.id !== id);
            displayCourses();
        }
    }

    // Function to display individual course details
    function displayCourseDetails(id) {
        const course = courses.find(course => course.id === id);

        if (course) {
            courseDetailsContainer.innerHTML = `
                <h2>${course.name}</h2>
                <p>Teacher: ${course.teacher}</p>
                <button id="back-to-list">Back to Course List</button>
            `;

            // Event listener for the "Back to Course List" button
            const backToListBtn = document.getElementById('back-to-list');
            backToListBtn.addEventListener('click', () => {
                window.location.href = 'index.html'; // Navigate back to the course list
            });
        } else {
            courseDetailsContainer.innerHTML = 'Course not found.';
        }
    }

    // Check if the current page is the view_course.html page
    const isViewCoursePage = window.location.pathname.endsWith('view_course.html');
    if (isViewCoursePage) {
        // Extract the course ID from the URL query parameters
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('id');

        if (courseId) {
            displayCourseDetails(parseInt(courseId));
        } else {
            // Handle the case where the course ID is missing or invalid
            courseDetailsContainer.innerHTML = 'Invalid course ID.';
        }
    }

    // Event listener for "Add Course" button
    addCourseBtn.addEventListener('click', () => {
        const courseName = prompt('Enter the course name:');
        if (courseName !== null && courseName !== '') {
            addCourse(courseName);
        }
    });

    // Display courses on page load
    displayCourses();
});
