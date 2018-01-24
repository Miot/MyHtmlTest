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
		{link:'#/author', text:'热门作者', icon:'icon-pencil'},
		{link:'#/category', text:'栏目浏览', icon:'icon-menu'},
		{link:'#/favourite', text:'我的收藏', icon:'icon-heart'},
		{link:'#/settings', text:'设置', icon:'icon-cog'}
	];
}])
// 今日一刻
.controller('TodayController', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ){
	$rootScope.title = '今日一刻';
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
	$rootScope.title = '往期内容';
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
// 热门作者
.controller('AuthorController', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ){
	$rootScope.title = '热门作者';
	$rootScope.loaded = false;
	$http({
		url:'./api/author.php',
		method:'GET'
	}).success(function( info ){
		// console.log(info);
		$rootScope.loaded = true;
		$scope.rec = info.rec;
        $scope.all = info.all;
	});
}])
// 栏目浏览
.controller('CategoryController', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ){
	$rootScope.title = '栏目浏览';
	$rootScope.loaded = false;
	$http({
		url:'./api/category.php',
		method:'GET'
	}).success(function( info ){
		// console.log(info);
		$rootScope.loaded = true;
		$scope.columns = info.columns;
	});
}])
// 我的收藏
.controller('FavouriteController', ['$scope', '$rootScope', function( $scope, $rootScope ){
	$rootScope.title = '我的收藏';
	$rootScope.loaded = true;
}])
// 设置
.controller('SettingsController', ['$scope', '$rootScope', function( $scope, $rootScope ){
	$rootScope.title = '设置';
	$rootScope.loaded = true;
}])
