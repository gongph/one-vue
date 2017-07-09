<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>
    <!-- views -->
    <f7-views tabs toolbar-through theme="black" layout="white">
      <f7-view id="home" name="home" main tab active url="/home/"></f7-view>
      <f7-view id="reading" name="reading" tab url="/reading/"></f7-view>
      <f7-view id="music" name="music" tab url="/music/"></f7-view>
      <f7-view id="movie" name="movie" tab url="/movie/"></f7-view>
      
      <f7-toolbar tabbar class="global-toolbar">
        <f7-link href="#home" tab-link active no-link-class icon-f7="home"></f7-link>
        <f7-link href="#reading" tab-link no-link-class icon-f7="book"></f7-link>
        <f7-link href="#music" tab-link no-link-class icon-f7="tune"></f7-link>
        <f7-link href="#movie" tab-link no-link-class icon-f7="videocam"></f7-link>
      </f7-toolbar>
    </f7-views>
  </div>
</template>

<script>
  export default {}
</script>