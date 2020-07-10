const __={
    pooldic:Symbol('pooldic')
}

/*
*实现简单的对象池
*用于存储对象
*重复使用对象
*减少游戏垃圾的产生
*提高游戏性能
*/
export default class Pool{
    constructor(){          //类的构造函数
        this[__.pooldic]={}
    }
    
    /*
    *根据对象的标识获取相应的对象池
    *从原本的对象池获取或者新建对象池
    */
   //类的成员函数
    getPoolBySign(name) {
        return this[__.pooldic][name]||(this[__.pooldic][name]=[])
    }

    /*
    *根据传入的对象标识查询对象池
    *对象池为空创建新的类
    *不为控制从里面取
    */
    getItemByClass(name,classname){
        let pool=this.getpoolbysign[name]
        let result=(
            pool.length
            ?pool.shift()
            :new classname()
        )
        return result
    }

    /*
    *将对象会收到对象池，方便使用
    */
    recycle(name,instance){
        this.getPoolBySign(name).push(instance)
    }
}
