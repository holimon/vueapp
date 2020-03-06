<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" :title="$t('login.LoginTitle')" :bordered="true">
        <Form ref="loginForm" :model="loginForm" :rules="loginFormRule">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.user" :placeholder="$t('login.LoginFormUser')">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="loginForm.password"
              :placeholder="$t('login.LoginFormPawd')"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              @click="handleSubmit('loginForm')"
            >{{$t('login.LoginFormButton')}}</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  computed: {
    loginFormRule() {
      let ruleInline = {
        user: [
          {
            required: true,
            message: this.$i18n.t("login.LoginFormUserTips"),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$i18n.t("login.LoginFormPawdTips"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: this.$i18n.t("login.LoginFormPawdTypeTips"),
            trigger: "blur"
          }
        ]
      };
      return ruleInline;
    }
  },
  data() {
    return {
      loginForm: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit: function() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push("/views");
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  background-size: cover;
  background-position: center;
  position: relative;
  &-con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22rem;
  }
}
</style>
