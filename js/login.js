var upwd = $("#upwd").val();

$("[name=uname]").blur(function(){
    var nameReg=/^[0-9]{6,8}$/;
    if(!nameReg.test($(this).val())){
    $(this).next().css("visibility","visible");
    }
})
$("[name=uname]").focus(function(){
    $(this).next().css("visibility","hidden");
})
$("[name=upwd]").blur(function(){
    var pwdReg=/[A-Za-z]+[0-9]{7}/;
    if(!pwdReg.test($(this).val())){
    $(this).next().css("visibility","visible");
    }
})
$("[name=upwd]").focus(function(){
    $(this).next().css("visibility","hidden");
})