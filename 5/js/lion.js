(function() {
	var $text = $(".text");
	var time = null,
	 	time2 = null,
	 	time3 = null,
	 	time4 = null,
	 	time5 = null,
	 	time6 = null;
	var tabOff = false;

	initSt(); //生成strong
	initSp($(".lion"),97,1); //生成span

	// 狮子
	function initSt() {
		for (var i = 0; i < 6; i++) {
			var strong = $("<strong></strong>");
			$(".lion").append(strong);
		}

		$(".lion").find("strong").each(function(i,e) {
			$(e).css({
				position: "absolute",
				left: "0",
				top: "140px",
				webkitClipPath: data[0][i].path,
				backgroundColor: data[0][i].color,
				opacity: "0"
			});
		});
	};

	function initSp(obj,num,index) {
		for (var i = 0; i < num; i++) {
			var span = $("<span></span>")
			obj.append(span);
		}

		obj.find("span").each(function(i,e) {
			$(e).css({
				position: "absolute",
				left: (parseFloat(Math.random()) - .5) * 1500 + "px",
				top: (parseFloat(Math.random()) - .5) * 1500 + "px",
				webkitClipPath: data[index][i].path,
				backgroundColor:  data[index][i].color,
				opacity: "0"
			});
		});
	}

	$(window).on("load",function() {
		$(".lion").find("span").each(function(i,e) {
			$(e).stop().animate({
				left: "0",
				top: "0",
				opacity: "1"
			},3000);
		});
		clearTimeout(time);
		setTimeout(time,1100);
		function time() {
			$(".lion").find("strong").each(function(i,e) {
				$(e).stop().animate({
					left: "0",
					top: "0",
					opacity: "1"
				},2600);
			});
		};

		clearTimeout(time2);
		setTimeout(time2,3200);
		function time2() {

			var text = $("<span class=text1>5</span><span class=text2><span>YEARS</span><span>PROJECTS</span></span><span class=text3>WITH SUTUNAM</span><span class=text4><button><span></span></button><span>SCROLL DOWN</span></span>");

			$text.append(text);

			$text.stop().animate({top: "60%"},2000);
			$text.find(".text1").stop().animate({opacity: "1"},2000);
			$text.find(".text2 span").eq(0).stop().animate({opacity: "1"},2000,function() {
				time3();
			});
		};

		function time3() {
			$text.find(".text3").stop().animate({
				opacity: "1",
				transform: "translateY(0)"
			},800,function() {
				time4();
			});
		}

		function time4() {
			$text.find(".text4").stop().animate({opacity: "1"},800);

			roll();	// 调用滚轮事件

			$(".text4").find("span").on("click",down);

			$(".text4").find("button").on("click",down);
		}

		// 滚轮事件
		function roll() {
			$(document).on("mousewheel DOMMouseScroll", function (e) {
				var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

            	if (delta > 0) {
			        // 向上滚
			        up();
			    } else if (delta < 0) {
			        // 向下滚
			        down();
			    }
      	 	})
		};

		// 下滚事件
		function down() {
			if (tabOff == false) {
				$text.find(".text2 span").eq(0).css({
					transition: "2s",
					transform: "translateY(-55px)",
					opacity: "0"
				});

				$text.find(".text2 span").eq(1).css({
					transition: "2s",
					transform: "translateY(-55px)",
					opacity: "1"
				});
			}
			clearTimeout(time3);
			time3 = setTimeout(function() {
				tabOff = true;
			},500);

			vanish();
		}

		// 上滚事件
		function up() {
			$text.find(".text2 span").eq(0).css({
				transition: "2s",
				transform: "translateY(0)",
				opacity: "1"
			});

			$text.find(".text2 span").eq(1).css({
				transition: "2s",
				transform: "translateY(0)",
				opacity: "0"
			});
		}

		// 清除狮子
		function vanish() {
			if (tabOff == true) {
				$(".lion").find("span").each(function(i,e) {
					$(e).stop().animate({
						top: parseFloat(Math.random() * -1500) + "px",
						opacity: "0"
					},2600);
				});

				$(".lion").find("strong").each(function(i,e) {
					$(e).stop().animate({
						top: parseFloat(Math.random() * -1500) + "px",
						opacity: "0"
					},2600);
				});

				$("#wrap").css("opacity","1");

				$text.css("opacity","0");
				down = function() {};

				clearTimeout(time4);
				time4 = setTimeout(function() {
					$(".lion").remove();
					initSp($(".box"),95,2); //生成span
					$("#wrap").css({
						background: "#ee5688",
						opacity: "1"
					});
					$(".prj-text").find("p").eq(1).css("opacity","1");
					$(".btn").find("span").eq(1).css("opacity","1");
					$(".text-bg").css("opacity","1");
					$(".prj").css("opacity","1");
					$(".box").find("span").each(function(i,e) {
						$(e).css({
							opacity: "0",
							top: parseFloat(Math.random() * 1500) + "px",
							left: "0"
						})
					});
					clearTimeout(time5);
					time5 = setTimeout(function() {
						$(".box").find("span").each(function(i,e) {
							$(e).css({
								opacity: "1",
								top: "0",
								left: "0"
							})
						});
					},200)
					clearTimeout(time6);
					time6 = setTimeout(function() {
						$(".durance").find("p span").eq(0).css("opacity","1");
					},1000)
				},2500)
			}
		}


		$(".btn").find("span").on("mouseover",function() {
			$(".btn").find(".see").attr("class","change");
			$(".btn").find("span").css({
				color: "#ee5688"
			})
		})
		$(".btn").find("span").on("mouseout",function() {
			$(".btn").find("span").attr("class","see");
			$(".btn").find("span").css({
				color: "#fff"
			})
		})
	})
})();