//Create a Base Class

class LibraryItem{
    constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    //This method is used to display the checkout details of books/dvds/magazines based on the title and id. It is reused for the corresponding child class's object.
    checkOut(itemTitle, itemId) {
        if (!this.isAvailable){
            return(`The ${itemTitle} is not avaialble`);
        }
        else{
           this.isAvailable = false;
        return (`Item Checkout details:\n\tTitle - ${itemTitle}\n\tId - ${itemId}`);
        }
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
        this.isCopy = true;
        this.copy = copy;
    } 

//This method is used to display the checkout DVD item and the number of copies and illustrates the concept of polymorphism(same method name in base class).
   checkOut(dvdName){
//It will decrease the number of copies if the DVD is checked out based on the isAvailable, isCopy, copy.
        if (this.isAvailable){ 

            if(this.isCopy && this.copy >= 1){
                this.copy -= 1;

                if(this.copy === 0){ // if copy equals 0, the user cannot do the checkout so isAvailable and isCopy is false.
                    this.isAvailable = false;
                    this.isCopy = false;
                }

                else { //if copy is not equal to 0 , the user can still checkout the DVD and still isAvailable and isCopy is true.
                this.isAvailable = true;
                this.isCopy =true;
                }  

                return `The DVD ${this.title} is checked out and the remaining copy/ies ${this.copy}.`;                
            }
        }

        else { // If isAvailable is false, then this message will be dispalyed.
            return `The DVD ${this.title} is not available.`;
        }
       
    }

//This is the unique method for the DVD class for display the return items and the available copies in the library.
    returnDVD() {
            this.copy  += 1; //increment the copy if the user returned the DVD
            this.isCopy =  true;
            this.isAvailable = true;
            return `The DVD ${this.title} is returned and the remaining copies ${this.copy}.`;      
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
let dvds2 = new DVD("Harry Potter", 103, true, "David Yates", 180, 2); //pass the value 5 for no.of copies which changes the default value 1.
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

console.log(`${dvds2.checkOut("Harry Potter")}`);
console.log(`${dvds2.returnDVD("Harry Potter")}`);
console.log(`${dvds2.checkOut("Harry Potter")}`);
console.log(`${dvds2.checkOut("Harry Potter")}`);
console.log(`${dvds2.checkOut("Harry Potter")}`);
console.log(dvds2);

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
  isCopy: true,
  copy: 1
}
DVD {
  title: 'Harry Potter',
  id: 103,
  isAvailable: true,
  director: 'David Yates',
  duration: 180,
  isCopy: true,
  copy: 2
}
The DVD Harry Potter is checked out and the remaining copy/ies 1.
The DVD Harry Potter is returned and the remaining copies 2.
The DVD Harry Potter is checked out and the remaining copy/ies 1.
The DVD Harry Potter is checked out and the remaining copy/ies 0.
The DVD Harry Potter is not available.
DVD {
  title: 'Harry Potter',
  id: 103,
  isAvailable: false,
  director: 'David Yates',
  duration: 180,
  isCopy: false,
  copy: 0
}
Magazine {
  title: 'Readers Digest',
  id: 104,
  isAvailable: false,
  issueNumber: 'Worlkd of Good',
  publisher: 'Henry Hurt',
  rating: 5
}
The Readers Digest is not avaialble
Details of Item Returned:
        Title - Readers Digest
        Id - 104
The Readers Digest is 5/10 rating. */