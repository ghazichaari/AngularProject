
var app = angular.module('myAppR',['angularTreeview']);
app.controller('customersCtrl2', function ($scope, $http) {
  $scope.$on('LoadListtreeOK', function (){
    $http.get("assets/js/tree.json")
      .success(function (response) {
            $scope.roleList =response; 
            //Loadchart1OK events is ready
           $scope.$emit('Loadchart1OK');
            });
        });
 $scope.$on('Loadchart1OK',function (){
       $http.get("assets/js/chart1.json")
            .success(function (response) {
            $http.get("assets/js/newjson.json")
            .success(function (responsee) {
                 
       //dashboard_A_chart.chartVisit(response,$('#dashChartVisitors1'),$('#dashChartVisitorsOverview1'),$('#setLastHours1'),$('#setLastSevenDays1'),$('#setLastFortnight1'),"#dd4040",'tension');
      chartBar_B(response,$('#statChartFlotBarB'),responsee);
            });
      $scope.$emit('loadchart2OK');
      });
  });
  $scope.$on('loadchart2OK',function (){
      chartBar_D($('#statChartFlotBarD'));
      
      $scope.$emit('loadchart3OK');
  });
  $scope.$on('loadchart3OK',function (){
      $http.get("assets/js/Dount.json")
       .success(function (response) {
     $scope.response=response;
      this.response1=response;
         for(var j=0;j in response ; j++){
        chartDonut($('#'+response[j].id),response);
         }});
       $http.get("assets/js/chart_bar.json")
       .success(function (response2){
           
        chartBar_BB($('#statChartFlotBarBB'),response2);
          
           });
     //  $scope.zonesTable.push({identifierg:i.idg});
 
           
      
          
         
      //chartDonut($('#statChartFlotDonut'));
      //chartBar_BB($('#statChartFlotBarBB'));
      $scope.$emit('loadchart4OK');
   });
      $scope.$on('loadchart4OK',function (){
//      chartDonut($('#statChartFlotDonut1')); 
      chartBar_BB($('#statChartFlotBarBC'));
      $scope.$emit('loadchart5OK');
  });
  $scope.$on('loadchart5OK',function (){
//      chartDonut($('#statChartFlotDonut2'));
      chartBar_BB($('#statChartFlotBarBD'));
      $scope.$emit('loadchart6OK');
  });
  $scope.$on('loadchart5OK',function (){
//      chartDonut($('#statChartFlotDonut3'));
      chartBar_BB($('#statChartFlotBarBE'));
      $scope.$emit('loadchart6OK');
  });
$scope.$emit('LoadListtreeOK');
});
//chartBar_B($('#statChartFlotBarB'));
//generate random number for charts
randNum = function () {
        //return Math.floor(Math.random()*101);
        return(Math.floor(Math.random() * (1 + 40 - 20))) + 20;
};
var coloursChart = ["#edc240", "#61ba61", "#1083c7", "#db6464", "#ff9933", "#009999"];
//chartbar_b
   function   chartBar_B (d1,elem,name) {
//                var elem = $('#statChartFlotBarB');
                var nombreDeChambre = 4;//a importer avec une reuete http.
                var NomDesChambres = ["aci","Room2","Room3","Room4"];
                var myData = [[1, 2010], [2, 2543], [3, 2520]];
             
               
              //  d1.push([]);

               
              
                var data = new Array();
                
                var count = 0;
                for(count=0;count<name.length;count++){
                    
                data.push({
                   
                        label: [name[count].name],
                       
                        data: [d1[count]],
                        bars: {
                                order: 1
                        }
                });
            }
              
              
               
               

                var options = {
                        legend: {
                                position: "ne",
                                noColumns: 0,
                                backgroundColor: "rgba(0,0,0,0.2)",
                                margin: [0, 0],
                                labelFormatter: function (label) {
                                        return '&nbsp;' + label + '&nbsp;';
                                }
                        },
                        grid: {
                                show: true,
                                aboveData: false,
                                color: "#fff",
                                labelMargin: 2,
                                axisMargin: 20,
                                borderWidth: 0,
                                borderColor: null,
                                minBorderMargin: 0,
                                clickable: true,
                                hoverable: true,
                                autoHighlight: false,
                                
                                mouseActiveRadius: 20
                                
                        },
                        series: {
                                grow: {
                                        active: false
                                },
                                bars: {
                                        show: true,
                                        vertical: true,
                                        barWidth: 20,
                                        fill: 1
                                }
                        },
                        yaxis: {
                           
                                max: 300,
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(0,0,0,0.05)",
                        },
                        xaxis: {
                            ticks: [[3, "p"]],
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(255,255,255,0.1)",
                        },

                        colors: coloursChart
                };

                $.plot(elem, data, options);

                // Create a tooltip on our chart
                elem.qtip({
                        prerender: true,
                        content: 'Loading...',
                        position: {
                                viewport: $(window),
                                target: 'mouse',
                                adjust: {
                                        x: 7
                                }
                        },
                        show: true,
                        style: {
                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                                tip: true
                        }
                });

                // Bind the plot hover
                elem.bind("plothover", function (event, coords, item) {
                        var self = $(this),
                                api = $(this).qtip(),
                                previousPoint, content,
                                round = function (x) {
                                        return Math.round(x * 1000) / 1000;
                                };
                        if(!item) {
                                api.cache.point = false;
                                return api.hide(event);
                        }
                        previousPoint = api.cache.point;
                        if(previousPoint !== item.dataIndex) {
                                api.cache.point = item.dataIndex;
                                content = item.series.label + ' = ' + round(item.datapoint[1]);
                                api.set('content.text', content);
                                api.elements.tooltip.stop(1, 1);
                                api.show(coords);

                        }
                });

        };
   function   chartBar_D (elem) {
				
		var cons_chambre =220;
				var d1 = [];
                for(var i = 1; i <= 3; i += 1)
                d1.push([i, cons_chambre]);

                var d2 = [];
                for(var i = 1; i <= 3; i += 1)
                d2.push([i, 150]);

                var d3 = [];
                for(var i = 1; i <= 3; i += 1)
                d3.push([i, 20]);
				
				var d4 = [];
                for(var i = 1; i <= 3; i += 1)
                d4.push([i, parseInt(Math.random() * 20)]);

                var data = new Array();

                data.push({
                        label: "room1",
                        data: d1
                });
                data.push({
                        label: "room2",
                        data: d2
                });
                data.push({
                        label: "room3",
                        data: d3,
                      
                });
				data.push({
                        label: "room4",
                        data: d4
                });

                var stack = 0,
                        bars = true,
                        lines = true,
                        steps = false;

                var options = {
                        legend: {
                                position: "ne",
                                noColumns: 1,
								margin: [0, 0],
                        },
                        grid: {
                                show: true,
                                aboveData: true,
                                color: "#333",
                                labelMargin: 2,
                                axisMargin: 0,
                                borderWidth: 0,
                                borderColor: null,
                                minBorderMargin: 2,
                                clickable: true,
                                hoverable: true,
                                autoHighlight: true,
                                mouseActiveRadius: 20
                        },
                        series: {
								
                                grow: {
                                        active: false
                                },
								stackpercent: false,
                                bars: {
                                        show: true,
                                        barWidth: 0.8,
                                        fill: 2,
										fillColor: {colors:[{opacity: 1},{opacity: 1}]},
										align: "center"
                                }
                        },
                        yaxis: {
                                min: 0,
                                max: 220,
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(0,0,0,0.1)"
                        },
                        xaxis: {
                       label:'Angle (radians)',
							
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(0,0,0,0.03)"
                        },
                        colors: coloursChart,
                        shadowSize: 3
                };

                $.plot(elem, data, options);	
		
		};
   function   chartDonut (elem,data1) {
				//var elem = $('#statChartFlotDonut');
				
                                 for (var j=0;j<data1.length;j++){
                                    data = [{
                                                  data:[data1[j].data],
						  label:data1[j].label
          
				}
                                
                            ];
                            

                                    }
		
				var options = {
						legend: {
								show: true
						},series: {
								pie: {
										show: true,
										radius: 0.8,
										innerRadius: 0.5,
										stroke: {
												color: '#fff',
												width: 8
										},
										startAngle: 2,
										combine: {
												color: '#353535',
												threshold: 0.05
										},
										label: {
												show: true,
												formatter: function (label, series) {
														return '<div class="label label-white box-shadow padding5 opaci85">' + label + '&nbsp;' + Math.round(series.percent) + 'dinars</div>';
												}
										}
								},
								grow: {
										active: false
								}
						},
						grid: {
								hoverable: true,
								clickable: true
						},
//                                                colors: [ "#3A703A", "#4E954E", "#61ba61", "#81C881", "#A0D6A0", "#C0E3C0"],	
						colors: coloursChart
                };
				
				$.plot(elem, data1, options);
		};
   function   chartBar_BB(elem,response2) {
                //var elem = $('#statChartFlotBarBB');
            
             d1 = [];
             d2 = [];
             lab=[];
           var data = new Array();
           for(var f=0;f < response2.length ;f++){   
           d1=([[response2[f].x],[response2[f].y]]);
           
                data.push({
                        label:response2[f].NomDesChambres,
                        data:d1,
                        
                        bars: {
                                order: f
                        }
                });
               
            }
            
          
              
                var options = {
                        legend: {
                                position: "ne",
                                noColumns: 0,
                                backgroundColor: "rgba(0,0,0,0.2)",
                                margin: [0, 0],
                                labelFormatter: function (label) {
                                        return '&nbsp;' + label + '&nbsp;';
                                }
                        },
                        grid: {
                                show: true,
                                aboveData: false,
                                color: "#000",
                                labelMargin: 2,
                                axisMargin: 0,
                                borderWidth: 0,
                                borderColor: null,
                                minBorderMargin: 2,
                                clickable: true,
                                hoverable: true,
                                autoHighlight: false,
                                
                                mouseActiveRadius: 20
                                
                        },
                        series: {
                                grow: {
                                        active: false
                                },
                                bars: {
                                        show: true,
                                        vertical: true,
                                        barWidth: 8,
                                        fill: 1
                                }
                        },
                        yaxis: {
                           
                                max: 220,
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(0,0,0,0.05)",
                        },
                        xaxis: {
                            ticks: [[1,"U"], [3, "p"], [5, "i"]],
                                font: {
                                        weight: "bold"
                                },
                                tickColor: "rgba(255,255,255,0.1)",
                        },

                        colors: coloursChart
                };

                $.plot(elem, data, options);

                // Create a tooltip on our chart
                elem.qtip({
                        prerender: true,
                        content: 'Loading...',
                        position: {
                                viewport: $(window),
                                target: 'mouse',
                                adjust: {
                                        x: 7
                                }
                        },
                        show: false,
                        style: {
                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                                tip: false
                        }
                });

                // Bind the plot hover
                elem.bind("plothover", function (event, coords, item) {
                        var self = $(this),
                                api = $(this).qtip(),
                                previousPoint, content,
                                round = function (x) {
                                        return Math.round(x * 1000) / 1000;
                                };
                        if(!item) {
                                api.cache.point = false;
                                return api.hide(event);
                        }
                        previousPoint = api.cache.point;
                        if(previousPoint !== item.dataIndex) {
                                api.cache.point = item.dataIndex;
                                content = item.series.label + ' = ' + round(item.datapoint[1]);
                                api.set('content.text', content);
                                api.elements.tooltip.stop(1, 1);
                                api.show(coords);

                        }
                });

        };
// CHARTS SETTINGS
// ------------------------------------------------------------------------------------------------ * -->
