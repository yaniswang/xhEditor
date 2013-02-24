xhEditor
=================

xhEditor是一个基于jQuery开发的简单迷你并且高效的在线可视化HTML编辑器，基于网络访问并且兼容IE 6.0+,Firefox 3.0+,Opera 9.6+,Chrome 1.0+,Safari 3.22+。

xhEditor完全基于Javascript开发，您可以应用在任何的服务端语言环境下，例如：PHP、ASP、ASP.NET、JAVA等。

xhEditor可以在您的CMS、博客、论坛、商城等互联网平台上完美的嵌入运行，能够非常灵活简单的和您的系统实现完美的无缝衔接。

自2009年4月首个版本发布以来，凭借我们人性化的用户体验和不断持续完善的态度，越来越多的网站选择了使用xhEditor。

我们不是最好的，但是我们会努力做的更好，我们愿意倾听和接受所有用户的心声，长期坚持的开发和完善下去。


主要特点：
=================

* 精简迷你：初始加载4个文件，包括：1个js(50k)+2个css(10k)+1个图片(5k)，总共65k。若js和css文件进行gzip压缩传输，可以进一步缩减为24k左右。
* 使用简单：简单的调用方式，加一个class属性就能将您的textarea立马变成一个功能丰富的可视化编辑器。
* 无障碍访问：提供WAI-ARIA全面支持，全键盘精细操作，全程语音向导，提供完美无障碍访问体验，让残疾人也能够谱写精彩人生。
* 内置Ajax上传：内置强大的Ajax上传，包括HTML4和HTML5上传支持(多文件上传、真实上传进度及文件拖放上传)，剪切板上传及远程抓取上传，追求完美的用户上传体验。
* Word自动清理：实现Word代码自动检测并清理，提供高效完美的Word代码过滤方案，生成代码最优化精简，但是却不丢失任何细节效果。
* UBB可视化编辑：提供完美的UBB可视化编辑解决方案，在您获得安全高效代码存储的同时，又能享受可视化编辑的便捷。

兼容以下浏览器：
=================

* IE6, IE7, IE8, IE9
* Firefox 3.0 +
* Chrome 1.0 +
* Opera 9.6 +
* Safari 3.22 +

许可协议：
=================

xhEditor默认基于[LGPL开源许可协议](http://xheditor.com/license/lgpl.txt)发布，您只需遵守LGPL开源协议，即可永久免费使用xhEditor编辑器。以下为LGPL开源许可概要：

* 如果您不对源代码进行任何修改，直接调用组件，可以以任意方式自由使用：开源、非开源、商业及非商业；
* 如果您对源代码进行任何的修改或者衍生，涉及修改部分的额外代码和衍生的代码都必须采用LGPL协议开放源代码；
* 无论您对源代码的修改程度如何，版权都归xhEditor开发团队所有，我们保留所有权利；
* 无论您对源代码如何修改，都必需在明显和恰当地位置宣告版权声明 ( 请将版权信息留于关于按钮中 )；

使用方法：
=================

1. 下载xhEditor最新版本。
 
    下载地址：http://xheditor.com/download

2. 解压并上传

    解压压缩文件，将其中的xheditor.min.js以及xheditor_lang、xheditor_emot、xheditor_plugins和xheditor_skin四个文件夹上传到网站相应目录

    注：如果您网站中没有使用jQuery框架，也请一并上传jquery文件夹中的jquery-1.4.4.min.js

3. 引用JS代码

    在相应html文件的</head>之前添加

        <script type="text/javascript" src="http://static.xxx.com/js/jquery.js"></script>
        <script type="text/javascript" src="http://static.xxx.com/js/xheditor.js"></script>
        <script type="text/javascript" src="http://static.xxx.com/js/xheditor_lang/zh-cn.js"></script>

    注：如果jQuery之前已经在项目页面中使用，请勿重复添加引用代码

4. 初始化编辑器

    方法1：在textarea上添加属性： class="xheditor"
        
        <textarea name="content" class="xheditor">test</textarea>

    方法2：在您的页面初始JS代码里加上： $('#elm1').xheditor();

        $({
            $('#elm1').xheditor()；
        });

    相应的卸载编辑器的代码为

        $('#elm1').xheditor(false)；


    重要说明：2种初始化方法只能选择其中一种，不能混合使用，优先级分别是：class初始化>JS初始化，如果页面中使用了class初始化模式，JS初始化代码就无效了

如何开发构建xhEditor：
=================

安装nodejs：
-----------------

    http://nodejs.org/

获取代码：
-----------------

    git clone git://github.com/yaniswang/xhEditor.git

安装grunt：
-----------------

    npm install grunt-cli -g
    cd xhEditor && npm install

确认grunt并构建:
-----------------

    grunt -version
    grunt


链接向导：
=================

* **官方网站**：[http://xheditor.com/](http://xheditor.com/)
* **软件下载**：[http://xheditor.com/download](http://xheditor.com/download)
* **技术手册**：[http://xheditor.com/manual](http://xheditor.com/manual)
* **问题反馈**：[http://forum.xheditor.com/](http://forum.xheditor.com/)