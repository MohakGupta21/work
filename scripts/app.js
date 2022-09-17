const contents = document.querySelectorAll('.content');

function closeAll(contentChild) {
    contents.forEach(el => {
        let child = el.children[1].children[1];
        let num =el.getAttribute('data-active');
        if(contentChild!==num && !child.classList.contains("hide")){
            
            child.classList.add("hide");
            el.children[0].style.borderColor="#343a40"; 
            el.children[1].children[0].style.color="#343a40";  

        }
    })
}

contents.forEach(
    c => {
        c.addEventListener('click', function () {
            const data = c.getAttribute('data-active');
            closeAll(data);

            c.children[1].children[1].classList.toggle("hide");
            c.children[0].style.borderColor="#C7222A"; 
            c.children[1].children[0].style.color="#C7222A";           
        });
    }
);