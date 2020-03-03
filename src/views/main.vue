<template>
  <Layout>
    <Sider>
      <SideMenu></SideMenu>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>
        <div id="appcontent">
          <router-view />
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "../components/sidemenus";
export default {
  name: "main",
  components: {
    SideMenu
  }
};
</script>

<style lang="less" scoped>
/deep/ .ivu-layout-sider {
  transition: all 0.2s ease-in-out;
  position: relative;
  min-width: 0;
  height: 1024px;
}
</style>