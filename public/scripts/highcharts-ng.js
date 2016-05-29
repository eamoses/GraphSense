src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js";
src="http://code.highcharts.com/stock/highstock.src.js";
src="http://code.highcharts.com/modules/exporting.js";
src="http://code.highcharts.com/modules/offline-exporting.js";

'use strict';

var graphSense = angular.module('graphSense', ["highcharts-ng"]);

graphSense.controller('myctrl', function ($scope) {

  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  $scope.chartSeries = [
    {"name": "Some data", "data": [254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,258,258,259,259,259,259,260,260,260,260,260,260,260,261,261,261,261,260,260,261,260,260,260,261,260,261,261,261,262,262,262,263,262,263,264,265,265,266,266,267,267,267,268,268,268,268,268,268,268,268,268,269,269,270,270,270,271,272,272,272,271,271,270,271,271,271,272,274,274,276,281,287,299,317,335,343,352,364,372,377,381,383,383,385,387,390,389,391,393,387,391,389,395,395,395,394,393,394,394,398,398,401,397,394,397,399,403,412,415,412,412,420,420,421,423,422,423,421,419,422,428,422,421,420,424,425,427,427,426,427,427,428,428,427,423,423,424,424,424,423,422,421,417,413,409,405,401,400,400,397,393,385,376,367,365,365,357,357,348,336,328,323,321,324,320,319,317,312,308,305,302,300,298,296,294,293,292,291,289,288,288,287,286,285,284,284,283,282,282,281,281,280,280,280,280,279,279,279,278,278,278,278,278,277,277,277,277,277,277,277,277,276,276,276,276,276,275,276,276,276,276,276,276,276,276,276,276,276,276,275,275,275,275,275,275,275,275,275,275,275,275,275,275,276,276,276,276,275,275,275,274,274,274,274,274,274,273,273,272,272,271,271,271,270,270,270,270,269,269,269,269,268,268,268,268,267,267,267,267,267,266,266,266,265,265,265,265,264,264,264,264,264,263,263,262,262,262,262,262,261,261,261,260,260,260,259,259,259,259,258,258,257,257,257,257,257,257,256,256,256,255,255,255,255,255,255,255,255,255,255,254,254,254,254,254,254,254,253,253,253,253,253,252,252,252,252,252,251,251,251,251,251,250,251,250,250,250,250,250,250,250,250,250,249,249,249,249,249,249,248,248,248,248,248,248,247,247,247,247,247,247,247]},
    // {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
    // {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
    // {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  ];

  // $scope.chartStack = [
  //   {"id": '', "title": "No"},
  //   {"id": "normal", "title": "Normal"},
  //   {"id": "percent", "title": "Percent"}
  // ];

  // $scope.addPoints = function () {
  //   var seriesArray = $scope.chartConfig.series;
  //   var rndIdx = Math.floor(Math.random() * seriesArray.length);
  //   seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  // };

  // $scope.addSeries = function () {
  //   var rnd = []
  //   for (var i = 0; i < 10; i++) {
  //     rnd.push(Math.floor(Math.random() * 20) + 1)
  //   }
  //   $scope.chartConfig.series.push({
  //     data: rnd
  //   })
  // }

  // $scope.removeRandomSeries = function () {
  //   var seriesArray = $scope.chartConfig.series;
  //   var rndIdx = Math.floor(Math.random() * seriesArray.length);
  //   seriesArray.splice(rndIdx, 1)
  // }

  // $scope.removeSeries = function (id) {
  //   var seriesArray = $scope.chartConfig.series;
  //   seriesArray.splice(id, 1)
  // }

  // $scope.toggleHighCharts = function () {
  //   this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  // }

  // $scope.replaceAllSeries = function () {
  //   var data = [
  //     { name: "first", data: [10] },
  //     { name: "second", data: [3] },
  //     { name: "third", data: [13] }
  //   ];
  //   $scope.chartConfig.series = data;
  // };

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'areaspline'
      },
      plotOptions: {
        // series: {
        //   stacking: ''
        // }
      }
    },
    series: $scope.chartSeries,
    title: {
      text: 'Hello'
    },
    credits: {
      enabled: true
    },
    loading: false,
    size: {}
  }

  // $scope.reflow = function () {
  //   $scope.$broadcast('highchartsng.reflow');
  // };


});
'use strict';
angular.module('highcharts-ng', []).directive('highchart', function () {
  var indexOf = function (arr, find, i) {
    if (i === undefined)
      i = 0;
    if (i < 0)
      i += arr.length;
    if (i < 0)
      i = 0;
    for (var n = arr.length; i < n; i++)
      if (i in arr && arr[i] === find)
        return i;
    return -1;
  };
  function prependMethod(obj, method, func) {
    var original = obj[method];
    obj[method] = function () {
      var args = Array.prototype.slice.call(arguments);
      func.apply(this, args);
      if (original) {
        return original.apply(this, args);
      } else {
        return;
      }
    };
  }
  function deepExtend(destination, source) {
    for (var property in source) {
      if (source[property] && source[property].constructor && source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        deepExtend(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  }
  var seriesId = 0;
  var ensureIds = function (series) {
    var changed = false;
    angular.forEach(series, function (s) {
      if (!angular.isDefined(s.id)) {
        s.id = 'series-' + seriesId++;
        changed = true;
      }
    });
    return changed;
  };
  var axisNames = [
    'xAxis',
    'yAxis'
  ];
  var getMergedOptions = function (scope, element, config) {
    var mergedOptions = {};
    var defaultOptions = {
      chart: { events: {} },
      title: {},
      subtitle: {},
      series: [],
      credits: {},
      plotOptions: {},
      navigator: { enabled: false }
    };
    if (config.options) {
      mergedOptions = deepExtend(defaultOptions, config.options);
    } else {
      mergedOptions = defaultOptions;
    }
    mergedOptions.chart.renderTo = element[0];
    angular.forEach(axisNames, function (axisName) {
      if (angular.isDefined(config[axisName])) {
        mergedOptions[axisName] = angular.copy(config[axisName]);
        if (angular.isDefined(config[axisName].currentMin) || angular.isDefined(config[axisName].currentMax)) {
          prependMethod(mergedOptions.chart.events, 'selection', function (e) {
            var thisChart = this;
            if (e[axisName]) {
              scope.$apply(function () {
                scope.config[axisName].currentMin = e[axisName][0].min;
                scope.config[axisName].currentMax = e[axisName][0].max;
              });
            } else {
              scope.$apply(function () {
                scope.config[axisName].currentMin = thisChart[axisName][0].dataMin;
                scope.config[axisName].currentMax = thisChart[axisName][0].dataMax;
              });
            }
          });
          prependMethod(mergedOptions.chart.events, 'addSeries', function (e) {
            scope.config[axisName].currentMin = this[axisName][0].min || scope.config[axisName].currentMin;
            scope.config[axisName].currentMax = this[axisName][0].max || scope.config[axisName].currentMax;
          });
        }
      }
    });
    if (config.title) {
      mergedOptions.title = config.title;
    }
    if (config.subtitle) {
      mergedOptions.subtitle = config.subtitle;
    }
    if (config.credits) {
      mergedOptions.credits = config.credits;
    }
    if (config.size) {
      if (config.size.width) {
        mergedOptions.chart.width = config.size.width;
      }
      if (config.size.height) {
        mergedOptions.chart.height = config.size.height;
      }
    }
    return mergedOptions;
  };
  var updateZoom = function (axis, modelAxis) {
    var extremes = axis.getExtremes();
    if (modelAxis.currentMin !== extremes.dataMin || modelAxis.currentMax !== extremes.dataMax) {
      axis.setExtremes(modelAxis.currentMin, modelAxis.currentMax, false);
    }
  };
  var processExtremes = function (chart, axis, axisName) {
    if (axis.currentMin || axis.currentMax) {
      chart[axisName][0].setExtremes(axis.currentMin, axis.currentMax, true);
    }
  };
  var chartOptionsWithoutEasyOptions = function (options) {
    return angular.extend({}, options, {
      data: null,
      visible: null
    });
  };
  return {
    restrict: 'EAC',
    replace: true,
    template: '<div></div>',
    scope: { config: '=' },
    link: function (scope, element, attrs) {
      var prevSeriesOptions = {};
      var processSeries = function (series) {
        var i;
        var ids = [];
        if (series) {
          var setIds = ensureIds(series);
          if (setIds) {
            return false;
          }
          angular.forEach(series, function (s) {
            ids.push(s.id);
            var chartSeries = chart.get(s.id);
            if (chartSeries) {
              if (!angular.equals(prevSeriesOptions[s.id], chartOptionsWithoutEasyOptions(s))) {
                chartSeries.update(angular.copy(s), false);
              } else {
                if (s.visible !== undefined && chartSeries.visible !== s.visible) {
                  chartSeries.setVisible(s.visible, false);
                }
                chartSeries.setData(angular.copy(s.data), false);
              }
            } else {
              chart.addSeries(angular.copy(s), false);
            }
            prevSeriesOptions[s.id] = chartOptionsWithoutEasyOptions(s);
          });
          if (scope.config.noData) {
            var chartContainsData = false;
            for (i = 0; i < series.length; i++) {
              if (series[i].data && series[i].data.length > 0) {
                chartContainsData = true;
                break;
              }
            }
            if (!chartContainsData) {
              chart.showLoading(scope.config.noData);
            } else {
              chart.hideLoading();
            }
          }
        }
        for (i = chart.series.length - 1; i >= 0; i--) {
          var s = chart.series[i];
          if (indexOf(ids, s.options.id) < 0) {
            s.remove(false);
          }
        }
        return true;
      };
      var chart = false;
      var initChart = function () {
        if (chart)
          chart.destroy();
        prevSeriesOptions = {};
        var config = scope.config || {};
        var mergedOptions = getMergedOptions(scope, element, config);
        chart = config.useHighStocks ? new Highcharts.StockChart(mergedOptions) : new Highcharts.Chart(mergedOptions);
        for (var i = 0; i < axisNames.length; i++) {
          if (config[axisNames[i]]) {
            processExtremes(chart, config[axisNames[i]], axisNames[i]);
          }
        }
        if (config.loading) {
          chart.showLoading();
        }
      };
      initChart();
      scope.$watch('config.series', function (newSeries, oldSeries) {
        var needsRedraw = processSeries(newSeries);
        if (needsRedraw) {
          chart.redraw();
        }
      }, true);
      scope.$watch('config.title', function (newTitle) {
        chart.setTitle(newTitle, true);
      }, true);
      scope.$watch('config.subtitle', function (newSubtitle) {
        chart.setTitle(true, newSubtitle);
      }, true);
      scope.$watch('config.loading', function (loading) {
        if (loading) {
          chart.showLoading();
        } else {
          chart.hideLoading();
        }
      });
      scope.$watch('config.credits.enabled', function (enabled) {
        if (enabled) {
          chart.credits.show();
        } else if (chart.credits) {
          chart.credits.hide();
        }
      });
      // scope.$watch('config.useHighStocks', function (useHighStocks, oldUseHighStocks) {
      //   if (useHighStocks === oldUseHighStocks)
      //     return;
      //   initChart();
      // });
      angular.forEach(axisNames, function (axisName) {
        scope.$watch('config.' + axisName, function (newAxes, oldAxes) {
          if (newAxes === oldAxes)
            return;
          if (newAxes) {
            chart[axisName][0].update(newAxes, false);
            updateZoom(chart[axisName][0], angular.copy(newAxes));
            chart.redraw();
          }
        }, true);
      });
      scope.$watch('config.options', function (newOptions, oldOptions, scope) {
        if (newOptions === oldOptions)
          return;
        initChart();
        processSeries(scope.config.series);
        chart.redraw();
      }, true);
      scope.$watch('config.size', function (newSize, oldSize) {
        if (newSize === oldSize)
          return;
        if (newSize) {
          chart.setSize(newSize.width || undefined, newSize.height || undefined);
        }
      }, true);
      // scope.$on('highchartsng.reflow', function () {
      //   chart.reflow();
      // });
      scope.$on('$destroy', function () {
        if (chart)
          chart.destroy();
        element.remove();
      });
    }
  };
});
