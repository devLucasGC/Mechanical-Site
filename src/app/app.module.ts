import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ListComponentComponent } from './home/components/list-component/list-component.component';
import { FormComponentComponent } from './home/components/form-component/form-component.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TutorialComponent,
    ListComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    CommonModule,
    NgxDatatableModule
    // MatTooltipModule,
    // NgxDatatableModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatDividerModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatTabsModule,
    // MatMenuModule,
    // MatProgressBarModule,
    // NgxMaskModule,
    // NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    // MatExpansionModule,
    // MatDialogModule,
    // MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
