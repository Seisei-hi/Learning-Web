let sheduleSerialNumber = 0;

class ScheduleObject {
    constructor(title, due, detailText, image = null, importance = null) {
        this.title = title;
        this.due = due;
        this.detailText = detailText;
        this.image = image;
        this.importance = importance;
        this.serialNumber = sheduleSerialNumber++;
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
function applyOnWeb(url) {
    var xml = new XMLHttpRequest();
    xml.open("GET", url, false);
    xml.send();
}
function imagePreview(inputFile) {
    var reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.onload = function (event) {
        document.getElementById("imagePreview").src = event.target.result;
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
