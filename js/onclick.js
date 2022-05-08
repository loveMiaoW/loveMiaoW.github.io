(function () {
            var a_idx = 0;
            window.onclick = function (event) {
                var a = new Array("❤在我面前,你永远无过失❤", "❤夜是灯火不休,你是爱至江愁❤", "❤我做事十拿九稳,现在只差你一吻❤", "❤今晚月色真美❤", "❤只要想起你,心跳是真的会自乱阵脚❤", "❤我翻遍网易云QQ虾米搜狗酷狗荔枝豆瓣喜马拉雅,也找不出一首像你这么甜的歌❤", "❤除了喜欢我,你啥也不用做❤", "❤除了喜欢你,我啥也不会❤", "❤左手刻着我,右手刻着你,心中充满爱,当我们掌心相对,所有人都会看到,我爱你❤",
                    "❤你真是世界上最可爱的生物了,心软嘴硬除了宠着还能怎么办呢❤", "❤珍簟凉风著，瑶琴寄恨生。嵇君懒书札，底物慰秋情❤", "❤你所有的浪漫,我都想参与❤","❤我的猫很皮,可不可以帮我管它❤", "❤遇见你以后，理想不再是骑马喝酒去天涯，而是再晚我也要回家❤", "❤煎茶坐看梨门雨，情话是你，风景也是你！❤", "❤苦海无涯  回… 回头是我呀❤", "❤我喜欢你，第一句是假的，第二句也是假的❤","❤一张嘴就是你的名字，一闭眼就是你的样子❤","❤有了你，我什么都不缺，心再野，也懂得拒绝❤","❤你是一树一树的花开，是燕，在梁间呢喃，你是爱，是暖，是希望，你是人间的四月天❤","❤林深时见鹿，梦醒时见你❤","❤世间万般皆无奈，有你春风最得意❤");
 
                var heart = document.createElement("b"); //创建b元素
                heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
 
                document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
                a_idx = (a_idx + 1) % a.length;
                heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
 
                var f = 10, // 字体大小
                    x = event.clientX - f / 2, // 横坐标
                    y = event.clientY - f, // 纵坐标
                    c = randomColor(), // 随机颜色
                    a = 1, // 透明度
                    s = 0.9; // 放大缩小
 
                var timer = setInterval(function () { //添加定时器
                    if (a <= 0) {
                        document.body.removeChild(heart);
                        clearInterval(timer);
                    } else {
                        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                            c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                            s + ");";
 
                        y--;
                        a -= 0.016;
                        s += 0.002;
                    }
                }, 20)
 
            }
            // 随机颜色
            function randomColor() {
 
                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";
 
            }
        }());