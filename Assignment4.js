//Practice with JavaScript OOP Concepts

/*//1
var Cat = {};
function Dog() {};*/

/*// 2
var Animal = Animal || {};
function Cat() {}
function Dog() {}
Cat.prototype = new Animal();
Dog.prototype = new Animal();*/

/*// 3
var myDog = new Dog();*/

/*// 4
var Animal = function () {
    window.console.log('The Animal has been created.');
};
var Dog = new Animal();*/

/*// 5
var Animal = function (msg) {
    window.console.log(msg);
};
var Dog = new Animal('Hello world');*/

/*// 6
var Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
var Dog = new Animal('dog', 'pekineese', 'brown', 20, 35);*/

/*// 7
var Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};

var Dog = new Animal('dog', 'pekineese', 'brown', 20, 35);

for (var propt in Dog) {
    window.console.log(Dog[propt]);
}*/

// 8

/*var Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
Animal.prototype.speak = function () {
    if (this.type === 'dog') {
        window.console.log("The " + this.color + " dog is barking!");
    } else if (this.type === 'cat') {
        window.console.log("The " + this.color + " cat is meowing!");
    } else {
        window.console.log('Something is wrong!');
    }
};

var Dog = new Animal('dog', 'pekineese', 'brown', 20, 35);
Dog.speak();*/

/*// 9

var Animal = function (type, breed, color, height, length) {
    var Type = type;
    var Breed = breed;
    var Color = color;
    var Height = height;
    var Length = length;
    var checkType = function () {
        if (Animal.Type === 'dog') {
            return 'dog';
        } else if (Animal.Type === 'cat') {
            return 'cat';
        } else {
            return 'You messed up!';
        }
    };
    Animal.prototype.speak = function () {
        window.console.log('The ' + Animal.checkType + ' has made a noise!');
        
    };
};
var Dog = new Animal('dog', 'pekineese', 'brown', 20, 35);

Dog.speak();*/


/*// 10
String.prototype.findWords = function (word) {
    window.alert(this.match(/word/g));
} 
var pepe = 'bla bla bla word';
pepe.findWords('bla');*/

// The Recipe Card 

/*var Recipe = {
    title: 'Chocolate Chip Cookies',
    servings: 24,
    ingridients: ['1 cup butter', '1 cup white shugar', '1 cup brown shugar', '2 eggs', '1 teaspoon baking soda', '2 teaspoons hot water', 'half teaspoon salt', '2 cups chocolate chip'],
    showMe: function () {window.console.log(Recipe.title + '\nServes: ' + Recipe.servings + '\nIngridients:\n');
                        for (var i in Recipe.ingridients) {
                            window.console.log('- ' + Recipe.ingridients[i]);
                        }
                        }
};
Recipe.showMe();*/


// The Reading List
/*var books = [];
var Book = function (title, author, alreadyRead) {
	this.title = title;
	this.author = author;
	this.alreadyRead = new Boolean(alreadyRead);
};
books[0] = new Book('The Hobbit', 'J.R.R. Tolkien', true);
books[1] = new Book('Harry Potter and The Philosopher\'s Stone', 'J. K. Rowling', true);
books[2] = new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', true);
books[3] = new Book('Harry Potter and the Methods of Rationality', 'Eliezer Yudkowsky', false);
books[4] = new Book('I, Robot', 'Isaac Asimov', false);
//for (i in books) {
//    window.console.log(books[i].title + ' by ' + books[i].author);
//}
for (i in books) {
    if (books[i].alreadyRead == true) {
    window.console.log('You already read "' + books[i].title + '" by ' + books[i].author);
    } else if (books[i].alreadyRead == false) {
    window.console.log('You still need to read "' + books[i].title + '" by ' + books[i].author);
    } else {window.console.log('Messed')}
}*/