

const dataAttribute = 'data-carousel-case-color';

function setupMutationObserver() {
    const targetNode = document.body;

    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === dataAttribute) {
                const caseColorValue = targetNode.getAttribute(dataAttribute);
                if (caseColorValue === 'true') {
                    alert('yes yes');
                } else if (caseColorValue === 'false') {
                    alert('no no');
                }
            }
        }
    };

    const observer = new MutationObserver(callback);

    const config = { attributes: true, attributeFilter: [dataAttribute] };

    observer.observe(targetNode, config);

    // Return the observer in case you need to disconnect it later
    return observer;
}

// Call the setup function to start the observer
setupMutationObserver();



