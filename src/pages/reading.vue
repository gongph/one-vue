<template>
  <f7-page name="reading" class="home-page" navbar-through tabbar-through>
    <!-- navbar -->
    <f7-navbar>
    	<f7-nav-left>
    		<f7-link icon-f7="person"></f7-link>
    	</f7-nav-left>
      <f7-nav-center sliding>一个阅读</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="search"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- grids -->
    <f7-grid v-for="node in this.topten" key="node.id">
      <f7-col width="100">
        <div class="node">
        	<div class="header">
        	  <div class="category color-gray size-12">- {{ getTag(node.tag_list) }} -</div>
        	  <div class="title size-17">{{ node.title }}</div>
        	  <div class="author color-gray size-12">文╱{{getUserName(node.author)}}</div>
        	</div>
        	<div class="content">
        	  <img :src="node.img_url" width="100%"/>
        	  <div class="forward color-gray size-13" v-html="node.forward"></div>
        	</div>
        	<div class="footer">
        	  <f7-link no-link-class>一天前</f7-link>
        	  <f7-link icon-f7="share"></f7-link>
        	  <f7-link text="1234 ">
        	  	<f7-icon f7="heart"></f7-icon>
        	  </f7-link>
        	</div>
        </div>
      </f7-col>
    </f7-grid>
    
  </f7-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: mapGetters({
		  topten: 'topTen'
	  }),
  	created () {
      this.$store.dispatch('getTopTen');
  	},
  	methods: {
  	  getUserName (author) {
  	  	return author? author.user_name : '';
  	  },
  	  getTag (tagList) {
  	  	return (tagList.length > 0) ? tagList[0].title : '阅读';
  	  }
  	}
  }
</script>