var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log("Students");
for (var i=0; i < users.Students.length; i++) {
    var count = users.Students[i].first_name.length + users.Students[i].last_name.length;
    console.log(i+1," - ", users.Students[i].first_name.toUpperCase()," ",
                users.Students[i].first_name.toUpperCase()," - ", count );
}
console.log("Instructor");
for (var i=0; i < users.Instructors.length; i++) {
    var count = users.Instructors[i].first_name.length + users.Instructors[i].last_name.length;
    console.log(i+1," - ", users.Instructors[i].first_name.toUpperCase()," ",
                users.Instructors[i].first_name.toUpperCase()," - ", count );
}
