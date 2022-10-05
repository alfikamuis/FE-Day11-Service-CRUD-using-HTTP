import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { PassangerComponent } from './components/passanger/passanger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { UpdateComponent } from './components/update/update.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/article/create/create.component';
import { EditComponent } from './components/article/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register.service';
import { PublishService } from './services/publish.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddEditComponent,
    PassangerComponent,
    ViewComponent,
    UpdateComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    CreateComponent,
    EditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService,ArticleService,RegisterService,PublishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
