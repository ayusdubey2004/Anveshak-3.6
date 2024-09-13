document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const navigateButton = document.getElementById('navigateButton');
    const voiceGuideButton = document.getElementById('voiceGuide');
    const translateButton = document.getElementById('translate');
    const bookingForm = document.getElementById('booking-form');
    const trainInfo = document.getElementById('train-info');

    // Initialize Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example marker
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('Station Entrance')
        .openPopup();

    // Add routing
    const control = L.Routing.control({
        waypoints: [
            L.latLng(51.5, -0.09),
            L.latLng(51.51, -0.1)
        ],
        routeWhileDragging: true
    }).addTo(map);

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Search query:', query);
            // Implement search functionality
        }
    });

    // Handle navigate button click
    navigateButton.addEventListener('click', () => {
        const destination = document.querySelector('.input-text').value.trim();
        if (destination) {
            console.log('Navigating to:', destination);
            // Implement navigation functionality
        }
    });

    // Handle voice guide button click
    voiceGuideButton.addEventListener('click', () => {
        const text = "This is a voice guide example. Please follow the signs to the nearest exit.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    });

    // Handle facility booking form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const facility = document.getElementById('facility').value;
        const time = document.getElementById('time').value;
        console.log(`Booking facility: ${facility} at ${time}`);
        // Implement booking functionality
    });

    // Handle live train tracking
    const updateTrainInfo = () => {
        // Simulated live train tracking information
        trainInfo.innerHTML = `
            <p><strong>Train Number:</strong> 12345</p>
            <p><strong>Status:</strong> On Time</p>
            <p><strong>Estimated Arrival:</strong> 14:30</p>
        `;
    };

    updateTrainInfo(); // Call this function periodically or on user interaction

    // Handle translate button click
    translateButton.addEventListener('click', () => {
        const text = "This is a translation example.";
        console.log('Translating:', text);
        // Implement translation functionality
    });
});

