import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisciplinePageComponent } from './discipline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { DisciplineTablePageComponent } from "./discipline-table/discipline-table.component";
import { AccordionPageComponent } from "../accordion/accordion.component";
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [DisciplinePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
            path: '',
            component: DisciplinePageComponent,
        }]),
    TuiAccordionModule,
    TuiSvgModule,
    TuiLetModule,
    DisciplineTablePageComponent,
    AccordionPageComponent
],
  exports: [DisciplinePageComponent],
})
export class DisciplineModule {
  
}
