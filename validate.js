function validate() {
  let gender = document.getElementById("gender").value;
  let age = document.getElementById("age").value;
  let subject = document.getElementById("subject").value;
  let level = document.getElementById("level").value;
}
if (
  gender == "male" &&
  age == "18" &&
  subject == "engineering" &&
  level == "intermediate"
) {
  alert("Processing");
  return true;
} else {
  alert("Try again");
}
