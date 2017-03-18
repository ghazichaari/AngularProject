
var app = angular.module('myApp', ['angularTreeview']);
app.controller('customersCtrl', function ($scope, $http) {
    dashboard_A_chart.sparkLine(); 
    //load event 0
    $scope.$on('LoadListtreeOK', function (){
    $http.get("assets/js/tree.json")
      .success(function (response) {
           $scope.roleList =response; 
            //LoadListLabelsOK events is ready
           $scope.$emit('LoadListLabelsOK');
            });
        });
    //roleList1 to treeview
     
    //load event 1
    $scope.$on('LoadListLabelsOK', function (){
    $http.get("assets/js/dashbordRI.json")
      .success(function (response) {
                //appel function of daily par class
                //$scope.$watch( $scope.factory = response, daily);
         daily($('.dial-1'),response.maxp,response.consumptionthisnowP);
         daily($('.dial-2'),response.maxU,response.consumptionthisnowU);
         daily($('.dial-3'),response.maxI,response.consumptionthisnowI);
         $scope.response = response;  
         //LoadRealTimeValuesOK events is ready
         $scope.$emit('LoadRealTimeValuesOK');
            });
        });
    //load event 2
    $scope.$on('LoadRealTimeValuesOK', function (){
      //requete http pour les donneés Json de variable.(response.factoryId);
      $http.get("assets/js/dashbordLT.json")
        .success(function (response) {
// var d1=[];
// d1.push(response);
            dashboard_A_chart.chartVisit(response,$('#dashChartVisitors'),$('#dashChartVisitorsOverview'),$('#setLastHours'),$('#setLastSevenDays'),$('#setLastFortnight'),"#fff",'power');
            $scope.$emit('Loadchart1OK');
 });
     });
    //load event 3
    $scope.$on('Loadchart1OK', function (){
             //requete http pour les donneés Json de variable.(response.factoryId);
             //requete http pour les donneés Json de variable.(response.factoryId);
      $http.get("assets/js/dashbordLT.json")
           .success(function (response) {
            dashboard_A_chart.chartVisit(response,$('#dashChartVisitors1'),$('#dashChartVisitorsOverview1'),$('#setLastHours1'),$('#setLastSevenDays1'),$('#setLastFortnight1'),"#dd4040",'tension');
             // dashboard_A_chart.sparkLine();
             $scope.$emit('loadchart2OK');
            });
     });
    //load event 4
    $scope.$on('loadchart2OK', function (){
         //requete http pour les donneés Json de variable.(response.factoryId);
       $http.get("assets/js/dashbordLT.json")
         .success(function (response) {
         dashboard_A_chart.chartVisit(response,$('#dashChartVisitors2'),$('#dashChartVisitorsOverview2'),$('#setLastHours2'),$('#setLastSevenDays2'),$('#setLastFortnight2'),"#3c25ce","intensity");
        // dashboard_A_chart.sparkLine();
         $scope.$emit('Loadchart3OK');
     }); 
 });  
    //fait appel au  event1  
    $scope.$emit("LoadListtreeOK");  
});
//FUNCTION OF PERCENTAGE OF CONSUMPTION OF POWER
function daily(element,maxval,value) {
    element.val(0).trigger('change').delay(2000);
    element.knob({
        'min': 0,
        'max': maxval,
        'readOnly': true,
        'dynamicDraw': true,
        'thickness': 0.2,
        'tickColorizeValues': true,
        'skin': 'tron'
    });
     element.val(value).trigger('change');
//    var counter = 0;
//    var tmr;
//      self.setInterval(function () {
//        myDelay2(element,value,counter,tmr);
//    }, 50);
//    
}
//FUNCTION OF PERCENTAGE OF CONSUMPTION OF POWER
function myDelay2(element,value,counter,tmr) {
        counter += 1;
        element.val(counter).trigger('change');
        if (counter === value) {
            window.clearInterval(tmr);
        }
    }
//chart 
dashboard_A_chart = {
    // Dashboard 1 Chart Visit
    chartVisit: function (d1,elem,elemo,b1,b2,b3,abdesslem,labele) {    
        function weekendAreas(axes) {
            var markings = [];
            var d1 = new Date(axes.xaxis.min);
            // go to the first Saturday
            d1.setUTCDate(d1.getUTCDate() - ((d1.getUTCDay() + 1) % 7))
            d1.setUTCSeconds(0);
            d1.setUTCMinutes(0);
            d1.setUTCHours(0);
            var i = d1.getTime();
            do {   
                // when we don't set yaxis, the rectangle automatically
                // extends to infinity upwards and downwards
                markings.push({
                    xaxis: {
                        from: i,
                        to: i + 2 * 24 * 60 * 60 * 1000
                    }
                });
                i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
            var d2 = new Date(axes.xaxis.min);
            // go to the first Saturday
            d2.setUTCDate(d1.getUTCDate() - ((d2.getUTCDay() + 1) % 7))
            d2.setUTCSeconds(0);
            d2.setUTCMinutes(0);
            d2.setUTCHours(0);
            var i = d2.getTime();
            do {
                // when we don't set yaxis, the rectangle automatically
                // extends to infinity upwards and downwards
                markings.push({
                    xaxis: {
                        from: i,
                        to: i + 2 * 24 * 60 * 60 * 1000
                    }
                });
                i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
        } ;
        var options = {
            colors: [abdesslem],
            legend: {
                show: true,
                noColumns: 1, // number of colums in legend table
                labelFormatter: null, // fn: string -> string
                labelBoxBorderColor: false,
                container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                margin: 8,
                backgroundColor: false
            },
            series: {
                lines: {
                    show: true,
                    lineWidth: 4,
                    fill: true
                },
                points: {
                    show: true,
                    fillColor: "rgba(0,0,0,0.35)",
                    radius: 3.5,
                    lineWidth: 1.5
                },
                grow: {
                    active: false
                }
            },
            xaxis: {
                mode: "time",
                font: {
                    weight: "bold"
                },
                color: "#D6D8DB",
                tickColor: "rgba(237,194,64,0.25)",
                min: "1201302000000",
                max: "1203894000000",
                tickLength: 5
            },
            selection: {
                mode: "x"
            },
            grid: {
                color: "#D6D8DB",
                tickColor: "rgba(255,255,255,0.05)",
                borderWidth: 0,
                markings: weekendAreas,
                markingsColor: "rgba(255,255,255,0.05)",
                // interactive stuff
                clickable: true,
                hoverable: true
            }
        };
        var plot = $.plot(elem, [{
                data: d1,
                label: [labele]
            }, {
           
            }], options);
        var overview = $.plot(elemo, [d1], {
            colors: ["#fff", "#5EB95E"],
            series: {
                bars: {
                    show: true,
                    lineWidth: 5,
                    fillColor: "#5EB95E"
                },
                shadowSize: 0,
                grow: {
                    active: false
                }
            },
            xaxis: {
                ticks: [],
                mode: "time"
            },
            yaxis: {
                ticks: [],
                min: 0,
                autoscaleMargin: 0.1
            },
            selection: {
                mode: "x"
            },
            grid: {
                color: "#D6D8DB",
                borderColor: "rgba(255,255,255,0.05)",
                borderWidth: 0,
                //markings: weekendAreas,
                //markingsColor: "rgba(255,255,255,0.05)",
                backgroundColor: {
                    colors: ["rgba(54,58,60,0.05)", "rgba(0,0,0,0.2)"]
                }
            }
        });
        // now connect the two
        elem.bind("plotselected", function (event, ranges) {
            // do the zooming
            //plot = $.plot(elem, [d1, d2],
            plot = $.plot(elem, [d1],
            $.extend(true, {}, options, {
              xaxis: {
                            min: ranges.xaxis.from,
                            max: ranges.xaxis.to
                     }
                  }));

            // don't fire event on the overview to prevent eternal loop
            overview.setSelection(ranges, true);
        });
        elemo.bind("plotselected", function (event, ranges) {
            plot.setSelection(ranges);
        });
        // Create a tooltip on our chart
        elem.qtip({
            prerender: true,
            content: 'Loading...', // Use a loading message primarily
            position: {
                viewport: $(window), // Keep it visible within the window if possible
                target: 'mouse', // Position it in relation to the mouse
                adjust: {
                    x: 7
                } // ...but adjust it a bit so it doesn't overlap it.
            },
            show: false, // We'll show it programatically, so no show event is needed
            style: {
                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                tip: false // Remove the default tip.
            }
        });
        // Bind the plot hover
        elem.bind("plothover", function (event, coords, item) {
            // Grab the API reference
            var self = $(this),
                    api = $(this).qtip(),
                    previousPoint, content,
                    // Setup a visually pleasing rounding function
                    round = function (x) {
                        return Math.round(x * 1000) / 1000;
                    };

            // If we weren't passed the item object, hide the tooltip and remove cached point data
            if (!item) {
                api.cache.point = false;
                return api.hide(event);
            }

            // Proceed only if the data point has changed
            previousPoint = api.cache.point;
            if (previousPoint !== item.dataIndex) {
                // Update the cached point data
                api.cache.point = item.dataIndex;

                // Setup new content
                content = item.series.label + ' = ' + round(item.datapoint[1]);

                // Update the tooltip content
                api.set('content.text', content);

                // Make sure we don't get problems with animations
                api.elements.tooltip.stop(1, 1);

                // Show the tooltip, passing the coordinates
                api.show(coords);
            }
        });
       
        $("#clearSelection").click(function () {
            overview.clearSelection();
            $.plot(elem, [{
                    data: d1,
                    label: "power"
                }, {
                 
                }], options);
        });
//button1 event variable globel en fait lappel par id
        b1.click(function () {
            plot.setSelection({
                xaxis: {
                    from: 1203289200000,
                    to: 1203894000000
                }
            });
        });
//button2 event variable globel en fait lappel par id
        b2.click(function () {
            plot.setSelection({
                xaxis: {
                    from: 1202684400000,
                    to: 1203894000000
                }
            });
        });
//button3 event variable globel en fait lappel par id
        b3.click(function () {
            plot.setSelection({
                xaxis: {
                    from: 1203807600000,
                    to: 1203894000000
                }
            });
        });
    },
    // Dashboard Sparkline
    sparkLine: function () {
        $(".well-black .DSPLine").sparkline('html', {
            type: 'line',
            width: '100px',
            height: '20px',
            lineColor: '#9cd397',
            fillColor: '#5eb95e',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false
        });
        $(".well-nice .DSPLine").sparkline('html', {
            type: 'line',
            width: '100px',
            height: '20px',
            lineColor: '#5e8fb9',
            fillColor: '#c8e1f6',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false
        });
    }
};

