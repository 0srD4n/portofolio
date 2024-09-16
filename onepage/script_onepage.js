// Fungsi untuk toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  sidebar.classList.toggle('collapsed');
  mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '60px' : '250px';
}

document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);



const menuItems = document.querySelectorAll('.sidebar-menu a, .mobile-nav a');
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = item.getAttribute('href');
    smoothScroll(target);
  });
});

function handleResponsiveView() {
  const sidebar = document.getElementById('sidebar');
  const mobileNav = document.querySelector('.mobile-nav');
  const mainContent = document.querySelector('.main-content');

  if (window.innerWidth <= 768) {
    sidebar.classList.add('collapsed');
    mobileNav.style.display = 'block';
    mainContent.style.marginLeft = '0';
  } else {
    sidebar.classList.remove('collapsed');
    mobileNav.style.display = 'none';
    mainContent.style.marginLeft = '250px';
  }
}

window.addEventListener('resize', handleResponsiveView);

handleResponsiveView();

function adjustMainContentHeight() {
  const mainContent = document.querySelector('.main-content');
  const windowHeight = window.innerHeight;
  const sidebarHeight = document.getElementById('sidebar').offsetHeight;
  mainContent.style.minHeight = `${Math.max(windowHeight, sidebarHeight)}px`;
}

window.addEventListener('load', adjustMainContentHeight);
window.addEventListener('resize', adjustMainContentHeight);
