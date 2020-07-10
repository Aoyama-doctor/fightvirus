/*
*精灵的实现
*/
export default class Sprite{        //精灵类
    constructor(imgSrc='',hight=0,width=0,x=0,y=0){     //精灵类的构造函数
        this.img=new Image()
        this.img.src=imgSrc
        this.hight=hight
        this.width=width
        this.x=x
        this.y=y
        this.visible=true 
    }
    
    /*
    *将精灵画在画布上
    */
    DrawToCanvas(ctx){
        if(!this.visible)       //如果当前精灵不可见,则返回
        return
        ctx.DrawImage(
            this.img,
            this.x,
            this.y,
            this.hight,
            this.width
        )
    }
    /*
    *碰撞检测
    *喷雾的直线直线轨迹与椭圆形态病毒的碰撞检测
    */
}