function imagePreview(inputFile) {
    var reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.onload = function (event) {
        document.getElementById('preview-img').src = event.target.result;
    }
}
function limitNumber(comparison, min, max) {
    if (comparison != '') {
        if (comparison > max) { return max; }
        if (comparison < min) { return min; }
    }
    return comparison;
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function calcAngle(x = 0, y = 0){
    return Math.atan2( x, y ) * (180/Math.PI);
}/*
function normalize(x,y) {
    if(x == 0 && y == 0) {
        return {x:0, y:0};
    }    
    let angle = Math.atan2(y,x);
    x = Math.cos(angle);
    y = Math.sin(angle);
    return {x:x, y:y};
} */
function normalize(x, y) {
    var norm = Math.sqrt(x * x + y * y);
    if (norm != 0) {
      x = x / norm;
      y = y / norm;
    }
    return {x:x, y:y};
}
function sendFormData() {
    var xhr = new XMLHttpRequest();
    var fileReader = new FileReader();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.response);
        }
    }
    fileReader.onload = function (event) {
        xhr.send(`${event.target.result}`);
    }
    xhr.open("POST", "/post/upload", true);
    fileReader.readAsBinaryString(document.getElementById("imageInput").files[0]);
}

