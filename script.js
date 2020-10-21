function ORM(){
  var w = document.getElementById("weight").value;
  var r = document.getElementById("reps").value;
  document.getElementById("result").innerHTML = parseInt(w*36/(37-r))
  console.log("calc done")
}