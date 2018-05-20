; +function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else {
    factory(jQuery);
  }
}(function ($) {
  function User_reg(){
    this.succ = false;  
    this.init();
  }
  User_reg.prototype={
    constructor:User_reg,
    init:function(){
      $(".phone").on("blur",function(){
        this.verification();
        this. phoneblur_error();
      }.bind(this))
      $(".pwd").on("blur",function(){
        this.verification();
        this.pwdblur_error();
      }.bind(this))
      $(".log").on("click",function(){
        this.verification();
        this.click_error();
        if(this.succ){
          this.load_login();
        }
      }.bind(this))
    },
    verification:function(){
      var Validator = (function(){
        var rules = {
          notEmpty : function(val){
              return val!=""&&val!=null&&val!=undefined;
          },
          lengthRange : function(val, args) {
              var [min,max] = [args.split(",")[0], args.split(",")[1]];
              return val.length>=min && val.length<=max;
          },
          phone : function(val){
              return /^(1[35][01235678]|18[012356789])\d{8}$/.test(val);
          },
          password : function(val){
            return /^[a-z0-9\u0021-\u002f]{6,20}$/i.test(val);
          }  
        }
        return {
          check : function(val, sets){
              return sets.every(function(rulename){
                return rules[rulename.split("\|")[0]](val, rulename.split("\|")[1]);
              });
            }
          };
      })();

      this.phoneEmpty = Validator.check($(".phone").val(),["notEmpty"]);
      this.phoneError= Validator.check($(".phone").val(),["phone"]);
      this.pwdEmpty = Validator.check($(".pwd").val(),["notEmpty"]);
      this.pwdError = Validator.check($(".pwd").val(),["password"]);
      this.rpwdEmpty = Validator.check($(".rpwd").val(),["notEmpty"]);
      if(this.phoneEmpty && this.phoneError && this.pwdEmpty && this.pwdError && this.rpwdEmpty && ($(".pwd").val()==$(".rpwd").val())){
        this.succ = true;
      }
    },
    phoneblur_error:function(){
      if(this.phoneEmpty){
        if(!this.phoneError){
          $(".warning")
            .show()
            .find(".chird-warning")
            .text("号码错误")
        }else{
          $(".warning")
          .hide()
        }
      }else{
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("号码不能为空")
      }
    },
    pwdblur_error:function(){
      if(this.phoneEmpty && this.phoneError){
        if(this.pwdEmpty){
          if(!this.pwdError){
            $(".warning")
              .show()
              .find(".chird-warning")
              .text("请输入6-20位密码")
          }else{
            $(".warning")
            .hide()
          }
        }else{
          $(".warning")
            .show()
            .find(".chird-warning")
            .text("密码不能为空")
        }
      }
    },
    click_error:function(){
      if(!this.phoneEmpty){
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("号码不能为空")
      }else if(!this.pwdEmpty){
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("密码不能为空")
      }else if(!this.rpwdEmpty){
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("请输入重复密码")
      }else if(!this.pwdError){
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("请输入6-20位密码")
      }else if($(".pwd").val()!==$(".rpwd").val()){
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("两次输入不一致")
      }else{
        $(".warning")
        .hide()
      }
    },
    load_login:function(){
      var username = $(".phone").val();
      var pwd = $(".pwd").val();
      var opt = {
          url:"http://localhost/PHP/yuki/php/user.php",
          type:"POST",
          data:{username:username,password:pwd,type:$(".log").attr("mytype")}
      }
      $.ajax(opt)
      .then(function(res){
        if(res == 1){
          alert("注册成功");
        }else{
          $(".warning")
          .show()
          .find(".chird-warning")
          .text("号码已注册")
          this.succ = false;
        }
      }.bind(this))
    }
  }




  function User_log(){
    this.succ = false;  
    this.init();
  }
  User_log.prototype={
    constructor:User_log,
    init:function(){
      $(".phone").on("blur",function(){
        this.verification();
        this. phoneblur_error();
      }.bind(this))
      $(".pwd").on("blur",function(){
        this.verification();
        this.pwdblur_error();
      }.bind(this))
      $(".log").on("click",function(){
        if(this.popShow){
          return;
        }
        this.verification();
        this.click_error();
        if(this.succ){
          this.load_login()
        }
      }.bind(this))
    },
    verification:function(){
      var Validator = (function(){
        var rules = {
          notEmpty : function(val){
              return val!=""&&val!=null&&val!=undefined;
          },
          lengthRange : function(val, args) {
              var [min,max] = [args.split(",")[0], args.split(",")[1]];
              return val.length>=min && val.length<=max;
          },
          phone : function(val){
              return /^(1[35][01235678]|18[012356789])\d{8}$/.test(val);
          },
        }
        return {
          check : function(val, sets){
              return sets.every(function(rulename){
                return rules[rulename.split("\|")[0]](val, rulename.split("\|")[1]);
              });
            }
          };
      })();

      this.phoneEmpty = Validator.check($(".phone").val(),["notEmpty"]);
      this.phoneError= Validator.check($(".phone").val(),["phone"]);
      this.pwdEmpty = Validator.check($(".pwd").val(),["notEmpty"]);
      if(this.phoneEmpty && this.phoneError && this.pwdEmpty){
        this.succ = true;
      }
    },
    phoneblur_error:function(){
      if(this.phoneEmpty){
        if(!this.phoneError){
          $(".warning")
            .show()
            .find(".chird-warning")
            .text("号码错误")
          $(".phone").parent()
          .css({
            "border":"1px solid rgb(232, 51, 60)"
          })  
        }else{
          $(".warning")
          .hide()
          $(".phone").parent()
          .css({
            "border":"1px solid rgb(204, 204, 204)"
          })  
        }
      }else{
        $(".warning")
          .show()
          .find(".chird-warning")
          .text("号码不能为空")
        $(".phone").parent()
          .css({
            "border":"1px solid rgb(232, 51, 60)"
          })  
      }
    },
    pwdblur_error:function(){
        if(!this.pwdEmpty){
          $(".warning")
            .show()
            .find(".chird-warning")
            .text("密码不能为空")
          $(".pwd").parent()
            .css({
              "border":"1px solid rgb(232, 51, 60)"
            })  
        }else{
          $(".warning")
          .hide()
        $(".pwd").parent()
          .css({
            "border":"1px solid rgb(204, 204, 204)"
          })  
        }
    },
    click_error:function(){
      if(!this.phoneEmpty){
        this.popMsgBox()
        $(".popMsgBox")
        .html("用户名不能为空")
      }else if(!this.pwdEmpty){
        this.popMsgBox()
        $(".popMsgBox")
        .html("密码不能为空")
      } 
    },
    load_login:function(){
      var username = $(".phone").val();
      var pwd = $(".pwd").val();
      var opt = {
          url:"http://localhost/PHP/yuki/php/user.php",
          type:"POST",
          data:{username:username,password:pwd,type:$(".log").attr("mytype")}
      }
      $.ajax(opt)
      .then(function(res){
        if(res != 0){
          alert("登录成功");
        }else{
          this.popMsgBox()
          $(".popMsgBox")
          .html("用户名或密码错误")
          this.succ = false;
        }
      }.bind(this))
    },

    popMsgBox:function(){
      this.popShow = true;
      $(".popMsgBox") .show()    
      this.popTimer = setTimeout(function(){
        $(".popMsgBox").hide();
        this.popShow = false
      }.bind(this),2000)
    },

  }
  
  
  
  
  
  
  
  
  
  if($(".log").attr("mytype") == "register_btn"){
    return User_reg;
  }else{
    return User_log;
  }
});
