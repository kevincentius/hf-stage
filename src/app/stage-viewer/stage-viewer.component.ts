
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XmlService } from '../xml.service';

@Component({
  selector: 'app-stage-viewer',
  templateUrl: './stage-viewer.component.html',
  styleUrls: ['./stage-viewer.component.css']
})
export class StageViewerComponent implements OnInit {

  Object = Object;
  console = console;

  data;
  xml;
  selected;

  @ViewChild('xmlInp') xmlInp;

  constructor(
    private http: HttpClient,
    private xmlService: XmlService
  ) {
    this.http.get('assets/default.xml', {responseType: 'text'}).subscribe((xml) => {
      const json = this.xmlService.parse(xml);
      console.log(json);
      this.data = json;
      this.updateXml();
      // const rxml = this.xmlService.dumps(json);
    });
  }

  ngOnInit() {
  }

  updateXml() {
    this.xml = this.xmlService.dumps(this.data);
    this.xmlInp.nativeElement.select();
  }

  handleUpdateData(data) {
    this.data = data;
  }

  showObject(e) {
    console.log('show object', e);
    this.selected = e;
  }

}
