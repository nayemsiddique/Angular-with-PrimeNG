import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api"; 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { label: "Deshboard", icon: "pi pi-home" },
      { label: "All Time", icon: "pi pi-fw pi-calendar" },
      { label: "My Timesheet", icon: "pi pi-clock" },
      { label: "Add Project", icon: "pi pi-plus" },
      { label: "Profile", icon: "pi pi-user" },
      { label: "Setting", icon: "pi pi-align-justify" }
    ];
  }

}
