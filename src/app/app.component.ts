import { Component, OnInit } from '@angular/core';
import { ChartOneService } from './service/chart-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // isShowOrderStatus:boolean = false;

  // lineChartData = [];
  // lineChartLabels = [];

  // lineChartOptions = {
  //   responsive: true,
  // };

  // lineChartColors = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // red
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //     borderColor: 'red',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];

  // lineChartLegend = true;
  // lineChartType = 'line';

  constructor(private _chartOneService: ChartOneService) { }

  ngOnInit() {
    //this.orderStatus();
  }

  // orderStatus() {

  //   this._chartOneService.graphOne('paymentMaster/GetChartOrderStatus').subscribe(res => {
  //     //console.log(res);
  //     if (res.isSuccess) {
  //       let allData = res.data;

  //       //this.lineChartLabels = ['January', 'February', 'March'];
  //       this.lineChartLabels = allData.map(list => list.month);
  //       console.log(this.lineChartLabels)

  //       let saleColumn = allData.map(list => list.sale);
  //       console.log(saleColumn);

  //       let expenssColumn = allData.map(list => list.expenss)
  //       console.log(expenssColumn);

  //       let profitColumn = allData.map(list => list.profit);
  //       console.log(profitColumn)

  //       this.lineChartData = [
  //         { data: saleColumn, label: 'Sale' },
  //         { data: expenssColumn, label: 'Expenss' },
  //         { data: profitColumn, label: 'Profit' }
  //       ];
        
  //       this.isShowOrderStatus = true
  //     }
  //   })

    

  // }


}