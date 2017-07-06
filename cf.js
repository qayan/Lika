function fToC(f) {
  c = (f - 32) * 5 / 9;
  return c;
}

function cToF(c) {
  f = c * 9/5 + 32 
  return f
}

function speak(text) {
  var msg = new SpeechSynthesisUtterance('Hello World');
  window.speechSynthesis.speak(msg);
}
