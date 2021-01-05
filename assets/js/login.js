$(function () {
    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击“去登录”的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    // 从 layui 中获取 form 对象
    var form = layui.form
    // 获取使用layer提示框事件
    var layer = layui.layer
    // 通过 form.verify() 函数自定义校验规则
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function (value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败,则return一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })


    // 监听注册表单提交事件
    $('#form_reg').on('submit', function (e) {
        //   阻止默认提交功能 
        e.preventDefault()
        // 发送POST请求
        $.post('http://api-breakingnews-web.itheima.net/api/reguser',
            // $.post('http://www.liulongbin.top:3006/api/reguser',
            {
                // 请求参数找到form_reg  name=username和password的val()值
                username: $('#form_reg [name=username]').val(),
                password: $('#form_reg [name=password]').val(),
            },
            // 执行回调函数
            function (res) {
                // 0成功 1失败
                if (res.status !== 0) {
                    // 调用layer内置msg提示框
                    return layer.msg(res.message);
                }
                layer.msg('注册成功请登录')
                // 成功执行跳转登录按钮事件自动跳转到登录界面
                $('#link_login').click()
            })
    })


    // 监听登录表单提交事件
    $('#form_login').submit(function (e) {
        e.preventDefault()
        $.post('http://api-breakingnews-web.itheima.net/api/login',
            // $.post('http://www.liulongbin.top:3006/api/login',
            {
                username: $('#form_login [name=username]').val(),
                password: $('#form_login [name=password]').val(),
            },
            function (res) {
                if (res.status !== 0) {
                    return layer.msg('登陆失败')
                }
                layer.msg('登陆成功')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }

        )

    })






    // -------------------------------------------------------------------
})//quickly