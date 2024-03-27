
const targetNode = document.body;


const config = { attributes: true, attributeFilter: ['data-nueva-feature'] };


const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-nueva-feature') {
            const newValue = mutation.target.getAttribute('data-nueva-feature');
            if (newValue === 'true') {
                console.log('yes');
                document.querySelector('button').addEventListener('click', () => {
                    alert('siiiiiii')
                })
            } else if (newValue === 'false') {
                console.log('no');
            }
        }
    }
};


const observer = new MutationObserver(callback);


observer.observe(targetNode, config);

