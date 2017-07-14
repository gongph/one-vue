<script>
  export default {
    methods: {
      /**
       * 得到当前视图
       */
      getCurrentView () {
        return this.$root.$f7.getCurrentView();
      },
      /**
       * 隐藏工具栏
       */
      hideToolbar () {
        this.$root.$$('.global-toolbar').hide();
      },
      /**
       * 显示工具栏
       */
      showToolbar () {
      	this.$root.$$('.global-toolbar').show();
      },
      /**
       * 隐藏导航栏
       */
      hideNavbar () {
      	this.getCurrentView().hideNavbar();
      },
      /**
       * 显示导航栏
       */
      showNavbar () {
      	this.getCurrentView().showNavbar();
      }
    }
  }
</script>