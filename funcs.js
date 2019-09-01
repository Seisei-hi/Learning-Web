function createSchedule() {
    
}
function applyScheduleJson(json) {

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
function imagePreview(inputFile) {

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
function abcd(){
    console.log(1);
}
