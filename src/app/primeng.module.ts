import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    RippleModule,
    InputMaskModule,
    FileUploadModule,
    ToastModule,
    ProgressSpinnerModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    CardModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    RippleModule,
    InputMaskModule,
    FileUploadModule,
    ToastModule,
    ProgressSpinnerModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    CardModule
  ],
})

export class PrimengModule {}
