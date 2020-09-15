    //     var name = "Faraz"
//  function foo(){

//      name = "Syed";
//  }

//  foo();

//  console.log(name);


    // if(true){

    //     var name = "Syed Faraz Ali";
    // }

    // console.log(name);

    //**** Let*** */


    // if(true){

    //    let  fullname = "Saeed";
    // }

    // console.log(fullname);


    // let only use in block


    // let firstname = "Syed Faraz";
    // let firstname = "Faraz Ali" ;


    // console.log(firstname);



    // const School = "Kids Campus Grammar School";

    // var obj = {

    //     schoolname : School
    // }

    // console.log(obj)



    // Tamplate Laters ******************************



    // document.write("2 " +  " " + " * " + " " + " 2 " + " " + " = " + 2*2);


    // firstname = "Syed Muhammad";
    // lastName = "Faraz Ali";

    // document.write(` My name is ${firstname} ${lastName} <br/>  `);

    // document.write(`2 * 2 = ${2*2}`);



    //Spread Operator ******************************************


    // var students1 = ["Syed " , "Muhammad " , "Faraz " , "Ali"] ;

    // var students2 = [...students1, "Syed " , "Muhammad " , "Sheraz " , "Ali"] ;

    // // var marge = students1.concat(students2);

    // console.log(students2)


    // var obj1 ={
    //     name1:'Syed FARAZ Ali',
    //     class1 : '2 years '

    // }

    // var obj2 ={
    //     ...obj1,
    //     name2:'Syed Sheraz Ali',
    //     class2 : '2 years '

    // }

    // console.log(obj2)


    //Destructureing


    // var student = {
    //     school: 'Kids Campus',
    //     name: 'Syed Faraz Ali',
    //     roll: 'BB-5967'

    // }

    // let = {school , name , roll} = student;

    // console.log(school)
    // console.log(name)
    // console.log(roll)


    //Ternary Operators


    // var  age = prompt("Please Enter Your Age " , "Eg : 23")

    // if(age > 30){
    //     console.log('30 se bara hain ');
    // }else{
    //     console.log('30 se chota hain');
    // }


    // var check = age > 10 && age < 30   ? "30 se chota hain" : "30 se bara Hain";


    // console.log(check)

  //

    // var bool = true

    // var name = bool && "Faraz";

    // console.log(name)


    // Async && Sync




    //Promise


    // var promise = new Promise(function(resolve , reject){


       // var name001;

    // setTimeout(function (){
    //     name001 = "Syed Muhammad Faraz Ali"
    // }, 2000);



    // setInterval(function() {
    //     console.log(name001);
    // }, 1000);


    //     let zinger = "Nahi Khilaya";

    //     if(zinger === "Available"){
    //         resolve("Yes Promise is Co  mplete")
    //     }else{
    //         reject("NO, promise is Not Complete")
    //     }

    // })


    // promise.then(function(data){
    //     console.log(data);
    // }).catch(function(error){
    //     console.log(error);
    // })





    // const getDATA  = function(){

    //   let promise = new Promise(function(resolve , reject){





    //   // promise.then(function(result){

    //   //   console.log("result", result);
    //   // }).catch(function(error){
    //   //   console.log("error", error);
    //   // })




    //   }



    // function getDATA(){

    //   let promise = new Promise(function(resolve , reject){

    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())

    //     .then(function(result){

    //         resolve(result);

    //     }).catch(function(error){
    //         reject(error)

    //       })



    //   } )


    //   promise.then(function(result){

    //     console.log("result", result);
    //   }).catch(function(error){
    //     console.log("error", error);
    //   })

    // }



  // getDATA()






  // Short Mehtod


  // async function getDATA(){

  //   let promise = new Promise(function(resolve , reject){

  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())

  //     .then(function(data){

  //         resolve(data);

  //     }).catch(function(data){
  //         reject(data)

  //       })



  //   } )


  //   let data = await promise;

  //   console.log(data)

  // }



    //De-strutureing Arry



  // let arr = ["Syed" , "Muhammad" , "Faraz" , "Ali"];

  // let  [nam01 , nam02 , nam03 , nam04] = arr;

  // console.log(nam04)


    //Function Experation 


     //Function Expression


    //  let foo = function () {
    //     console.log("Hello World")
    //  }


    //  foo();


    // let hello = () => {
    //   console.log("Hello World Faraz ")
    // }


    // hello()

    // let arrow = (name) => {
    //   console.log(`Hello Develper ${name}`)
    // } 


    // arrow("Syed Faraz Ali")


    // let short = () => "Developer";

    
    // console.log(short())


    // setInterval( () => console.log("Syed Faraz Ali"), 1000 )


//CallBaack Function


//     let getDATA01 = () => {
//       setInterval( () => {
//         render_data("Hey Faraz")
//       }, 3000)
//     }

    
//     let render_data = (name) =>{
//       console.log(name)
//   }

// getDATA01(render_data)




//    Arry Functions ************

    // 1)Filter ARRY 

    // let arr = [{name: "Syed Faraz Ali" , age: 22} , {name: "Ahmad " , age: 30 }];

    // let filter = arr.filter( (stu) => { return stu.age <= 30})
    
    // console.log(filter)




    //************Search  */

    // let name = "Faraz Ali"
    // // let name = prompt("Please Enter Your Name " , "E.G: umer")
    // let search = "F";

    // if(name.startsWith(search)){

    //   console.log(name)
    // }





   // ******* Array map   **********//

  //  let arr = [2,3,4,5,6];

  //  let multply = arr.map( (mul) => mul * 3 );
  //  console.log(arr)
  //   console.log(multply)


  //******* Array map Change***** */

  // let arr01 = [{name: "Syed", age : 30} , {name: "Faraz" , age: 30}]

  // let chang = arr01.map((chan) => chan.name ="Syed Muhammad Faraz Ali");

  // console.log(chang)



  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(data => console.log("Result ==>" ,data))
  // .catch(error => console.log("Error == >" ,error));



    // async function getData07()  {
    //   let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   console.log(data)
    // }

    // getData07()





    // function Student(name , mail){
    //     this.name = name;
    //     this.mail = mail;
    // }

    // let student01 = new Student("Syed Faraz Ali" , "syedfaraz210@gmail.com");

    // console.log(student01)




    // class Student {
    //     constructor(name , mail){
    //         this.name = name;
    //         this.mail  = mail
    //     }
    // }



    // class School extends Student{
    //     constructor(name , mail , school){
    //         super(name , mail);
    //         this.school = school
    //     }
    // }
    // let student007 = new School("Syed" , "createtectsolution@gmail.com" , "Kids Campus Grammer School");

    // console.log(student007)