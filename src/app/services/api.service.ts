import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //1get-all-contacts-function -used to fetch all data from given api
  getAllContacts(){
    //api-call asynchronus
    //https://my-json-server.typicode.com/GopikaGangadharan/contact-Server/contacts
   return this.http.get('http://localhost:3000/contacts')
  }
//2view-contact api-used to fetch data of a particular contact id
viewContact(contactId:any){
  //api call -asynchronous
  //https://my-json-server.typicode.com/GopikaGangadharan/contact-Server/contacts/
  return this.http.get('http://localhost:3000/contacts/'+contactId)
 }
 //3api call to get details of perticular group
 getGroup(groupId:string){
  //api call -asynchronous
  //https://my-json-server.typicode.com/GopikaGangadharan/contact-Server/groups/
 return this.http.get('http://localhost:3000/groups/'+groupId)
}
//4 api call to fetch all group data
getAllGroups(){
  //api call asynchronus
  //https://my-json-server.typicode.com/GopikaGangadharan/contact-Server/groups
  return this.http.get('http://localhost:3000/groups')
}

//5 api call to add/store contact details  to server
//https://my-json-server.typicode.com/GopikaGangadharan/contact-Server/contacts
addContact(contact:any){
  return this.http.post('http://localhost:3000/contacts',contact)
}

//6 api cal to delete perticular contact from server
removeContact(id:any){
  return this.http.delete('http://localhost:3000/contacts/'+id)
}
//7api call to update and exisiting  contact from server
updateContact(id:any,contact:any){
return this.http.put('http://localhost:3000/contacts/'+id,contact)
}
 }

