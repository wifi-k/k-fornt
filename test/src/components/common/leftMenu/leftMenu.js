/**
 * Created by saiying.ding on 2018/5/29.
 */
var self = {}
export default {
  name: 'left-menu',
  data() {
	return {
	  props: ["active"],
	  getHeight: {
    height: '',
    
	  },
    qj_url: 'http://duchong.api.cn:8888/starfast/freelogin',
    scrollHeight:0
	}
  },
  components: {},
  mounted() {
  	 var route = route || this.$route;
      window.onscroll=function(){
        self.scrollHeight=document.documentElement.scrollTop
         self.getHeight.height = window.innerHeight - 50 +self.scrollHeight +"px";
      }
      self.setSize()
  },
  methods: {
	handleOpen(key, keyPath) {
	  //console.log(key, keyPath);
	},
	handleClose(key, keyPath) {
	  //console.log(key, keyPath);
	},
	See(e) {
	  window.location.href = e
	},
	updateCurMenu(route) {
	  var route = route || this.$route;
	  if (route.matched.length) {
		let rootPath = route.matched[0].path,
      fullPath = route.path;
		this.$store.dispatch('set_header_route', {
		  rootPath,
		  fullPath
		});
	  }
	},
	setSize() {
	  this.getHeight.height = window.innerHeight - 50 +self.scrollHeight +"px";
	}
  },
  created() {
     self = this
	    this.updateCurMenu();
  },
  watch: {
	$route(to, from) {
	  this.updateCurMenu(to);
	}
  }
}
