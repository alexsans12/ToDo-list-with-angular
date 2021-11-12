import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {ListComponent} from './components/list/list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		ListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
