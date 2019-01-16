/**
 *  Created by saiyingding on 2018/9/3.
 */
var self = {};
import Profit from '../../../config/management/profit';
import untils from '../../../utils/index'
var echarts = require("echarts");
export default {
    name: 'profit',
    data(){
        return {
            param: {
                startTime: '1538352000000',
                endTime: '1542868777291',
                pageNo: 1,  
                pageSize: 10  
            },
            total: {
                sum: 0, 
                balance: 0, 
                yesterday: 0
            },
            list: {
                xArr: [],
                sArr: []
            },
            pickerOptions2: {},
            value7: ''
           
        }
    },
    beforeCreate () {
        self = this;
    },
    methods:{
        logTimeChange(Val){
            console.log(Val);
        },
        
        getList(params){
            var _this = this;
            _this.loading = true;
            Profit.dayList(params).then(p=>{

                if(p.data.code == 0){
                    let record = p.data.data;

                    let lists = record.page;   
                    // let lists = [{'date':'1545101228839'}];   
                    lists.forEach(function(o, i){
                        // console.log(typeof o.date)
                        // const date=o.date
                        // console.log(new Date(1545101228839).format("MM.dd"))
                        self.list.sArr.push(o.coin);
                        self.list.xArr.push((new Date(o.date)).format("MM.dd"));
                    })
                    var myChart = echarts.init(document.getElementById('homeChart'));
                    myChart.setOption({
                        title: {
                            text: "收益总产出详情（趋势图）",
                            x:'center',
                            y:'top',
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data :  self.list.xArr.reverse()
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'收益',
                                type:'line',
                                smooth:true,
                                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                                data: self.list.sArr.reverse()
                            }
                        ]
                    })          
                    this.loading = false;
                }else{
                }
                
            },p=>{})
        },
    },
    mounted(){ 
        self.getList(self.param);
        // Profit.sum().then(function(data){
        //     var JSON = data.data;
        //     self.total = JSON.data;
        // });
    }
}
