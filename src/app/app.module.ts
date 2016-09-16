/**
 * Created by MacKevin on 9/16/16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";

@NgModule({
	imports: [
			BrowserModule,
			FormsModule,
			HttpModule
	],
	providers: [],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}