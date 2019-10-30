import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [DataComponent, TemplateComponent],
  exports: [
    TemplateComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class ComponentsModule { }
