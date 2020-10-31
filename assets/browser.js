var goStartDate = dayjs("2006-01-02 15:04:05");


function dateInput() {
    var newFormat = document.getElementById('date-left').value;

    var warn = document.getElementById('date-warning-dd');
    if (newFormat.indexOf("dd") != -1 && newFormat.indexOf("ddd") == -1) {
        // Show day formatting warning to user
        warn.style.display = "block";
    } else {
        // Everything is fine, show the format
        warn.style.display = "none";
        document.getElementById('date-right').value = goStartDate.format(newFormat).toString();
    }
}


function setEventListeners() {
    var dl = document.getElementById('date-left');
    dl.addEventListener("input", dateInput);

    var rl = document.getElementById('date-right');
    rl.addEventListener('click', copyDate);
}

function copyDate() {
    var copyText = document.getElementById('date-right');
    if (copyText.value == "Copied!") {
        return 
    }
    copyText.select();
    document.execCommand("copy");

    copyText.value = "Copied!"
    setTimeout(dateInput, 450);
}

setEventListeners();
