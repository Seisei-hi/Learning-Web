
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
    var due = document.getElementById('day').value + '/' +
        document.getElementById('month').value + '/' +
        document.getElementById('year').value;
    var detailText = document.getElementById('detail').innerHTML;

    var schedule = new ScheduleObject(title, due, detailText, 0, 0);

    scheduleJson = JSON.stringify(schduleArray);
    console.log(scheduleJson);

    //여기부터 수정각
    var scheduleBox = document.createElement('div');
    scheduleBox.className = 'scheduleBox flex-item';

    var titleBox = document.createElement('div');
    titleBox.style = 'border-bottom: 1px solid; border-color: whitesmoke';
    var dueDayBox = document.createElement('div');
    dueDayBox.style = 'align-self: flex-end; margin-bottom: 2rem';
    var detailBox = document.createElement('div');
    detailBox.style = 'width: 100%; align-self: center;';

    title = document.createElement('label');
    title.style = 'width: 100%; border: none; background: none; color: whitesmoke;';
    title.innerHTML = schedule.title;

    due = document.createElement('label');
    due.style = 'border: none; background: none; color: whitesmoke;';
    due.innerText = schedule.due;

    detailText = document.createElement('div');
    detailText.style = 'height: 5rem; border-radius: 4px; border: none; background: rgb(30, 30, 30); color: whitesmoke;';
    detailText.innerHTML = schedule.detailText;

    document.getElementById('scheduleLine').appendChild(scheduleBox);

    scheduleBox.appendChild(titleBox);
    scheduleBox.appendChild(dueDayBox);
    scheduleBox.appendChild(detailBox);

    titleBox.appendChild(title);
    dueDayBox.appendChild(due);
    detailBox.appendChild(detailText);
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