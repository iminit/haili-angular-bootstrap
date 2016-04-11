/**=========================================================
 * Module: src/js/module/directive/chart-dire.js
 * chart指令, 使用了基于 jquery 的 highchart
 * @author: haili042
 * @time: 2016年4月9日 17:39:30
 =========================================================*/

App.directive('widgetChart', [function () {

    return {
        restrict: "EA",
        scope: {
            chartconfig: "=" // 注意要小写, 因为 html 不识别大小写
        },
        controller: function($scope) {

            // 默认参数
            var defaultConfig = {
                    chart: {
                        animation: true
                    },
                    credits: {
                        enabled: true,
                        text: 'haili angular bootstrap admin'
                    }
                },

                newConfig = $scope.chartconfig // 传进来的参数
                ;

            // jquery 深拷贝
            $scope.chartconfig = $.extend(true, {}, defaultConfig, newConfig);

        },
        link: function (scope, elem, attrs) {
            try {
                elem.highcharts(scope.chartconfig);
            } catch (e) {
                console.log("error in creating chart :" + e);
            }
        }
    };

}]);