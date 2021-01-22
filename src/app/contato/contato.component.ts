import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
//import {ClipboardModule} from '@angular/cdk/clipboard';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.less']
})
export class ContatoComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


//If you want to copyText from Element
copyTextFromElement(elementID) {
  let element = document.getElementById(elementID); //select the element
  let elementText = element.textContent; //get the text content from the element
  this.copyText(elementText); //use the copyText function below
  //navigator.clipboard.writeText(elementText);
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
copyText(text) {
 //console.log(text);
//navigator.clipboard.writeText(text);
 //navigator.clipboard.readText(text);
// text.select();
//document.execCommand('copy');

//this.clipboard.writeText(text);
}


}
