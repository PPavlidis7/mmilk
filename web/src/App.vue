<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <a-layout class="mainLayout">
    <a-layout style="overflow-x: hidden; width: 100vw">
      <a-layout class="innerLayout" style="width: 100%">

        <div class="content">
          <RouterView/>
        </div>

      </a-layout>
    </a-layout>
  </a-layout>

</template>

<style scoped>
.mainLayout {
  height: 100vh;
}

.innerLayout {
  overflow-x: hidden;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: calc(100% - 80px);
  @media only screen and (min-width: 768px) {
    flex-shrink: 0;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-shrink: 0;
  }
}

.content {
  flex: auto;
  padding: 8px 0;
  flex-shrink: 0;
  background: rgb(242, 242, 255);
  position: relative;
  max-width: 1366px;
  width: 100%;
}
</style>
