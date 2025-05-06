const fs = require('fs');
const path = require('path');

// Створюємо dist директорію, якщо її немає
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Читаємо HTML файл
let htmlContent = fs.readFileSync('index.html', 'utf8');

// Замінюємо шаблони на змінні середовища
htmlContent = htmlContent.replace(/{{POWERBI_URL}}/g, process.env.POWERBI_URL || '');
htmlContent = htmlContent.replace(/{{FIREBASE_API_KEY}}/g, process.env.FIREBASE_API_KEY || '');
htmlContent = htmlContent.replace(/{{FIREBASE_AUTH_DOMAIN}}/g, process.env.FIREBASE_AUTH_DOMAIN || '');
htmlContent = htmlContent.replace(/{{FIREBASE_PROJECT_ID}}/g, process.env.FIREBASE_PROJECT_ID || '');
htmlContent = htmlContent.replace(/{{FIREBASE_STORAGE_BUCKET}}/g, process.env.FIREBASE_STORAGE_BUCKET || '');
htmlContent = htmlContent.replace(/{{FIREBASE_MESSAGING_SENDER_ID}}/g, process.env.FIREBASE_MESSAGING_SENDER_ID || '');
htmlContent = htmlContent.replace(/{{FIREBASE_APP_ID}}/g, process.env.FIREBASE_APP_ID || '');

// Зберігаємо оновлений HTML у папку dist
fs.writeFileSync(path.join('dist', 'index.html'), htmlContent);
console.log('index.html processed and saved to dist/');

// Копіюємо інші файли
const filesToCopy = [
    'icon.png',
    'background.png',
    'mayoly icon.png'
];

for (const file of filesToCopy) {
    try {
        if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.join('dist', file));
            console.log(`Copied: ${file} to dist/`);
        } else {
            console.log(`Warning: File ${file} not found, skipping`);
        }
    } catch (err) {
        console.error(`Error copying ${file}:`, err);
    }
}

console.log('Build completed successfully!');
