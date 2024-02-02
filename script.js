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

  // Function to check if the device is in landscape mode
  function isLandscape() {
      return window.innerWidth > window.innerHeight;
  }

  // Check screen width and device orientation on page load and toggle sidebar accordingly
  if (window.innerWidth <= 576 || isLandscape()) {
      sidebar.classList.add('collapsed'); // Mobile screen or landscape mode: Sidebar collapsed by default
  } else {
      sidebar.classList.remove('collapsed'); // Larger screen in portrait mode: Sidebar expanded by default
  }

  // Toggle sidebar when sidebar toggle button is clicked
  sidebarToggle.addEventListener('click', function () {
      toggleSidebar();
  });

  // Toggle sidebar when window is resized or device orientation changes
  window.addEventListener('resize', function () {
      if (window.innerWidth > 576 && !isLandscape()) {
          sidebar.classList.remove('collapsed'); // Larger screen in portrait mode: Expand sidebar
      } else {
          sidebar.classList.add('collapsed'); // Mobile screen or landscape mode: Collapse sidebar
      }
  });
});
