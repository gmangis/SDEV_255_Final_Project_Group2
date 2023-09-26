// JavaScript code to add functionality

// Sample data (replace with actual data retrieval logic)
const courses = [
  { id: 1, name: 'Course 1', teacher: 'Teacher A' },
  { id: 2, name: 'Course 2', teacher: 'Teacher B' },
];

document.addEventListener('DOMContentLoaded', () => {
  const courseList = document.getElementById('course-list');
  const addCourseBtn = document.getElementById('add-course-btn');

  // Function to display the list of courses
  function displayCourses() {
    courseList.innerHTML = '';
    courses.forEach(course => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="view_course.html?id=${course.id}">${course.name}</a>`;
      courseList.appendChild(listItem);
    });
  }

  // Display courses on page load
  displayCourses();

  // Event listener for "Add Course" button
  addCourseBtn.addEventListener('click', () => {
    window.location.href = 'add_course.html';
  });
});
