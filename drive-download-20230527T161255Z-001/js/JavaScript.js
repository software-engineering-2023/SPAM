
function GdisplaySelectedTable() {
    var selectedOption = document.getElementById("tableFilter").value;
    var allRow = document.getElementById("all");
    var cc1Row = document.getElementById("cc1");
    var cc2Row = document.getElementById("cc2");
    var cc3Row = document.getElementById("cc3");

    // Hide all rows
    allRow.style.display = "none";
    cc1Row.style.display = "none";
    cc2Row.style.display = "none";
    cc3Row.style.display = "none";

    if (selectedOption === "cc1") {
        cc1Row.style.display = "table-row";
    } else if (selectedOption === "cc2") {
        cc2Row.style.display = "table-row";
    } else if (selectedOption === "cc3") {
        cc3Row.style.display = "table-row";
    } else if (selectedOption === "all") {
        // Show all rows
        cc1Row.style.display = "table-row";
        cc2Row.style.display = "table-row";
        cc3Row.style.display = "table-row";
    }
}
function EdisplaySelectedTable() {
    var selectedOption = document.getElementById("e-tableFilter").value;
    var allRow = document.getElementById("e-all");
    var cc1Row = document.getElementById("e-cc1");
    var cc2Row = document.getElementById("e-cc2");
    var cc3Row = document.getElementById("e-cc3");

    // Hide all rows
    allRow.style.display = "none";
    cc1Row.style.display = "none";
    cc2Row.style.display = "none";
    cc3Row.style.display = "none";

    if (selectedOption === "cc1") {
        cc1Row.style.display = "table-row";
    } else if (selectedOption === "cc2") {
        cc2Row.style.display = "table-row";
    } else if (selectedOption === "cc3") {
        cc3Row.style.display = "table-row";
    } else if (selectedOption === "all") {
        // Show all rows
        cc1Row.style.display = "table-row";
        cc2Row.style.display = "table-row";
        cc3Row.style.display = "table-row";
    }
}

function WdisplaySelectedTable() {
    var selectedOption = document.getElementById("w-tableFilter").value;
    var allRow = document.getElementById("w-all");
    var cc1Row = document.getElementById("w-cc1");
    var cc2Row = document.getElementById("w-cc2");
    var cc3Row = document.getElementById("w-cc3");

    // Hide all rows
    allRow.style.display = "none";
    cc1Row.style.display = "none";
    cc2Row.style.display = "none";
    cc3Row.style.display = "none";

    if (selectedOption === "cc1") {
        cc1Row.style.display = "table-row";
    } else if (selectedOption === "cc2") {
        cc2Row.style.display = "table-row";
    } else if (selectedOption === "cc3") {
        cc3Row.style.display = "table-row";
    } else if (selectedOption === "all") {
        // Show all rows
        cc1Row.style.display = "table-row";
        cc2Row.style.display = "table-row";
        cc3Row.style.display = "table-row";
    }
}

function toggleBankAccountField(value) {
    var bankAccountField = document.getElementById("bankAccountField");
    if (value === "yes") {
        bankAccountField.style.display = "block";
    } else {
        bankAccountField.style.display = "none";
    }
}
//PAY BILL IWNDOW POP UP

function disableButton() {
    // Disable the button
    var button = document.querySelector(".btn.custom-btn");
    button.disabled = true;
}


function openPopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the popup
function closePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the popup when the user clicks on the close button (X)
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function () {
    closePopup();
});

// Close the popup when the user clicks outside the modal content
window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closePopup();
    }
});


