$(function () {
    getUserInfo()
    // 获取用户的基本信息
    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            // 因为是有权限的接口 要在headers
            // headers 就是请求头配置对象
            // 设置http协议的请求头
            // headers: {
            //     Authorization: localStorage.getItem('token') || ''
            // },
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败！')
                }
                // 调用 renderAvatar 渲染用户的头像
                renderAvatar(res.data)
            },
            // 无论成功还是失败，最终都会调用complete回调函数
            // complete: function (res) {
            //     console.log(res);
            //     if (res.responseJSON.status === 1 && res.responseJSON.message === '获取用户信息失败！')
            //         // 强制清空token
            //         localStorage.removeItem('token')
            //     // 跳转登录页面
            //     location.href = '/login.html'
            // }


        })
    }

    // 渲染用户头像函数
    function renderAvatar(user) {
        // 如果用户没有昵称就用用户名
        var name = user.nickname || user.username
        $('#welcome').html('欢迎&nbsp;' + name)
        // 如果用户没有图片头像就用文字头像代替
        if (user.user_pic !== null) {
            // 获取头像
            $('.layui-nav-img')
                .attr('src', user.user_pic)
                .show()
            $('.text-avatar').hide()

        } else {
            // 否则让图片头像隐藏 显示文本头像
            $('.layui-nav-img').hide()
            // 取用户名的第一个字转换成大写toUpperCase                              
            var first = name[0].toUpperCase()
            $('.text-avatar').html(first).show()
        }

    }

    var layer = layui.layer

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })

















})