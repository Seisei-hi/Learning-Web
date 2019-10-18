
var postContainers = document.getElementsByClassName(`post-container`);
var postGrid = document.getElementById(`postgrid`);

function setPostDragAndDrop(postContainerElement) {
    var state = false; 
    var oldPosition = {mouseX:0, mouseY:0 ,elementX:0, elementY:0};
    postContainerElement.addEventListener("mousedown",(event)=>{
        state = true;
        oldPosition.mouseX = event.clientX;
        oldPosition.mouseY = event.clientY;
        oldPosition.elementX = parseFloat(postContainerElement.style.left, 10);
        oldPosition.elementY = parseFloat(postContainerElement.style.top, 10);
    });
    window.addEventListener("mousemove",(event)=>{
        if (state) {
            let gridFontSize = postGrid.style.zoom;
            let moveOffsetX = (event.clientX - oldPosition.mouseX)/gridFontSize;
            let moveOffsetY = (event.clientY - oldPosition.mouseY)/gridFontSize;
            postContainerElement.style.left =`${oldPosition.elementX + moveOffsetX}px`;
            postContainerElement.style.top =`${oldPosition.elementY + moveOffsetY}px`;
        }
    });
    window.addEventListener("mouseup",()=>{
        state = false;
        let postLeft = Math.round(parseFloat(postContainerElement.style.left, 10));
        let postTop = Math.round(parseFloat(postContainerElement.style.top, 10));
        postContainerElement.style.left =`${postLeft}px`;
        postContainerElement.style.top =`${postTop}px`;
    });
}

for (let i = 0; i < postContainers.length; i++) {
    setPostDragAndDrop(postContainers[i]);
    
}