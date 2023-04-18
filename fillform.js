document.getElementById('fillFormButton').addEventListener('click', function() {
    const formWindow = window.open('https://ago.mo.gov/file-a-complaint/transgender-center-concerns');
    
    setTimeout(() => {
        const script = document.createElement('script');
        script.textContent = `
        function getRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        
        document.getElementById('first_name').value = getRandomString(5);
        document.getElementById('last_name').value = getRandomString(5);
        document.getElementById('email').value = getRandomString(10) + "@example.com";
        document.getElementById('phone_number').value = '555-' + getRandomString(3) + '-' + getRandomString(4);
        document.getElementById('street').value = getRandomString(10);
        document.getElementById('city').value = getRandomString(5);
        document.getElementById('state').value = 'MO';
        document.getElementById('zip_code').value = getRandomString(5);
        document.getElementById('message').value = getRandomString(50);
        `;
        formWindow.document.body.appendChild(script);
    }, 5000);
});
