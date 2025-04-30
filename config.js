// Firebase and Power BI configuration
// This file will be replaced during deployment with actual values
// from GitHub secrets

const config = {
    powerBiUrl: 'POWER_BI_URL',
    firebase: {
        apiKey: 'FIREBASE_API_KEY',
        authDomain: 'FIREBASE_AUTH_DOMAIN',
        projectId: 'FIREBASE_PROJECT_ID',
        storageBucket: 'FIREBASE_STORAGE_BUCKET',
        messagingSenderId: 'FIREBASE_MESSAGING_SENDER_ID',
        appId: 'FIREBASE_APP_ID'
    }
};

// Make configuration available to the page
// Do not modify this line
if (typeof module !== 'undefined') {
    module.exports = config;
}
