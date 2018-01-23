// 实例一个模块，用来专门管理所有的控制器
angular.module('Controllers',[])
.controller('DemoController', ['$scope', function( $scope ){
	// console.log('DemoController已启动');
}])
// 导航菜单
.controller('NavsController', ['$scope', function( $scope ){
	// 导航数据    （减低耦合度）
	$scope.navs = [
		{link:'#/today', text:'今日一刻', icon:'icon-home'},
		{link:'#/older', text:'往期内容', icon:'icon-file-empty'},
		{link:'#/older', text:'热门作者', icon:'icon-pencil'},
		{link:'#/older', text:'栏目浏览', icon:'icon-menu'},
		{link:'#/older', text:'我的收藏', icon:'icon-heart'},
		{link:'#/older', text:'设置', icon:'icon-cog'}
	];
}])
// 今日一刻
.controller('TodayController', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ){
	$rootScope.loaded = false;
	$http({
		url:'./api/today.php',
		method:'GET'
	}).success(function( info ){
		// console.log(info);
		$rootScope.loaded = true;
		$scope.posts = info.posts;
	});
}])
// 往期内容
.controller('OlderController', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ){
	$rootScope.loaded = false;
	$http({
		url:'./api/older.php',
		method:'GET'
	}).success(function( info ){
		// console.log(info);
		$rootScope.loaded = true;
		$scope.posts = info.posts;
	});
}])

