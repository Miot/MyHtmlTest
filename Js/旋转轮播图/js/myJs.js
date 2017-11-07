window.onload = function () {
    var arr = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = document.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
   
    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
   slide.onmouseenter = function(){
        animate(arrow,{"opacity":100});
   }
   slide.onmouseleave = function(){
        animate(arrow,{"opacity":0});
   }

    //2.设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;
    //展示所有图片
    move();

    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，next为正向旋转，prev为反向旋转)
   arrowChildren[0].onclick = function () {
        if(flag){
            flag = false;
            move("prev");
        }
   }
   arrowChildren[1].onclick = function (){
        if(flag){
            move("next");
            flag = false;
        }
   }

    //4.书写函数。
     function move(way){
        if(way !== undefined){
            if(way === "prev"){
                arr.push(arr.shift());
            }else{
                arr.unshift(arr.pop());
            }
        }
            //为页面上的所有li赋值属性，利用缓动框架
            for(var i = 0;i<liArr.length;i++){
                animate(liArr[i],arr[i],function(){  flag = true; })
            }
        
     }

}