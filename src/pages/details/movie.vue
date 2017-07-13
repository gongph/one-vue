<template>
  <f7-page name="movie" class="movie-page" 
    navbar-through 
    tabbar-through>
    
    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link back icon-f7="left" color="gray" @click="showToolbar"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>一个影视</f7-nav-center>
      <f7-nav-right>
        <f7-link icon-f7="share" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <f7-swiper pagination class="movie-covers" :params="this.swiper">
      <f7-swiper-slide>
        <img :src="this.detail.detailcover" width="100%"/>
      </f7-swiper-slide>
      <f7-swiper-slide v-for="photo in this.photos" key="this">
        <img :src="photo" width="100%"/>
      </f7-swiper-slide>
    </f7-swiper>
    
    <f7-grid class="article-row">
      <f7-col width="100">
        <div class="article">
          <div class="hp_m_title color-gray size-14">
            <p>· {{ this.detail.title }} ·</p>
          </div>
          <div class="hp_title size-25">{{ this.article.title }}</div>
      	  <div class="hp_split"></div>
      	  <div class="hp_author size-16">文╱{{ this.author.user_name }}</div>
          <div class="hp_content size-16" v-html="this.article.content"></div>
          <template v-if="this.detail.charge_edt">
            <div class="hp_author_introduce size-12 color-gray">
              {{ this.detail.charge_edt.replace(/（|）/g, '') }} 
            </div>
      	  </template>
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
        <span>{{ this.article.praisenum }} 喜欢 · </span>
        <span>{{ this.detail.commentnum }} 评论</span>
      </f7-link>
    </f7-toolbar>
  
  </f7-page>
</template>

<script>
  import Mixins from '../../mixins/mixins.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    mixins: [Mixins],
    data () {
      return {
        swiper: {
          paginationType: 'custom',
          paginationCustomRender: this.paginationCustomRender
        }
      }
    },
    computed: {
      ...mapGetters('movie', [
        'article',
        'author',
        'detail',
        'photos'
      ])
    },
    created () {
      let id = this.$route.params.id;
      this.getMoviePhotosById(id);
      this.getMovieById(id);
    },
    methods: {
      ...mapActions('movie', [
        'getMovieById',
        'getMoviePhotosById'
      ]),
      paginationCustomRender (swiper, current, total) {
        return current + '/' + total;
      }
    }
  }
</script>