import { Component, OnInit } from '@angular/core';
import { ChartOneService } from '../service/chart-one.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isShowOrderStatus:boolean = false;

  lineChartData = [];
  lineChartLabels = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private _chartOneService: ChartOneService) { }

  ngOnInit() {
    this.orderStatus();
  }

  orderStatus() {

    let objLineChartData = {}
    let arr = [];
    //console.log(arr.length)

    this._chartOneService.graphOne('/paymentMaster/GetChartOrderStatusnew').subscribe(res => {
      //console.log(res);
      if (res.isSuccess) {
        let allData = res.data;

        //this.lineChartLabels = ['January', 'February', 'March'];
        this.lineChartLabels = allData.map(list => list.date).filter((currentValue, currentIndex, array)=>array.indexOf(currentValue)===currentIndex);
        //console.log(this.lineChartLabels)

        let orderStatusColumn = allData.map(list => list.orderStatus).filter((currentValue, currentIndex, array)=>array.indexOf(currentValue)===currentIndex);
        //console.log(orderStatusColumn);

        //debugger
        for(let status of orderStatusColumn){
          console.log(status)
          arr = [];

          //debugger
          for(let date of this.lineChartLabels){
            console.log(date)
            //debugger

            for(let all in allData){
              //console.log(all)
              //debugger
              if(status == allData[all].orderStatus && date == allData[all].date){
                //debugger             
                arr[arr.length]=allData[all].count;
                //console.log(arr);
                //debugger
              }
              
            }
          }

          objLineChartData = {data: arr, label: status}
          console.log(objLineChartData)
          this.lineChartData[this.lineChartData.length] = objLineChartData
        }

        // this.lineChartData = [
        //   { data: [0,2,3], label: 'Sale' },
        // ];
        
        this.isShowOrderStatus = true
      }
    })    

  }

}
