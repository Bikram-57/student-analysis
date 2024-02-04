    // JavaScript to update the date
    function updateDate() {
      var currentDate = new Date();
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = currentDate.toLocaleDateString('en-US', options);
      document.getElementById('current-date').textContent = formattedDate;
    }

    // Call the function initially and then every second to update the date
    updateDate();
    setInterval(updateDate, 1000);
