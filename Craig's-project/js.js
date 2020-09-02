const cancel = document.querySelector('.cancel')
const Btn = document.querySelector(".sign-up");
const modal = document.querySelector(".modal-overlay");
const close_modal = document.querySelector(".close");

Btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

close_modal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function (e) {
  sidebar.classList.remove("show-sidebar");
  
});


cancel.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

const register = document.querySelector('.register')

function defaultThing() {
  register.preventDefault();
}

// class Person {
//   constructor(name,age,address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }

// }

// let c = new Person('craig');

// c.walk();


// class Car {
//   constructor(make,color,speed) {
//     this.make = make;
//     this.color = color;
//     this.speed = speed;
//   }

//   movefarwards() {
//     console.log(`this car named ${this.make} is moving farwards`);
//   }

//   movebackwards() {
//     console.log(`this car named ${this.make} is moving backwards`);
//   }

//   drive() {
//     console.log(`this ${this.color} car named ${this.make} is driving at ${this.speed} km/h`);
//   }

// }

// let z = new Car('ford' ,'blue', 60);

// z.drive();