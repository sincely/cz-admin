<template>
  <div class="user-layout-container">
    <div class="user-layout-aside">
      <div class="aside-header">
        <h1>{{ title }}</h1>
      </div>
      <div class="aside-body">
        <img alt="" :src="assets('login_welcome.svg')" />
        <h3>高性能 / 精致 / 优雅</h3>
        <p>基于Vue3 + Ant Design Vue 的中后台前端解决方案。</p>
      </div>
      <div class="aside-footer">
        <p>© {{ title }} {{ version }}</p>
      </div>
    </div>
    <div class="user-layout-main">
      <div class="user-layout-content">
        <div class="user-layout-top">
          <div class="user-layout-header">登录</div>
          <div class="user-layout-desc">欢迎使用{{ title }}</div>
        </div>
        <div class="user-layout-form">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { assets } from '@/utils'
import { config } from '@/config'

defineOptions({
  name: 'UserLayout'
})

const { version } = __APP_INFO__
const title = config('app.title')
</script>

<style lang="less" scoped>
.user-layout {
  &-container {
    display: flex;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }

  &-aside {
    position: relative;
    display: flex;
    flex: 0 0 538px;
    flex-direction: column;
    width: 538px;
    background: #235bda url('@/assets/login_aside_bg.jpg') no-repeat left top / 100% auto;

    .aside {
      &-header {
        display: flex;
        flex-direction: column;
        padding: 48px;

        h1 {
          font-size: 20px;
          font-weight: 500;
          color: #fff;
        }
      }

      &-body {
        flex: 1;
        padding: 48px 0 0;
        text-align: center;

        img {
          width: 80%;
        }

        h3 {
          color: #fff;
        }

        p {
          color: rgb(255 255 255 / 85%);
        }
      }

      &-footer {
        padding: 48px;
        font-size: 12px;
        color: rgb(255 255 255 / 65%);
      }
    }
  }

  &-main {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 64px 0 144px;
  }

  &-content {
    width: 368px;
    height: 440px;
  }

  &-header {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
  }

  &-desc {
    margin: 8px 0 24px;
  }
}
</style>
