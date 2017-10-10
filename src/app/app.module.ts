import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading'
import { MdGridListModule, 
  MdCardModule, 
  MdTableModule, 
  MdButtonModule,
  MdCheckboxModule,
  MdRadioModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdDialogModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';  
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } 
        from './components/dashboard/dashboard.component'
import { ConfigurationComponent } 
        from './components/configuration/configuration.component'

import { PersonaldetailsModule } from './components/personaldetails/personaldetails.module'       

import { ConfigurationService } 
        from './providers/configuration.service'
import { HttpModule } from '@angular/http';
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component'
import { SimpleNotificationsModule } from 'angular2-notifications'
import { NotificationComponent } from './common/notification/notification.component'
import { GlobalDataService } from './common/global-data.service'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'configure/:product_code',  component: ConfigurationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfigurationComponent,
    PersonaldetailsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdGridListModule,
    MdCardModule,
    CdkTableModule,
    MdTableModule ,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    LoadingModule,
    MdRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    ConfigurationService,GlobalDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }