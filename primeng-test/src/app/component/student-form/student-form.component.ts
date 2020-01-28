import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';
import { FormControl } from '@angular/forms';
import { TypeScriptEmitter } from '@angular/compiler';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student:Student[]=[];

//  gender:string;

  types = [
  { lable: 'Male', value: 'Male' },
  { lable: 'Female', value: 'Female' },
  { lable: 'Other', value: 'Other' }
];
  constructor(private studentService:StudentService) { 
     
  }

  // Student s=new Student(<string>id.value,<string>name.value,<string>address.value,<string>phone.value,"12",'Male');
  // console.log(s);

  cols:any[];
  ngOnInit() {
    this.getAll();
  
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'address', header: 'Address' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' },

    ];
  }

  name = new FormControl();
  email = new FormControl();
  phone = new FormControl();
  address = new FormControl();
  age = new FormControl();
  gender = new FormControl();
  id = new FormControl();



  getAll(){
    this.studentService.getAll().subscribe(data=>{
     var val=data;
     for(let i=0;i<val.length;i++){
       this.student.push(val[i]);
     }

    //  for(let i=0;i<this.student.length;i++){
    //    console.log(this.student[i]);
    //  }
     
    })
  
    
  }
   flag: Boolean = true;

  submitButtonAction(){
    // console.log("hello");
    var s=new Student(this.id.value,this.name.value,
      this.address.value,this.email.value,this.phone.value,this.age.value,this.gender.value.value);


    //  this.studentService.getByID(this.id.value).subscribe(data=>{
       
    //    if (data.id) console.log(data);
    //  })

    //  if(this.flag)
      this.studentService.create(s).subscribe(data=>this.student.push(data));



    this.name.setValue('');
    this.email.setValue('');
    this.address.setValue('');
    this.phone.setValue('');
    this.age.setValue('');
    this.gender.setValue('');
    this.id.setValue('');
  }


  // ----------------------test-----------------------
  
  onselectEditButton(rowData){
    this.name.setValue(rowData.name);
    this.email.setValue(rowData.email);
    this.address.setValue(rowData.address);
    this.phone.setValue(rowData.phone);
    this.age.setValue(rowData.age);

    let item=this.types.filter(s=>s.value==rowData.gender.value)[0];
    this.gender.setValue(item);

    this.id.setValue(rowData.id);
  }

  onDeleteButtonAction(rowData){
    console.log(rowData);

    if (confirm("Are you sure to delete ?")) {
      this.studentService.delete(rowData.id).subscribe(data=>
        console.log(data));
      const index=this.student.indexOf(rowData,0);
      this.student.splice(index,1);
    }
  }

  

}
