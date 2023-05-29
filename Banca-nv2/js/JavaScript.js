
//PAY BILL IWNDOW POP UP
// Function to open the popup
// Function to open the popup with specific values
function openpaybillpop(name, accountFrom, accountTo, amount) {
    var modal = document.getElementById("paybillpop");
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
    var modal = document.getElementById("paybillpop");
    modal.style.display = "none";
}

// Close the popup when the user clicks on the close button (X)
//var closeBtn = document.getElementsByClassName("close")[0];
//closeBtn.onclick = function () {
//    closePopup();
//}

// Close the popup when the user clicks outside the modal content
window.onclick = function (event) {
    var modal = document.getElementById("paybillpop");
    if (event.target == modal) {
        closePopup();
    }
}
function submitForm() {
    // Add your form submission logic here

    // Close the modal window
    var modal = document.getElementById("paybillpop");
    modal.style.display = "none";


//ANNON POP UP ADMIN
    // Doesnot take any parameters
    function openPopup() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }


//PAY CC WINDOW
    //PAY BILL IWNDOW POP UP
    // Function to open the popup
    // Function to open the popup with specific values
    function openpayCCpop(name, accountFrom, amount) {
        var modal = document.getElementById("payCCpop");
        var nameInput = document.getElementById("name");
        var accountFromInput = document.getElementById("account-from");
        var amountInput = document.getElementById("amount");
        var accountFrom = accountFromInput.value;
        nameInput.value = name;
        accountFromInput.value = accountFrom;
        amountInput.value = amount;

        modal.style.display = "block";
    }


    // Function to close the popup
    function closepayCCpop() {
        var modal = document.getElementById("payCCpop");
        modal.style.display = "none";
    }

    // Close the popup when the user clicks on the close button (X)
    //var closeBtn = document.getElementsByClassName("close")[0];
    //closeBtn.onclick = function () {
    //    closePopup();
    //}

    // Close the popup when the user clicks outside the modal content
    window.onclick = function (event) {
        var modal = document.getElementById("payCCpop");
        if (event.target == modal) {
            closePopup();
        }
    }
    function submitForm() {
        // Add your form submission logic here

        // Close the modal window
        var modal = document.getElementById("payCCpop");
        modal.style.display = "none";

    // Disable the "Pay" button
    var payButton = document.querySelector(".form-control");
    payButton.disabled = true;
}

function toggleDonations(selectedValue) {
    var otherDonations = document.getElementById("otherDonations");
    if (selectedValue === "other") {
        otherDonations.style.display = "block";
    } else {
        otherDonations.style.display = "none";
    }
}
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



