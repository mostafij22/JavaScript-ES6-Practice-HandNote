//ES6 =
// ES6 stands for ECMAScript 6, which is the sixth edition of the ECMAScript standard. ECMAScript is a standardized scripting language specification that JavaScript is based on. ES6 was released in 2015 and introduced significant enhancements to the JavaScript language.
//2015 saler age orthat ES6 age javaScript bola hoi vanila ba row javaScript.



//===Variable====
    //3 way variable likha jai, scoped={} 
    var a = "Sumit"; //function scoped,    
    let b = "Rabbil"; //block scoped
    const c = "Faisal"; //block scoped

    let b = "Bangladesh";    
    if(true){
        if(true){
        b = "sumit"
        }
    }
    console.log(b)



//===hoisting-== 
    //upore tola 
     


//======Arrow function=======
    //syntax: ()=>{}
    // => means return
    //normal function
        function myFunc(a,b){
            return a+b;
        }
    //Arrow function
        const myFunc=(a,b)=> a + b; // single line code hole avabei likha hoi

        const myFunc= a => a + 6; // single line code & parameter single hole avabei likha hoi



//====Truthy & Falsy value===
    // Falsy value = false, 0, " ",null, undefined,NaN
    //undefined means = kisui nai
    //null means= kisu akta ase
    // Falsy value chhara sob kisui Truthy value



//===Ternary Operator===
    //if...else er sort form hosse= ternary Operator
    let a=5;
    let b=6;

    if(a>3){
        b=8
    }else{
        b=4;
    }
   //==ternary Operator
   let result= a>3 ? b=8 : b=4

   //==============
   let age = 18;
   let message = (age >= 18) ? "You are an adult." : "You are not an adult.";
   console.log(message);



//===array.Map() & array.reduce()=====
    //akta array k transform kore jodi r akta array banate hole than Map() is best. 

    const myArray = [1,2,3,4,5,6];
    const doubleArray = [];
    for(let i=0; i<myArray.length; i++){
        doubleArray.push(myArray[i]*2);
    }
    console.log(doubleArray)

    //========array.Map()========
        //Map() akta array k transform kore r akta array toiri kore. ( map() array akta function.)
            const myArray = [1,2,3,4,5,6];
            const doubleArray= myArray.map((el) => el * 2)

            console.log(doubleArray)

    //========array.reduce()=====
        //akta array theke jodi ekta single value return korte hoy (any condition) than reduce() use hoy.
            const myArray = [1,2,3,4,5,6];
            const stringArray= ["I", "Love", "Bangladesh"]
            const result = myArray.reduce((previousResult, currentValue, currentIndex, array)=>{
                return previousResult + currentValue;
            }, 0);

            console.log(result);




//===for loop====
    //==simple loop
        for(let i=0; i<5; i++){
            console.log(i)
        }  
    
    //==for...in  => use for Object //jodi array upor (for..in) apply hoy than output array er Index dibe
        const language = {
            name: "JavaScript",
            creator: "Brendan Eich"
        }
        
        for(property in language){
            console.log(property)
        }
    

    //==for...of  => use for Array
        const numbers = [1,2,3,4];
        for(number of numbers){
            console.log(number)
        }

        //===========normal loop==== 
        const numbersA = [1,2,3,4];
        for(let i=0; i<numbersA.length; i++){
            console.log(numbersA[i]);
        }

   
        
        
//===Object Methods=====  
    //object er 2ta jinis thake key & value

    const language = {
        name: "JavaScript",
        creator: "Brendan Eich",
        libraries: ["jQuery", "React"]
    };

    console.log(Object.keys(language)); //capital Object likhle sortcut array akare result dibe
    console.log(Object.values(language)); 
    console.log(Object.entries(language)); 


    //===object shorthand===
        //property and value nam same hole, akta use korlei hobe  
            let name = "JavaScript";
            let creator = "Brendan Eich";

            // const language = {
            //     name: name,
            //     creator: creator
            // };
            const language = {
                name,
                creator,
            };


            
//==function er default parameter     
    function myFunction(a = 0){
        console.log(a + 5);
    }        
    myFunction();



//===Spread operator
    const numbers1=[1,2,3,4,5];
    const numbers2=[10,12,13,14,15];

    const result = [...numbers1, ...numbers2];

    console.log(result);



//===Rest operator====



//======destructuring======
    //destructue means structure venge sekhan  theke kisu ber kore ana
        const person = {
            name: "Sumit",
            age: 38,
            education: {
                ssc: "Rangpur",
                HSC: "Dhaka",
                graduation: "Dhaka"
            },
        }

        const {name, age} = person; //akhane right side person object k venge left side {} er modhe rakha 
        console.log(name, age);

        const {name: myName, education={}} = person; //variable k (name:myName) onno name e destructure kora, akhane {} default value nibe jodi kono data na pai  
        console.log(myName, education);



       //==a value b neya rakha and b er value a te naya rakha, shuffle kora 
       var a = 1;
       var b = 2;
       [b,a] = [a,b]


//====import/export====
    //2type import/export hoy 

    //1.name  =  name diye export korle import korte hobe oi name akarei, je name e export kora hoyese  but alias kore Rename kora jai, exam:{ love as MyLove}

    //2.default= default vabe export kore jekono name e import kora jai, default vabe only akberi export kora jai



//===Optional Chaining===
    //onek somoy object er value nao pawa jete pare , ajonno error theke bachar jonno question mark ? dite hoi, tokhon javaScript oi object value na pele avoid kore result diye dibe, API theke data asle safety purpose jonno ata kora hoi    
     const myObject = {
        name: "Sumit",
        education: {
            ssc: "Rangpur",
            // hsc: {
            //     institution: "NDC",
            //     year: 2004,
            // },
        },
     };
    
    console.log(myObject.education?.hsc?.year) 


//===Nullish coalescing operation
    //nullish hole right er ta hobe, na hole left er ta hobe
    //nullish bolte bujai akta null onnota undefined
    
    let language = "javaScript";

    let result = language ?? "java"; //nullish(undefined,null)
    let result2 = language || "java"; //falsy(undefined,null,"",false,NaN,0)
    let result3 = language && "java"; //truthy 

    console.log(result);



