// 总控制器模块
var DouBan = angular.module('DouBan',['ngRoute', 'Controllers', 'Directives']);

DouBan.config(['$routeProvider',function( $routeProvider ) {
	$routeProvider.when('/today',{
		templateUrl: './views/today.html',
		controller: 'TodayController'
	}).when('/older',{
		templateUrl: './views/older.html',
		controller: 'OlderController'
	}).otherwise({
		redirectTo:'/today'
	});
}])

DouBan.run(['$rootScope', function ($rootScope) {
    // 设置类名初始值
    $rootScope.collapsed = false;
    // 全局方法
    $rootScope.toggle = function () {
        // console.log(1);
        // 改变类名初始值
        $rootScope.collapsed = !$rootScope.collapsed;
        // 获取所有导航
        var navs = document.querySelectorAll('.navs dd');

        if($rootScope.collapsed) {
            // console.log('打开');
            for(var i=0; i<navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.2s';
                navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
            }
        }else{
            // console.log('关闭');
            var len = navs.length - 1;
            for(var j=len; j>0; j--) {
                // console.log(navs.length - j + 1);
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
            }
        }
    }
}]);