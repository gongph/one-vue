<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>
    <!-- views -->
    <f7-views tabs toolbar-through theme="black" layout="white">
      <f7-view main tab active url="/home/" :domCache="false"></f7-view>
      
      <f7-toolbar tabbar class="global-toolbar">
        <f7-link @click="loadpage($event, '/home/')" tab-link active no-link-class icon-f7="home"></f7-link>
        <f7-link @click="loadpage($event, '/reading/')" tab-link no-link-class icon-f7="book"></f7-link>
        <f7-link @click="loadpage($event, '/music/')" tab-link no-link-class icon-f7="tune"></f7-link>
        <f7-link @click="loadpage($event, '/movie/')" tab-link no-link-class icon-f7="videocam"></f7-link>
      </f7-toolbar>
    </f7-views>
  </div>
</template>

<script>
  export default {
    methods: {
      loadpage (event, page) {
      	this.$root.$$('.global-toolbar .tab-link').removeClass('active');
      	this.$root.$$(event.target).closest('a').addClass('active');
        this.$root.$f7.getCurrentView().router.loadPage({
        	url: page,
        	animatePages: false
        });
      }
    }
  }
</script>