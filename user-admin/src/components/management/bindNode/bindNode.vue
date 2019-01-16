<template>
	<el-row class="wrapper" id="wrapperbind">
		<el-form label-width="120px"  ref="ruleForm" :model="ruleForm" :rules="nodeRules" :show-message="false">
			<el-form-item label="节点编号：" prop="file" id="wrapperForm">
				<el-input type="textarea" v-model="ruleForm.file" rows="12" placeholder="支持换行添加多个节点"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
				<el-button @click="cancleForm('ruleForm')">取消</el-button>
			</el-form-item>
		</el-form>
	</el-row>
</template>
<style lang="less" scoped>
@import '../../../theme/theme.less'; 
#wrapperbind{
  text-align:right;
}


</style>
<script>
module.exports = require('./bindNode');

</script>
