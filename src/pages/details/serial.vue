<template>
  <f7-page name="serial" class="serial-page" 
    navbar-through 
    tabbar-through>

    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link back icon-f7="left" color="gray"></f7-link>
    	</f7-nav-left>
      <f7-nav-center sliding>阅读·连载</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="share" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- 连载 -->
    <f7-grid class="article-row">
      <f7-col width="100">
        <div class="article">
          <div class="hp_title size-25">{{ this.serial.title }}</div>
          <div class="hp_split"></div>
          <div class="hp_author size-16">文╱{{ this.author.user_name }}</div>
          <div class="hp_content size-16" v-html="this.serial.content"></div>
          <template v-if="this.serial.charge_edt ">
            <div class="hp_author_introduce size-12 color-gray">
              {{ this.serial.charge_edt.replace(/（|）/g, '') }}
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
                <small class="size-12 color-gray">{{ this.author.summary }}</small>
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
      <f7-link @click="bookmark">
        <f7-icon f7="bookmark" class="color-gray"></f7-icon>
      </f7-link>
      <f7-link>
        <f7-icon f7="chat" class="color-gray"></f7-icon>
      </f7-link>
      <f7-link no-link-class >
        <span>{{ this.serial.praisenum }} 喜欢 · </span>
        <span>{{ this.serial.commentnum }} 评论</span>
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
      ...mapGetters('reading', [
        'serial',
        'author'
      ])
    },
    created () {
      this.getSerialById(this.$route.params.id);
    },
    methods: {
      ...mapActions('reading', [
        'getSerialById'
      ])
    }
  }
</script>