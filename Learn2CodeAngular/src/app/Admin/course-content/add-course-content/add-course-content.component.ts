import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin resources/admin.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-course-content',
  templateUrl: './add-course-content.component.html',
  styleUrls: ['./add-course-content.component.scss'],
})
export class AddCourseContentComponent implements OnInit {
  data: any;
  typeChosen: any;
  typeList: any = [];
  //newContent: any = <any>{};
  popupTitle = this.service.title;
  // get the placeholder object below
  placeholder = this.service.editCont;
  oldContent: any;
  image:any;

  constructor(
    private service: AdminService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<AddCourseContentComponent>
    ) {}

  ngOnInit() {
     this.getTypeList();
   
     //this.data.SubscriptionName = this.placeholder.subscriptionName;
     //this.data.Duration = this.placeholder.duration;
  }

    getTypeList() {
    this.service.getCourseContentType().subscribe((result) => {
      this.typeList = result;
      console.log('types from api', this.typeList);
    });
  }

  public Test() {
    let data = new FormData();
    
    data.append('courseSubCategoryId', '1');
    data.append('contentTypeId', '2');
    data.append('content', this.image);
    this.service.test(data).subscribe((res) => {
      console.log(res);
    });
  }

  ApplicationImage(event) {
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
    console.log(this.image);
  }

  content() {
    this.data = new FormData();
    //data.append('courseSubCategoryId', this.service.courseContentCat.id);
    this.data.append('contentTypeId', 'hey');
   // data.append('content', event.target.files[0]);
    console.log(this.data);
    //this.service.posttfile(data).subscribe((res) => {
      //console.log(res);
    //});
  }
  // content(event) {
  //   //create
  //   if (this.service.editId==0) {
  //     let data = new FormData();
  //     data.append('courseSubCategoryId', this.service.courseContentCat.id);
  //     data.append('contentTypeId', this.typeChosen);
  //     data.append('content', event.target.files[0]);
  //     console.log('the data sent through for create',data)
  //     this.service.posttfile(data).subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
  //   else {
  //     //edit
  //     let editIdd= this.service.editId;
  //     let data = new FormData();
  //     data.append('courseSubCategoryId', this.service.courseContentCat.id);
  //     data.append('contentTypeId', this.typeChosen);
  //     data.append('id','editIdd');
  //     data.append('content', event.target.files[0]);
  //     console.log('the data sent through for edit',data)
  //     this.service.editContent(data).subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
  // }

  selectType($event) {
    console.log('this is the event', $event);
    this.typeChosen = $event; //what is selected in the dropdown is sent back in this parameter to the api
    console.log(this.typeChosen);
    this.typeChosen= this.service.typeChosenn;
  }

  // submitEdittedCourseContent(event) {
  //   if (this.service.editId > 0) {
  //     let data = new FormData();
  //     data.append('courseSubCategoryId', this.service.courseContentCat.id);
  //     data.append('contentTypeId', this.typeChosen);
  //     data.append('content', event.target.files[0]);
  //     Swal.fire({
  //       title: 'Are you sure you want to edit the course content?',
  //       icon: 'question',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.service.editContent(data).subscribe((res) => {
  //           console.log(res);
  //         });



  //       //  this.service.editContent(this.data).subscribe((result) => {
  //         //  this.data = result;
  //            this.dialogRef.close();
  //          Swal.fire('Update successful!', this.data.message, 'success');
  //        // });
  //       }
  //     });
  //   } else {
  //     Swal.fire({
  //       title: 'Are you sure you want to add course content?',
  //       icon: 'question',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.service.createSubscription(this.data).subscribe((result) => {
  //           this.data = result;
  //           this.dialogRef.close();
  //           Swal.fire('Saved!', this.data.message, 'success');
  //         });
  //       }
  //     });
  //   }
  // }
}
