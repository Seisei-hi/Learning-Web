
const schduleArray = new Array();
let scheduleJson;
let sheduleSerialNumber = 0;


class ScheduleObject {
    constructor(title, due, detailText, image = null, importance = null) {
        this.title = title;
        this.due = due;
        this.detailText = detailText;
        this.image = image;
        this.importance = importance;
        this.serialNumber = sheduleSerialNumber++;

        schduleArray[this.serialNumber] = this;
    }
}

function CreateSchedule() {
    var title = document.getElementById('title').innerHTML;
    //https://poiemaweb.com/js-date
    var due = new Date(
        document.getElementById('year').value, 
        document.getElementById('month').value, 
        document.getElementById('day').value, 
        0, 0, 0, 0);
    var detailText = document.getElementById('detail').innerHTML;

    var schedule = new ScheduleObject(title, due, detailText, 0, 0);

    scheduleJson = JSON.stringify(schduleArray);

    console.log(due);
    console.log(scheduleJson);

    ApplyScheduleJson(scheduleJson);
}
function ApplyScheduleJson() {

}
function LimitNumber(Comparison, min, max) {
    if (Comparison != '') {
        if (Comparison > max) { return max; }
        if (Comparison < min) { return min; }
    }
    return Comparison;
}
function RgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}