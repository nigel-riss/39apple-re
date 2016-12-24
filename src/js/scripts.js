;
console.log('hi');

var granimInstance = new Granim({
    element: '.page-header__canvas',
    name: 'basic-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#04b004', '#2ecc71'],
                ['#2ecc71', '#04b004'],
                ['#144258', '#024c45']
            ]
        }
    }
});

var granimInstance = new Granim({
    element: '.main-nav__canvas',
    name: 'basic-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#04b004', '#2ecc71'],
                ['#2ecc71', '#04b004'],
                ['#144258', '#024c45']
            ]
        }
    }
});