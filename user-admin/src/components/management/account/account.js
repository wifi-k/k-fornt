/**
 *  Created by saiyingding on 2018/5/29.
 */


import Merchant from '../../../config/management/merchant';
import Table from '../../../components/management/account/table.js';

export default {
    name: 'merchant',
    data(){
        return {
            tableList: Table.table,
            rechargeTableList: Table.rechargeTable,
            getWidth: {
                width: '',
                height: ''
            },
            tableData: [],
            page_size: 1,
            current_page: 1,
            total: 0,
            total_page: 0,
            recharge: []
        }
    },
    methods:{
        setSize() {
            this.getWidth.width = window.innerWidth - 280;
            this.maxheight = window.innerHeight - 320;
        },
        handleSearch(){       
            let params = {
                pageNum: this.current_page,
                pageSize: this.page_size
            };
            this.getList(params);
        },
        handleCurrentChange(val){
            this.current_page = val;
            let params = {
                pageNum: this.current_page,
                pageSize: this.page_size
            };
            this.getList(params);
        },
        getList(params){

            this.loading = true;
            Merchant.queryByPage(params).then(p=>{
           
                if(p.data.success){
                    let record = p.data.resultData;
                    let lists = record.list;   
                    for(var i in lists){
                        lists[i].onOffLine =  lists[i].online + '/' +lists[i].offline;
                    }             
                    this.total = record.total; 
                    this.total_page = record.pages;
                    this.current_page = record.pageNum;
                    this.tableData = lists;
                    this.loading = false;
                }else{
                   /* if(p.data.resultCode == '0002005'){*/
                        this.$router.push('/login');
                    /*}*/
                }
                
            },p=>{})
        }
    },
    mounted(){
        let params = {
            pageNum: this.current_page,
            pageSize: this.page_size
        };
        this.getList(params);
    }
}