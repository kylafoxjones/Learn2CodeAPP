import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UniversityComponent } from './university/university.component';
import { AddEditUniversityComponent } from './university/add-edit-university/add-edit-university.component';
import { DegreeComponent } from './degree/degree.component';
import { AddEditDegreeComponent } from './degree/add-edit-degree/add-edit-degree.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModuleComponent } from './module/module.component';
import { AddEditModuleComponent } from './module/add-edit-module/add-edit-module.component';

@NgModule({
  declarations: [
    AdminComponent,
    UniversityComponent,
    AddEditUniversityComponent,
    DegreeComponent,
    AddEditDegreeComponent,
    ModuleComponent,
    AddEditModuleComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MatFormFieldModule],
})
export class AdminModule {}
