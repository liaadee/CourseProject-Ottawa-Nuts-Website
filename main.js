

var list = ['Roasted Coffee', 'The Best Nuts', 'Always Fresh and Crispy', 'With Distinctive Taste', 'Luxury Chocolates', 'Special Sweets'];

textSequence(0);
function textSequence(i) {

  if (list.length > i) {
    setTimeout(function() {
      document.getElementById("sequence").innerHTML = list[i];
      textSequence(++i);
    }, 2000); // 2 second (in milliseconds)

  } else if (list.length == i) { // Loop
    textSequence(0);
  }
  document.getElementById("sequence").style.color = "#ffffff";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("thanks").innerHTML = "";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function submitme() {
  var rev = document.getElementById("atext").value;
  var nam = document.getElementById("name").value;
  $("#rname").text(nam);
  $("#review").text(rev);
  // document.getElementById("review").innerHTML=nam + "<br>" + rev + "<hr>";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("thanks").innerHTML="<br> Thank You for your feed back";

}
