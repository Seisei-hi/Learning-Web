let scheduleSerialNumber = 0;
let sendImgDataBinary = "";

class ScheduleObject {
    constructor(title, due, detailText, image = null, importance = null) {
        this.title = title;
        this.due = due;
        this.detailText = detailText;
        this.image = image;
        this.importance = importance;
        this.serialNumber = scheduleSerialNumber++;
    }
}
function createSchedule() {
    var title = document.getElementById('title').innerHTML;
    //https://poiemaweb.com/js-date
    var due = new Date(
        document.getElementById('year').value,
        document.getElementById('month').value,
        document.getElementById('day').value,
        0, 0, 0, 0);
    var detailText = document.getElementById('detail').innerHTML;
    var importance = document.getElementById("importance").checked;

    var schedule = new ScheduleObject(title, due, detailText, 0, importance);

    scheduleJson = JSON.stringify(schduleArray);

    applyScheduleJson(scheduleJson);
}
function applyScheduleJson(json) {
    var jsonArray = JSON.parse(json);
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
        xhr.send(`${/*title*/}$tr2$end$plitor${/*due*/}$tr2$end$plitor${/*detailText*/}$tr2$end$plitor${event.target.result}`);
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
