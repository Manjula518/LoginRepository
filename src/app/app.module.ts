import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [BrowserModule,HttpClientModule,RouterModule.forRoot([
        {
        path:'',
        component:LoginComponent
        },
        {
            path:'home',
            component: HomeComponent
        },
        {
            path:'login',
            component: LoginComponent
        }
    ])],
    exports: [],
    declarations: [AppComponent, LoginComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
