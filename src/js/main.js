// skills events

const response = document.querySelector('.about-skill');
function mouseenter(description) {
    response.innerText = `${description}`
};

function mouseout(paramter) {
    paramter = 'passe o mouse para ver o significado.'
    response.innerText = `${paramter}`
}