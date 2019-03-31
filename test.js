var leader = {
  name: "Василий Иванович",
  age: 35
};
//ревратите объект leader из примера ниже в JSON:


var user = {
  name: "Вася",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

var str = JSON.stringify(user, "", 4);
