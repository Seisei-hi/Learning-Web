class Datepicker{
    constructor() {
        this.dayContainer = document.getElementById("datepicker-calender-day-container");
        this.calenderMonth = document.getElementById("datepicker-calender-month");
        
        //this.asd = datepicker-timepicker-slider
    
        this.setCalender = function(month = new Date().getMonth()){
            this.clearCalender();

            var date = new Date();
            date.setMonth(month);

            var selectedYear = date.getFullYear();
            var selectedMonth = date.getMonth();
            
            this.calenderMonth.innerText = selectedMonth;

            date.setFullYear(selectedYear,selectedMonth,1);
            var thisSundayDate = date.getDate();

            for (let i = 1; i < date.getDay() != 0 ; i--) {
                date.setFullYear(selectedYear, selectedMonth, i);
            }

            for (let i = 0; i < 42; i++) {
                let dayDiv = document.createElement("div");
                date.setFullYear(selectedYear, selectedMonth, thisSundayDate + i);

                if(date.getMonth() != selectedMonth){
                    dayDiv.style.color="rgb(70,70,70)";
                }

                dayDiv.className += ` datepicker-calender-day date`;
                dayDiv.innerText=date.getDate();
                this.dayContainer.appendChild(dayDiv);
            }
        }
        this.clearCalender = function(){
            var childrenLength = this.dayContainer.children.length;
            for (let i=7; i < childrenLength; i++) {
                this.dayContainer.children[i].remove();
            }
        }
    }
}

const datepicker = new Datepicker();
datepicker.setCalender();