
/**
 * Created by saiying.ding on 2018/5/29.
 */
export default {
  name: 'left-menu',
  data() {
	return {
	  props: ["active"],
	  getHeight: {
		height: ''
	  },
	  qj_url: 'http://duchong.api.cn:8888/starfast/freelogin'
	}
  },
  components: {},
  mounted() {
      // console.log(document.documentElement.scrollTop)
  	  var route = route || this.$route;
	    var t= document.documentElement.scrollTop
  this.setSize(t);

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
	setSize(t) {
	  this.getHeight.height = window.innerHeight - 50 +t+ "px";
	}
  },
  created() {
	this.updateCurMenu();
  },
  watch: {
	$route(to, from) {
	  this.updateCurMenu(to);
	}
  }
}
