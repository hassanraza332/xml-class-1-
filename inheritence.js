//class student {

  //  constructor ()
    //{
      //  console.log("constructor class")
    //}
//}

//class student1 extends student
//{

//constructor()
//{
  //  super();
   // console.log("fdg class")
//}

//}

//let obj = new student();
//let obj1 = new student1 ();


class employ {
constructor(name)
{
this.ename=name
console.log("contructor class")
}

info(){

console.log("the manager is "+this.ename)    
} 


}
class manager extends employ{


}

let a = new manager ("ali")
a.info();