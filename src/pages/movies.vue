<template>
  <f7-page name="movies" class="movies-page" 
    navbar-through 
    tabbar-through 
    hide-navbar-on-scroll 
    pull-to-refresh 
    infinite-scroll 
    @ptr:refresh="pullrefresh" 
    @ptr:pullend="pullend" 
    @infinite="infinite">
  	
    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-f7="person" color="gray"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>一个影视</f7-nav-center>
      <f7-nav-right>
      	<f7-link icon-f7="search" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- 影视列表 -->
    <f7-grid class="node-row" v-for="node in this.topten" key="node.id">
      <f7-col width="100">
        <div class="node" @click="loadDetailPage(node.item_id)">
          <div class="header">
            <div class="category color-gray size-12">- 影视 -</div>
            <div class="title size-20">{{ node.title }}</div>
            <div class="author color-gray size-14">文╱{{ node.author.user_name }}</div>
          </div>
          <div class="content">
            <div class="img_url_dashed">
              <img :src="node.img_url" width="100%" class="lazy lazy-fadein"/>
            </div>
            <div class="forward color-gray size-14" v-html="node.forward"></div>
            <div class="subtitle color-gray size-14">— —《{{ getSubtitle(node.subtitle) }}》</div>
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
  export default {
    mixins: [Mixins],
    computed: {
      ...mapGetters('movie', [
        'topten'
      ])
    },
    created () {
      this.getTopTen();
    },
    methods: {
      ...mapActions('movie', [
        'getTopTen',
        'getNextPageById'
      ]),
      getSubtitle (str) {
        return str.substring(str.indexOf(':') + 1, str.length);
      },
      pullrefresh () {
        this.getTopTen();
      },
      pullend () {
        this.$root.$f7.pullToRefreshDone();
      },
      infinite () {
        let len = this.topten.length;
        if (len > 0) this.getNextPageById(this.topten[len - 1].id);
      },
      loadDetailPage (id) {
        this.hideToolbar();
        this.$root.$f7.getCurrentView().loadPage({
          url: `/movie/${id}`,
          animatePages: false
        });
      }
    }
  }
</script>