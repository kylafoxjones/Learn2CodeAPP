import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../Student resources/student.service';

@Component({
  selector: 'app-sent-recieved-messages',
  templateUrl: './sent-recieved-messages.component.html',
  styleUrls: ['./sent-recieved-messages.component.scss'],
})
export class SentRecievedMessagesComponent implements OnInit {
  search;
  MessagesSent: any;
  MessagesRecieved: any;
  studentID: any;
  recieverID: any;
  data: any = {};
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: StudentService
  ) {}

  ngOnInit() {
    this.getStudentId();
    this.getMessagesSent();
    this.getRecievedMessages();
  }

  getStudentId() {
    // this fux gets the id of the student that is logged in
    //it is needed so the api knows whos messages it should pull from the db
    //right now we hard coding this
    this.studentID = '02174cf0–9412–4cfe - afbf - 59f706d72cf6';
    this.recieverID = '02174cf0–9412–4cfe - afbf - 59f706d72cf6';
  }

  getMessagesSent() {
    this.service
      .getSentMessagesForStudent(this.studentID)
      .subscribe((result) => {
        this.MessagesSent = result;
        console.log(
          'these are the messages sent from the student logged in',
          this.MessagesSent
        );
      });
  }

  viewSentMessage(messageObj) {
    Swal.fire({
      title:
        'The message you sent to ' +
        messageObj.tutor.tutorName +
        ' ' +
        messageObj.tutor.tutorSurname +
        ':',
      text: messageObj.messageSent,
    });
  }

  viewReceivedMessage(messageObj) {
    Swal.fire({
      title:
        'Message from ' +
        messageObj.tutor.tutorName +
        ' ' +
        messageObj.tutor.tutorSurname +
        ': ',
      text: messageObj.messageSent,
    });
  }

  getRecievedMessages() {
    this.service
      .getRecievedMessagesForStudent(this.recieverID)
      .subscribe((result) => {
        this.MessagesRecieved = result;
        console.log(
          'these are the recieved messages for the student logged in',
          this.MessagesRecieved
        );
      });
  }

  deleteSentMessage(id) {
    console.log('the id of the message', id);
    Swal.fire({
      title: 'Are you sure you want to delete this message?',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteMessages(id).subscribe(
          (result) => {
            this.data = result;
            Swal.fire('Deleted!', this.data.message, 'success');
            this.getMessagesSent();
          },
          (error) => {
            Swal.fire('Error!', error.error, 'error');
            this.getMessagesSent();
          }
        );
      }
    });
  }
}