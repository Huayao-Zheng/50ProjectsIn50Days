const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);

empties.forEach((empty) => {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.remove('hold'), 0);
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}
function dragOver(e) {
    e.preventDefault();
}
function dragLeave() {
    this.classList.remove('hovered');
}
function dragDrop() {
    this.classList.remove('hovered');
    this.append(fill);
}
