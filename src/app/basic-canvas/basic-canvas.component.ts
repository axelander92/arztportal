import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/vendor/canvasjs.min';

@Component({
  selector: 'app-basic-canvas',
  templateUrl: './basic-canvas.component.html',
  styleUrls: ['./basic-canvas.component.scss']
})
export class BasicCanvasComponent implements OnInit {
  chart: any;
	constructor() { }

  ngOnInit() {
		if(this.chart == undefined && document.getElementById("chartContainer")) {
			this.renderChart();
		}
	}

	ngDoCheck(){
		/* Check https://angular.io/guide/lifecycle-hooks#docheck for informaton about ngDoCheck */
		if(this.chart == undefined && document.getElementById("chartContainer")) {
			this.renderChart();
		}
	}

	renderChart() {
    let dataPoints = [];
    let y = 0;
    for ( var i = 0; i < 100; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y});
    }
    this.chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: false,
      data: [
      {
        type: "line",
        dataPoints: dataPoints
      }]
    });

		this.chart.render();
	}

	ngOnDestroy() {
		if(this.chart) {
			this.chart.destroy();
			this.chart = null;
		}
	}

}
