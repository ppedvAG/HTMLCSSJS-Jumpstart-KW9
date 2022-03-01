class Mensch{
    constructor(vorname, nachname, alter){
        this.Vorname = vorname;
        this.Nachname = nachname;
        this.Alter = alter;
    }

    introduce(){
        console.log("Name: " + this.Vorname + this.Nachname + ", " + this.Alter);
    }
    age(){
        console.log(this.Alter += 1);
    }
}
var p = new Mensch("Max", "Mustermann", 23);
p.introduce();
p.age();

class Auto{
    constructor(marke, modell, maxSpeed){
        this.Marke = marke;
        this.Modell = modell;
        this.MaxSpeed = maxSpeed;
        this._Driver = null;
        this._CurSpeed = 0;
        this.MotorStatus = false;
    }

    description(){
        console.log("Marke: " + this.Marke + ", Modell: " + this.Modell + "Maximale Geschwindigkeit: " + this.MaxSpeed);
    }
    onoff(){
        this.MotorStatus = !this.MotorStatus;
    }

    get currSpeed(){
        return this._CurSpeed;
    }
    set currSpeed(newSpeed){
        if(newSpeed < this.MaxSpeed){
            this._CurSpeed = newSpeed
        }
        else{
            this._CurSpeed = this.MaxSpeed;
        }
    }

    get driver(){
        return this._Driver;
    }
    set driver(newDriver){
        if(newDriver.age < 18){
            console.log("Fahrer ist zu jung");
        }
        else{
            this._Driver = newDriver;
        }
    }
}