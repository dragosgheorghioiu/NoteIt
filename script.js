// Cod apelat din HTML
const handleClick = () => {
    let inputElement = document.getElementsByClassName('input-box')[0];
    let outputElement = document.getElementById('note-container');
    outputElement.style.border = "2px solid black";
    let newBox = document.createElement('div');
    let postit1 = document.createElement('div');
    let postit2 = document.createElement('div');
    let postit3 = document.createElement('div');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    let del_btn = document.createElement('button');
    del_btn.classList.add('del-btn');
    del_btn.innerHTML = "Delete";
    del_btn.addEventListener("click", function () {
        outputElement.removeChild(newBox);
        if (outputElement.childNodes.length === 0){
            outputElement.style.border = "none";
        }
    });

    newBox.classList.add('postIt')
    postit1.classList.add('topBar');
    postit2.classList.add('base');
    postit3.classList.add('btn-menu');
    postit1.innerText = time;
    postit2.innerText = inputElement.value;
    postit3.appendChild(del_btn);
    newBox.appendChild(postit1);
    newBox.appendChild(postit2);
    newBox.appendChild(postit3);
    outputElement.appendChild(newBox);
    inputElement.value = "";
}

const eraseText = () => {
    document.getElementsByClassName('input-box')[0] = "";
}


