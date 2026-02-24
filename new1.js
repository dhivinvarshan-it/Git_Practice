
document.addEventListener('DOMContentLoaded', function() {
    const addCourseBtn = document.querySelector('.admin-section:nth-child(2) button');
    const addStudentBtn = document.querySelector('.admin-section:nth-child(3) button');
    
    if (addCourseBtn) {
        addCourseBtn.addEventListener('click', function() {
            window.location.href = 'add-course.html';
        });
    }
    
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', function() {
            window.location.href = 'add-student.html';
        });
    }
    
    // Edit and Delete button handlers
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent === 'Edit') {
            button.addEventListener('click', function() {
                console.log('Edit button clicked');
            });
        }
        if (button.classList.contains('btn-delete')) {
            button.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this record?')) {
                    this.closest('tr').remove();
                }
            });
        }
    });
});