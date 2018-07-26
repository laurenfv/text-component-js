//TODO
    //Handle the events in a way that will work for individual instances of the dynamic components (not for only one or all of them)
    //Remove any element, not just the first one


//append component to body
function addComponent(){
    document.querySelector('body').innerHTML += render();
}

//render text component
function render() {
    return `<div id="comp" class="row">
        <div id="grab" class="col s10">
            <div class="card" id="color">
                <div class="card-action">
                    <div class="row">
                        <div class="col s3">
                            <i id="grab2" class="small material-icons custom_cursor">drag_handle</i>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span id="text" class="card-title" contenteditable="true">Tell me a story.</span>
                </div>
                <div class="card-action">
                    <div class="row">
                        <div class="input-field col s3">
                            <select id="input-font" class="input browser-default"  onchange="changeFont(this);">
                                <option value="Helvetica" selected ="selected">Helvetica</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                        </div>
                        <div class="input-field col s3">
                            <select id="input-font-size" class="input browser-default"  onchange="changeSize(this);">
                                <option value="10px" selected ="selected">Small</option>
                                <option value="20px">Normal</option>
                                <option value="40px">Large</option>
                            </select>
                        </div>
                        <div class="input-field col s3">
                                <select id="input-font-weight" class="input browser-default"  onchange="changeWeight(this);">
                                    <option value="900" selected ="selected">Extra Bold</option>
                                    <option value="600">Bold</option>
                                    <option value="">Normal</option>
                                </select>
                        </div>
                        <div class="col s3">
                            <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

//change fonts
function changeFont(font){
    document.getElementById("text").style.fontFamily = font.value;
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('input-font');
    var instances = M.FormSelect.init(elements, options);
});


//change font size
function changeSize(size){
    document.getElementById("text").style.fontSize = size.value;
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('input-font-size');
    var instances = M.FormSelect.init(elements, options);
});


//change font weight
function changeWeight(weight){
    document.getElementById("text").style.fontWeight = weight.value;
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('input-font-weight');
    var instances = M.FormSelect.init(elements, options);
});


//grab the div to implement drag capability
dragElement(document.getElementById(`grab`));

function dragElement(element) {
    //set initial positions
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(`${element.id}2`)) {
        //move from header if there is one
        document.getElementById(`${element.id}2`).onmousedown = dragMouseDown;
    } else {
        // otherwise, move from anywhere in the div
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(event) {
        event = event || window.event;
        event.preventDefault();
        // get the mouse cursor position at init
        pos3 = event.clientX;
        pos4 = event.clientY;
        document.onmouseup = closeDragElement;
        // grab whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(event) {
        event = event || window.event;
        event.preventDefault();
        // get the new position
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
        //stop on mouse up
        document.onmouseup = null;
        document.onmousemove = null;
  }
}

//remove initial component
function removeComponent(){
    var element = document.getElementById("comp");
    element.remove();
}