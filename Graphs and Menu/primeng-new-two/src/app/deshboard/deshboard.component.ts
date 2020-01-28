import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-deshboard",
  templateUrl: "./deshboard.component.html",
  styleUrls: ["./deshboard.component.css"]
})
export class DeshboardComponent implements OnInit {
  dataforPie = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [4, 6, 9],
        backgroundColor: ["#fca503", "#03fc2c", "#fc3003"]
      }
    ]
  };

  dataforBar = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Dataset one",
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        data: [7, 5, 6, 10],
        fill: false
      },
      {
        label: "Dataset two",
        backgroundColor: "#9CCC65",
        borderColor: "#7CB342",
        data: [10, 12, 17, 20],
        fill: false
      }
    ]
  };

  dataforMixed = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Dataset one",
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        data: [7, 5, 6, 10],
        type:'bar'
      },
      {
        label: "Dataset two",
        backgroundColor: "#9CCC65",
        borderColor: "#7CB342",
        data: [10, 12, 17, 20],
        type:"line"
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
