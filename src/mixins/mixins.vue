<script>
  export default {
    methods: {
    	// 隐藏工具栏
      hideToolbar () {
        this.$root.$$('.global-toolbar').hide();
      },
      // 显示工具栏
      showToolbar () {
      	this.$root.$$('.global-toolbar').show();
      },
      // 隐藏加载指示器
      hideIndicator () {
      	this.$root.$f7.hideIndicator();
      },
      // 显示加载指示器
      showIndicator () {
      	this.$root.$f7.showIndicator();
      }
    }
  }
</script>