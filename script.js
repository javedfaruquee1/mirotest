// Initialize the Miro SDK
miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'Show Training Popup',
                toolbarSvgIcon: '<svg>...</svg>',
                librarySvgIcon: '<svg>...</svg>',
                async onClick() {
                    // Show the training popup
                    showTrainingPopup();
                }
            }
        }
    });
});

// Function to show the training popup
function showTrainingPopup() {
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'flex';
}

// Close popup function
document.getElementById('closePopup').addEventListener('click', () => {
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'none';
});
