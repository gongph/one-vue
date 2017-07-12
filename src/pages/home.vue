<template>
  <f7-page ref="homepage" name="home" class="home-page" 
  	navbar-through 
  	tabbar-through>
    <!-- navbar -->
    <f7-navbar v-if="showNavbar">
    	<f7-nav-left>
    		<f7-link icon-f7="person" color="gray"></f7-link>
    	</f7-nav-left>
      <f7-nav-center sliding>一个</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="search" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- title -->
    <f7-grid>
    	<f7-col width="100">
    		<div class="weather">
    			<div class="date size-17">{{ this.curDate }}</div>
    		  <div class="climate size-12">{{ this.climate }}</div>
    		</div>
    	</f7-col>
    </f7-grid>
    
    <!-- poster -->
    <f7-grid>
    	<f7-col width="100">
    		<div class="poster">
    			<div class="volume size-12">{{ this.poster.volume }}</div>
    			<div class="img_url">
    				<img :src="this.poster.img_url" width="100%" class="lazy lazy-fadein"/>
    			</div>
    			<div class="pic_info color-gray size-12">
    				{{ this.poster.title + ' | ' + this.poster.pic_info}}
    			</div>
    			<div class="forward">
    				{{ this.poster.forward }}
    			</div>
    			<div class="words_info color-gray size-12">
    				{{ this.poster.words_info }}
    			</div>
    		</div>
    		<div class="footerbar note">
    			<f7-link no-link-class>
    			  <f7-icon f7="compose"></f7-icon> 小记
    			</f7-link>
    			<f7-link icon-f7="share"></f7-link>
    			<f7-link>
    				{{ this.poster.like_count }}
    				<f7-icon f7="heart"></f7-icon>
    			</f7-link>
    		</div>
    	</f7-col>
    </f7-grid>
    
    <!-- nodes -->
    <f7-grid class="node-row" v-for="(node, index) in this.nodes" v-if="index != 0" key="node.id">
      <f7-col width="100">
        <div class="node">
        	<div class="header">
        	  <div class="category color-gray size-12">- {{ getTag(node.tag_list) }} -</div>
        	  <div class="title size-20">{{ node.title }}</div>
        	  <div class="author color-gray size-14">文╱{{getUserName(node.author)}}</div>
        	</div>
        	<div class="content">
        	  <img :src="node.img_url" width="100%" class="lazy lazy-fadein"/>
        	  <div class="forward color-gray size-14" v-html="node.forward"></div>
        	</div>
        	<div class="footerbar">
        	  <f7-link no-link-class>一天前</f7-link>
        	  <f7-link icon-f7="share"></f7-link>
        	  <f7-link>
        	  	{{ node.like_count }}
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
import axios from 'axios';
export default {
	data () {
	  showNavbar: false
	},
	computed: {
		...mapGetters('home', [
		  'todaydate',
		  'climate',
		  'poster',
		  'nodes'
	  ]),
	  curDate () {
	  	return this.todaydate.replace(/-/g, ' / ');
	  }
	},
	created () {
		this.getIdlist();
	},
	methods: {
		...mapActions('home', [
		  'getIdlist'
		]),
    getUserName (author) {
  	  return author? author.user_name : '';
    },
    getTag (tagList) {
  	  return (tagList.length > 0) ? tagList[0].title : '阅读';
    }
  }
}
</script>