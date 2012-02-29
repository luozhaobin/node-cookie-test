/**
 * @fileOverview web桌面
 * @author <a href="mailto:pancnlz@gmail.com">LongZhou</a>
 * @version 0.9
 */
$(document).ready(function() {
    WebApp.WebMain();
});

// 创建命名空间
var WebApp = WebApp || {};
// Main函数入口
WebApp.WebMain = function() {
    WebApp.os.init();
};

/**
 * @namespace
 */
WebApp.os = (function() {
    /**
     * @private
     * @description 获取验证码
     */
    var getCaptcha = function() {
        $.ajax({
            url: "/api/captcha",
            type: "GET",
            cache: false,
            dataType: "json",
            success: function(json) {
                console.log(json);
            }
        });
    };

    /**
     * @private
     * @description 提交验证码
     */
    var submitCaptcha = function() {
        $.ajax({
            url: "/api/captcha",
            type: "POST",
            cache: false,
            dataType: "json",
            success: function(json) {
                console.log(json);
            }
        });
    };
    
    /**
     * @private
     * @description 初始化事件
     */
    var bindEvent = function() {
        $("#getCaptcha").click(function() {
            console.log("getCaptcha");
            getCaptcha();
        });

        $("#submitCaptcha").click(function() {
            console.log("submitCaptcha");
            submitCaptcha(); 
        });
    };

    /**
     * @scope WebApp.os
     */
    return {
        /**
         * @description 命名空间初始化 
         */
        init: function() {
            // 初始化应用程序
            bindEvent();
        }
    };
}());
