import Sprite from './sprite'
import DataBus from '../databus'

let databus=new DataBus

const __={
    timer:Symbol(timer)
}

/*
*帧动画类
*/
export default class Animation extends sprite{
    constructor(imgSrc,hight,width){
        super(imgSrc,hight,width)

        //当前动画是否在播放
        this.isPlaying=false

        //当前动画是否循环播放
        this.loop=false

        //每一帧的时间间隔
        this.interval=1000/60

        //帧定时器
        this[__.timer]=timer

        //当前播放的帧
        this.index=-1

        //总帧数
        this.count=0

        //帧图片
        this.imgList=[]

        /*
        *推入全局动画池中
        *便于全局绘图的时候遍历和绘制当前的动画帧
        */
        databus.animation.push(this)
    }
    /*
    *帧动画的实现
    */
    
}