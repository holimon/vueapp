<template>
  <div>
    <Row type="flex">
      <Col span="8">
        <Menu theme="dark" :active-name="activeName" accordion style="width:200px">
          <template v-for="item in menuList">
            <template v-if="item.children && item.children.length === 1">
              <MenuItem :name="item.children[0].name" :key="`menu-${item.children[0].name}`">
                <Icon :type="item.children[0].icon || ''" />
                <span>{{ showTitle(item.children[0]) }}</span>
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
    };
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this);
    },
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