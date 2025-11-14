const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const toggleBtnOpen = document.getElementById('toggleBtnOpen');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.cookie = "sidebar=inactive";
});

toggleBtnOpen.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.cookie = "sidebar=active";
});

// timer
function sidebarOpen() {
    setTimeout(() => {
        sidebar.classList.toggle('active');
    }, 200);
}