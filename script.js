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

    // Load the modal HTML and add it to the body
    fetch('modal.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            document.getElementById('openModal').addEventListener('click', showTrainingPopup);
            document.getElementById('closePopup').addEventListener('click', hideTrainingPopup);
        });
});

// Function to show the training popup
function showTrainingPopup() {
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'flex';
}

// Function to hide the training popup
function hideTrainingPopup() {
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'none';
}
