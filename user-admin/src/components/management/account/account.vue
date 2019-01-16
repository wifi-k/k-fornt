<template>
	<el-row class="wrapper ">
		<div v-bind:style="{ width: getWidth.width+ 'px' }">
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">可用积分：1000分</div>
			</el-col>
			<el-tabs :tab-position="tabPosition">
				<el-tab-pane label="消费记录">
					<el-form :inline="true" :model="formInline">
						<el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<el-form-item>
							<el-button type="primary" >搜索</el-button>
						</el-form-item>
					</el-form>
					<el-table v-loading="loading" :data="tableData" :max-height="maxheight" style="width:99%">
						<el-table-column v-for="(table,index) in tableList" :label="table.label" :prop="table.prop" :width="table.width" :key="index"></el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<a href="javascript:void(0)" class="staricon icon-allow" @click="handleAllow(scope.$index,scope.row)" title="放行"></a>
							</template>
						</el-table-column>
					</el-table>
					<div class="pageContainer">
						<el-pagination @current-change="handleCurrentChange" :current-page="current_page" :page-size="page_size" layout="total,prev,pager,next ,jumper" :page-count="total_page" :total="total"></el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="充值记录">
					<el-form :inline="true" :model="formInline">
						<el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<el-form-item>
							<el-button type="primary">搜索</el-button>
						</el-form-item>
					</el-form>
					<el-table v-loading="loading" :data="tableData" :max-height="maxheight" style="width:99%">
						<el-table-column v-for="(table,index) in rechargeTableList" :label="table.label" :prop="table.prop" :width="table.width" :key="index"></el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<a href="javascript:void(0)" class="staricon icon-allow" @click="handleAllow(scope.$index,scope.row)" title="放行"></a>
							</template>
						</el-table-column>
					</el-table>
					<div class="pageContainer">
						<el-pagination @current-change="handleCurrentChange" :current-page="current_page" :page-size="page_size" layout="total,prev,pager,next ,jumper" :page-count="total_page" :total="total"></el-pagination>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</el-row>
</template>
<style lang="less" scoped>
@import '../../../theme/theme.less'; 
</style>
<script>
module.exports = require('./account');
</script>
