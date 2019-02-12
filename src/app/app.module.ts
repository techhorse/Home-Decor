import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuComponent } from './header/menu/menu.component';
import { SidebarComponent } from './header/menu/sidebar/sidebar.component';
import { SidebarDirective } from './header/menu/sidebar/sidebar.directive';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardTitle,
        MatCardSubtitle,
        MatCardImage,
        MatCardHeader,
        MatCardContent,
        MatTab,
        MatTabGroup,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,

      } from '@angular/material';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './body/slide/slide.component';
import { AboutComponent } from './about/about.component';
import { RouterModule,CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreModule } from '@angular/fire/firestore';
//import { FetchingService } from 'src/app/fetching.service';
import { AuthService } from '././auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UploadComponent } from './upload/upload.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AuthGuard } from './AuthGuard';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as firebase from 'firebase/';
const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'product', component: ProductComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'Login', component: LoginComponent  },
  { path: 'upload', component: UploadComponent,canActivate:[AuthGuard] },
  { path: 'review', component: ReviewComponent  },
];
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    BrandComponent,
    MenuComponent,
    SidebarComponent,
    SidebarDirective,
    ProductComponent,
    SlideComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    UploadComponent,
    DetailsComponent,
    ContactComponent,
    ReviewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    OwlModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    NgxSpinnerModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,

  ],
  providers: [AngularFireStorage,AuthService,AngularFirestore,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
