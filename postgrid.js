var postContainers = document.getElementsByClassName(`post-container`);
var postGrid = document.getElementById(`postgrid`);
var zoomValue = 10;
var gridScale = 1;
function setPostDragAndDrop(postContainerElement) {
    var state = false; 
    postContainerElement.addEventListener("mousedown",(event)=>{
        state = true;
    });
    window.addEventListener("mousemove",(event)=>{
        if (event.buttons==1 && state) {
            postContainerElement.style.left =`${parseFloat(postContainerElement.style.left)+event.movementX*10/zoomValue}px`;
            postContainerElement.style.top =`${parseFloat(postContainerElement.style.top)+event.movementY*10/zoomValue}px`;
        }
    });
    window.addEventListener("mouseup",()=>{
        state = false; 
        let postLeft = Math.round(parseFloat(postContainerElement.style.left));
        let postTop = Math.round(parseFloat(postContainerElement.style.top));
        postContainerElement.style.left =`${postLeft}px`;
        postContainerElement.style.top =`${postTop}px`;
        
    });
}
postGrid.parentElement.addEventListener("mousemove",(event)=>{
    if(event.buttons == 4){
        postGrid.style.left =`${parseFloat(postGrid.style.left)+event.movementX}px`;
        postGrid.style.top =`${parseFloat(postGrid.style.top)+event.movementY}px`;
    }
});

var hideDeatil = false;
postGrid.parentElement.addEventListener("wheel",(event)=>{
    let deltaYSign = event.deltaY > 0;
    zoomValue += deltaYSign ? -1:1;
    if (zoomValue > 10) { zoomValue=  10; }
    else if (zoomValue < 1) { zoomValue = 1; }

    if (1 < zoomValue && zoomValue < 10) {
        postGrid.style.transform = `scale(${zoomValue/10})`;

        let zoomInOut = deltaYSign ? -1:1;
        
        let centerRect = postGrid. parentElement.getBoundingClientRect();

        let offsetX = (parseFloat(postGrid.style.left) - centerRect.width/2 )/(zoomValue-zoomInOut);
        let offsetY = (parseFloat(postGrid.style.top)  - centerRect.height/2 )/(zoomValue-zoomInOut);

        postGrid.style.left = `${parseFloat(postGrid.style.left) +offsetX*zoomInOut}px`;
        postGrid.style.top = `${parseFloat(postGrid.style.top) +offsetY*zoomInOut}px`;
                
        if (zoomValue == 4 && !hideDeatil) {
            let postDetails = document.getElementsByClassName(`post-detail`);
            for (let i = 0; i < postDetails.length; i++) {
                postDetails[i].classList.add(`hide`);
            }
            hideDeatil = true;
        }
        if (zoomValue == 5 && hideDeatil){
            let postDetails = document.getElementsByClassName(`post-detail`);
            for (let i = 0; i < postDetails.length; i++) {
                postDetails[i].classList.remove(`hide`);
            }
            hideDeatil = false;
        }
    }
});

for (let i = 0; i < postContainers.length; i++) {
    setPostDragAndDrop(postContainers[i]);
    
}