
var sliderElements = document.getElementsByClassName("circle-slider");
var sliders = {};
var onchangeFuncs = {};
const sliderSetting = 0, sliderHandle =1, sliderState = 2;

onchangeFuncs["datepicker-timepicker-slider"] = (circleValue) => {
    let setting = sliders["datepicker-timepicker-slider"].setting;
    let timeInterval = setting.value/12;
    let hours =(circleValue - circleValue % timeInterval) / timeInterval;
    let minutes = circleValue % timeInterval * (60 / timeInterval);
    
    console.log(`${hours}:${minutes}`);
    datepicker.setTotalTime(hours,minutes);
}

class CircleSlider{
    setting;
    handle;
    state;
    onchangeFunc;
    constructor(sliderElement) {
        this.setting = sliderElement.children[0] ;
        this.handle = sliderElement.children[1].children[0].children[0];
        this.state = false;
        this.onchangeFunc = onchangeFuncs[sliderElement.id];
    }
}

function setCircleSlider(sliderElement) {
    sliders[sliderElement.id] = new CircleSlider(sliderElement);
    
    var setting = sliders[sliderElement.id].setting;
    var handle = sliders[sliderElement.id].handle;
    var state = sliders[sliderElement.id].state;
    var onchangeFunc = sliders[sliderElement.id].onchangeFunc;
    var lastHandleAngle = 0;
    handle.addEventListener("mousedown",()=>{
        state = true;
    });
    window.addEventListener("mousemove",(event)=>{
        if (state) {
            var circleRect = handle.parentElement.parentElement.getBoundingClientRect();
            var mouseX = event.clientX - (circleRect.left + (circleRect.width/2));
            var mouseY = event.clientY - (circleRect.top + (circleRect.height/2));
            var mouseAngle = calcAngle(-mouseX, mouseY) +360;

            var sliderInterval = 360 /(setting.value);
            
            var handleAngle = Math.floor(mouseAngle / sliderInterval) * sliderInterval
            + Math.round((mouseAngle % sliderInterval) / sliderInterval) * sliderInterval;
            
            if (lastHandleAngle != handleAngle) {
                lastHandleAngle = handleAngle;
                onchangeFunc(handleAngle / sliderInterval - setting.value/2);
            }
            handle.parentElement.style.transform = `translate(-50%,-50%) rotate(${handleAngle + 180}deg)`;
        }
    });
    window.addEventListener("mouseup",()=>{
        state = false;
    });
}


for (let i = 0; i < sliderElements.length; i++) {
    setCircleSlider(sliderElements[i]);
}