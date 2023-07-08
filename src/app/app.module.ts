import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MaterialComponent } from './Components/material/material.component';
import { RestaurantdashComponent } from './Components/restaurantdash/restaurantdash.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterialComponent,
    RestaurantdashComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
