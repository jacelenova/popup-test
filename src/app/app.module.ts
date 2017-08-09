import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: ':logo/test', component: TestComponent },
            { path: '', redirectTo: '/axsess/test', pathMatch: 'full' },
            { path: '**', redirectTo: '/axsess/test' }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
