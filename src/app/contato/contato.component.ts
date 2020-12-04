import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.less']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    /* To copy Text from Textbox */  
copyInputMessage(inputElement) {  

  inputElement.select();  

  document.execCommand('copy');  
}  


//If you want to copyText from Element
copyTextFromElement(elementID) {
  let element = document.getElementById(elementID); //select the element
  let elementText = element.textContent; //get the text content from the element
  this.copyText(elementText); //use the copyText function below
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
copyText(text) {
  navigator.clipboard.writeText(text);
}

}
