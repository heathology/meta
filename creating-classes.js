/* **** CREATING CLASSES ****

By the end of this reading exercise, you should be able to explain,
with examples, the concept of extending classes using basic inheritance
to alter behaviors within child classes. 

Remember, inheritance in JavaScript is based around the prototype object.

All objects that are built from the prototype share the same functionality. 

When you need to code more complex OOP relationships, you can use the class keyword
and its easy-to-understand and easy-to-reason-about syntax. 

Imagine that  you need to code a Train class. 

Once you've coded this class, you'll be able to use the keyword NEW 
to instantiate objects of the Train class. 

Define the Train class. Use the class keyword, specify the name of the class, 
and capitalize the first letter. In between the curly braces, 
start the constructor code. The constructor will be used to build properties
on the future object instance of the Train class. Notice it's a special function, 
but it has no function keyword. For now, let's say that there are only two properties 
that each object instance of the Train class should have at the time 
it gets instantiated: color and lightsOn.
*/

class Train { 
    constructor(color, lightsOn) {
        this.color = color; 
        this.lightsOn = lightsOn;
    }
    /* You can also add methods to classes, and these methods will then
    be shared by all future instance objects of the Train class */
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

} 

/* the code above allows me to achieve three things: 
    1. it allows me to build new instances of the Train class
    2. each object instance of the Train class that I build will have
       its own custom propeties of color and lightsOn.
    3. Use methods in the class that will be shared in all future instances
       of the Train class.

There are four methods in the Train class: toggleLights(), lightsStatus(), getSelf(), and getPrototype().

   1. The toggleLights method uses the logical not operator, !. This operator will change the value stored 
      in the lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. 
      And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will 
      become the new value of the lightsOn property on that given instance object.

   2. The lightsStatus() method on the Train class just reports the current status of the lightsOn variable 
      of a given object instance.

   3. The getSelf() method prints out the properties on the object instance it is called on.

   4. The getPrototype() console logs the prototype of the object instance of the Train class. 
   The prototype holds all the properties shared by all the object instances of the Train class. 
   To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, 
   and passing it this object - meaning, the object instance inside of which this method is invoked.
*/

var myFirstTrain = new Train('red', false); // assign new object to a variable; build new instance of train class and pass values for color and lightsOn

console.log("My first train:", myFirstTrain);

/* you can continue building new instances of the Train class. 
Even if you give them the same properties, they are still separate objects. */
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('purple', false);
var train4 = new Train('red', false);
train4.getPrototype(); // why is this blank in the console log? ??? <--------
train4.toggleLights(); // this function just toggles lights on or off
train4.lightsStatus(); // this function displays the status the lights
train4.getSelf(); // this function console logs the entire object instance for train4



