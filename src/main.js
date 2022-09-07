let html = document.querySelector('#html');
let style = document.querySelector('#style');

let str = `
/* 你好，我是一名前端萌新
 * 接下来我将要演示以下前端技能
 * 首先准备一个div 
 */
#div1{
	border: 1px solid red;
	width: 400px;
	height: 400px;
}
/*
 *接下来将div变成太极图
 *首先将方形变成圆
 */
 #div1{
	border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 
 *太极图由阴阳构成
 *一黑一白
 */
#div1{
	background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 
 *加两个小球
 */
#div1::before{
	width: 200px;
	height: 200px;
	background-color: white;
	border-radius: 50%;
	left: 0;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}
#div1::after{
	width: 200px;
	height: 200px;
	background-color: black;
	border-radius: 50%;
	left: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
/* 
 *再抠出两个洞
 */
#div1::before{
	background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
#div1::after{
	background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
`;
let str2 = '';

let n = 0;

let step = () => {
	setTimeout(() => {
		if (str[n] === '\n') {
			str2 = str2 + '<br>';
		} else if (str[n] === ' ') {
			str2 = str2 + '&nbsp';
		} else if (str[n] === '\t') {
			str2 = str2 + '&nbsp&nbsp';
		} else {
			str2 = str2 + str[n];
		}

		html.innerHTML = str2;
		style.innerHTML = str.substring(0, n);

		window.scrollTo(0, 99999999);
		html.scrollTo(0, 99999999);
		if (n < str.length - 1) {
			n = n + 1;
			step();
		}
	}, 50);
};

step();
