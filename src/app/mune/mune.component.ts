import { Component } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-mune',
  templateUrl: './mune.component.html',
  styleUrls: ['./mune.component.css']
})
export class MuneComponent {
  public collection: any[] | undefined;
  constructor(private commonService: CommonService) { }
  ngOnInit(): void {
    this.fetchRestoList();
  }

  fetchRestoList(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result as any[]; ;
      
    });
  }
}
