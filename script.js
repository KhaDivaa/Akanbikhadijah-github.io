document.addEventListener('DOMContentLoaded', function () {
    // Get all view project buttons
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    // Open modal
    viewProjectBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent link default behavior
            const projectId = btn.getAttribute('data-project'); // Get project ID
            const modal = document.getElementById(projectId); // Find modal with the same ID
            if (modal) {
                modal.style.display = 'block'; // Show the modal
            }
        });
    });

    // Close modal when clicking the close button
    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (e) {
        modals.forEach(function (modal) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Close modal if clicked outside of content
            }
        });
    });
});
