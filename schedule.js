
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
            let gridFontSize =  parseInt(postGrid.style.fontSize, 10);
            let moveEmOffsetX = (event.clientX - oldPosition.mouseX)/gridFontSize;
            let moveEmOffsetY = (event.clientY - oldPosition.mouseY)/gridFontSize;
            postContainerElement.style.left =`${oldPosition.elementX + moveEmOffsetX}em`;
            postContainerElement.style.top =`${oldPosition.elementY + moveEmOffsetY}em`;
        }
    });
    window.addEventListener("mouseup",()=>{
        state = false;
        let postLeft = Math.round(parseFloat(postContainerElement.style.left, 10));
        let postTop = Math.round(parseFloat(postContainerElement.style.top, 10));
        postContainerElement.style.left =`${postLeft}em`;
        postContainerElement.style.top =`${postTop}em`;
    });
}
for (let i = 0; i < postContainers.length; i++) {
    setPostDragAndDrop(postContainers[i]);
    
}