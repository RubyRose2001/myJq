;(function(window){
	var jQuery = function(selector){
		return new jQuery.fn.init(selector);
	}
	jQuery.trim = function(str){
		var newStr = str.replace(/^\s+|\s+$/g,"");
		return newStr;
	}
	function markArray(arr,resulte){
		var brr = resulte || [];
		if(arr!=null){
			for(var i=0;i<arr.length;i++){
				brr[i]=arr[i];
			}
		}
		brr.length = arr.length;
		return brr;
	}
	jQuery.fn = jQuery.prototype = {
		
		init:function(selector){
 		//选取元素   $("li")  $("div")  $(".p1")	
 			var dom = null;
 			if(typeof selector != "string"){
 			
 				dom=[selector];    
 				
 			}else{
 				
 				dom = document.querySelectorAll(selector);
 				
 			}

 			return markArray(dom,this);   
 			//如果实现连缀写法>return this
			
		},
		css:function(style,value){
			
			var arg = arguments.length;
			
			if(arg==1){

				if(this.currentStyle){
			        return this[0].currentStyle[style];
			    }else{
			        return getComputedStyle(this[0],null)[style];
			    }
				
			}else if(arg==2){
						
				this.each(function(){
					this.style[style] = value;
				})
			}

			return this;
		},
		eq:function(index){
			return $(this[index]);
		},
		each:function(fn){
			
			for(var i=0;i<this.length;i++){
				
				fn.call(this[i],this);
				
			}
		},
		first:function(){				//获取init里面的第一个值
			return $(this[0]);
		},
		last:function(){				//获取最后一个值
			
			return $(this[this.length-1]);
		},
		html:function(val){				//如果arguments.length==0返回第一个的innerHTMl值
			var arg = arguments.length;
			
			if(arg==0){
				return this[0].innerHTML;

			}else if(arg==1){		//设置HTHML
				
				this.each(function(){
					this.innerHTML = val;
				})
				
			}
			return this;
			
		},
		click:function(fn){
			
			this.each(function(){
				this.onclick = fn;
			})
			return this;
			
		},
		hover:function(over,out){
			
			this.each(function(){
				this.onmouseover = over;
				this.onmouseout = out;
			})
			return this;
		},
		addClass:function(cName){
				
			this.each(function(){
				//首先变为数组[aa,bb,bb]
				//因为class里面是字符串所以要把数组转换成字符串: aa bb cc
				//把前后空格去掉
				
				var oClass = this.className.split(" ");
				oClass.push( cName );
				var str = oClass.join(" ");
				this.className = $.trim( str );
						
			})
			return this;
		},
		removeClass:function(cName){
			
			var arg = arguments.length;
			
			if(arg == 0){
				this.each(function(){
					this.className = "";
				})
			}else if(arg==1){
				
				this.each(function(){
					
					var str = this.className.replace(cName,"");
					var reg = str.replace(/\s+/," ");
					this.className = $.trim(reg);
					
				})
			}
			
			return this;
		},
		getClass:function(val){
			return val.className
		},
		hasClass:function(myClass){
			//用来判断   当前class有没有 ===>返回结果布尔    true  false
			var getClass = this.getClass.call(this,this[0]),
				fliterClass = getClass.split(' ') ;
			if(fliterClass.indexOf(myClass)!==-1){
				return fliterClass.indexOf(myClass)
			}
			return -1
			
		}	
	}	
	jQuery.fn.init.prototype=jQuery.fn;
	jQuery.extend = jQuery.fn.extend = function(name,fn){
		jQuery.prototype[name] = fn;
	}	
	window.jQuery=window.$=jQuery;
})(window);