$(document).ready(function(){//문서가 준비되면 실행
    //2.9초마다 ani() 함수 애니메이션 실행
        // setInterval(function(){함수이름();},실행시간);
   var intv=setInterval(function(){ani();},2900);
    
    function ani(){
        //.ban 상단 마진을 -300으로 0.8초 동안 이동하는 애니메이션 실행
        //$(선택자).animate({동작 서술},시간);
        //$(선택자).animate({동작 서술},시간,콜백함수[앞 애니메이션 실행 후 동작]);
        //$(선택자).animate({동작 서술},시간,function(){});
        //$(".ban").animate({},800,function(){});
        $(".ban").animate({
            "margin-top":"-300px"
        },800,function(){//콜백함수:애니메이션 실행 후 동작내용
            //첫 이미지를 마지막으로 
            $(".ban li").eq(0).appendTo($(".ban"));
            //$(".ban li").eq(0)-li 중에 0번(첫번째)
            //A.appendTo(B);A를 B의 뒤에 추가해라 
            
            //원래 상단 마진인 0으로 설정( 안그러면 세번째 이미지가 보여지므로)
            //$("선택자").css("속성","속성값")
            $(".ban").css("margin-top","0px");
        });
    }
});