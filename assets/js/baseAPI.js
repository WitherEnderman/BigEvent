$.ajaxPrefilter(function (options) {
        // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
        options.url = 'http://api-breakingnews-web.itheima.net' + options.url

        if (options.url.indexOf('/my/') !== -1) {
            options.headers = {
                Authorization: localStorage.getItem('token') || ''
            }
    }
    
    // complete: function (res) {
    //     console.log(res);
    //     if (res.responseJSON.status === 1 && res.responseJSON.message === '获取用户信息失败！')
    //         // 强制清空token
    //         localStorage.removeItem('token')
    //     // 跳转登录页面
    //     location.href = '/login.html'
    // }


    })
