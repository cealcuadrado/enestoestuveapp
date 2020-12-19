import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/main-layout/header/header.component';
import { FooterComponent } from './layouts/main-layout/footer/footer.component';
import { DummyContentComponent } from './layouts/main-layout/dummy-content/dummy-content.component';
import { MainComponent } from './layouts/main-layout/main/main.component';
import { FooterInfoComponent } from './shared/footer-info/footer-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpIconComponent } from './layouts/main-layout/up-icon/up-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DummyContentComponent,
    MainComponent,
    FooterInfoComponent,
    UpIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
