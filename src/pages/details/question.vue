<template>
  <f7-page name="question" class="question-page" 
    navbar-through 
    tabbar-through>
    
    <!-- navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link back icon-f7="left" color="gray" @click="showToolbar"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>阅读·问答</f7-nav-center>
      <f7-nav-right>
        <f7-link icon-f7="share" color="gray"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <!-- question -->
    <f7-grid class="question-row">
      <f7-col width="100">
        <div class="question">
          <div class="question_title size-25">
            <p>{{ this.question.question_title }}</p>
          </div>
          <div class="question_content color-gray">
            <p>{{ this.question.question_content }}</p>
          </div>
          <div class="asker color-gray"><p>— — {{ this.asker.user_name }}问道</p></div>
          <div class="split">
            <div class="l_s"></div>
            <div class="c_c">
              <div></div>
            </div>
            <div class="r_s"></div>
          </div>
          <div class="answerer size-17">{{this.answerer.user_name}}答:</div>
          <div class="answer_content" v-html="this.question.answer_content"></div>
          <template v-if="this.question.charge_edt">
            <div class="hp_author_introduce size-12 color-gray">
      	      {{ this.question.charge_edt.replace(/（|）/g, '') }}
            </div>
          </template>
          <div class="underline"></div>
          
          <!-- 回答者 -->
      	  <div class="author_info">
      	    <div class="at_title">回答者</div>
      	    <div class="at_split"></div>
      	    <ul class="at_content">
      	      <li class="web_url">
      	        <img :src="this.answerer.web_url" width="32" height="32"/>
      	      </li>
      	      <li class="wb_name">
      	        <span>{{ this.answerer.user_name }} {{ this.answerer.wb_name }}</span>
      	        <small class="size-12 color-gray">{{ this.answerer.summary }}</small>
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
        <span>{{ this.question.praisenum }} 喜欢 · </span>
        <span>{{ this.question.commentnum }} 评论</span>
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
        'question',
        'asker',
        'answerer'
      ])
    },
    created () {
      this.getQuestionById(this.$route.params.id)
    },
    methods: {
      ...mapActions('reading', [
        'getQuestionById'
      ])
    }
  }
</script>