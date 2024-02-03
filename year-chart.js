function generateYears(count) {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < count; i++) {
        years.push(currentYear - count + 1 + i);
    }
    return years;
}

// Generate labels for 24 years
const labels = generateYears(20);

// Data configuration
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, /* Add your data for 24 years here */],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const config = {
    type: 'line',
    data: data,
};

const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});