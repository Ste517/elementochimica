var r = document.querySelector(':root');

function themeSwitch() {
    // get the current theme
    var currentTheme = window.getComputedStyle(document.documentElement).getPropertyValue('--theme');
    // if the current theme is dark, switch to light
    if (currentTheme == 'dark') {
        r.style.setProperty('--theme', 'light');
        lightTheme();
    }
    // if the current theme is light, switch to dark
    else {
        r.style.setProperty('--theme', 'dark');
        darkTheme();
    }

}

function lightTheme() {
    r.style.setProperty('--1', '#d5d5d5ff');
    r.style.setProperty('--2', '#ffffffff');
    r.style.setProperty('--3', '#757575ff');
    r.style.setProperty('--4', '#b6b6b6ff');
    r.style.setProperty('--5', '#858585ff');
    r.style.setProperty('--6', '#b1b1b1ff');
    r.style.setProperty('--7', '#414141ff');
    r.style.setProperty('--8', '#2f2f2fff');
    r.style.setProperty('--9', '#111111ff');
    r.style.setProperty('--10', '#000000ff');
}
function darkTheme() {
    r.style.setProperty('--1', '#111111ff');
    r.style.setProperty('--2', '#161723ff');
    r.style.setProperty('--3', '#0d0c34ff');
    r.style.setProperty('--4', '#0f0c75ff');
    r.style.setProperty('--5', '#16144fff');
    r.style.setProperty('--6', '#29275aff');
    r.style.setProperty('--7', '#4e4d6fff');
    r.style.setProperty('--8', '#747384ff');
    r.style.setProperty('--9', '#999999ff');
    r.style.setProperty('--10', '#ffffffff');
}

// make the function rickroll
function rickroll() {
	window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}