$(document).ready(function() {
        
		$("#buton li").click(function(){
			var a=$(this).index();
			degistir(a);
		});		
		
		$("#ileri").click(function(){
			var a=$("#buton li.active").index();
			a++;
			if(a>4){a=0;}
			degistir(a);
		});
		
		$("#geri").click(function(){
			var a=$("#buton li.active").index();
			a--;
			if(a<0){a=4;}
			degistir(a);
		});
		
		var calistir=setInterval(function(){$("#ileri").click();},1000);
		

		$("#slider").hover(
			function(){clearInterval(calistir); },
			function(){
				if( $("#durdur").attr("data-veri")!=0 ){
				calistir=setInterval(function(){$("#ileri").click();},1000); }
			}
		);
		
		
		$("#durdur").click(function() {
            clearInterval(calistir);
			$(this).attr("data-veri","0");
			$(this).hide();
			$("#oynat").show();
			$("#oynat").attr("data-veri","1");
        });
		
		$("#oynat").click(function() {
            calistir=setInterval(function(){$("#ileri").click();},1000);
			$(this).attr("data-veri","0");
			$(this).hide();
			$("#durdur").show();
			$("#durdur").attr("data-veri","1");
        });
		
		
		 $( "#slider" ).on( "swipeleft", function(){$("#ileri").click();} );
		 $( "#slider" ).on( "swiperight", function(){$("#geri").click();});
		
		
		
    });
	$("#resimler_icerik .perde").click(function(){
				var a=$(this).parent().find("img").attr("src");
				$(".modal-body img").attr("src",a)
			});
			$("#resimler .perde").click(function(){
				var a=$(this).parent().find("img").attr("src");
				$(".modal-body img").attr("src",a)
			});
	
	function degistir(a){
			$("#buton li").removeClass("active");
			$("#buton li").eq(a).addClass("active");
			
			$("#resim li img").removeClass("aktif");
			$("#resim li").eq(a).find("img").addClass("aktif");
			
			$("#yazi li").removeClass("aktif");
			$("#yazi li").eq(a).addClass("aktif");
	}
	$("#menu_alt ul li").click(function(){
			
				var a=$(this).index();
				$("#menu_alt ul li").removeClass("menu_alt_aktif");
				$("#menu_alt ul li").eq(a).addClass("menu_alt_aktif");
				$("#medya_liste li").removeClass("medya_liste_aktif");
				$("#medya_liste li").eq(a).addClass("medya_liste_aktif");
				
			});
			var gecis=setInterval(function(){
				var a=$("#menu_alt ul li.menu_alt_aktif").index();
				a++;
				if(a>1){a=0;}
				$("#menu_alt ul li").removeClass("menu_alt_aktif");
				$("#menu_alt ul li").eq(a).addClass("menu_alt_aktif");
				$("#medya_liste li").removeClass("medya_liste_aktif");
				$("#medya_liste li").eq(a).addClass("medya_liste_aktif");
				
			},3000);
			
			$("#medya_liste li .col-sm-3").hover(
			function(){clearInterval(gecis);},
			function(){
				gecis=setInterval(function(){
				var a=$("#menu_alt ul li.menu_alt_aktif").index();
				a++;
				if(a>1){a=0;}
				$("#menu_alt ul li").removeClass("menu_alt_aktif");
				$("#menu_alt ul li").eq(a).addClass("menu_alt_aktif");
				$("#medya_liste li").removeClass("medya_liste_aktif");
				$("#medya_liste li").eq(a).addClass("medya_liste_aktif");
			},30000);	
			});
		 $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Yazamazsınız...');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' Karakter Kaldı');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });
			

			
			