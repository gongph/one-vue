<script>
  export default {
    methods: {
      hideToolbar () {
        this.$root.$$('.global-toolbar').hide();
      },
      showToolbar () {
      	this.$root.$$('.global-toolbar').show();
      }
    }
  }
</script>