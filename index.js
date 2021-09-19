//Dynamic Clock - Harishan
function startTime() {
    var today=new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var am_pm = "am"
    if (h > 12) {
        h = h -12;
        am_pm = "pm"
    }
    document.getElementById('current-time').innerHTML =" " + h+":"+m + " " + am_pm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let addReminderButton = document.getElementById('addReminder');
let minusReminderButton = document.getElementById('minusReminder');
let reminderContainer = document.getElementById('remainderContainer');

addReminderButton.addEventListener('click', function(){
    var new_reminder = document.createElement('div')
    new_reminder.classList.add('rs-rectangle')
    reminderContainer.appendChild(new_reminder)
})

minusReminderButton.addEventListener('click', function(){
    reminderContainer.removeChild(reminderContainer.childNodes[0])
})

