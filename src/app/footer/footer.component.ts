//import { fetch } from './../models/fetch';
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
import {FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder} from '@angular/forms';



interface FeaturedPhotosUrls {
  url1?: String;
  url2?: String;
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',
              //'./classy-nav.min.css',
              './animate.css',
              './core-style.css',
              //'./core-style.css.map',
           './nice-select.css',]
})

export class FooterComponent implements OnInit {
email:string;
  constructor() {



  }










  fbPostData(email){
    firebase.database().ref('/').push({email:email});
  }


  ngOnInit() {

  }

}










