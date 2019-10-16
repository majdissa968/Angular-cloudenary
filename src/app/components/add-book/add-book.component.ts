import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
// import {
//   AngularFireStorage,
//   AngularFireStorageReference,
//   AngularFireUploadTask
// } from 'angularfire2/storage';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  
  // ref: AngularFireStorageReference;
  // task: AngularFireUploadTask;
  // uploadProgress: Observable<number>;
  // downloadURL: Observable<any>;
  // uploadState: Observable<string>;
  
  book: Book = {
    title: "",
    description: "",
    author: "",
    image: "",
    price: 0
  }

  disablePriceOnAdd: boolean = true;

  @ViewChild('bookForm', { static: false }) form: any
  constructor(
    private flashMessages: FlashMessagesService,
    private bookService: BookService,
    private router: Router,
    // private afStorage: AngularFireStorage,
    
  ) { }

  ngOnInit() {
  }

  // upload(event) {
  //   const id = Math.random().toString(36).substring(2);
  //   this.ref = this.afStorage.ref(id);
  //   this.task = this.ref.put(event.target.files[0]);
  //   this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  //   this.uploadProgress = this.task.percentageChanges();
  //   this.downloadURL =  this.task.percentageChanges();
  // }


  onSubmit({ value, valid }: { value: Book, valid: boolean }) {
    if (this.disablePriceOnAdd) {
       value.price = 0;

     }
    if (!valid) {
      //  show error
      this.flashMessages.show('Please fii out the Form correctly', {
        cssClass: 'alert-danger', timeOut: 4000
      })
    } else {
      // Add new Book
      this.bookService.newBook(value);
      // show message
      this.flashMessages.show('New Book added', {
        cssClass: 'alert-success', timeOut: 4000
      });
      // Redirect to Dashboard

      this.router.navigate(['/books'])
    }
  }

}
