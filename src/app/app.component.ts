import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samplecardexample';

  public sampleData:any[]=[];
  constructor(private testService: TestService) { }

  ngOnInit(){
    this.testService.getData().then(files => this.sampleData = files);
    console.log(this.sampleData)
  }
}
