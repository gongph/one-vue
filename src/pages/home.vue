<template>
  <f7-page ref="homepage" name="home" class="home-page" 
    navbar-through 
    tabbar-through>
  	
    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-f7="person" color="gray"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>一个</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="search" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- 日期标题 -->
    <f7-grid class="tt">
      <f7-col width="100">
        <div class="weather">
          <div class="date size-17">{{ this.curDate }}</div>
          <div class="climate size-12">{{ this.climate }}</div>
        </div>
      </f7-col>
    </f7-grid>
    
    <!-- 插画 -->
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
    
    <!-- 图文列表 -->
    <f7-grid class="node-row" v-for="(node, index) in this.nodes" v-if="index != 0" key="node.id">
      <f7-col width="100">
        <div class="node" @click="loadDetailPage(node)">
          <div class="header">
            <div class="category color-gray size-12">- {{ getTag(node) }} -</div>
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
  import Mixins from '../mixins/mixins.vue';
  import { mapGetters, mapActions } from 'vuex';
  import { getRouterByType, getCategoryByType } from '../utils/bytype.js';
  import { bindEvent, unBindEvent } from '../utils/events.js';
  export default {
    mixins: [Mixins],
    data () {
      return {
        pageSelector: '.page .page-content'
      }
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
      unBindEvent(this.pageSelector, 'scroll');
    },
    mounted () {
      this.hideNavbar();
      bindEvent(this.pageSelector, 'scroll', (e) => {
        this.handleNavbarShowHide(e);
      });
    },
    methods: {
      ...mapActions('home', [
        'getIdlist'
      ]),
      getUserName (author) {
        return author? author.user_name : '';
      },
      getTag (node) {
        let taglist = node.tag_list, tag = '';
        if (taglist.length > 0) {
          tag = taglist[0].title;
        } else {
          tag = getCategoryByType(node.category);
        }
        return tag;
    },
    loadDetailPage (node) {
      this.hideToolbar();
      let router = getRouterByType(node.category);
      this.$root.$f7.getCurrentView().router.loadPage({
        url: router + node.item_id,
        animatePages: false
      });
    },
    handleNavbarShowHide (e) {
      e.target.scrollTop <= 0 ? this.hideNavbar() : this.showNavbar();
    }
  }
}
</script>