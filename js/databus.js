import pool from './base/pool'

let instance                    //新建instance变量，用意何在？
export default class DataBase{      //全局管理类
    constructor(){          //构造函数
        if(instance)
        return instance

        instance=this
        this.pool=new Pool()
        this.reset()
    }
    reset(){                //成员函数——置零
        this.frame=0
        this.score=0
        this.virus=[]
        this.animals=[]
        this.spray=[]
        this.GameOver=false
    }
    /*
    *回收病毒入对象池
    *从此不再进入帧循环
    */
    recycleVirus(viru){
        let temp=this.virus.shift()
        temp.visiable=false
        temp.pool.recycle('viru',viru)
    }

    /*
    *回收动物入对象池
    *从此不再进入帧循环
    */
    recycleAnimals(animal){
        let temp=this.pool.shift()
        this.visiable=false
        this.pool.recycle('animal',animal)
    }

    /*
    *回收喷雾入对象池
    *从此不再进入帧循环
    */
    recycleSpray(spray){
        let temp=this.pool.shift()
        this.visiable=false
        this.pool.recycle('spray',spray)
    }
}