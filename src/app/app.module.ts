import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { CustomTwowayDatabindingComponent } from './custom-twoway-databinding/custom-twoway-databinding.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    TwowayDatabindingComponent,
    CustomTwowayDatabindingComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
