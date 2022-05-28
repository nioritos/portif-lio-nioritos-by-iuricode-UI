// projects events

function showInfoProject(text, index) {
    var nameProject = document.querySelector('.name-project');
    nameProject.innerText = `${text}`
};

// skills events

const response = document.querySelector('.about-skill');
function mouseenter(description) {
    response.innerText = `${description}`
};

function mouseout(response) {
    paramter = 'passe o mouse para ver o significado.'
    response.innerText = `${response}`
}