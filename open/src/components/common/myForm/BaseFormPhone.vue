<template> 
    <el-form :inline="true"  label-width="100px" ref="form" :rules="rules">
    <el-form-item prop='prop' :label='labelName'  class="required? is-required : ''">
        <el-input type="text"  auto-complete="off"  maxlength="11"  v-model='mobile' @blur="onFieldBlur()"></el-input>       
    </el-form-item>
    </el-form>
</template>

<script>
let self = {};
export default {
    name: 'base-form-phone',    
    data(){
        return {  
            labelNameDefault: '手机号码：',
            mobile: '',
            rules: {
                mobile: [{required: true,  validator:(rule, value, callback)=>{
                    console.log(value)
                        if (value === '') {
                            callback(new Error('请输入手机号码'));
                        } else {
                            var reg=11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
                            if(reg.test(value)){
                                callback();
                            }else{
                                callback(new Error('手机号码格式不对!'));
                            }
                        }
                    }, trigger: 'blur'}],
            }
        }
    },
    props: {
    	labelName: String,
    	isRequire: Boolean,
        run: Function,
        title: String,
        prop: String,
    },
    beforeCreate () {
        self = this;
    },
    watch: {
    },
    computed:{
    	isRequired() {
    	  let rules = self.getRules();
    	  let isRequired = false;

    	  if (rules && rules.length) {
    	    rules.every(rule => {
    	      if (rule.required) {
    	        isRequired = true;
    	        return false;
    	      }
    	      return true;
    	    });
    	  }
    	  return isRequired;
    	}
    },
    methods:{
    	validate(trigger, callback = noop) {

    	  this.validateDisabled = false;
    	  var rules = this.getFilteredRule(trigger);
    	  if ((!rules || rules.length === 0) && !this._props.hasOwnProperty('required')) {
    	    callback();
    	    return true;
    	  }

    	  this.validateState = 'validating';

    	  var descriptor = {};
    	  descriptor[this.prop] = rules;

    	  var validator = new AsyncValidator(descriptor);
    	  var model = {};

    	  model[this.prop] = this.fieldValue;

    	  validator.validate(model, { firstFields: true }, (errors, fields) => {
    	    this.validateState = !errors ? 'success' : 'error';
    	    this.validateMessage = errors ? errors[0].message : '';

    	    callback(this.validateMessage);
    	  });
    	},
    	getRules() {
    	  var formRules = this.form.rules;
    	  var selfRules = this.rules;
    	  var requiredRule = this._props.hasOwnProperty('required') ? { required: !!this.required } : [];

    	  formRules = formRules ? formRules[this.prop] : [];

    	  return [].concat(selfRules || formRules || []).concat(requiredRule);
    	},
    	onFieldBlur(callback) {         
            
            var value = this.mobile;
            console.log(value)
            if (value === '') {
                console.log(new Error('请输入手机号码'))
                callback(new Error('请输入手机号码'));
            } else {
                var reg=11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
                if(reg.test(value)){
                    callback();
                }else{
                    callback(new Error('手机号码格式不对!'));
                }
            }

    	  //this.validate('blur');
    	},
    	onFieldChange() {
         console.log(1)
    	  if (this.validateDisabled) {
    	    this.validateDisabled = false;
    	    return;
    	  }

    	  this.validate('change');
    	}
    },
    mounted(){
       
    	self.labelName = (self.labelName != undefined)&&self.labelName || self.labelNameDefault;
    	
    	if (this.prop) {   	 
    	    this.$on('el.form.blur', this.onFieldBlur);
    	    this.$on('el.form.change', this.onFieldChange);
    	 
    	}
    }
}

</script>

