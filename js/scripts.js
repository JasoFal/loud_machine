function getAndSetShoutingValues() {
  const shoutingInput = document.getElementById(`shoutingInput`).value;
  let output = document.querySelector(`span#shoutingOutput`);
  let outputStyles = window.getComputedStyle(output).getPropertyValue(`font-size`);
  console.log(`outputStyles`, outputStyles);
  let oldFontSize = outputStyles;
  console.log(`oldFontSize`, oldFontSize);
  let removePx = (oldFontSize.replace(`px`, ``));
  let updatedFontSize = parseInt(removePx);
  console.log(`removePx`, removePx);
  let newFontSize = (updatedFontSize + parseInt(`10`));
  console.log(`updatedFontSize`, updatedFontSize);
  console.log(`newFontSize:`, newFontSize);
  output.style.fontSize = `${newFontSize}px`;
  let angryInput = `${shoutingInput}`.toUpperCase() + `!!!`;
  let shoutingInput2 = document.querySelector(`span#shoutingOutput`);
  shoutingInput2.innerText = angryInput;
  console.log(`helloWorld`);
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector(`form`);
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShoutingValues();
    document.querySelector(`div#shouting`).removeAttribute(`class`);
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
}