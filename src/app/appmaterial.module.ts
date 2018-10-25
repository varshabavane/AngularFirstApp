import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
//datepicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
//for input box
import { MatInputModule } from '@angular/material/input';
//for form
import { MatFormFieldModule } from '@angular/material/form-field';
//for slide toggle button
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
//to show list of items
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
    imports: [
        MatCheckboxModule,
        MatMenuModule,
        MatDatepickerModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatDividerModule

    ],
    exports: [
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule]
})


export class AppMaterialModule { }
