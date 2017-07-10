<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>
    <!-- views -->
    <f7-views tabs toolbar-through theme="black" layout="white">
      <f7-view main tab active url="/home/"></f7-view>
      
      <f7-toolbar tabbar class="global-toolbar">
        <f7-link @click="loadpage('/home/')" tab-link active no-link-class icon-f7="home"></f7-link>
        <f7-link @click="loadpage('/reading/')" tab-link no-link-class icon-f7="book"></f7-link>
        <f7-link @click="loadpage('/music/')" tab-link no-link-class icon-f7="tune"></f7-link>
        <f7-link @click="loadpage('/movie/')" tab-link no-link-class icon-f7="videocam"></f7-link>
      </f7-toolbar>
    </f7-views>
  </div>
</template>

<script>
  export default {
    methods: {
      loadpage (page) {
        this.$root.$f7.getCurrentView().router.loadPage({
        	url: page,
        	animatePages: false
        });
      }
    }
  }
</script>