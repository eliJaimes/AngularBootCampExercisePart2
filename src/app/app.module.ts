/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		ComponentsModule,
		HttpClientModule,
	],
	providers: [],
})
export class AppModule {}
