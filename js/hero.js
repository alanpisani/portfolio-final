const downloadBtn = document.getElementById('download-cv-btn');
const seeBtn = document.getElementById('view-cv-btn');

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = '../download/cv_alan_pisani.pdf';
    link.download = 'cv_alan_pisani.pdf';
    link.click();
});

seeBtn.addEventListener('click', () => {
    window.open('../download/cv_alan_pisani.pdf', '_blank');
});