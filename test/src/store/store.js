/**
 * Created by saiyingding  on 2018/5/29.
 * 本地存储 设置、获取、清除
 */
class Store {
    constructor(){
        this.store = window.localStorage;
    }
    set(key,value,expired,fn){
        try {
            value = JSON.stringify(value);
        }catch (e){
            value = value;
        }
        this.store.setItem(key,value);
        // fn && fn()
        // setTimeout(() => {
        //   this.store.removeItem(key);
        // }, 1000*60*60);
          this.store.setItem(`${key}_expried_`,Date.now()+1000*60*60*6*expired);
        
    }
    get(key,fn){
        if(!key){
            throw new Error('没有找到key。');
            return;
        }
        if(typeof key === 'object'){
            throw  new Error('key不能是一个对象');
            return;
        }
       
        const now = Date.now()
        const expired = this.store.getItem(`${key}_expried_`)
        if(now >=expired){
          this.store.removeItem(key);
          return
        }
        let value = this.store.getItem(key);
        if(value !== null){
            try {
                value = JSON.parse(value);
            }catch (e){
                value = value;
            }
        }
        return value;
    }
    remove(key){
        this.store.removeItem(key);
    }
}
export default new Store();