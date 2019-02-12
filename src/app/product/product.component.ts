
import { Routes } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import * as firebase from 'firebase/';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import {FormGroup, FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css',
              '../body/animate.css',
            //'./classy-nav.min.css',
              '../body/core-style.css',
              '../body/nice-select.css',
              './main.css',
              './responsive.css',

            ]
})
export class ProductComponent implements OnInit{
public img: any = null;
public fileUploads = [];
@ViewChild('image') image: ElementRef;
@ViewChild('string') details: ElementRef;
@ViewChild('string') price: ElementRef;
  constructor(public db: AngularFireDatabase) {
    //this.featuredPhotoStream = this.db.object('/photos/featured');
    //firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(url => console.log(url) );
  //});


}
ngOnInit() {
  this.getImage();
}

getFileUploads(numberOfItems): AngularFireList<any> {
  return this.db.list('/files',ref=> ref.limitToLast(numberOfItems));
}

getImage() {
  this.getFileUploads(8).snapshotChanges().pipe(map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  })).subscribe(fileUploads => {
    this.fileUploads = fileUploads;
    for(let i=0;i<this.fileUploads.length;i++) {
        this.image.nativeElement.children[i].src= this.fileUploads[i].url;
        this.details = this.fileUploads[i].detail;
        this.price = this.fileUploads[i].price;

    }
  });
  }
}
