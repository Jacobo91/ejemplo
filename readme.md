# ejemplo

# INTELLIGEMS UNHIDING SCRIPT

- For CSS use

if (document.readyState === "complete" || document.readyState === "loaded") {
  document.body.setAttribute('data-bestsellers', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.setAttribute('data-bestsellers', 'true');
})


- For Javascript use

window.addEventListener('ig:ready', () => {
 const experiments = window.igData?.user.getExperiments();
 if (experiments.length) {
    document.body.setAttribute('data-btw’-image-modal, 'true');
  };
})
