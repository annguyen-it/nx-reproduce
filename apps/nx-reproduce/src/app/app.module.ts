import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShellModule } from '@nx-reproduce/shell';

const TAIGA_UI = [TuiRootModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShellModule,
    ...TAIGA_UI,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
