<template>
	<div>
		<div>
			<el-form :inline="true" :model="formInline" class="selectMerchant" >
				<el-form-item>
					<el-input  placeholder="全称/简称" v-model="title"></el-input>
				</el-form-item>
				<el-form-item label="区域筛选" >
					<el-select placeholder="请选择" @change="handleChangeProv" v-model="provsVal" style="width: 100px">
						<el-option  v-for="item in formInline.provs"  :key="item.realValue"  :label="item.showValue" :value="item.realValue">
						</el-option>
					</el-select>					
					<el-select placeholder="请选择" v-model="provsItemVal" style="width: 100px">
						<el-option v-for="item in formInline.provsItems"  :key="item.realValue"  :label="item.showValue" :value="item.realValue">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="类型">
					<el-select placeholder="请选择" @change="handleChangeType" v-model="bizTypeVal" style="width: 100px">
						<el-option v-for="item in formInline.bizTypes"  :key="item.realValue"  :label="item.showValue" :value="item.realValue">
						</el-option>
					</el-select>
					<el-select placeholder="请选择" v-model="bizTypeItemVal" style="width: 100px">
						<el-option v-for="item in formInline.bizTypeItems"  :key="item.typeItemVal"  :label="item.showValue" :value="item.realValue" >
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button class="btn_search" @click="handleSearch">搜索</el-button>
				</el-form-item>
			</el-form>
		</div>
		
		<el-table ref="table"  :data="merchantData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
		@select="hadleSelect" @select-all="hadleSeletAll">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="店铺简称" width="120" prop="shortitle">
			</el-table-column>
			<el-table-column prop="areaValue" label="城市街道" width="200">
			</el-table-column>
			<el-table-column prop="location" label="地址">
			</el-table-column>
		</el-table>	 
		<div class="pageContainer" style="float: none">
        	<el-pagination @current-change="handleCurrentChange" :current-page="current_page" :page-size="page_size" layout="total,prev,pager,next ,jumper" :page-count="total_page" :total="total"></el-pagination>
        </div>
      <div>
      <h2 class="mTitle">已选择的店铺 已选{{showArr.length}}家,还可选{{showNums-showArr.length}}家店铺,最多选择 {{showNums}}</h2>
      <ul class="mUl"><li v-for="show in showArr" >
      	{{show.shortitle}} <i class="el-icon-circle-close" @click="handleDel(show.index, show.idKey)" ></i>
      </li></ul>
      </div>
      <div class="dialog-footer" slot="footer">
        <el-button @click="handleCancleForm()" class="el-button--primary">提 交</el-button>
      
      </div>
	</div>
</template>
<style lang="less" scoped>
@import '../../management/manage.less';
</style>
<style>
.mTitle {
	line-height: 1;
    font-size: 15px;
    font-weight: 700;
    color: #1f2d3d;
}
ul.mUl, ul.mUl li {
	list-style:none;
	margin: 0; padding: 0;
}
ul.mUl {
	clear: both;
	z-index: 1; overflow:hidden;
	padding-bottom: 10px;
}
ul.mUl li {
	width: 25%;
	height: 30px; line-height: 30px;
	float:left;
}
.pageContainer {
	float: none;
	clear: both;
	text-align: right;
}
.dialog-footer {
	text-align: center;
}
.wrapper {
	border: 1px solid #e5e5e5;
	background: #fff;
	padding: 20px;
	text-align: left;
}
.el-form {
	width: 100%;
}

.el-form-item__content span.unit {
	width: 40px;
	left: 390px;
	position: absolute;
	text-align: left;
}

.center .el-form-item__content {
	text-align: left;
}

.topName {
	background: #e5e9f2;
	padding: 8px;
	margin-bottom: 30px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	font-weight: bold;
	font-size: 14px;
	height: 19px;
}

.selectMerchant .el-form-item {
	margin-bottom: 12px;
}

</style>
<script>
module.exports = require('./selectMerchant');

</script>
