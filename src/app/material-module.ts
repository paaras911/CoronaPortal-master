import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    exports: [
        MatTableModule,
        MatSelectModule

    ]
  })

  export class MaterialModule {}