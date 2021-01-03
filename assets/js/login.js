window.onload = function () {
    // START
    // 给注册登录按钮绑定点击事件
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
    })


    // 通过`form.verify()` 函数自定义校验规则，里面是`key：value`形式，
    // key后续对应设置到标签的`lay-verity`属性中，`value`就是验证的规则，
    // 这里定义了两个自定义校验规则，一个是密码框，利用的是正则，一个是确认密码
    var form = layui.form

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
  
















}//  onloda函数  