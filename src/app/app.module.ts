import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NguCarouselModule } from '@ngu/carousel';





import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDialog } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServiceDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
		HttpModule,
		MatFormFieldModule,
		MatInputModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		MatTooltipModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ServiceDialog]
})
export class AppModule { }
