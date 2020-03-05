<template>
  <Layout class="main">
    <Sider class="left-side">
      <SideMenu :menuList="menuList"></SideMenu>
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
  name: "mainview",
  components: {
    SideMenu,
    TopNavi
  },
  computed:{
    menuList(){
      let menulist = this.$store.getters.menuList
      console.log(menulist)
      return this.$store.getters.menuList
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .left-side{
    overflow: hidden;
    overflow-y: scroll;
  }
  .top-navi {
    background-color: rgba(100, 100, 100, 0.1);
    width: 100%;
  }
}
</style>