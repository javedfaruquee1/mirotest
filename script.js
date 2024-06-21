// Initialize the Miro SDK
miro.onReady(() => {
    console.log('Miro SDK ready');
    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'Show Training Details',
                toolbarSvgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM12 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V5h2v2h10V5h2v15zM7 7v10h10V7H7zm2 2h6v6H9V9z"/></svg>',
                librarySvgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM12 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V5h2v2h10V5h2v15zM7 7v10h10V7H7zm2 2h6v6H9V9z"/></svg>',
                async onClick() {
                    console.log('Toolbar button clicked');
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
            console.log('Modal HTML loaded');
            document.body.insertAdjacentHTML('beforeend', data);
            document.getElementById('closePopup').addEventListener('click', hideTrainingPopup);
        })
        .catch(error => {
            console.error('Error loading modal HTML:', error);
        });
});

// Function to show the training popup
function showTrainingPopup() {
    console.log('Showing training popup');
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'flex';
}

// Function to hide the training popup
function hideTrainingPopup() {
    console.log('Hiding training popup');
    const popup = document.getElementById('trainingPopup');
    popup.style.display = 'none';
}
