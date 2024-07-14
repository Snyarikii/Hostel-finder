function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected content section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

}
function toggleSidebar(){
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    sidebar.classList.toggle('hidden');

    if (sidebar.classList.contains('hidden')){
        toggleBtn.style.left = '0';
    }
    else{
        toggleBtn.style.left = '250px';
    
    }
}


// Show the dashboard section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});