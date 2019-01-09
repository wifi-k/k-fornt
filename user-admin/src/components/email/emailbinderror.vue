
<template>
  <div class="email">
    <p>您的认证链接已失效，请重新发送邮件</p>
    <el-row>
      <el-button type="primary" size="medium">
        再次发送
      </el-button>
    </el-row>
  </div>
</template>
<script>
import Login from "../../config/management/login";
export default {
  methods: {
    submitEditEmail() {
      // let param = {};
      // param = {
      //   email: this.data.email
      // };
      // Login.modifyEmail(param).then(p => {
        // if (p.data.code == 0) {
          // self.updateLoginInfo(param);
          this.$notify({
            title: "绑定",
            message: "E-mail绑定成功,请去邮箱激活。",
            type: "success",
            duration: 3000
          });
        // }
      // });
    }
  }
};
</script>

<style scoped>
.email {
  text-align: center;
}
p {
  font-size: 20px;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>


