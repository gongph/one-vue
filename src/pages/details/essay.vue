<template>
  <f7-page name="essay" class="essay-page" 
  	navbar-through 
  	tabbar-through>
  	<!-- navbar -->
    <f7-navbar>
    	<f7-nav-left>
    		<f7-link back icon-f7="left" color="gray" @click="showToolbar"></f7-link>
    	</f7-nav-left>
      <f7-nav-center sliding>{{ tag ? tag : '一个阅读' }}</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="share" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- essay detail -->
    <f7-grid class="article-row">
      <f7-col width="100">
      	<div class="article">
      		<div class="hp_title size-25">{{ this.article.hp_title }}</div>
      		<div class="hp_split"></div>
      		<div class="hp_author size-16">文╱{{ this.article.hp_author }}</div>
      		<div class="hp_content size-16" v-html="this.article.hp_content"></div>
      		<template v-if="this.article.hp_author_introduce">
      		  <div class="hp_author_introduce size-12 color-gray">
      				{{ this.article.hp_author_introduce.replace(/（|）/g, '') }}
      		  </div>
      		</template>
      		<!-- 作者 -->
      		<div class="author_info">
      		  <div class="at_title">作者</div>
      		  <div class="at_split"></div>
      		  <ul class="at_content">
      		  	<li class="web_url">
      		  	  <img :src="this.author.web_url" width="32" height="32"/>
      		  	</li>
      		  	<li class="wb_name">
      		  		<span>{{ this.author.user_name }} {{ this.author.wb_name }}</span>
      		  		<small class="size-12 color-gray">{{ this.author.desc }}</small>
      		  	</li>
      		  	<li class="follow">
      		  		<f7-button color="gray" class="size-12">关注</f7-button>
      		  	</li>
      		  </ul>
      		</div>
      	</div>
      </f7-col>
    </f7-grid>
    
     <f7-toolbar>
        <f7-link icon-f7="heart"></f7-link>
        <f7-link icon-f7="bookmark"></f7-link>
        <f7-link icon-f7="chat"></f7-link>
        <f7-link>278 喜欢</f7-link>
      </f7-toolbar>
    
  </f7-page>
</template>

<script>
	import Mixins from '../../mixins/mixins.vue';
  import { mapGetters } from 'vuex';
  export default {
  	mixins: [Mixins],
    computed: {
      ...mapGetters({
      	article: 'article',
      	tag: 'tag',
      	author: 'author'
      })
    },
    created () {
      this.$store.dispatch('getArticleById', this.$route.params.id);
    }
  }
</script>