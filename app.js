function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var age = document.forms["myForm"]["age"].value;
    var team = document.forms["myForm"]["team"].value;
    var email = document.forms["myForm"]["email"].value;
    var pswd = document.forms["myForm"]["password"].value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");


if (fname.length < 1) {
    document.getElementById("fname").innerHTML = "First name cannot be empty";
    document.forms["myForm"]["fname"].classList.add("error");
}
if (lname.length < 1) {
    document.getElementById("lname").innerHTML = "Last name cannot be empty";
    document.forms["myForm"]["lname"].classList.add("error");
}
if (age.length < 1) {
    document.getElementById("age").innerHTML = "Age cannot be empty";
    document.forms["myForm"]["age"].classList.add("error");
}
if (team.length < 1) {
    document.getElementById("team").innerHTML = "Team name cannot be empty";
    document.forms["myForm"]["team"].classList.add("error");
}
if ((email.length < 1) || (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)) {
    document.getElementById("email").innerHTML = "Please Confirm your email";
    document.forms["myForm"]["email"].classList.add("error");
}
if (pswd.length < 6) {
    document.getElementById("pswd").innerHTML = "Password must be at least 6 characters long";
    document.forms["myForm"]["password"].classList.add("error");
}
if (fname.length < 1 || lname.length < 1 ||age.length < 1 ||team.length < 1 || email.length < 1 || pswd.length < 6 ||  (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)) {
    return false;
} 

else {
    alert("Your Details Are successfully Sent!");
}
}

var fi=[];
var la=[];
var ag=[];
var tm=[];
var mail=[];
var pd=[];

function dna(){
    var finame = document.getElementById("finame").value;
    fi.push(finame);
    console.table("First name is " + fi);
    var liname = document.getElementById("liname").value;
    la.push(liname);
    console.table("Last name is " + la);
    var agname = document.getElementById("agname").value;
    ag.push(agname);
    console.table("Age is " + ag);
    var tmname = document.getElementById("tmname").value;
    tm.push(tmname);
    console.table("Team is " + tm);
    var mailname = document.getElementById("mailname").value;
    mail.push(mailname);
    console.table("Email is " + mail);
    var pdname = document.getElementById("pdname").value;
    pd.push(pdname);
    console.table("password is " + pd);
}

// function dna(){
//     var liname = document.getElementById("liname").value;
//     la.push(liname);
//     console.log(la);
// }
// function dna(){
//     var finame = document.getElementById("finame").value;
//     fi.push(finame);
//     console.log(fi);
// }
// function dna(){
//     var finame = document.getElementById("finame").value;
//     fi.push(finame);
//     console.log(fi);
// }
// function dna(){
//     var finame = document.getElementById("finame").value;
//     fi.push(finame);
//     console.log(fi);
// }