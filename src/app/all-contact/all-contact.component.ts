import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { MyContact } from 'src/models/MyContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent  implements OnInit {
  allContact:MyContact[]=[]
  searchKey:string=''
 constructor(private api:ApiService){

 }
 ngOnInit(): void {

this.getAllcontact()

 }
   getAllcontact(){
//asynchronus 
this.api.getAllContacts()
.subscribe((result:any)=>{
 console.log(result);
 this.allContact = result

   
  })
}

 //delete contact
 deleteContact(contactId:any){
this.api.removeContact(contactId)
.subscribe((result:any)=>{
  console.log(result);
  this.getAllcontact()
})
 }
}
