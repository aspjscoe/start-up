import { Component } from '@angular/core';

@Component({
  selector: 'menus-app',
  templateUrl: './menus.component.html',
   styleUrls: ['./menus.component.css']
 
  })
export class MenusComponent {
  
   public Items = [
                {
                    text:"ORGANIC STORE" ,
                  color:"green"
                }  ,
                  {
                    text:"BEAUTY STORE" ,
                  color:"pink"
                }  ,
                  {
                   text:"GOURMET STORE" ,
                  color:"yellow"
                },
                {
                   text:"CHOCOLATE STORE" ,
                  color:"brown"
                },
                {
                   text:"CHEESE $ COLDCUTS" ,
                  color:"aqua"
                },
                {
                   text:"DEALS OF THE WEEK STORE" ,
                  color:"blue"
                }
   ]
}