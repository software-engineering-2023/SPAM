// Function to open the popup with specific values
function openpaybillpop(name, accountFrom, accountTo, amount) {
    var modal = document.getElementById("billpopup");
    var nameInput = document.getElementById("name");
    var accountFromInput = document.getElementById("account-from");
    var accountToInput = document.getElementById("account-to");
    var amountInput = document.getElementById("amount");
    var accountFrom = accountFromInput.value;
    nameInput.value = name;
    accountFromInput.value = accountFrom;
    accountToInput.value = accountTo;
    amountInput.value = amount;

    modal.style.display = "block";
}

// Function to close the popup
function closepaybillpop() {
    var modal = document.getElementById("billpopup");
    modal.style.display = "none";
}

// Close the popup when the user clicks outside the modal content
window.addEventListener("click", function (event) {
    var modal = document.getElementById("billpopup");
    if (event.target === modal) {
        closepaybillpop();
    }
});

// Disable the "Pay" button
function disablePayButton() {
    var payButton = document.querySelector(".form-control");
    payButton.disabled = true;
}

// Toggle the display of "otherDonations" field
function toggleDonations(selectedValue) {
    var otherDonations = document.getElementById("otherDonations");
    if (selectedValue === "other") {
        otherDonations.style.display = "block";
    } else {
        otherDonations.style.display = "none";
    }
}

// Function to display selected table rows
function displaySelectedTable(selectedOption, allRow, cc1Row, cc2Row, cc3Row) {
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

// Function to toggle the display of the bank account field
function toggleBankAccountField(value) {
    var bankAccountField = document.getElementById("bankAccountField");
    if (value === "yes") {
        bankAccountField.style.display = "block";
    } else {
        bankAccountField.style.display = "none";
    }
}

function openccpop(cardNumber, accountFrom, amount) {

    var modal = document.getElementById("payCCpop");
    var creditInput = document.getElementById("cc-number");
    var accountFromInput = document.getElementById("cc-account-from");
    var amountInput = document.getElementById("cc-amount");
    creditInput.value = cardNumber;
    accountFromInput.value = accountFrom;
    amountInput.value = amount;
    modal.style.display = "block";

}



// Function
function closeccpop() {
    var modal = document.getElementById("payCCpop");
    modal.style.display = "none";
}

// Close the popup when the user clicks on the close button (X)
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function () {
    closeccpop();
});

// Close the popup when the user clicks outside the modal content
window.addEventListener("click", function (event) {
    var modal = document.getElementById("payCCpop");
    if (event.target === modal) {
        closeccpop();
    }
});

function openancpop() {
    var modal = document.getElementById("ancPOP");
    modal.style.display = "block";

}

// Function
function closeancpop() {
    var modal = document.getElementById("ancPOP");
    modal.style.display = "none";
}

// Close the popup when the user clicks on the close button (X)
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function () {
    closeancpop();
});

// Close the popup when the user clicks outside the modal content
window.addEventListener("click", function (event) {
    var modal = document.getElementById("ancPOP");
    if (event.target === modal) {
        closeancpop();
    }
});
