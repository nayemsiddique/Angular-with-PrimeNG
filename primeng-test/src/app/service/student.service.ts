import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  baseUrl: string ='http://localhost:5000/api/v1/students/';
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  create(student) {
    return this.httpClient
      .post<Student>(this.baseUrl, JSON.stringify(student), this.httpOptions);
  }
  
  getByID(id:string):any{
  //  var url=this.baseUrl+'/'+id;
  //   var s= this.httpClient.get<Student>(this.baseUrl+'/'+id);
  //   console.log(url);
  //   if(s==null)
  //     return new Student(null,null,null,null,null,null,null);
  //   return s;
    var q=this.httpClient.get<Student>(this.baseUrl+id)  ;
    console.log(q);
        q.subscribe(data=>console.log(data));
    return q;
  }

  delete(id) {
    return this.httpClient.delete<Student>(this.baseUrl + id);
  }
}
