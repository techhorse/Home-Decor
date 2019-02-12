import { Routes } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HttpClient } from 'selenium-webdriver/http';
import * as firebase from 'firebase/';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
//import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {FormGroup, FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  title = 'my-app';
  public img: string;
   file: File;
   details:string;
   price:string;
  @Output() url1 = new EventEmitter();
  //public featuredPhotoStream = FirebaseListObservable <FeaturedPhotosUrls>;
  constructor(public db: AngularFireStorage,public authService: AuthService) {
    /*this.featuredPhotoStream = this.db.object('/photos/featured');
    firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(url => console.log(url) );
    firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(downloadURL => {
    const imageUrl = downloadURL;
    console.log('URL:' + imageUrl);
    this.img = imageUrl;
});*/
  }









  featuredPhotoSelected(event: any) {
      this.file = event.target.files[0];


  }

onUpload(){
  if(this.file == null)
    window.alert("No file Selected");
  console.log("hello");
  console.log(this.file);
    const path = `files/${this.file.name}`;
  const metadata = {'contentType': this.file.type};
  const storageRef: firebase.storage.Reference =  firebase.storage().ref(path);
  let uploadTask = storageRef.put(this.file,metadata).then(x=>{
    firebase.storage().ref(path).getDownloadURL().then(url => {
    firebase.database().ref('files').push({url:url,detail:this.details,price:this.price},);
    window.alert("File Uploaded Successfully!!");

    } );
  });
}



  ngOnInit() {

  }

  }
