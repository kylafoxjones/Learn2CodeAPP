import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tutor-details-report',
  templateUrl: './tutor-details-report.component.html',
  styleUrls: ['./tutor-details-report.component.scss']
})
export class TutorDetailsReportComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  }
  x(){
    Swal.fire(
      '',
      'Successfully downloaded report',
      'success'
    )
  }

}