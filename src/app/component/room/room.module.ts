import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTableModule } from './room-table/room-table.module';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { RoomImgCellComponent } from './room-img-cell/room-img-cell.component';

@NgModule({
  declarations: [
    // DialogFormComponent
    // RoomImgCellComponent
  ],
  imports: [CommonModule, RoomTableModule],
})
export class RoomModule {}
