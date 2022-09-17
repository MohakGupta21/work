
const accordionHeaders = document.querySelectorAll('.accordion-header');

function closeAllOthers(accordionLabels, current) {
    accordionLabels.forEach(label => {
        if (label !== current) {
            const icon = label.children[0];
            const nextEl = label.nextElementSibling;
            if (icon.classList.contains("active")) {
                icon.classList.remove('active');
            }
            if (nextEl.classList.contains("data-diff")) {
                nextEl.classList.remove('data-diff');
            }
        }
    });
}
accordionHeaders.forEach(element => {
    // element.style.transitionTimingFunction= 'ease-in';
    element.addEventListener("click", event => {

        closeAllOthers(accordionHeaders, element);
        element.children[0].classList.toggle("active");
        // console.log(element.nextSibling.tagName);
        const data = element.nextElementSibling;
        data.classList.toggle("data-diff");
    });
});
const show = document.getElementById('showAll');


show.addEventListener("click", event => {
    if (show.innerHTML === `Show All`) {
        show.innerHTML = `Show Less`;
        const otherBlocks = document.querySelectorAll(".accordion-item.hide");
        otherBlocks.forEach(el => {
            el.style.display = "block";
        });
    }
    else {
        show.innerHTML = `Show All`;
        const otherBlocks = document.querySelectorAll(".accordion-item.hide");
        otherBlocks.forEach(el => {
            el.style.display = "none";
        });
    }
});