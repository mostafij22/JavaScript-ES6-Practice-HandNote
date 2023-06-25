//======ES6 Function========
    // Simple Function
    // Parameterized functions
    // Rest Parameters
    // Returning functions
    // Anonymous function
    // Parameterized Anonymous function
    // Arrow functions
    // The Function Constructor


//===Simple Function
    function myName(){
        var x=10;
        var y=15;
        var z= x+y;
        console.log(z)
    }
    myName();


//===Parameterized functions (bahire theke funcition er vitor value patano hoi)
    function myName(x,y){
        var z= x+y;
        console.log(z)
    }
    myName(10,15);



//===Rest Parameters function 
    //Rest parameter er kaj holo akta parameter diye array akare onek gulu value k aksate receive kora
    function something(...x){
        console.log(x[6]);
    }

    something(1,2,3,4,5,6,"A","B","C")


    
//====Returning functions==
    //akta function chaile jekono doroner data or jekono kisu kew return kore dite pare,
     //akta function jokhon kono kisu return kore tokhon seta function er somtollo hoye jai,
     // akta function chaile r akta function keo return korte pare, class,variable jekono kisu return korte pare
        function funOne(){
            return 20;
        }

        function funTwo(){
            // return 30;
            return funOne();
        }

        // console.log(funOne()+funTwo())
        console.log(funTwo())


//=====Anonymous function===
    //je function er kono name theke na tai Anonymous function, a e functin k ber ber reassign kora jai
    //Anonymous function k variable er modhe rakha jai, ajonno function k call korar jonno oi variable k function er moto call korte hoi
    //normal function er moto anonymous function diye sob kisu kora jai
        var myFun=function(){
            return "Hello"
        }
        var myFun=function(){
            return "Hello Reassign "
        }
        console.log(myFun())


//=====Arrow function==========   
    //To write smaller function syntax
    //Arrow functions make your code more readable and structured.
    //Arrow functions are anonymous functions 
    //Can declare without the function keyword.
    //………………………………………………………………………………..
    //Arrow functions cannot be used as the constructors. 

    //syntax: ()=>{}

        var myArrow=()=>{
            console.log("My first Arrow function")
        }

        myArrow();



//=========ES6 Array==============
    //Array er index number start hoi 0 theke
    //==Simple Array
        var myArray=["A","B","C","D","E"]
        var myArrayPro = new Array("A","B","C","D","E");

        //for(let item of myArray){
        for(let item of myArrayPro){
            console.log(item)
        }

    //==Multidimensional Arrays
        var bangladesh=["Dhaka","Rangpur","Ctg"]
        var india=["Mumbai","Chennai","Kolkata"]
        var china=["Uhan","Shanghai","Hongkong"]

        var asia=[bangladesh,india,china]

        console.log(asia[1][2])  //output: kolkata



    //== Array de-structuring
        //de-structue means structure k venge fela ba tukro tukro  kore fela
        //de-structure expression: var[]=array 

            var countries=["Ban","IND","CANA","PAK"]
            var[a,,,b]=countries

            console.log(b)

        

//=========ES6 Map==============
    //Map is a Collection/group of data. a e collection/group er vitor protita data jonno alada alada key thake .
    //key, value= pair , Map er vitor data gulu pair vabe thake, 

    // Map() akta class & class er object korar jonno new keyword use hoi.

        var myMap= new Map(); //akhane myMap variable diye Map() Object toiri holo

        myMap.set("key1", "Bangladesh") //akhane set() akta map er function
        myMap.set("key2", "India")
        myMap.set("key3", "Srilanka")
        myMap.set("key4", "Maldiv")
        myMap.set("key5", "Bhutan")
        myMap.set("key6", "Nepal")
        myMap.set("key7", "Thailand")

        console.log(myMap.values()) //akhane values() akta map function
        console.log(myMap.keys()) //akhane keys() akta map function


    //===map apply on=> for...of loop    
        //key, value array return kore Map er vitor. so, keys() & values() map er vitor call korle array akare output dei    
            
            var myMap= new Map();

            myMap.set("key1", "Bangladesh")
            myMap.set("key2", "India")
            myMap.set("key3", "Srilanka")
            myMap.set("key4", "Maldiv")
            myMap.set("key5", "Bhutan")
            myMap.set("key6", "Nepal")
            myMap.set("key7", "Thailand")

            for(let myvalue of myMap.values()){ //myMap.values() = array
                console.log(myvalue)
            }

            for(let mykey of myMap.keys()){ //myMap.keys() = array
                console.log(mykey)
            }


    //===Map method: delete(key), get(key), clear(), has(key)

        var myMap= new Map();

        myMap.set("key1", "Bangladesh")
        myMap.set("key2", "India")
        myMap.set("key3", "Srilanka")
        myMap.set("key4", "Maldiv")
        myMap.set("key5", "Bhutan")
        myMap.set("key6", "Nepal")
        myMap.set("key7", "Thailand")

        //==delete(), kono value delete kore dibe 
            myMap.delete("key1")
            myMap.delete("key2")

            for(let myvalue of myMap.values()){
                console.log(myvalue)
            }

        //==clear()    
            myMap.clear()

            for(let myvalue of myMap.values()){
                console.log(myvalue)
            }


        //==get(), value read kore output dekhabe
            console.log(myMap.get("key7"));
        

        //==has(key), kono value ase kina ta check kore 
            if(myMap.has("key1")){
                console.log("YES");
            }else{
                console.log("No");
            }




//=========ES6 Set==============
 //Set is a collection of data. Set is almost like  Map But it does not contain any duplicates values
    //set akta class constructor map er moto=> set()
    //set k object korte hole new kewword use korte hobe=> new set();
    // set er method gulu hosse: add(), .clear(), .delete(value),.has(value), .values(), Set.size() 

    var mySet=new Set();

    mySet.add('Bangladesh');
    mySet.add('India');
    mySet.add('Nepal');
    mySet.add('Bhutan');
    mySet.add('Maldiv');
    mySet.add('Chaina');
    mySet.add('Nepal');


    console.log(mySet);


//=========ES6 Class==============
    //class er kaj hosse aksate onekgulu properties(variable,method,object) nijer vitor bind kore/hold kore rakha
        // and class re-useable , bar bar use kora jai, class theke kono properties use korte hole tar akta object create korte hoi
        
        class MyClass{
            MyFun(name) {
                console.log(name)
            }
            MyFun1(fun1) {
                console.log(fun1)
            }
            MyFun2(fun2) {
                console.log(fun2)
            }
            MyFun3(fun3) {
                console.log(fun3)
            }
        }

        var obj = new MyClass;

        obj.MyFun("Bangladesh");
        obj.MyFun1("India");
        obj.MyFun2("Pakistan");
        obj.MyFun3("Srilanka");
    

    //===Class Constructor=====
        //Constructor  হচ্ছে ক্লাসের নিজেস্ব মেথড/ফাংশন,ক্লাস অবজেক্ট তৈরি হলেই, Constructor অটো কল হয় 
        //অন্য ফাংশনের মতোই Constructor কাজ করে, কিন্তু Constructor রিটার্ন করতে পারে না 

        class MyClass{
            constructor(){
                console.log("Hello I am constructor")
            }
        }

        new MyClass();

        //==Constructor parameter===
        class MyClass{
            constructor(a,b){
                this.firstNum=a
                this.secondNum=b
            }
            add(){
                let result = this.firstNum + this.secondNum;
                console.log(result);
            }
        }

        var obj = new MyClass(10, 20);

        obj.add();



    //=====Class static keyword==========
        //static property somporko sorasori class er sate object er sate noi, ajonno object theke call hoi na
        //static property call korar jonno sorasori class use korte hoi
        class MyClass{
            static hello(){
                console.log('Hello World')
            }
        }

        MyClass.hello();


    //=====Class Inheritance==========
        //Inheritance(extends) means উত্তরাধিকার, Interitance e 2 type class thake 1.Parent and 2.Child
        //Parent class er sobkisui(properties) Child class pai, extends keyword use kore 

        class parent{
            hello1(){
                console.log("Hello 1 Function")
            }
            hello2(){
                console.log("Hello 2 Function")
            }
        }

        class child extends parent{

        }

        var obj = new child();
        obj.hello1();
        obj.hello2();



        //==method overriding
          //child class chaile parent class er property/method change korte pare, atai method overriding
          
        class parent{
            hello1(){
                console.log("Hello 1 Function")
            }
            hello2(){
                console.log("Hello 2 Function")
            }
        }

        class child extends parent{
            hello1(){
                console.log("Hello 1 Function, How are you?")
            }
        }

        var obj = new child();
        obj.hello1();
        obj.hello2();



        //==Super Keyword 
            //super keyword diye parent class er kono method/function k child class e sorasori call kora jai.

            class parent{
                hello1(){
                    console.log("Hello, I am 1 Function")
                }
                hello2(){
                    console.log("Hello 2 Function")
                }
            }
    
            class child extends parent{
                demo(){
                    super.hello1();
                }
            }
    
            var obj = new child();
            obj.demo();
            




//=====module==========            
  //Module – জোট,একত্রিত কিছু  
  //Named : Export-Import By Using Same Name
  //Default:  Export – Import By Using Any Name 


  