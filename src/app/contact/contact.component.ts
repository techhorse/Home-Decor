import { AuthService } from './../auth.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Component, OnInit,ElementRef} from '@angular/core';
import * as firebase from 'firebase/';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',
              './main.css',
              './responsive.css',


]
})
export class ContactComponent implements OnInit {
  email:string;
  name:string;
  constructor (public db: AngularFireStorage,public authService: AuthService) {}
  addUser() {
    firebase.database().ref('/sendmail').push({emailid:this.email,name:this.name},);
    window.alert("'Submitted Sucesfully");

  }


  ngOnInit() {
  }

}
