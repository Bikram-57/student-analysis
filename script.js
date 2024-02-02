// const sidebarToggle = document.querySelector("#sidebar-toggle");
// sidebarToggle.addEventListener("click",function(){
//   document.querySelector("#sidebar").classList.toggle("collapsed");
// })


document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');

  // Function to toggle sidebar state
  function toggleSidebar() {
      sidebar.classList.toggle('collapsed');
  }

  // Check screen width on page load and toggle sidebar accordingly
  if (window.innerWidth <= 768) {
      sidebar.classList.add('collapsed'); // Mobile screen: Sidebar collapsed by default
  } else {
      sidebar.classList.remove('collapsed'); // Larger screen: Sidebar expanded by default
  }

  // Toggle sidebar when sidebar toggle button is clicked
  sidebarToggle.addEventListener('click', function () {
      toggleSidebar();
  });

  // Toggle sidebar when window is resized
  window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
          sidebar.classList.remove('collapsed'); // Larger screen: Expand sidebar
      } else {
          sidebar.classList.add('collapsed'); // Mobile screen: Collapse sidebar
      }
  });
});
