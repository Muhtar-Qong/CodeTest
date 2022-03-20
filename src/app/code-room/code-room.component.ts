import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-code-room',
  templateUrl: './code-room.component.html',
  styleUrls: ['./code-room.component.scss']
})
export class CodeRoomComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  executeCode(){
    console.log('hello Nijat')


    
  }

}
