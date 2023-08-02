const input = document.getElementById("display");
function store() {
  const x = document.querySelector('input').value;
  document.getElementById("storage").innerHTML +=' [ ' + x + " ] "   ;
}