import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../admin resources/admin.service';

@Component({
  selector: 'app-add-edit-session-content-category',
  templateUrl: './add-edit-session-content-category.component.html',
  styleUrls: ['./add-edit-session-content-category.component.scss']
})
export class AddEditSessionContentCategoryComponent implements OnInit {
  sessionContentCategory: any;
  //instance of empty object
  newSessonContentCategory: any = <any>{};
  data: any = {};
  popupTitle = this.service.title;
  placeholder = this.service.editSessionContentCat;
  oldSessionContentCategory: any;
  placeHolderOrNo = this.service.edit;

  constructor(  public dialog: MatDialog,
    private dialogRef: MatDialogRef<AddEditSessionContentCategoryComponent>,
    private service: AdminService) { }

  ngOnInit(): void {
    this.data.SessionContentCategoryName = this.placeholder.sessionContentCategoryName;
  }
  submitEdittedSessionContentCategory() {
    if (this.service.editId > 0) {
      console.log(this.service.editSessionContentCat);
      Swal.fire({
        title: 'Are you sure you want to edit the session content category?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.editSessionContentCategory(this.data).subscribe((result) => {
            console.log(this.data);
            this.data = result;
            this.dialogRef.close();
            Swal.fire('Update successful!', this.data.message, 'success');
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Are you sure you want to add a session content category?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.createSessionContentCategory(this.data).subscribe((result) => {
            console.log(this.data);
            this.data = result;
            this.dialogRef.close();
            Swal.fire('Saved!', this.data.message, 'success');
          });
        }
      });
    }
  }
  refreshCourseObj() {
    this.newSessonContentCategory = <any>{};
  }
}
