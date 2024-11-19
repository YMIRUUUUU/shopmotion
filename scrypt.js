// Fonction utilitaire pour générer des données aléatoires
const generateRandomData = (numPoints, min, max) => {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

// Fonction réutilisable pour créer des graphiques
function createChart(ctx, type, data, options = {}) {
    return new Chart(ctx, { type, data, options });
}

// Options globales par défaut
const defaultOptions = {
    animation: {
        duration: 1500, // Durée de l'animation (ms)
        easing: 'easeInOutBounce' // Effet d'animation
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    const label = context.dataset.label || '';
                    const value = context.raw;
                    return `${label}: ${value}`;
                }
            }
        }
    }
};

// Initialisation des graphiques

// Top Products Chart
(() => {
    const ctx = document.getElementById('topProductsChart').getContext('2d');
    createChart(ctx, 'bar', {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            label: 'Sales',
            data: [120, 90, 70, 50],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6']
        }]
    }, defaultOptions);
})();

// Peak Buying Times Chart (avec données dynamiques)
(() => {
    const ctx = document.getElementById('peakTimesChart').getContext('2d');
    createChart(ctx, 'line', {
        labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
        datasets: [{
            label: 'Customers',
            data: generateRandomData(7, 10, 100),
            borderColor: '#3498db',
            fill: true,
            backgroundColor: 'rgba(52, 152, 219, 0.2)'
        }]
    }, defaultOptions);
})();

// Customer Loyalty Chart
(() => {
    const ctx = document.getElementById('customerLoyaltyChart').getContext('2d');
    createChart(ctx, 'doughnut', {
        labels: ['Returning Customers', 'New Customers'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#2ecc71', '#e74c3c']
        }]
    }, defaultOptions);
})();

// Sales by Customer Profile Chart
(() => {
    const ctx = document.getElementById('customerProfileChart').getContext('2d');
    createChart(ctx, 'pie', {
        labels: ['Age 18-25', 'Age 26-35', 'Age 36-50', '50+'],
        datasets: [{
            data: [30, 40, 20, 10],
            backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c']
        }]
    }, defaultOptions);
})();

// AI Predictions Chart
(() => {
    const ctx = document.getElementById('aiPredictionsChart').getContext('2d');
    createChart(ctx, 'line', {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Predicted Sales',
            data: generateRandomData(4, 100, 500),
            borderColor: '#e67e22',
            fill: false,
            tension: 0.4 // Courbure des lignes
        }]
    }, {
        ...defaultOptions,
        plugins: {
            legend: {
                display: true
            }
        }
    });
})();

// Heatmap Simulation (basée sur des données statiques)
(() => {
    const ctx = document.getElementById('heatmapChart').getContext('2d');
    createChart(ctx, 'bubble', {
        datasets: [{
            label: 'Store Areas',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 25, y: 15, r: 20 },
                { x: 30, y: 25, r: 10 },
                { x: 40, y: 10, r: 25 }
            ],
            backgroundColor: '#3498db'
        }]
    }, {
        scales: {
            x: {
                min: 0,
                max: 50
            },
            y: {
                min: 0,
                max: 50
            }
        }
    });
})();