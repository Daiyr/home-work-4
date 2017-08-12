var myObject = [
    {'name' : 'Alex', 'age' : '22','ismarried' : 'true'},
    {'name' : 'Vova', 'age' : '25','ismarried' : 'false'},
    {'name' : 'Scott', 'age' : '30','ismarried' : 'true'},
    {'name' : 'Mark', 'age' : '35','ismarried' : 'true'}
    ];
var i = 0;
while (i <= myObject.length) {

    if (myObject[i].age == 30) {
        console.log("Yeees! Here is one person: " + myObject[i].name + " is " + myObject[i].age + " years old!");
    }
    else {
        console.log("Noo! Here is NO-one with age 30 !!!");
    } i++;
}