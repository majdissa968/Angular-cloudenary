import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Book } from './../models/Book';


@Injectable({
  providedIn: 'root'
})


export class BookService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;


  constructor(private afs: AngularFirestore) {
    this.booksCollection = this.afs.collection('books')
  }

  getBooks(): Observable<Book[]> {
    // GET Book WITH ID
    this.books = this.booksCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Book;
          data.id = action.payload.doc.id;
          console.log(data)
          return data;
        });
      });

    return this.books
  }


  newBook(book: Book) {
    this.booksCollection.add(book);
  }

  // getBook(id: string): Observable<Book> {
  //   this.bookDoc = this.afs.doc<Book>(`books/${id}`);
  //   this.book = this.bookDoc.snapshotChanges().map(action => {
  //     if (action.payload.exists === false) {
  //       return null;
  //     } else {
  //       const data = action.payload.data() as Book;
  //       data.id = action.payload.id;
  //       return data;
  //     }
  //   });
  //   return this.book;
  // }
}