function initializeTableau(vizId) {
    var divElement = document.getElementById(vizId);
    var vizElement = divElement.getElementsByTagName('object')[0];
    var parentWidth = divElement.parentElement.offsetWidth;
    
    if (parentWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '500px';
    }
    
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

window.onload = function() {
    initializeTableau('viz1736163230575');
    initializeTableau('viz1736191934810');
    initializeTableau('viz1736192543162');
};

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        initializeTableau('viz1736163230575');
        initializeTableau('viz1736191934810');
        initializeTableau('viz1736192543162');
    }, 250);
});
