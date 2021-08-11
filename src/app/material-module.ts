import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        MatSelectModule,
        MatButtonModule
    ]
  })

  export class MaterialModule {}