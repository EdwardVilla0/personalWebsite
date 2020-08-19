import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    
  ]
  
})
export class HeaderComponent implements OnInit {
  page: number = 1;
  pdfSrc: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    let img: any = document.querySelector("#file");

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0])
    }
  }

}
