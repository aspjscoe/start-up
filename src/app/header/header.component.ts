import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public Menus =[
               {
                 text:"Kitchenware",
                  small:"Fest",
                class:"first next"
               },
              {
                 text:"Feresho",
                  small:"Days"
                   
               },
                {
                 text:"Organic",
                small:"Stopless"
            
               },
                {
                 text:"Asian",
                 small:"Foods"
                  
               },
                {
                 text:"Fresho",
              small:"Signature"
               
               },
                {
                 text:"bb royal",
              small:"Honey"
               },
                {
                 text:"bb royal",
              small:"Honey"
               },
                {
                 text:"Lozol & Horpic",
              small:"Rs100% off"
               }

   ]
}


