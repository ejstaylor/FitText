var textValue = "";
var sliderValue = 50;

var outputDiv;
var outputText;
var errorMessage;

function fitText() {
    outputDiv.textfill();

    if (outputDiv.width() < outputText.width()) {
        errorMessage.show()
        outputText.hide()
    } else {
        errorMessage.hide()
        outputText.show()
    }
}

function textOnChange() {
    textValue = textInput.val()
    sessionStorage.textValue = textValue;
    updateOutputText();
    fitText();
}

function sliderOnChange() {
    sliderValue = sliderInput.val()
    sessionStorage.sliderValue = sliderValue;
    updateOutputWidth();
    fitText();
}

function updateOutputText() {
    outputText.text(textValue);
}

function updateOutputWidth() {
    var width = sliderInput.val() + "%";

    outputDiv.css({
        'width': width
    });
}

$(document).ready(function () {
    textInput = $('.textInput')
    sliderInput = $('.sliderInput')
    outputDiv = $('.outputDiv');
    outputText = $('.outputText');
    errorMessage = $('.errorMessage');

    sliderValue = sessionStorage.sliderValue;
    sliderInput.val(sliderValue)
    updateOutputWidth()

    textValue = sessionStorage.textValue;
    textInput.val(textValue)
    updateOutputText()

    fitText();
});