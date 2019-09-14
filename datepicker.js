class Datepicker{
    constructor() {
        this.dayContainerElement = document.getElementById("datepicker-calender-day-container");
        this.calenderDateElement = document.getElementById("datepicker-calender-month");
        this.timepickerSliderElement = document.getElementById("datepicker-timepicker-slider");

        this.totalDate = document.getElementById("datepicker-total-date");
        this.totalTime = document.getElementById("datepicker-total-time");
        this.number2Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.calenderMonth = new Date().getMonth();
        this.selectedDate = new Date();
        
        //this.asd = datepicker-timepicker-slider
    
        this.setCalender = function(month = new Date().getMonth()){
            this.clearCalender();
            var date = new Date();
            date.setMonth(month);
            
            var selectedMonth = date.getMonth();
            var selectedYear = date.getFullYear();
            this.calenderMonth = month;
            this.calenderDateElement.innerText = `${this.number2Month[selectedMonth]} ${selectedYear}`;
            date.setFullYear(selectedYear,selectedMonth,1);
            
            for (var thisSundayDate = 1; date.getDay() != 0 ; ) {
                thisSundayDate--;
                date.setFullYear(selectedYear, selectedMonth, thisSundayDate);
            }            
            for (let i = 0; i < 6; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    let td = document.createElement("td");
                    date.setFullYear(selectedYear, selectedMonth, thisSundayDate +i*7+j);
                    td.innerText=date.getDate();
                    td.className += ` datepicker-calender-day date`;
                    if(date.getMonth() != selectedMonth){
                        td.className +=" late";
                    }
                    tr.appendChild(td);
                }
                this.dayContainerElement.appendChild(tr);
            }
        }
        this.clearCalender = function(){
            var childrenLength = this.dayContainerElement.children.length;
            for (let i=0; i < childrenLength; i++) {
                this.dayContainerElement.children[0].remove(); 
            }
        }
        this.setTotalDate = function(){
            this.totalDate.innerText = this.selectedDate.toDateString();
        }
        this.setTotalTime = function(hours,minutes){
            this.selectedDate.setHours(hours,minutes);
            this.totalTime.innerText = `${this.selectedDate.getHours()}:${this.selectedDate.getMinutes()}`;
        }
    }
}




const datepicker = new Datepicker();
datepicker.setCalender();
datepicker.setTotalDate();
datepicker.setTotalTime();