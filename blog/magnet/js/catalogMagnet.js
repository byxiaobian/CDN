const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://up.enterdesk.com/edpic_source/53/bd/34/53bd346ecd37103b7b2ff4cf0623ad0b.jpg",
			"https://up.enterdesk.com/edpic_source/d8/3f/e4/d83fe4b722707242ba81097bb5cc80cf.jpg",
			"https://up.enterdesk.com/edpic_source/d4/d8/5e/d4d85e1e7547fb4baf14a8dced41b460.jpg",
			"https://up.enterdesk.com/edpic_source/8d/81/2a/8d812a39873567527e7361d523533528.jpg",
			"https://up.enterdesk.com/edpic_source/92/14/4e/92144e749487ef38d2f9acff3c0bc9f1.jpg",
			"https://up.enterdesk.com/edpic_source/56/0f/d2/560fd2d6362a702dbccdcbc1d6914076.jpg",
			
		],
		//这里是磁贴描述信息
		describe:[
			"JAVA学习笔记",
			"Linux学习笔记",
			"数据库相关笔记",
			"前端相关知识笔记",
			"我的各种教程",
			"我的游戏评测",
			"生活点点滴滴",
			"一切胡思乱想",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");