var warper = $('.apple-warper');
var mul0 = $('.clum0');
var mul1 = $('.clum1');
var imgs = $('img');
var mUl = $('ul');
function loaded(){
    bind();
}
loaded();

function bind(){
    mul0.find('li').on('mousemove',function(){
        var index = $(this).index();// li的索引
        var mythis = $(this);
        show(index,mythis);
    }).on('mouseleave',function(){
        var index = $(this).index();
        var mythis = $(this);
        hide(index, mythis);
    })
}

function show(index,mythis){ //显示
    mythis.find('.addcart').css('display', 'block').addClass('shows');
}
function hide(index, mythis){
    mythis.find('.addcart').css('display', 'none');
}