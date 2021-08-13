import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ViewTutorsComponent } from './view-tutors/view-tutors.component';
import { SentRecievedMessagesComponent } from './sent-recieved-messages/sent-recieved-messages.component';
import { CreateMessageComponent } from './view-tutors/create-message/create-message.component';
import { NbLayoutModule, NbSidebarModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentHomeComponent } from './student-home/student-home.component';
import {MatMenuModule} from '@angular/material/menu';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    StudentComponent,
    ViewTutorsComponent,
    SentRecievedMessagesComponent,
    CreateMessageComponent,
    StudentHomeComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbTabsetModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    ChartsModule,
    Ng2SearchPipeModule,
    MatMenuModule
  ]
})
export class StudentModule { }
