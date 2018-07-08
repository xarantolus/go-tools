var goStartDate = dayjs("2006-01-02 15:04:05");


function dateInput() {
    var newFormat = document.getElementById('date-left').value;
    document.getElementById('date-right').value = goStartDate.format(newFormat).toString();
}


function setEventListeners() {
    document.getElementById('date-left').oninput = dateInput;
}


setEventListeners();