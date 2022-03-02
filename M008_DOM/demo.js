function addText(){
    let text = document.createElement("p");
    text.innerText = "Guten Tag";
    text.style.color = "rot";
    text.style.textAlign = "center";

    let text1 = document.createElement("p");
    text.innerText = "Tschüss";
    
    //apend()

    //querySelector
    let p1 = document.querySelector("#text"); //id
    //document.querySelector(".class"); //class
    //document.querySelector("p");
    p1.appendChild(text); //Das Child-Element steht unter dem Parent-Element
    p1.append(text1); //Das neue Element steht neben dem vorhandenen Element

    let body = document.getElementsByTagName("body");
    
}

document.cookie;