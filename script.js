function calculateLove() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + "%";
  document.getElementById("result").innerHTML = name1 + " & " + name2 + " are " + loveScore + " compatible.";
}
