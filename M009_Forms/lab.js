function submit(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var number = document.getElementById("number").value;

    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let diverse = document.getElementById("diverse");
    var gender;
    if(male.checked){
        gender = "Mann";
    }
    else if(female.checked){
        gender = "Frau";
    }
    else if(diverse.checked){
        gender = "Divers";
    }

    const Person = {Name: name, Date: date, Email: email, Password: password, Number: number, Gender: gender};
    return Person;
}

