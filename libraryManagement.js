//Create a Base Class

class LibraryItem{
    constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    //This method is used to display the checkout details of books/dvds/magazines based on the title and id. It is reused for the corresponding child class's object.
    checkOut(itemTitle, itemId) {
        this.isAvailable = false;
        return (`Item Checkout details:\n\tTitle - ${itemTitle}\n\tId - ${itemId}`);
    }

//This method is used to display the returned details of books/dvds/magazines based on the title and id. It is reused for the corresponding child class's object.
    returnItem(returnItemTitle, returnItemId){
        this.isAvailable = true;
        return (`Details of Item Returned:\n\tTitle - ${returnItemTitle}\n\tId - ${returnItemId}`);

    }

}

//Create child classes Book, and extends the base class LibraryItem

class Book extends LibraryItem{
    constructor(title, id, isAvailable, author, genre){
        super(title, id, isAvailable); //Super() to reuse the baseclass LibraryItem's properties(title, id, isAvailable)
        this.author = author;
        this.genre = genre;
    }

    //This method is used to check its availability based on the book name and isAvailable parameter and it is unique to the class Book.
    checkBookAvailability(bookName) {
         if (this.isAvailable){
           return `${this.title} is available`;
         }
        else {
            return `${this.title} is not available`;
        }
    }
}

//Create child classes DVD, and extends the base class LibraryItem
class DVD extends LibraryItem{
    constructor(title, id, isAvailable, director, duration, copy =1){ //used default value for the parameter copy
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
        this.copy = copy;
    } 

    //This methods is used to display the number of copies for the DVD  and it is unique to the class DVD.
    checkDvdCopies(dvdName){
        return `The ${dvdName} has ${this.copy} copies`;
    }    
}

//Create child classes Magazine, and extends the base class LibraryItem
class Magazine extends LibraryItem{
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
        this.rating = 5; //used rating as optional parameter.
    }

    //This method is used to display the rating of the magazine and it is unique to the class Magazine.
    checkRating(magazineTitle){
        return `The ${magazineTitle} is ${this.rating}/10 rating.`;

    }
}

//create objects for each child class
let books = new Book("Pette the  Cat", 101, true, "Dr.Seuss", "Fiction");
let dvds1 = new DVD("DVD read-along: Monsters, Inc", 102, true, "Disney", 60);
let dvds2 = new DVD("Harry Potter", 103, true, "David Yates", 180, 5); //pass the value 5 for no.of copies which changes the default value 1.
let magazines = new Magazine("Readers Digest", 104, false, "Worlkd of Good", "Henry Hurt");

//Book class object "books" calling the baseclass method checkOut and returnItem and child class unique method checkBookAvailability.
console.log(books);
console.log(`${books.checkOut("Pette the  Cat", 101)}\n\tAuthor - ${books.author}\n\tGenre - ${books.genre}`);
console.log(books.checkBookAvailability("Pette the  Cat", 101));
console.log(`${books.returnItem("Pette the  Cat")}\n\tAuthor - ${books.author}\n\tGenre - ${books.genre}`);
console.log(`${books.checkBookAvailability("Pette the  Cat")}`);

//DVD class object "dvds1 & dvds2" calling the baseclass method checkOut and returnItem and child class unique method checkDvdCopies.
console.log(dvds1);
console.log(dvds2);
console.log(`${dvds2.checkOut("Harry Potter", 103)}\n\tDirector - ${dvds2.director}`);
console.log(`${dvds2.returnItem("Harry Potter",103)}\n\tDirector - ${dvds2.director}`);
console.log(`${dvds2.checkDvdCopies("Harry Potter, Inc")}`); //It modify the default value for copy because value 5 is passed during instantiation of dvds2.
console.log(`${dvds1.checkDvdCopies("DVD read-along: Monsters, Inc")}`);//It displays the default value for the copy because no value is passed during instantiation of dvds1.

//Magazine class object "magazines" calling the baseclass method checkOut and returnItem and child class unique method checkRating.
console.log(magazines);
console.log(`${magazines.checkOut("Readers Digest", 104)}`);
console.log(`${magazines.returnItem("Readers Digest", 104)}`);
console.log(`${magazines.checkRating("Readers Digest")}`);

/*Output:
 Book {
  title: 'Pette the  Cat',
  id: 101,
  isAvailable: true,
  author: 'Dr.Seuss',
  genre: 'Fiction'
}
Item Checkout details:
        Title - Pette the  Cat
        Id - 101
        Author - Dr.Seuss
        Genre - Fiction
Pette the  Cat is not available
Details of Item Returned:
        Title - Pette the  Cat
        Id - undefined
        Author - Dr.Seuss
        Genre - Fiction
Pette the  Cat is available
DVD {
  title: 'DVD read-along: Monsters, Inc',
  id: 102,
  isAvailable: true,
  director: 'Disney',
  duration: 60,
  copy: 1
}
DVD {
  title: 'Harry Potter',
  id: 103,
  isAvailable: true,
  director: 'David Yates',
  duration: 180,
  copy: 5
}
Item Checkout details:
        Title - Harry Potter
        Id - 103
        Director - David Yates
Details of Item Returned:
        Title - Harry Potter
        Id - 103
        Director - David Yates
The Harry Potter, Inc has 5 copies
The DVD read-along: Monsters, Inc has 1 copies
Magazine {
  title: 'Readers Digest',
  id: 104,
  isAvailable: false,
  issueNumber: 'Worlkd of Good',
  publisher: 'Henry Hurt',
  rating: 5
}
Item Checkout details:
        Title - Readers Digest
        Id - 104
Details of Item Returned:
        Title - Readers Digest
        Id - 104
The Readers Digest is 5/10 rating. */