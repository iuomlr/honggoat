document.getElementById("showTextButton").addEventListener("click", function () {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
});
