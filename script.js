// JavaScript to control modals without affecting navigation
document.addEventListener('DOMContentLoaded', function () {
    // Get all project buttons
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    // Function to open the correct modal
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const projectId = btn.getAttribute('data-project');
            const modal = document.getElementById(projectId);
            modal.style.display = 'block';  // Show the modal
        });
    });

    // Function to close the modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';  // Hide the modal
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
