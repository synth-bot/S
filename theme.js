// Load the theme from theme.json
fetch('theme.json')
    .then(response => response.json())
    .then(theme => {
        // Apply background color
        document.getElementById('background').style.backgroundColor = theme.background;

        // Apply Discord logo
        const discordLogo = document.getElementById('discord-logo');
        discordLogo.src = theme.logo.src;
        discordLogo.style.width = `${theme.logo.width}px`;
    })
    .catch(error => console.error('Error loading theme:', error));
