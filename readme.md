## Generating Swiggy App

## Requirements of the Assignment
 --  NAVBAR
       -- Logo
       -- Nav Iteams
 --  BODY
       -- Search
       -- RestaurantCards Component
       -- Cards 
 -- Footer
      -- Copyrights
      -- Links
      -- Aboutus



## INTERVIEW QUESTIONS

# what is functional Component?
a functional component is normal javascript function which return some piece of JSX is called function component

# why we pass unique value in map when we render any components
  when we use map in rending the component then we need to pass unique key which is so important and dont need to pass index because this is not good practice if we have no unique id then we can pass index

# what is Props in React?
 Props is nothing but it is an object for passing data inside component
 const data ={name:"aman"}
 <ContantComponent {data}/>


# What is Imports/Exports in React and How many types?
 
 there is two type ot import or exports

 1). default import/export  ====================================================
     
     function myComponent(){

     }
     // this is default export 
     export defult myComponent

// this is default import
import myComponent from myComponents.js

 2). named import exports  --------------------------------------------------------


// this is named exports
 export function BodyComponent(){

 }

// this is named import 
 import { BodyComponent } from 'bodycomponent.js'


# React Hooked (what is react hooks?)
it is normal javascript function which provided by the react which is wrote by the facebook developer when we use npm i react then all the utility function are come into our code

there are two most important hooks which is mostly used 
1). useState()  (it provide super powerful state ) it is locally state variable

const [value, setValue] = useState("");

useState is also a function which return a array first the the value and second is the funciton for set the value

whenEver the state variable updates react triggers a reconcilation cycle (re render the component)


2). useEffect(). (it is also a funciton which take a callback function inside a argument it will execute after the component loaded)

#example
userEffect(()=>{ 
       console.log("use effect loaded")
})


# Why React is so Fast could you give explanation?
React is so fast because react is so fast for Dom manipulation



# what is Conditional Rendering?

Conditional Rendring is nothing but it is a fancy name ( a rending on the basis of condition is called conditional Rendring)

if(value ==""){
 retrun <p>Please provide the name</p>
}

# we know that useState is provide a state varibale like a javascript variable so why should we use this we can directly use let var const what is the superpower in this usestate variables

it has so much super power in react because when we use let variable in the click time we can do operation we can change the value variable is updated but react does not know the value is changed or not it has old value or new value

suppose i am giving one example we have a login button and when user click on the login button we need to change the name of the button as logout so how can we do this 

let btnName ="Login"

<button onClick={()=>{
 btnName="logout"
 console.log("btnName",btnName);
}}>{btnName}</button>

here you can see in the example we have change the value of the button but ui does not know it has changed or not so we use useState it has superpower when we use second function for setting the value it will rerender the whole component when he get any 


const [btnName, setBtnName] = useState("Login")
<button onClick={()=>{
setBtnName("Logout")
 console.log("btnName",btnName);
}}>{btnName}</button>


# what is virtual DOM

virtual dom is nothing but it is a object representation of the JSX



# we know the useEffect is a hook it has dependency array in the second parameter what is the use of this?

useEffect(()=>{

})

useEffect(()=>{

},[])

useEffect(()=>{

},[component])

we know that useEffect take one parameter is required and second one is optional

if we not pass dependency array it means 



