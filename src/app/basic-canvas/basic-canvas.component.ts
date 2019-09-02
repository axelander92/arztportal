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
    let dataPointsMax = [];
    let y = 0;
    let y1 = 0;
    for ( var i = 0; i < 30; i++ ) {
      y = 70 + Math.floor(Math.random() * Math.floor(20));
      dataPoints.push({ y: y});
      y1 = 75;
      dataPointsMax.push({ y: y1});
    }
    this.chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: false,
      axisY: {
        suffix: "dB"
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true
      },
      data: [
      {
        type: "spline",
        dataPoints: dataPoints,
        name: "gemessene Werte",
        showInLegend: true
      },
      {
        type: "line",
        dataPoints: dataPointsMax,
        name: "Richtwert",
        showInLegend: true
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
