canvas = document.getElementById("canvas");
 context = canvas.getContext("2d");
 width = canvas.width = window.innerWidth;
 height = canvas.height = window.innerHeight;
 // création d'un tableau
 particle = [];
 particleCount = 0,
    gravity = 0.3,
    colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548'
    ];
 
 for (var i = 0; i < 300; i++) {
    particle.push({
        x: width / 2,
        y: height / 2,
        boxW: randomRange(5, 20),
        boxH: randomRange(5, 20),
        size: randomRange(2, 8),
        spikeran: randomRange(3, 5),
        velX: randomRange(-8, 8),
        velY: randomRange(-50, -10),
        angle: convertToRadians(randomRange(0, 360)),
        color: colors[Math.floor(Math.random() * colors.length)],
        anglespin: randomRange(-0.2, 0.2),
        draw: function() {
            context.save();
            context.translate(this.x, this.y);
            context.rotate(this.angle);
            context.fillStyle = this.color;
            context.beginPath();
            // drawStar(0, 0, 5, this.boxW, this.boxH);
            context.fillRect(this.boxW / 2 * -1, this.boxH / 2 * -1, this.boxW, this.boxH);
            context.fill();
            context.closePath();
            context.restore();
            this.angle += this.anglespin;
            this.velY *= 0.999;
            this.velY += 0.3;
            this.x += this.velX;
            this.y += this.velY;
            if (this.y < 0) {
                this.velY *= -0.2;
                this.velX *= 0.9;
            };
            if (this.y > height) {
                this.anglespin = 0;
                this.y = height;
                this.velY *= -0.2;
                this.velX *= 0.9;
            };
            if (this.x > width || this.x < 0) {
                this.velX *= -0.5;
            };
        },
    });
 }
 r1 = {
    x: width / 2 - 150,
    y: height / 2 - 150,
    width: 300,
    height: 300,
    velX: 0,
    velY: -10,
    //img: loadImage("1427051642-smiley.png"),
    alphatop: 0
 } ;
 function drawScreen() {
    size = 50;
    //pFontName = "Lucida Sans Unicode";
    //context.font = size + "pt " + pFontName;
    //context.fillText("Confetti party !!!", width / 2, 150);
    if (r1.alphatop < 1) {
        r1.alphatop += 0.01;
    } else {
        r1.alphatop = 1;
    }
    context.globalAlpha = r1.alphatop;
    //context.drawImage(r1.img, r1.x, r1.y);
    context.textAlign = 'center';
    if (r1.alphatop === 1) {
        r1.velY *= 0.999;
        r1.velY += 0.3;
        r1.x += r1.velX;
        r1.y += r1.velY;
    }
    if (r1.y + r1.height > height) {
        r1.anglespin = 0;
        r1.y = height - r1.height;
        r1.velY *= -0.8;
        r1.velX *= 0.9;
    };
    context.globalAlpha = 1;
    for (var i = 0; i < particle.length; i++) {
        particle[i].draw();
    }
 }
 function loadImage(url) {
    var img = document.createElement("img");
    img.src = url;
    return img;
 }
 function update() {
   context.clearRect(0, 0, width, height);
    drawScreen();
    requestAnimationFrame(update);
 }
 //update();
 function randomRange(min, max) {
    return min + Math.random() * (max - min);
 }
 function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
 }
 function convertToRadians(degree) {
    return degree * (Math.PI / 180);
 }
 function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle = color;
    context.fill();
 }
 
 function show_yytitle(){
	        $('#yy-title').css('display', 'block');
	        $("#yy-title").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function show_yyfoot(){
	        $('#yy-foot').css('display', 'block');
	        $("#yy-foot").removeClass("slideInUp animated").addClass("slideInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("slideInUp animated");
			    $(this).css("display", "block");
			});
	    }
		
		function show_message0(){
	        $('#message0').css('display', 'block');
	        $("#message0").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
				Clickable = 1;
			});
	    }
		
		function hide_message0(){
			$("#message0").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
			});
	    }
		
		function show_message1(){
	        $('#message1').css('display', 'block');
			$('#message1').css('-webkit-animation-delay', '1.2s');
	        $("#message1").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
				$(this).css('-webkit-animation-delay', '0s');
				Clickable = 1;
			});
	    }
		
		function hide_message1(){
			$("#message1").css("display", "none");
	    }
		
		function show_message2(){
	        $('#message2').css('display', 'block');
	        $("#message2").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_message2(){
	        $('#message2').css("display", "none");
	    }
		
		function show_message3(){
	        $('#message3').css('display', 'block');
	        $("#message3").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_message3(){
	        $('#message3').css("display", "none");
	    }
		
		function show_message_results(){
	        $('#message_results').css('display', 'block');
	        $("#message_results").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_message_results(){
	        $('#message_results').css("display", "none");
	    }
		
		function show_treasure(){
			
			$('#treasure1').css('display', 'block');
			$('#treasure1').css('-webkit-animation-delay', '0.6s');
	        $("#treasure1").removeClass("bounceIn2 animated").addClass("bounceIn2 animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn2 animated");
			    $(this).css("display", "block");
				$(this).css('-webkit-animation-delay', '0s');
			});
			
			$('#treasure2').css('display', 'block');
			$('#treasure2').css('-webkit-animation-delay', '1.0s');
	        $("#treasure2").removeClass("bounceIn2 animated").addClass("bounceIn2 animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn2 animated");
			    $(this).css("display", "block");
				$(this).css('-webkit-animation-delay', '0s');
			});
			
			$('#treasure3').css('display', 'block');
			$('#treasure3').css('-webkit-animation-delay', '0.8s');
	        $("#treasure3").removeClass("bounceIn2 animated").addClass("bounceIn2 animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn2 animated");
			    $(this).css("display", "block");
				$(this).css('-webkit-animation-delay', '0s');
			});
	    }
		
		function show_treasure1_left(){
	        $('#treasure1').css('display', 'block');
	        $("#treasure1").addClass("bounceInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceInLeft animated");
			    $(this).css("display", "block");
			});
		}
		
		function hide_treasure1_left(){
	        $("#treasure1").addClass("bounceOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOutLeft animated");
			    $(this).css("display", "none");
			});
		}
		
		function show_treasure2_left(){
	        $('#treasure2').css('display', 'block');
	        $("#treasure2").addClass("bounceInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceInLeft animated");
			    $(this).css("display", "block");
			});
		}
		
		function hide_treasure2_left(){
	        $("#treasure2").addClass("bounceOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOutLeft animated");
			    $(this).css("display", "none");
			});
		}
		
		function show_treasure2_right(){
	        $('#treasure2').css('display', 'block');
	        $("#treasure2").addClass("bounceInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceInRight animated");
			    $(this).css("display", "block");
			});
		}
		
		function hide_treasure2_right(){
	        $("#treasure2").addClass("bounceOutRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOutRight animated");
			    $(this).css("display", "none");
			});
		}
		
		function show_treasure3_right(){
	        $('#treasure3').css('display', 'block');
	        $("#treasure3").addClass("bounceInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceInRight animated");
			    $(this).css("display", "block");
			});
		}
		
		function hide_treasure3_right(){
	        $("#treasure3").addClass("bounceOutRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOutRight animated");
			    $(this).css("display", "none");
			});
		}
		
		function move_treasure1(){
			$('#treasure1').css('width', '150px').css('left', '50%').css('top', '-10px').css('margin-left','-75px');	
		}
		
		function move_treasure1_back(){
			$('#treasure1').css('width', '120px').css('left', '5%').css('top', '0px').css('margin-left','0px');	
		}
		
		function move_treasure2(){
			$('#treasure2').css('width', '150px').css('top', '-10px').css('margin-left','-75px');	
		}
		
		function move_treasure2_back(){
			$('#treasure2').css('width', '120px').css('top', '0px').css('margin-left','-60px');	
		}
		
		function move_treasure3(){
			$('#treasure3').css('width', '150px').css('right', '50%').css('top', '-10px').css('margin-right','-75px');	
		}
		
		function move_treasure3_back(){
			$('#treasure3').css('width', '120px').css('right', '5%').css('top', '0px').css('margin-right','0px');	
		}
		
		function show_button_back(){
	        $('#back').css('display', 'block');
	        $("#back").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
				Clickable = 1;
			});
	    }
		
		function hide_button_back(){
	        $("#back").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
				Clickable = 1;
			});
	    }
		
		function show_button_chose(){
	        $('#chose').css('display', 'block');
	        $("#chose").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
				Clickable = 1;
			});
	    }
		
		function hide_button_chose(){
	        $("#chose").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
				Clickable = 1;
			});
	    }
		
		function show_key(){
	        $('#key').css('display', 'block');
	        $("#key").removeClass("bounceIn2 animated").addClass("bounceIn2 animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn2 animated");
			    $(this).css("display", "block");
				Clickable = 1;
			});
	    }
		
		function hide_key(){
			$('#key').css('top', '25px');
			$('#key').css('-webkit-animation-delay', '0.8s');
	        $("#key").removeClass("bounceIn2 animated").addClass("zoomOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("zoomOut animated");
			    $(this).css("display", "none");
				$(this).css('-webkit-animation-delay', '0s');
			});
			$('#key img').css('-webkit-animation-delay', '0.3s');
			$("#key img").addClass("flip animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("flip animated");
				$(this).css('-webkit-animation-delay', '0s');
			});
		}
		
		function show_hand(){
	        $('#hand').css('display', 'block');
			$('#hand').css('-webkit-animation-delay', '1.2s');
			$('#hand img').css('-webkit-animation-delay', '0.8s');
			$("#hand img").addClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("zoomIn animated");
				$(this).css('-webkit-animation-delay', '0s');
				$('#hand').css('-webkit-animation-delay', '0s');
			});
	    }
		
		function hide_hand(){
	        $("#hand img").removeClass("slideOutRight animated").addClass("slideOutRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("slideOutRight animated");
				$('#hand').css('display', 'none');
			});
		}
		
		function shake_treasure(){
			$('#treasure'+treasureChose).css('display', 'block');
			$('#treasure'+treasureChose).css('animation-iteration-count', 'infinite');
			$('#treasure'+treasureChose).css('-webkit-animation-iteration-count', 'infinite');
			$('#treasure'+treasureChose).css('-webkit-animation-delay', '1.2s');
			$('#treasure'+treasureChose).addClass("wobble animated");
		}
		
		function show_results(){
	        $('#results').css('display', 'block');
			$("#results").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
				$(this).css('display', 'block');
			});
	    }
		
		function hide_results(){
	        $("#results").removeClass("bounceIn animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
				$(this).css('display', 'none');
			});
		}
		
		function show_noresults(){
	        $('#noresults').css('display', 'block');
			$("#noresults").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
				$(this).css('display', 'block');
			});
	    }
		
		function hide_noresults(){
	        $("#noresults").removeClass("bounceIn animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
				$(this).css('display', 'none');
			});
		}

		function show_avatar(){
			$('#avatar').css('display', 'block');
			$("#avatar").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function () {
					$(this).removeClass("bounceIn animated");
					$(this).css('display', 'block');
				});
		}

		function hide_avatar(){
			$("#avatar").removeClass("bounceIn animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function () {
					$(this).removeClass("bounceOut animated");
					$(this).css('display', 'none');
				});
		}
		
		function show_button_get(){
	        $('#get').css('display', 'block');
	        $("#get").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
				Clickable = 1;
			});
	    }
		
		function hide_button_get(){
	        $("#get").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
			});
	    }
		
		function show_button_cochat(){
	        $('#share_cochat').css('display', 'block');
	        $("#share_cochat").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_button_cochat(){
	        $("#share_cochat").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
			});
	    }
		
		function show_button_wechat(){
	        $('#share_wechat').css('display', 'block');
	        $("#share_wechat").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_button_wechat(){
	        $("#share_wechat").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
			});
	    }
		
		function show_button_check_video(){
	        $('#check_video').css('display', 'block');
	        $("#check_video").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
			    $(this).css("display", "block");
			});
	    }
		
		function hide_button_check_video(){
	        $("#check_video").removeClass("bounceOut animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
			    $(this).css("display", "none");
			});
	    }
		
		function show_results_card(){
	        $('#results_card').css('display', 'block');
			$("#results_card").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
				$(this).css('display', 'block');
			});
	    }
		
		function hide_results_card(){
	        $("#results_card").removeClass("bounceIn animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
				$(this).css('display', 'none');
			});
		}
		
		function show_wow(){
			$(canvas).css('display', 'block');
			update();	
		}
		
		function show_time(){
			$('#time').css('display', 'block');
			$("#time").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceIn animated");
				$(this).css('display', 'block');
			});
		}
		
		function hide_time(){
	        $("#time").removeClass("bounceIn animated").addClass("bounceOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
			    $(this).removeClass("bounceOut animated");
				$(this).css('display', 'none');
			});
		}