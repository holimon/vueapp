<template>
  <div>
    <Row type="flex">
      <Col span="8">
        <Menu theme="dark" :active-name="activeName" :open-names="openNames" accordion style="width:200px">
          <template v-for="item in menuList">
            <template v-if="!item.children">
              <MenuItem :name="item.name" :key="`menu-${item.name}`">
                <Icon :type="item.icon || ''" />
                <span>{{ showTitle(item) }}</span>
              </MenuItem>
            </template>
            <template v-else>
              <template v-if="item.children">
                <Submenu :name="item.name || ''" :key="item.name || ''">
                  <template slot="title">
                    <Icon :type="item.icon || ''" />
                    <span>{{item.name}}</span>
                  </template>
                  <template v-for="child in item.children">
                    <MenuItem :name="child.name || ''" :key="`submenu-${child.name || ''}`">
                      <Icon :type="child.icon || '' " />
                      <span>{{ showTitle(child)}}</span>
                    </MenuItem>
                  </template>
                </Submenu>
              </template>
            </template>
          </template>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
import { showTitle } from "../libs/utils";
export default {
  name: "sidemenus",
  data() {
    return {
      activeName: "dash",
      openNames:[]
    };
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this);
    },
    handleOnSelect(name){
      this.activeName = name
    }
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>