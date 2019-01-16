/**
 *  Created by saiyingding on 2018/5/29.
 */


export default {
    name: 'send-sms-btn',    
    data(){
        return {  
            show: true,
            count: '',
            timeCount: 60
        }
    },
    computed:{
    },
    methods:{
        getCode(){
          const TIME_COUNT = this.timeCount;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
             } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
             }
            }, 1000)
           }
        } ,
    },
    mounted(){
    }
}
