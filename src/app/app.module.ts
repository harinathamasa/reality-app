import { AdminService } from './admin-service.service';
import { AuthGuardService } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { ExampleStepperComponent } from './example-stepper/example-stepper.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarTempComponent } from './navbar-temp/navbar-temp.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { BudgetSheetComponent } from './budget-sheet/budget-sheet.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { UserService } from './user-service.service';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RealitycardComponent } from './realitycard/realitycard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { RealityDialogComponent } from './reality-dialog/reality-dialog.component';
import { DialogexampleComponent } from './dialogexample/dialogexample.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleStepperComponent,
    NavbarTempComponent,
    HomepageComponent,
    LoginComponent,
    BudgetSheetComponent,
    AdminLoginComponent,
    CreateEventComponent,
    CarouselComponent,
    RealitycardComponent,
    RealityDialogComponent,
    DialogexampleComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'stepper',component:ExampleStepperComponent},
      {path:'home',component:HomepageComponent},
      {path:'login',component:LoginComponent},
      {path:'budgetSheet',component:BudgetSheetComponent},
      {path:'admin',component:AdminLoginComponent},
      {path:'admin/create',component:CreateEventComponent},
      {path:'carosel',component:CarouselComponent},
      {path:'card',component:RealitycardComponent},
      {path:'box',component:RealityDialogComponent}
    ])
  ],
  providers: [AuthGuardService,UserService,AdminService],
  bootstrap: [AppComponent],
  entryComponents: [DialogexampleComponent]
})
export class AppModule { }
