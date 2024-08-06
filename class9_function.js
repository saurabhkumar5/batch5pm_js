// types of function
// 1. simple function
// 2. arrow function
// 3. call back function
// 4. anonymous function
// 5. self invoking function
// 6. function hosting
// 7. generator function
// 8. async await function
// 9. function constructor
// 10. high order function
// 11. callback hell
// 12. promises
// 13. closure function

// 1. simple function

// function birthday(){
//     console.log("happy bithday");
// }

// birthday();
// birthday();
// birthday();

// function add(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b)
// }
// add();
// add();
// add();

// function birthday(a){
//     console.log("happy birtday",a);
// }
// birthday("books");
// birthday("mobile");
// birthday("toys")

// function add(a,b){
//     console.log(a+b)
// }

// add(10,20);
// add(20,30);
// add(1000,45621)

//  function table(a){
//     for(let i = 0; i<=10; i++){
//         console.log(i*a)
//      }
//  }

//  table(8);
//  table(16);
//  table();
//  table();

// for(let i = 0; i<=100; i++){
//     table()
// }

//     function travell(age1,age2){
//             // console.log(age1+age2);

//             // return age1*age2;
//             return "aman"
//     }

//  const a  = travell(10,20);
//  console.log(a)
//       if(a>20){
//         console.log("you can travell anywhere")
//       }else{
//         console.log("you cant go outside")
//       }

//       if(a>20){
//         console.log("you can vote")
//       }else{
//         console.log("you cant vote")
//       }

// 2. anonymous function

//   const add = function (){
//       console.log("hello");

//       return "byeee"
//     }

//   //   console.log(add);
// const a = add()
//       console.log(a)
// add();

// 3. arrow function

//  const a  = ()=>{
//           console.log("hello");
//     }
//      a()

//  const a =  ()=>{
//       console.log("good morning")
//       return "chetna"
//     }
//  const b  = a();
//  console.log(b)

//  const a  = (b)=>console.log("kullu",b);
//            a(10)

// const a  = b=>console.log("kullu",b);
//            a(10)

// const a = ()=>"kullu shimla";
// console.log(a())

// const a = b=>b*b*b;
// console.log(a(10))

// self invoking function

//  (
//   a=>console.log("shimla",a)
//  )(10)

// console.log(a);
// let a = 20;

// function hello(){
//   console.log("hello")
// }
//   hello();

// 6.  call back function

// function hello(a) {
//          a();
//   console.log("kullu");
// }

// function a() {
//   console.log("hello how are you");
// }

// hello(a);
// hello(()=>console.log("how are you"))
