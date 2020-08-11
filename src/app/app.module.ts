import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { WheaterInfoComponent } from './wheater-info/wheater-info.component';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    WheaterInfoComponent,
    SettingsFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
