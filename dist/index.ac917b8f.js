let html=document.querySelector("#html"),style=document.querySelector("#style"),str="\n/* 你好，我是一名前端萌新\n * 接下来我将要演示以下前端技能\n * 首先准备一个div \n */\n#div1{\n\tborder: 1px solid red;\n\twidth: 400px;\n\theight: 400px;\n}\n/*\n *接下来将div变成太极图\n *首先将方形变成圆\n */\n #div1{\n\tborder-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border: none;\n}\n/* \n *太极图由阴阳构成\n *一黑一白\n */\n#div1{\n\tbackground: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \n *加两个小球\n */\n#div1::before{\n\twidth: 200px;\n\theight: 200px;\n\tbackground-color: white;\n\tborder-radius: 50%;\n\tleft: 0;\n\ttop: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n}\n#div1::after{\n\twidth: 200px;\n\theight: 200px;\n\tbackground-color: black;\n\tborder-radius: 50%;\n\tleft: 0;\n\tbottom: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n}\n/* \n *再抠出两个洞\n */\n#div1::before{\n\tbackground: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n}\n#div1::after{\n\tbackground: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);\n}\n",str2="",n=0,step=()=>{setTimeout((()=>{"\n"===str[n]?str2+="<br>":" "===str[n]?str2+="&nbsp":"\t"===str[n]?str2+="&nbsp&nbsp":str2+=str[n],html.innerHTML=str2,style.innerHTML=str.substring(0,n),window.scrollTo(0,99999999),html.scrollTo(0,99999999),n<str.length-1&&(n+=1,step())}),50)};step();
//# sourceMappingURL=index.ac917b8f.js.map
