//Opening hours
function areWeOpen() {
var today = new Date();

if (today.getDay() <= 1) {
document.getElementById("open").innerHTML = "We Are Closed";
document.getElementById("info").innerHTML = "Sorry - Gone Fishing";
document.getElementById("callBtn").classList.add("d-none");
} else if (today.getDay() >= 2) {
  document.getElementById("open").innerHTML = "We Are Open!";
  document.getElementById("info").innerHTML = "We are open today: <br> 11:30am–1:30pm, 4:30–8pm";
  document.getElementById("fishing").classList.add("d-none");
};
};
areWeOpen();
