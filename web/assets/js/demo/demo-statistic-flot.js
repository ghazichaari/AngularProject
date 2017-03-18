///*** -----------------------------------------------------------------------------------------------
//
//	ADMIN TEMPLATE | Boo Admin Template
//	--------------------------------
//        --------
//
//	JS - Demo Chart
//	
//	-------------------------------------------------------------------------------------------------------------------------------- ***/
//$(document).ready(function () {
//    
//     demo_statistic_chart.chartBar_D();
//    
//        //demo_statistic_chart.chartLines_A();
////        demo_statistic_chart.chartLines_B();
//       // demo_statistic_chart.chartLines_C();
//        //demo_statistic_chart.chartBar_A();
//        
//        demo_statistic_chart.chartBar_B($('#statChartFlotBarB'));
//          
//          
//        //demo_statistic_chart.chartBar_C();
//       
////        demo_statistic_chart.chartBarAutoUpdate();
////		demo_statistic_chart.chartPie();
////		demo_statistic_chart.chartPieFull();
//
//	      demo_statistic_chart.chartDonut($('#statChartFlotDonut'));
//              demo_statistic_chart.chartDonut($('#statChartFlotDonut1')); 
//              demo_statistic_chart.chartDonut($('#statChartFlotDonut2'));
//              demo_statistic_chart.chartDonut($('#statChartFlotDonut3'));
//                
//               
//                
//              demo_statistic_chart.chartBar_BB($('#statChartFlotBarBB'));
//              demo_statistic_chart.chartBar_BB($('#statChartFlotBarBC'));
//              demo_statistic_chart.chartBar_BB($('#statChartFlotBarBD'));
//              demo_statistic_chart.chartBar_BB($('#statChartFlotBarBE'));
//                 
//});
//
////generate random number for charts
//
//randNum = function () {
//        //return Math.floor(Math.random()*101);
//        return(Math.floor(Math.random() * (1 + 40 - 20))) + 20;
//}
//
//var coloursChart = ["#edc240", "#61ba61", "#1083c7", "#db6464", "#ff9933", "#009999"]
//
//// CHARTS SETTINGS
//// ------------------------------------------------------------------------------------------------ * -->
//demo_statistic_chart = {
//        // DEMO CHART LINES A
//        // ----------------------------------------- * -->
//        chartLines_A: function () {
//                var elem = $('#statChartFlotLineA');
//                var d1 = [
//                        [1, 3 + randNum()],
//                        [2, 6 + randNum()],
//                        [3, 9 + randNum()],
//                        [4, 12 + randNum()],
//                        [5, 15 + randNum()],
//                        [6, 18 + randNum()],
//                        [7, 21 + randNum()],
//                        [8, 15 + randNum()],
//                        [9, 18 + randNum()],
//                        [10, 21 + randNum()],
//                        [11, 24 + randNum()],
//                        [12, 27 + randNum()],
//                        [13, 30 + randNum()],
//                        [14, 33 + randNum()],
//                        [15, 24 + randNum()],
//                        [16, 27 + randNum()],
//                        [17, 30 + randNum()],
//                        [18, 33 + randNum()],
//                        [19, 36 + randNum()],
//                        [20, 39 + randNum()],
//                        [21, 42 + randNum()],
//                        [22, 45 + randNum()],
//                        [23, 36 + randNum()],
//                        [24, 39 + randNum()],
//                        [25, 42 + randNum()],
//                        [26, 45 + randNum()],
//                        [27, 38 + randNum()],
//                        [28, 51 + randNum()],
//                        [29, 55 + randNum()],
//                        [30, 50 + randNum()]
//                ];
//                var d2 = [
//                        [1, randNum() - 5],
//                        [2, randNum() - 4],
//                        [3, randNum() - 4],
//                        [4, randNum()],
//                        [5, 4 + randNum()],
//                        [6, 4 + randNum()],
//                        [7, 5 + randNum()],
//                        [8, 5 + randNum()],
//                        [9, 6 + randNum()],
//                        [10, 5 + randNum()],
//                        [11, 5 + randNum()],
//                        [12, 2 + randNum()],
//                        [13, 3 + randNum()],
//                        [14, 4 + randNum()],
//                        [15, 4 + randNum()],
//                        [16, 4 + randNum()],
//                        [17, 5 + randNum()],
//                        [18, 5 + randNum()],
//                        [19, 2 + randNum()],
//                        [20, 2 + randNum()],
//                        [21, 3 + randNum()],
//                        [22, 3 + randNum()],
//                        [23, 3 + randNum()],
//                        [24, 2 + randNum()],
//                        [25, 7 + randNum()],
//                        [26, 4 + randNum()],
//                        [27, 5 + randNum()],
//                        [28, 2 + randNum()],
//                        [29, 2 + randNum()],
//                        [30, 3 + randNum()]
//                ];
//                var options = {
//                        legend: {
//                                position: "se"
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: true,
//                                color: "#000",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderColor: "rgba(255,255,255,0.05)",
//                                borderWidth: 0,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: true,
//                                mouseActiveRadius: 20,
//                        },
//                        series: {
//                                lines: {
//                                        show: true,
//                                        lineWidth: 2,
//                                        fill: true
//                                },
//                                points: {
//                                        show: false
//                                },
//                                grow: {
//                                        active: true,
//                                        stepMode: "maximum",
//                                        stepDirection: "up"
//                                },
//                        },
//                        yaxis: {
//                                min: 0,
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        xaxis: {
//                                ticks: 11,
//                                tickDecimals: 0,
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        colors: ["#70b5dd", "#1083c7", "#1c638d"],
//                        shadowSize: 3
//                };
//
//                $.plot(elem, [{
//                        label: "Visits",
//                        data: d1,
//                        lines: {
//                                fill: true
//                        }
//                }, {
//                        label: "Unique Visits",
//                        data: d2,
//                        lines: {
//                                fillColor: "rgba(255,255,255,0.7)"
//                        }
//                }], options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//                        }
//                });
//
//        },
//        // DEMO CHART LINES B
//        // ----------------------------------------- * -->
//        chartLines_B: function () {
//                var elem = $('#statChartFlotLineB');
//
//                var d1 = [
//                        [1, 3 + randNum()],
//                        [2, 5 + randNum()],
//                        [3, 8 + randNum()],
//                        [4, 11 + randNum()],
//                        [5, 14 + randNum()],
//                        [6, 17 + randNum()],
//                        [7, 20 + randNum()],
//                        [8, 14 + randNum()],
//                        [9, 17 + randNum()],
//                        [10, 20 + randNum()],
//                        [11, 23 + randNum()],
//                        [12, 26 + randNum()],
//                        [13, 29 + randNum()],
//                        [14, 32 + randNum()],
//                        [15, 23 + randNum()],
//                        [16, 26 + randNum()],
//                        [17, 29 + randNum()],
//                        [18, 32 + randNum()],
//                        [19, 35 + randNum()],
//                        [20, 38 + randNum()],
//                        [21, 41 + randNum()],
//                        [22, 44 + randNum()],
//                        [23, 35 + randNum()],
//                        [24, 38 + randNum()],
//                        [25, 41 + randNum()],
//                        [26, 44 + randNum()],
//                        [27, 37 + randNum()],
//                        [28, 50 + randNum()],
//                        [29, 54 + randNum()],
//                        [30, 59 + randNum()]
//                ];
//                var d2 = [
//                        [1, randNum() - 5],
//                        [2, randNum() - 4],
//                        [3, randNum() - 4],
//                        [4, randNum()],
//                        [5, 4 + randNum()],
//                        [6, 4 + randNum()],
//                        [7, 5 + randNum()],
//                        [8, 5 + randNum()],
//                        [9, 6 + randNum()],
//                        [10, 6 + randNum()],
//                        [11, 6 + randNum()],
//                        [12, 2 + randNum()],
//                        [13, 3 + randNum()],
//                        [14, 4 + randNum()],
//                        [15, 4 + randNum()],
//                        [16, 4 + randNum()],
//                        [17, 5 + randNum()],
//                        [18, 5 + randNum()],
//                        [19, 2 + randNum()],
//                        [20, 2 + randNum()],
//                        [21, 3 + randNum()],
//                        [22, 3 + randNum()],
//                        [23, 3 + randNum()],
//                        [24, 2 + randNum()],
//                        [25, 4 + randNum()],
//                        [26, 4 + randNum()],
//                        [27, 5 + randNum()],
//                        [28, 2 + randNum()],
//                        [29, 2 + randNum()],
//                        [30, 3 + randNum()]
//                ];
//
//                var options = {
//                        legend: {
//                                position: "nw",
//                                margin: [5, 5],
//                                noColumns: 1,
//                                labelBoxBorderColor: null,
//                                backgroundColor: false,
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: true,
//                                color: "#ccc",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: true,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: true,
//                                mouseActiveRadius: 20
//                        },
//                        series: {
//                                lines: {
//                                        show: true,
//                                        lineWidth: 3.5,
//                                        fill: true,
//                                        steps: false
//                                },
//                                points: {
//                                        show: true,
//                                        radius: 4,
//                                        fill: true,
//                                        fillColor: "#333",
//                                        symbol: "circle"
//                                },
//                                grow: {
//                                        active: true,
//                                        stepMode: "linear",
//                                        steps: 5,
//                                        stepDelay: true
//                                }
//                        },
//                        yaxis: {
//                                min: 0,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.1)",
//                        },
//                        xaxis: {
//                                ticks: 11,
//                                tickDecimals: 0,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.1)",
//                        },
//                        colors: ["#edc240", "#5EB95E"],
//                        shadowSize: 1
//                };
//
//                $.plot(elem, [{
//                        label: "Visits",
//                        data: d1,
//                        lines: {
//                                fillColor: "rgba(237,194,64,0.1)"
//                        }
//                }, {
//                        label: "Unique Visits",
//                        data: d2,
//                        lines: {
//                                //fillColor: "rgba(228,248,228,0.15)"
//                                fillColor: "rgba(0,0,0,0.15)"
//                        }
//                }], options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//                        }
//                });
//
//        },
//        // DEMO CHART LINES C
//        // ----------------------------------------- * -->
//        chartLines_C: function () {
//                var elem = $('#statChartFlotLineC');
//
//                var sin = [],
//                        cos = [];
//                for(var i = 0; i < 14; i += 0.5) {
//                        sin.push([i, Math.sin(i)]);
//                        cos.push([i, Math.cos(i)]);
//                }
//                var options = {
//                        legend: {
//                                position: "se"
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: true,
//                                color: "#333",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: true
//                        },
//                        series: {
//                                grow: {
//                                        active: false
//                                },
//                                lines: {
//                                        show: true,
//                                        fill: false,
//                                        lineWidth: 1.5,
//                                        steps: false
//                                },
//                                points: {
//                                        show: true,
//                                        radius: 3,
//                                        symbol: "circle",
//                                        fill: true,
//                                        fillColor: "#fff"
//                                }
//                        },
//                        yaxis: {
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        xaxis: {
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//
//                        colors: coloursChart,
//                        shadowSize: 1
//                };
//
//                var plot = $.plot(elem, [{
//                        label: "Sin",
//                        data: sin,
//                        lines: {}
//                }, {
//                        label: "Cos",
//                        data: cos,
//                        lines: {}
//                }], options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//                        }
//                });
//
//        },
//        // DEMO CHART BAR A
//        // ----------------------------------------- * -->
//        chartBar_A: function () {
//                var elem = $('#statChartFlotBarA');
//                var cons_room=220;
//                var d1 = [];
//                for(var i = 0; i <= 10; i += 1)
//                d1.push([i, cons_room]);
//
//                var d2 = [];
//                for(var i = 0; i <= 10; i += 1)
//                d2.push([i,60]);
//
//                var d3 = [];
//                for(var i = 0; i <= 10; i += 1)
//                d3.push([i,120]);
//
//                var data = new Array();
//
//                data.push({
//                        label: "Data One",
//                        data: d1,
//                        bars: {
//                                order: 1
//                        }
//                });
//                data.push({
//                        label: "Data Two",
//                        data: d2,
//                        bars: {
//                                order: 2
//                        }
//                });
//                data.push({
//                        label: "Data Three",
//                        data: d3,
//                        bars: {
//                                order: 3
//                        }
//                });
//
//                var options = {
//                        bars: {
//                                show: true,
//                                barWidth: 0.2,
//                                fill: 1
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: false,
//                                color: "#333",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: false,
//                                mouseActiveRadius: 20
//                        },
//                        series: {
//                                grow: {
//                                        active: false
//                                }
//                        },
//                        legend: {
//                                position: "ne"
//                        },
//                        yaxis: {
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        xaxis: {
//                                font: {
//                                        weight: "bold"
//                                },
//                                color: "#333",
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        colors: ["#9cd89d", "#5EB95E", "#499347", "#2c672a", "#174616"]
//                };
//
//                $.plot(elem, data, options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//                        }
//                });
//        },
//        // DEMO CHART BAR B - Horizontal
//        // ----------------------------------------- * -->
//        chartBar_B: function (elem) {
////                var elem = $('#statChartFlotBarB');
//                var nombreDeChambre = 4;//a importer avec une reuete http.
//                var NomDesChambres = ["Room1","Room2","Room3","Room4"];
//               var myData = [[1, 2010], [2, 2543], [3, 2520]];
//            var d1 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d1.push([i,220]);
//
//                var d2 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d2.push([i,50]);
//
//                var d3 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d3.push([i,120]);
//
//
//                var d4 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d4.push([i,0.2]);
//            
//                var data = new Array();
//                data.push({
//                        label: NomDesChambres[0],
//                        data: d1,
//                        bars: {
//                                order: 1
//                        }
//                });
//              
//                data.push({
//                        label: NomDesChambres[1],
//                        data: d2,
//                        bars: {
//                                order: 2
//                        }
//                });
//                data.push({
//                        label: NomDesChambres[2],
//                        data: d3,
//                        bars: {
//                                order: 3
//                        }
//                });
//                data.push({
//                        label: NomDesChambres[3],
//                        data: d4,
//                        bars: {
//                                order: 4
//                        }
//                });
//
//                var options = {
//                        legend: {
//                                position: "ne",
//                                noColumns: 0,
//                                backgroundColor: "rgba(0,0,0,0.2)",
//                                margin: [0, 0],
//                                labelFormatter: function (label, series) {
//                                        return '&nbsp;' + label + '&nbsp;';
//                                }
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: false,
//                                color: "#fff",
//                                labelMargin: 2,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 2,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: false,
//                                
//                                mouseActiveRadius: 20
//                                
//                        },
//                        series: {
//                                grow: {
//                                        active: false
//                                },
//                                bars: {
//                                        show: true,
//                                        vertical: true,
//                                        barWidth: 0.1,
//                                        fill: 1
//                                }
//                        },
//                        yaxis: {
//                           
//                                max: 220,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        xaxis: {
//                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.1)",
//                        },
//
//                        colors: coloursChart
//                };
//
//                $.plot(elem, data, options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//
//                        }
//                });
//
//        },
//        //demp chart bar bb
//       
//        // DEMO CHART BAR C
//        // ----------------------------------------- * -->
//        chartBar_C: function () {
//                var elem = $('#statChartFlotBarC');
//                
//                var d1 = [];
//                for(var i = 0; i <= 5; i += 1)
//                d1.push([i, parseInt(Math.random() * 70)]);
//
//                var d2 = [];
//                for(var i = 0; i <= 5; i += 1)
//                d2.push([i, parseInt(Math.random() * 70)]);
//
//                var d3 = [];
//                for(var i = 0; i <= 5; i += 1)
//                d3.push([i, parseInt(Math.random() * 70)]);
//
//                var data = new Array();
//
//                data.push({
//                        label: "Data One",
//                        data: d1
//                });
//                data.push({
//                        label: "Data Two",
//                        data: d2
//                });
//                data.push({
//                        label: "Data Tree",
//                        data: d3
//                });
//
//                var stack = 0,
//                        bars = true,
//                        lines = false,
//                        steps = false;
//
//                var options = {
//                        legend: {
//                                position: "ne",
//                                noColumns: 5
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: false,
//                                color: "#333",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: true,
//                                mouseActiveRadius: 20
//                               
//                        },
//                        series: {
//                                grow: {
//                                        active: false
//                                },
//                                stack: stack,
//                                lines: {
//                                        show: lines,
//                                        fill: true,
//                                        steps: steps
//                                },
//                                bars: {
//                                        show: bars,
//                                        barWidth: 0.8,
//                                        fill: 1
//                                }
//                        },
//                        yaxis: {
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.1)"
//                        },
//                        xaxis: {
//                                ticks: 11,
//                                tickDecimals: 0,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.03)"
//                        },
//                        colors: ["#9ecce7", "#70b1d7", "#4990ba", "#25649e", "#23497d"],
//                        shadowSize: 3
//                };
//
//                $.plot(elem, data, options);
//
//        },
//        // DEMO CHART BAR D
//        // ----------------------------------------- * -->
//		chartBar_D: function () {
//				var elem = $('#statChartFlotBarD');
//		var cons_chambre =220;
//				var d1 = [];
//                for(var i = 1; i <= 3; i += 1)
//                d1.push([i, cons_chambre]);
//
//                var d2 = [];
//                for(var i = 1; i <= 3; i += 1)
//                d2.push([i, 150]);
//
//                var d3 = [];
//                for(var i = 1; i <= 3; i += 1)
//                d3.push([i, 20]);
//				
//				var d4 = [];
//                for(var i = 1; i <= 3; i += 1)
//                d4.push([i, parseInt(Math.random() * 20)]);
//
//                var data = new Array();
//
//                data.push({
//                        label: "room1",
//                        data: d1
//                });
//                data.push({
//                        label: "room2",
//                        data: d2
//                });
//                data.push({
//                        label: "room3",
//                        data: d3,
//                      
//                });
//				data.push({
//                        label: "room4",
//                        data: d4
//                });
//
//                var stack = 0,
//                        bars = true,
//                        lines = true,
//                        steps = false;
//
//                var options = {
//                        legend: {
//                                position: "ne",
//                                noColumns: 1,
//								margin: [0, 0],
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: true,
//                                color: "#333",
//                                labelMargin: 2,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 2,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: true,
//                                mouseActiveRadius: 20
//                        },
//                        series: {
//								
//                                grow: {
//                                        active: false
//                                },
//								stackpercent: false,
//                                bars: {
//                                        show: true,
//                                        barWidth: 0.8,
//                                        fill: 2,
//										fillColor: {colors:[{opacity: 1},{opacity: 1}]},
//										align: "center"
//                                }
//                        },
//                        yaxis: {
//                                min: 0,
//                                max: 220,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.1)"
//                        },
//                        xaxis: {
//                       label:'Angle (radians)',
//							
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.03)"
//                        },
//                        colors: coloursChart,
//                        shadowSize: 3
//                };
//
//                $.plot(elem, data, options);	
//		
//		},
//        // DEMO CHART AUTOUPDATE
//        // ----------------------------------------- * -->
//        chartBarAutoUpdate: function () {
//                var elem = $('#statChartFlotAutoUpdate');
//                // we use an inline data source in the example, usually data would
//                // be fetched from a server
//                var data = [],
//                        totalPoints = 300;
//
//                function getRandomData() {
//                        if(data.length > 0) data = data.slice(1);
//
//                        // do a random walk
//                        while(data.length < totalPoints) {
//                                var prev = data.length > 0 ? data[data.length - 1] : 50;
//                                var y = prev + Math.random() * 10 - 5;
//                                if(y < 0) y = 0;
//                                if(y > 100) y = 100;
//                                data.push(y);
//                        }
//
//                        // zip the generated y values with the x values
//                        var res = [];
//                        for(var i = 0; i < data.length; ++i)
//                        res.push([i, data[i]])
//                        return res;
//                }
//
//                // Update interval
//                var updateInterval = 200;
//
//                // setup plot
//                var options = {
//                        series: {
//                                grow: {
//                                        active: false
//                                }, //disable auto grow
//                                shadowSize: 0, // drawing is faster without shadows
//                                lines: {
//                                        show: true,
//                                        fill: true,
//                                        lineWidth: 2,
//                                        steps: false
//                                }
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: false,
//                                color: "#333",
//                                labelMargin: 5,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 5,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: false,
//                                mouseActiveRadius: 20
//                        },
//                        colors: ["#61ba61"],
//                        yaxis: {
//                                min: 0,
//                                max: 100,
//								font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.0)"
//                        },
//                        xaxis: {
//                                show: true,
//								font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.0)"
//                        }
//                };
//                var plot = $.plot(elem, [getRandomData()], options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//                        }
//                });
//
//                function update() {
//                        plot.setData([getRandomData()]);
//                        // since the axes don't change, we don't need to call plot.setupGrid()
//                        plot.draw();
//
//                        setTimeout(update, updateInterval);
//                }
//
//                update();
//
//        },
//		// DEMO CHART PIE
//		// ----------------------------------------- * -->
//		chartPie: function () {
//				var elem = $('#statChartFlotPie');
//				
//				var data = [{
//						label: "Internet Explorer",
//						data: 18,
//				}, {
//						label: "Opera",
//						data: 10,
//				}, {
//						label: "Safari",
//						data: 12,
//				}, {
//						label: "Firefox",
//						data: 36,
//				}, {
//						label: "Chrome",
//						data: 21,
//				}, {
//						label: "Others ",
//						data: 3,
//				}];
//				
//				var options = {
//                        legend: {
//								show: false
//						},
//						series: {
//								pie: {
//										show: true,
//										innerRadius: 0,
//										radius:1,
//										stroke: {
//												color: '#fff',
//												width: 2
//										},
//										startAngle: 1,
//										label: {
//												show: true,
//												formatter: function (label, series) {
//														return '<div class="label label-inverse">' + label + '&nbsp;' + Math.round(series.percent) + '%</div>';
//												}
//										},
//										threshold: 0.1
//								},
//								grow: {
//										active: false
//								}
//						},
//						colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],						
//                };
//		
//				$.plot(elem, data, options);
//		},
//		// DEMO CHART PIE FULL
//		// ----------------------------------------- * -->
//		chartPieFull: function () {
//				var elem = $('#statChartFlotPieFull');
//				
//				var data = [{
//						label: "Firefox",
//						data: 36,
//				}, {
//						label: "Chrome",
//						data: 21,
//				}, {
//						label: "Internet Explorer",
//						data: 18,
//				}, {	
//						label: "Safari",
//						data: 12,
//				}, {	
//						label: "Opera",
//						data: 10,
//				}, {
//						label: "Others ",
//						data: 3
//				}];
//				
//				var options = {
//                        legend: {
//								show: false
//								
//						},
//						series: {
//								pie: {
//										show: true,
//										radius:300,
//										innerRadius: 0,
//										stroke: {
//												width: 2
//										},
//										combine: {
//											color: '#888',
//											threshold: 0.1
//										},
//										startAngle: 1,
//										label: {
//												show: true,
//												formatter: function (label, series) {
//														return '<div class="label label-inverse no-bg box-shadow padding5">' + label + '&nbsp;' + Math.round(series.percent) + '%</div>';
//												}
//										}
//								},
//								grow: {
//										active: false
//								}
//						},
//						colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],						
//                };
//		
//				$.plot(elem, data, options);
//		
//		},
//		// DEMO CHART PIE
//		// ----------------------------------------- * -->
//		chartDonut: function (elem) {
//				//var elem = $('#statChartFlotDonut');
//				
//				var data = [{
//						label: "room1 ",
//						data: 18,
//				}, {
//						label: "room2",
//						data: 10,
//				}, {
//						label: "room3",
//						data: 12,
//				}, {
//						label: "room4",
//						data: 36,
//				}];
//		
//				var options = {
//						legend: {
//								show: true
//						},series: {
//								pie: {
//										show: true,
//										radius: 0.8,
//										innerRadius: 0.5,
//										stroke: {
//												color: '#fff',
//												width: 8
//										},
//										startAngle: 2,
//										combine: {
//												color: '#353535',
//												threshold: 0.05
//										},
//										label: {
//												show: true,
//												formatter: function (label, series) {
//														return '<div class="label label-white box-shadow padding5 opaci85">' + label + '&nbsp;' + Math.round(series.percent) + 'dinars</div>';
//												}
//										}
//								},
//								grow: {
//										active: false
//								}
//						},
//						grid: {
//								hoverable: true,
//								clickable: true
//						},
////                                                colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],	
//						colors: coloursChart
//                };
//				
//				$.plot(elem, data, options);
//		},
////                	chartDonut1: function () {
////				var elem = $('#statChartFlotDonut1');
////				
////				var data = [{
////						label: "room1",
////						data: 18,
////				}, {
////						label: "room2",
////						data: 10,
////				}, {
////						label: "room3",
////						data: 12,
////				}, {
////						label: "room4",
////						data: 36,
////				}];
////		
////				var options = {
////						legend: {
////								show: true
////						},series: {
////								pie: {
////										show: true,
////										radius: 0.8,
////										innerRadius: 0.5,
////										stroke: {
////												color: '#fff',
////												width: 8
////										},
////										startAngle: 2,
////										combine: {
////												color: '#353535',
////												threshold: 0.05
////										},
////										label: {
////												show: true,
////												formatter: function (label, series) {
////														return '<div class="label label-white box-shadow padding5 opaci85">' + label + '&nbsp;' + Math.round(series.percent) + 'dinars</div>';
////												}
////										}
////								},
////								grow: {
////										active: false
////								}
////						},
////						grid: {
////								hoverable: true,
////								clickable: true
////						},
//////                                                colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],	
////						colors: coloursChart						
////                };
////				
////				$.plot(elem, data, options);
////		},
////                chartDonut2: function () {
////				var elem = $('#statChartFlotDonut2');
////				
////				var data = [{
////						label: "Room1",
////						data: 18,
////				}, {
////						label: "room2",
////						data: 10,
////				}, {
////						label: "room3",
////						data: 12,
////				}, {
////						label: "room4",
////						data: 36,
////				}];
////		
////				var options = {
////						legend: {
////								show: true
////						},series: {
////								pie: {
////										show: true,
////										radius: 0.8,
////										innerRadius: 0.5,
////										stroke: {
////												color: '#fff',
////												width: 8
////										},
////										startAngle: 2,
////										combine: {
////												color: '#353535',
////												threshold: 0.05
////										},
////										label: {
////												show: true,
////												formatter: function (label, series) {
////														return '<div class="label label-white box-shadow padding5 opaci85">' + label + '&nbsp;' + Math.round(series.percent) + 'dinars</div>';
////												}
////										}
////								},
////								grow: {
////										active: false
////								}
////						},
////						grid: {
////								hoverable: true,
////								clickable: true
////						},
//////						colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],	
////colors: coloursChart	
////                };
////				
////				$.plot(elem, data, options);
////		},
////                chartDonut3: function () {
////				var elem = $('#statChartFlotDonut3');
////				
////				var data = [{
////						label: "room1",
////						data: 18,
////				}, {
////						label: "romm2",
////						data: 10,
////				}, {
////						label: "room3",
////						data: 12,
////				}, {
////						label: "room4",
////						data: 36,
////				}  ];
////		
////				var options = {
////						legend: {
////								show: true
////						},series: {
////								pie: {
////										show: true,
////										radius: 0.8,
////										innerRadius: 0.5,
////										stroke: {
////												color: '#fff',
////												width: 8
////										},
////										startAngle: 2,
////										combine: {
////												color: '#353535',
////												threshold: 0.05
////										},
////										label: {
////												show: true,
////												formatter: function (label, series) {
////														return '<div class="label label-white box-shadow padding5 opaci85">' + label + '&nbsp;' + Math.round(series.percent) + 'dinars</div>';
////												}
////										}
////								},
////								grow: {
////										active: false
////								}
////						},
////						grid: {
////								hoverable: true,
////								clickable: true
////						},
////						colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],
////                                                colors: coloursChart	
////                };
//				
////				$.plot(elem, data, options);
////		},
//                   chartBar_BB: function (elem) {
//                //var elem = $('#statChartFlotBarBB');
//                var nombreDeChambre = 4;//a importer avec une reuete http.
//                var NomDesChambres = ["Room1","Room2","Room3","Room4"];
//                var myData = [[1, 2010], [2, 2543], [3, 2520]];
//            var d1 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d1.push([i,220]);
//
//                var d2 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d2.push([i,50]);
//
//                var d3 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d3.push([i,120]);
//
//
//                var d4 = [];
//                for(var i = 1; i <= 1; i += 2)
//                d4.push([i,0.2]);
//            
//                var data = new Array();
//                data.push({
//                        label: NomDesChambres[0],
//                        data: d1,
//                        bars: {
//                                order: 1
//                        }
//                });
//              
//                data.push({
//                        label: NomDesChambres[1],
//                        data: d2,
//                        bars: {
//                                order: 2
//                        }
//                });
//                data.push({
//                        label: NomDesChambres[2],
//                        data: d3,
//                        bars: {
//                                order: 3
//                        }
//                });
//                data.push({
//                        label: NomDesChambres[3],
//                        data: d4,
//                        bars: {
//                                order: 4
//                        }
//                });
//
//                var options = {
//                        legend: {
//                                position: "ne",
//                                noColumns: 0,
//                                backgroundColor: "rgba(0,0,0,0.2)",
//                                margin: [0, 0],
//                                labelFormatter: function (label, series) {
//                                        return '&nbsp;' + label + '&nbsp;';
//                                }
//                        },
//                        grid: {
//                                show: true,
//                                aboveData: false,
//                                color: "#000",
//                                labelMargin: 2,
//                                axisMargin: 0,
//                                borderWidth: 0,
//                                borderColor: null,
//                                minBorderMargin: 2,
//                                clickable: true,
//                                hoverable: true,
//                                autoHighlight: false,
//                                
//                                mouseActiveRadius: 20
//                                
//                        },
//                        series: {
//                                grow: {
//                                        active: false
//                                },
//                                bars: {
//                                        show: true,
//                                        vertical: true,
//                                        barWidth: 0.2,
//                                        fill: 1
//                                }
//                        },
//                        yaxis: {
//                           
//                                max: 220,
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(0,0,0,0.05)",
//                        },
//                        xaxis: {
//                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
//                                font: {
//                                        weight: "bold"
//                                },
//                                tickColor: "rgba(255,255,255,0.1)",
//                        },
//
//                        colors: coloursChart
//                };
//
//                $.plot(elem, data, options);
//
//                // Create a tooltip on our chart
//                elem.qtip({
//                        prerender: true,
//                        content: 'Loading...',
//                        position: {
//                                viewport: $(window),
//                                target: 'mouse',
//                                adjust: {
//                                        x: 7
//                                }
//                        },
//                        show: false,
//                        style: {
//                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
//                                tip: false
//                        }
//                });
//
//                // Bind the plot hover
//                elem.bind("plothover", function (event, coords, item) {
//                        var self = $(this),
//                                api = $(this).qtip(),
//                                previousPoint, content,
//                                round = function (x) {
//                                        return Math.round(x * 1000) / 1000;
//                                };
//                        if(!item) {
//                                api.cache.point = false;
//                                return api.hide(event);
//                        }
//                        previousPoint = api.cache.point;
//                        if(previousPoint !== item.dataIndex) {
//                                api.cache.point = item.dataIndex;
//                                content = item.series.label + ' = ' + round(item.datapoint[1]);
//                                api.set('content.text', content);
//                                api.elements.tooltip.stop(1, 1);
//                                api.show(coords);
//
//                        }
//                });
//
//        },
////         chartBar_BC: function () {
////                var elem = $('#statChartFlotBarBC');
////                var nombreDeChambre = 4;//a importer avec une reuete http.
////                var NomDesChambres = ["Room1","Room2","Room3","Room4"];
////               var myData = [[1, 2010], [2, 2543], [3, 2520]];
////            var d1 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d1.push([i,220]);
////
////                var d2 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d2.push([i,50]);
////
////                var d3 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d3.push([i,120]);
////
////
////                var d4 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d4.push([i,0.2]);
////            
////                var data = new Array();
////                data.push({
////                        label: NomDesChambres[0],
////                        data: d1,
////                        bars: {
////                                order: 1
////                        }
////                });
////              
////                data.push({
////                        label: NomDesChambres[1],
////                        data: d2,
////                        bars: {
////                                order: 2
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[2],
////                        data: d3,
////                        bars: {
////                                order: 3
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[3],
////                        data: d4,
////                        bars: {
////                                order: 4
////                        }
////                });
////
////                var options = {
////                        legend: {
////                                position: "ne",
////                                noColumns: 0,
////                                backgroundColor: "rgba(0,0,0,0.2)",
////                                margin: [0, 0],
////                                labelFormatter: function (label, series) {
////                                        return '&nbsp;' + label + '&nbsp;';
////                                }
////                        },
////                        grid: {
////                                show: true,
////                                aboveData: false,
////                                color: "#000",
////                                labelMargin: 2,
////                                axisMargin: 0,
////                                borderWidth: 0,
////                                borderColor: null,
////                                minBorderMargin: 2,
////                                clickable: true,
////                                hoverable: true,
////                                autoHighlight: false,
////                                
////                                mouseActiveRadius: 20
////                                
////                        },
////                        series: {
////                                grow: {
////                                        active: false
////                                },
////                                bars: {
////                                        show: true,
////                                        vertical: true,
////                                        barWidth: 0.2,
////                                        fill: 1
////                                }
////                        },
////                        yaxis: {
////                           
////                                max: 220,
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(0,0,0,0.05)",
////                        },
////                        xaxis: {
////                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(255,255,255,0.1)",
////                        },
////
////                        colors: coloursChart
////                };
////
////                $.plot(elem, data, options);
////
////                // Create a tooltip on our chart
////                elem.qtip({
////                        prerender: true,
////                        content: 'Loading...',
////                        position: {
////                                viewport: $(window),
////                                target: 'mouse',
////                                adjust: {
////                                        x: 7
////                                }
////                        },
////                        show: false,
////                        style: {
////                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
////                                tip: false
////                        }
////                });
////
////                // Bind the plot hover
////                elem.bind("plothover", function (event, coords, item) {
////                        var self = $(this),
////                                api = $(this).qtip(),
////                                previousPoint, content,
////                                round = function (x) {
////                                        return Math.round(x * 1000) / 1000;
////                                };
////                        if(!item) {
////                                api.cache.point = false;
////                                return api.hide(event);
////                        }
////                        previousPoint = api.cache.point;
////                        if(previousPoint !== item.dataIndex) {
////                                api.cache.point = item.dataIndex;
////                                content = item.series.label + ' = ' + round(item.datapoint[1]);
////                                api.set('content.text', content);
////                                api.elements.tooltip.stop(1, 1);
////                                api.show(coords);
////
////                        }
////                });
////
////        },
////         chartBar_BD: function () {
////                var elem = $('#statChartFlotBarBD');
////                var nombreDeChambre = 4;//a importer avec une reuete http.
////                var NomDesChambres = ["Room1","Room2","Room3","Room4"];
////               var myData = [[1, 2010], [2, 2543], [3, 2520]];
////            var d1 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d1.push([i,220]);
////
////                var d2 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d2.push([i,50]);
////
////                var d3 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d3.push([i,120]);
////
////
////                var d4 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d4.push([i,0.2]);
////            
////                var data = new Array();
////                data.push({
////                        label: NomDesChambres[0],
////                        data: d1,
////                        bars: {
////                                order: 1
////                        }
////                });
////              
////                data.push({
////                        label: NomDesChambres[1],
////                        data: d2,
////                        bars: {
////                                order: 2
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[2],
////                        data: d3,
////                        bars: {
////                                order: 3
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[3],
////                        data: d4,
////                        bars: {
////                                order: 4
////                        }
////                });
////
////                var options = {
////                        legend: {
////                                position: "ne",
////                                noColumns: 0,
////                                backgroundColor: "rgba(0,0,0,0.2)",
////                                margin: [0, 0],
////                                labelFormatter: function (label, series) {
////                                        return '&nbsp;' + label + '&nbsp;';
////                                }
////                        },
////                        grid: {
////                                show: true,
////                                aboveData: false,
////                                color: "#000",
////                                labelMargin: 2,
////                                axisMargin: 0,
////                                borderWidth: 0,
////                                borderColor: null,
////                                minBorderMargin: 2,
////                                clickable: true,
////                                hoverable: true,
////                                autoHighlight: false,
////                                
////                                mouseActiveRadius: 20
////                                
////                        },
////                        series: {
////                                grow: {
////                                        active: false
////                                },
////                                bars: {
////                                        show: true,
////                                        vertical: true,
////                                        barWidth: 0.2,
////                                        fill: 1
////                                }
////                        },
////                        yaxis: {
////                           
////                                max: 220,
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(0,0,0,0.05)",
////                        },
////                        xaxis: {
////                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(255,255,255,0.1)",
////                        },
////
////                        colors: coloursChart
////                };
////
////                $.plot(elem, data, options);
////
////                // Create a tooltip on our chart
////                elem.qtip({
////                        prerender: true,
////                        content: 'Loading...',
////                        position: {
////                                viewport: $(window),
////                                target: 'mouse',
////                                adjust: {
////                                        x: 7
////                                }
////                        },
////                        show: false,
////                        style: {
////                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
////                                tip: false
////                        }
////                });
////
////                // Bind the plot hover
////                elem.bind("plothover", function (event, coords, item) {
////                        var self = $(this),
////                                api = $(this).qtip(),
////                                previousPoint, content,
////                                round = function (x) {
////                                        return Math.round(x * 1000) / 1000;
////                                };
////                        if(!item) {
////                                api.cache.point = false;
////                                return api.hide(event);
////                        }
////                        previousPoint = api.cache.point;
////                        if(previousPoint !== item.dataIndex) {
////                                api.cache.point = item.dataIndex;
////                                content = item.series.label + ' = ' + round(item.datapoint[1]);
////                                api.set('content.text', content);
////                                api.elements.tooltip.stop(1, 1);
////                                api.show(coords);
////
////                        }
////                });
//
// //       },
////         chartBar_BE: function () {
////                var elem = $('#statChartFlotBarBE');
////                var nombreDeChambre = 4;//a importer avec une reuete http.
////                var NomDesChambres = ["Room1","Room2","Room3","Room4"];
////               var myData = [[1, 2010], [2, 2543], [3, 2520]];
////            var d1 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d1.push([i,220]);
////
////                var d2 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d2.push([i,50]);
////
////                var d3 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d3.push([i,120]);
////
////
////                var d4 = [];
////                for(var i = 1; i <= 1; i += 2)
////                d4.push([i,0.2]);
////            
////                var data = new Array();
////                data.push({
////                        label: NomDesChambres[0],
////                        data: d1,
////                        bars: {
////                                order: 1
////                        }
////                });
////              
////                data.push({
////                        label: NomDesChambres[1],
////                        data: d2,
////                        bars: {
////                                order: 2
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[2],
////                        data: d3,
////                        bars: {
////                                order: 3
////                        }
////                });
////                data.push({
////                        label: NomDesChambres[3],
////                        data: d4,
////                        bars: {
////                                order: 4
////                        }
////                });
////
////                var options = {
////                        legend: {
////                                position: "ne",
////                                noColumns: 0,
////                                backgroundColor: "rgba(0,0,0,0.2)",
////                                margin: [0, 0],
////                                labelFormatter: function (label, series) {
////                                        return '&nbsp;' + label + '&nbsp;';
////                                }
////                        },
////                        grid: {
////                                show: true,
////                                aboveData: false,
////                                color: "#000",
////                                labelMargin: 2,
////                                axisMargin: 0,
////                                borderWidth: 0,
////                                borderColor: null,
////                                minBorderMargin: 2,
////                                clickable: true,
////                                hoverable: true,
////                                autoHighlight: false,
////                                
////                                mouseActiveRadius: 20
////                                
////                        },
////                        series: {
////                                grow: {
////                                        active: false
////                                },
////                                bars: {
////                                        show: true,
////                                        vertical: true,
////                                        barWidth: 0.2,
////                                        fill: 1
////                                }
////                        },
////                        yaxis: {
////                           
////                                max: 220,
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(0,0,0,0.05)",
////                        },
////                        xaxis: {
////                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
////                                font: {
////                                        weight: "bold"
////                                },
////                                tickColor: "rgba(255,255,255,0.1)",
////                        },
////
////                        colors: coloursChart
////                };
////
////                $.plot(elem, data, options);
////
////                // Create a tooltip on our chart
////                elem.qtip({
////                        prerender: true,
////                        content: 'Loading...',
////                        position: {
////                                viewport: $(window),
////                                target: 'mouse',
////                                adjust: {
////                                        x: 7
////                                }
////                        },
////                        show: false,
////                        style: {
////                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
////                                tip: false
////                        }
////                });
////
////                // Bind the plot hover
////                elem.bind("plothover", function (event, coords, item) {
////                        var self = $(this),
////                                api = $(this).qtip(),
////                                previousPoint, content,
////                                round = function (x) {
////                                        return Math.round(x * 1000) / 1000;
////                                };
////                        if(!item) {
////                                api.cache.point = false;
////                                return api.hide(event);
////                        }
////                        previousPoint = api.cache.point;
////                        if(previousPoint !== item.dataIndex) {
////                                api.cache.point = item.dataIndex;
////                                content = item.series.label + ' = ' + round(item.datapoint[1]);
////                                api.set('content.text', content);
////                                api.elements.tooltip.stop(1, 1);
////                                api.show(coords);
////
////                        }
////                });
//
// //       }
//
//
//
//
//};