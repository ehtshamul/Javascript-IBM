let text_test = 'The quick brown fox jumps over the lazy dog';
let starttime, endtime;

function startTest() {
  document.getElementById('inputText').innerHTML = text_test;
  document.getElementById("output").innerHTML = '';
  document.getElementById("userInput").value = '';
  document.getElementById("userInput").readOnly = false;

  starttime = new Date().getTime();

  let button = document.getElementById('btn');
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endtime = new Date().getTime();
  document.getElementById("userInput").readOnly = true;

  let timeElapsed = (endtime - starttime) / 1000;
  let userTypedText = document.getElementById("userInput").value;
  let typedWords = userTypedText.trim().split(/\s+/).filter(Boolean).length;

  let wpm = 0;
  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

  let button = document.getElementById("btn");
  button.innerHTML = "Start Test";
  button.onclick = startTest;
}