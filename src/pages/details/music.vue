<template>
  <f7-page name="music" class="music-page" 
    navbar-through 
    tabbar-through>
  
    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link back icon-f7="left" color="gray" @click="showToolbar"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>一个音乐</f7-nav-center>
      <f7-nav-right>
        <f7-link icon-f7="share" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
  
    <f7-grid class="article-row">
      <f7-col width="100">
      	<div class="article">
      	  <div class="hp_m_cover">
      	    <img :src="this.article.cover" width="100%"/>
      	  </div>
      	  <div class="hp_m_title color-gray size-14">
      	    <p>· {{ this.article.title }} ·</p>
      	    <p>{{ this.author.user_name }} | {{ this.article.album}}</p>
      	  </div>
      	  <!--<div class="hp_mc_author color-gray size-14"></div>-->
      	  <div class="hp_m_story_title size-25">{{ this.article.story_title }}</div>
      	  <div class="hp_m_story_author">
      	    <p>文╱{{ this.storyAuthor.user_name}}</p>
      	  </div>
      	  <div class="hp_content size-16" v-html="this.article.story"></div>
      	  <template v-if="this.article.charge_edt">
      	    <div class="hp_author_introduce size-12 color-gray">
      	      {{ this.article.charge_edt.replace(/（|）/g, '') }}
      	    </div>
      	  </template>
      	  
      	  <!-- 作者 -->
      	  <div class="author_info">
      	    <div class="at_title">作者</div>
      	    <div class="at_split"></div>
      	    <ul class="at_content">
      	      <li class="web_url">
      	        <img :src="this.storyAuthor.web_url" width="32" height="32"/>
      	      </li>
      	      <li class="wb_name">
      	        <span>{{ this.storyAuthor.user_name }} {{ this.storyAuthor.wb_name }}</span>
      	        <small class="size-12 color-gray">{{ this.storyAuthor.summary }}</small>
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
        <f7-link>
          <f7-icon f7="heart" class="color-gray"></f7-icon>
        </f7-link>
        <f7-link>
          <f7-icon f7="bookmark" class="color-gray"></f7-icon>
        </f7-link>
        <f7-link>
          <f7-icon f7="chat" class="color-gray"></f7-icon>
        </f7-link>
        <f7-link no-link-class >
          <span>{{ this.article.praisenum}} 喜欢 · </span>
          <span>{{this.article.commentnum}} 评论</span>
        </f7-link>
      </f7-toolbar>
    
  </f7-page>
</template>

<script>
  import Mixins from '../../mixins/mixins.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    mixins: [Mixins],
    computed: {
      ...mapGetters('music', [
        'article',
        'author',
        'storyAuthor'
      ])
    },
    created () {
      this.getMusicById(this.$route.params.id);
    },
    methods: {
      ...mapActions('music', [
        'getMusicById'
      ])
    }
  }
</script>