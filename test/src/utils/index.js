var Util = {
    extend: function(obj, props){
        for (var key in props) obj[key] = props[key];
        return obj;
    },
    axiosError:function(that, data, callback){
    	if(data.resultCode == "0001003"){
    		if(!callback){
    			callback = function(data){
					that.$notify({
			            type: 'info',
			            message: data.message,
			            duration: 1500,
			        	offset: 50
			         });	
    			}
    		}
    		callback&&callback(data);
				   
		}else{					                                   
		    that.$router.push('/login');
		}
    },
    formatDate:function(date,fmt){
        if(/(y+)/.test(fmt)){
            fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth()+1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for(let k in o){    
            let str = o[k]+'';
            if(new RegExp(`(${k})`).test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
            }
        }
        return fmt;
    }

}   
Date.prototype.format = function(format){
            var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(),    //day
            "h+" : this.getHours(),   //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
            "S" : this.getMilliseconds() //millisecond
            }
            if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (this.getFullYear()+"").substr(4 - RegExp.$1.length));
            for(var k in o)if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
            RegExp.$1.length==1 ? o[k] :
            ("00"+ o[k]).substr((""+ o[k]).length));
            return format;
}
            
function padLeftZero(str){
    return ('00'+str).substr(str.length);
}                           
module.exports = Util;