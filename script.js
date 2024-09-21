// Example script for opening the modal
document.querySelectorAll('.view-project-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var project = this.getAttribute('data-project');
        document.getElementById(project).style.display = 'block';
    });
});

// Script for closing the modal
document.querySelectorAll('.close').forEach(function(span) {
    span.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
