console.log("you have javascript");


var user = {
  name: "Alex",
  age: 22,
  pets: ["Jocko", "Rose"],
  num_pets: count()
};

function count(){
  return this.user.pets.length;
}

console.log(user.num_pets);
