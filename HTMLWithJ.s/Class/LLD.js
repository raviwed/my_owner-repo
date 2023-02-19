class vehicel{
    constructor(type, regNumber){
        this.type=type;
        this.regNumber=regNumber;
    }
}
 class Car extends vehicel{
    constructor(type,regNumber){
        super(type,regNumber);


    }
 }
 class bike extends vehicel{
    constructor(type,regNumber){
        super(type,regNumber);


    }
 }
 class Truck extends vehicel{
    constructor(type,regNumber){
        super(type,regNumber);


    }
 }
 class slot{
    #isBooked
    constructor(number,type){
      this.number=number
      this.type=type
      this.#isBooked=false;
    }
   
   get _isBooked(){
    return this.#isBooked;
   }
 set _isBooked(bool){
    this.#isBooked=bool;
 }

 }
 let s1 =new slot(1,"bike")
 console.log(s1)
 s1._isBooked=true;
class ParkingFloor{
     constructor(floornumber,maxFloor){
        this.floornumber=floornumber;
        this.ParkingSpots=[];
        for( let i=0;i<maxFloor;i++){
            if(i===0){
                this.ParkingSpots.push(new slot(i,"Truck"))
            }else if(i===1){
                this.ParkingSpots.push(new slot(i,"Bike"))
            }else{
                this.ParkingSpots.push(new slot(i,"Car"))
            }
        }  
    }

}

 class ParkingLot{
    constructor(numberofFloor){
        this.numberoffloors=numberofFloor;
        this.floor=[];
        for(let i=0;i<numberofFloor;i++){
            this.floor.push(new ParkingFloor(i,numberofFloor))
        }
    } 
     findSlot(type){
      for(let i=0;i<this.numberofFloors;i++){
        for(let slot of this.floors[i].parkingSpots){
            console.log(slot);
             if(slot.type===type&& !slot._isBooked){
                return {floornumber:i,found_slot:slot}
             }
        } 
      }
    }
   ParkVehicle(vehicle){
    let slot =this.findSlot(vehicle.type);
    slot.found_slot._isBooked=true;
    console.log(slot)
   }


 }
 let cl=new ParkingLot(3);
 let c2=new Car("car","m29")
console.log(cl,c2)