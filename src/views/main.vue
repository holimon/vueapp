<template>
  <Layout class="main">
    <Sider>
      <SideMenu></SideMenu>
    </Sider>
    <Layout>
      <Header class="top-navi">
        <TopNavi></TopNavi>
      </Header>
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
import TopNavi from "../components/topnavis";
export default {
  name: "main",
  components: {
    SideMenu,
    TopNavi
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .top-navi {
    background-color: lemonchiffon;
    width: 100%;
  }
}
</style>