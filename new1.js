document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form data
        if (!data.name || !data.email) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Send data to server or store locally
        console.log('Form submitted:', data);
        alert('Record added successfully!');
        form.reset();
    });
    
    // Cancel button
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            window.history.back();
        });
    }
});