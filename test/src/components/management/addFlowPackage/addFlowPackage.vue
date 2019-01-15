<template>
  <div class="wrapper">
    <h1 class="topName">{{pageTitle}}</h1>
    <el-form ref="form" :model="form" label-width="120px" :rules="formRules" class="form_width">
      <el-form-item label="店铺名称" prop="merchantName" v-show="!addTip">
        <el-input  v-model="form.merchantName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="套餐名称" prop="title">
        <el-input placeholder="必填项，最多输入10个字符" v-model="form.title"  maxlength=10></el-input>
      </el-form-item>
      <el-form-item label="套餐类型" class="center" prop="type">
        <el-radio-group v-model="form.type" @change="handleRadio">
          <el-radio label="1" :disabled="typeDisable">流量包</el-radio>
          <el-radio label="3" :disabled="typeDisable">视频包</el-radio>
          <el-radio label="0" :disabled="typeDisable">VIP</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="VIP登录码" prop="vipNum" v-if="vipFlag == true">
        <el-input placeholder="请输入登录码" v-model="form.vipNum" @keyup.native="numLength" ></el-input>
      </el-form-item>
      <el-form-item label="套餐时长" prop="timeLength">
        <el-input placeholder="必填项，大于0的整数" v-model="form.timeLength" type="number" min='1'   @keyup.native="proving1"></el-input><span class="unit">分钟</span>
      </el-form-item>
      <el-form-item label="套餐价格" prop="price" v-if="vipFlag != true">
        <el-input v-model="form.price" type="number" min="0.00" step="0.01"   @keyup.native="provingPrice"></el-input><span class="unit">元 </span>
      </el-form-item>
      <el-form-item label="上行限速值" prop="upLimitSpeed" v-if="videoFlag != false">
        <el-input placeholder="必填项，大于0的整数" v-model="form.upLimitSpeed" type="number" min='1'   @keyup.native="proving1"></el-input><span class="unit">Kbps</span>
      </el-form-item>
      <el-form-item label="下行限速值" prop="downLimitSpeed" v-if="videoFlag != false">
        <el-input placeholder="必填项，大于0的整数" v-model="form.downLimitSpeed" type="number" min='1'   @keyup.native="proving1"></el-input><span class="unit">Kbps</span>
      </el-form-item>
    
      <!--el-form-item label="最大购买人数" prop="maxBuyNum" v-if="videoFlag != false">
        <el-input v-model="form.maxBuyNum" type="number" min='1'   @keyup.native="proving1"></el-input>
      </el-form-item-->
      <el-form-item label="添加店铺"  v-show="addTip">
        <el-button @click="handleAddShop">添加店铺</el-button> 已添加<span> {{form.merchantNum}} </span>家店铺 <span v-show="addShow" class="showError" style="padding-left:10px;"><i class="fa fa-warning"></i>店铺不能为空</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitFormAdd('form')">确认提交</el-button>
      </el-form-item>
    </el-form>
    <!--定时重启-->

    <el-dialog :visible.sync="merchantDialogShow"  :title="merchantDialogTitle"  :fullscreen="true"   custom-class="el-dialog--full"  @close='closeDialog' >
      <select-merchant   @cancleForm="handleCancleForm" :isNew="isNew" ></select-merchant>
    </el-dialog>
  </div>
</template>
<style lang="less" scoped>
@import '../manage.less';

</style>
<style>
.wrapper {
  border: 1px solid #e5e5e5;
  background: #fff;
  padding: 20px;
  text-align: left;
}
.el-dialog--full {
  width: 80%;
  top:0
}
.form_width.el-form {
  width: 500px;
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

.el-form-item {
      margin-bottom: 22px;
}

</style>
<script>
module.exports = require('./addFlowPackage');

</script>
