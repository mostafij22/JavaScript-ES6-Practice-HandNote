
// console.log("Hello World")


//======THE STRICT MODE=========
//Preventing you from using undeclared variables,Removes some of the JavaScript silent errors 
    //by changing them to throw errors. Fixes the mistakes, That is difficult for JS Engine to overcome
    "use strict";
    MyName();
    function MyName(){
        name="rabbil Hasan"
    }



//========SPREAD OPERATOR===============
//Spread= প্রসার, বিস্তার , Array কে প্রশস্ত করে নতুন ভে লু যো গ করে, Three dots (...).

    let poorCountry=['Bangladesh', 'Sirilanka'];
    let richCountry=[...poorCountry,'America','Canada','England']
    console.log(richCountry)

//====Without using spread operator===
    let poorCountry2=['Bangladesh', 'Sirilanka'];
    let richCountry2=['America','Canada','England']
    richCountry2.push(poorCountry2)

    console.log(poorCountry2)




//==============Rest Parameter====================
//when we give parameter as three dots(...) into function parameter than it called Rest Parameter.
  //Rest parameter can receive any number of value , it may 100 no problem, we can use another more parameter at a time
  //but another parameter must be put before Rest Parameter, than first 2 parameter recevie 1 and 2 value , 
  //than rest parameter receive 3 to 9 value 

    function Calculation(a,b,...numbers){
        let sum=0;
        for(let i of numbers){
            sum=sum+i;
        }

        console.log(sum);
    }

    Calculation(1,2,3,4,5,6,7,8,9)



//==============Dynamic function====================
//when we create a function without name and put/hold that function in a variable, than this function is called Dynamic function.
 // in this case the variable represent this function.

    var name = function(nameValue){
        return nameValue;
    } 

    console.log(name("Rabbil Hasan"));



//==============ES6 Variable====================
 //There are 3 way to variable declare in javascript
 //Var= var can be re-declared and reassigned a value.
    var name = "Rabbil";
    name= "Rain"; // Reasign
    var name = "Rabbi" //Redeclard
    console.log(name)
 //let = let can be reassigned a value but can not be re-declared 
    let name = "Rabbil";
    name= "Rain"; // Reasign
    let name = "Rabbi" // can not Redeclard    
    console.log(name)
 //const= constant cannot be re-declared  and re-assigned a value
    const name = "Rabbil";
    name= "Rain"; // can not Reasign
    const name = "Rabbi" // can not Redeclard 
    console.log(name)




//==============Variable Scope====================   
    //Local Scope:  In the local scope, the variable can be accessed within a function where it is declared.
        function myFun(){
            var name= "ECMAScript6";
            console.log(name)
        }
        myFun();

    //Global Scope:  In the global scope, the variable can be accessed from any part of the JavaScript code.
      //work both side into function and out of function
        var name= "ECMAScript6";
        function myFun(){
            console.log(name)
        }
        myFun();
        console.log(name)


//==============Variable Hoisting====================         
    //Hoisting মানে উত্তোলন,Value assign আগে,Declare পরে   
        name="Rabbil Hassan"
        console.log(name)    
        var name;

       
        
//==============Loop==================== 
    //same kaj k bar bar ponorabritti korar jonno Loop use hoi
    //Loop er jonno 3ta condition use hoi, for(i=1; i<=10; i++)
        // i=1;=loop kotha theke start hobe, i<=10;=loop kotokhon porjonno to cholbe, i++=loop koto kore barbe.
   
    //simple for loop
        var i; //i=itration
        for(i=1; i<=10; i++)
        {
            console.log("Allah")
        }

    //==for...of loop====
        //Array theke item k ber korar jonno for...of loop use hoi
            var nameArray = ['Kamal','Jamal','Tomal','Malamal']    
            for(let oneName of nameArray) //oneName akta akta kore array item gulu k dekhabe
            {
                console.log(oneName)
            }  
    

        
//==============Object====================         
    //An object is a collection of related data that have properties and value.
        //simple Object
            var billGates = {shirt:true, shirtColor: "offWhite", smile:true, swaitter:true,swaitterColor:"gray", glass:true}
            console.log(billGates['shirt'])

        //Nested Object
            var billGatesPro={
                shirt:{
                    color:"offWhite",
                    Quality:"Good",
                    price:"200USD"
                },
                swaitter:{
                    color:"Gray",
                    Quality:"Good",
                    price:"250USD",
                    warm:"best"
                },
                face:{
                    smiling: "Yes",
                    Chosma: "Yes",
                    teeth: "White,Big"
                }
            }

            console.log(billGatesPro['swaitter']['price']);


        //====The for...in loop=====
            //Object er vitor loop chalanor jonno for..in loop use hoi
            var billGates = {shirt:true, shirtColor: "offWhite", smile:true, swaitter:true,swaitterColor:"gray", glass:true}
            for(let props in billGates) //billGarates object er vitor property(variable=props) ber koro
            {
                console.log(props);
                console.log(billGates[props]);
                console.log(props+"="+billGates[props]);
            }




//=============Decision-Making=================== 

var billGates = {shirt:true, shirtColor: "offWhite", smile:true, swaitter:true,swaitterColor:"gray", glass:true}
if(billGates['shirtColor']=="red"){
    console.log("Shirt Color is Red")
}   
else if(billGates['shirtColor']=="Blue"){
    console.log("Shirt Color is Blue")
}      
else{
    console.log("Shirt Color Not Found")
}



