import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReportingService } from '../../Report resources/reporting.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-details-report',
  templateUrl: './tutor-details-report.component.html',
  styleUrls: ['./tutor-details-report.component.scss']
})
export class TutorDetailsReportComponent implements OnInit {

tutorList: any = [];

  constructor(
    private reportService: ReportingService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.getTutorDetails()
  }
  x(){
    Swal.fire(
      '',
      'Successfully downloaded report',
      'success'
    )
  }

  getTutorDetails() {
    this.reportService.getTutorDetails().subscribe((result) => {
      this.tutorList = result; 
      console.log(this.tutorList);
    });
  }

  public DownloadPDF():void {
    let data = document.getElementById('TutorDetailsData');
      
    html2canvas(data).then(canvas => {
        
        let fileWidth = 240;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('TutorDetailsReport.pdf');
    });     
  }

  public RedirectReportHome(){
    this.router.navigateByUrl('/report-home');
  }
}