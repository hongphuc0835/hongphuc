var request;
var $current;
var cache = {};
var $frame = ('pgoto-viewer');
var $thumb = ('.thumb');

function crossfade($img){
    if ($request){
        $current.stop().fadeOut('slow');
    }

    $ing.css({
        marginLeft:-$img.width() / 2,
        marginTop:-$img.height() / 2
    });
    $img.stop().fadeTo('slow',1);

    $current = $img;

}
$(document).on('click', 'thumb',function(e){
    var $img,
    src = this.href;
    request = src;
    e.preventDefault();
    $thumbs.removeClass('active');
    $(this).addClass('active');
    if (cache.hasOwnProperty(src)){
        if (cache[src].isLoading === false){
            crossfade(cache[src].$img);
        }
    }else {
        $img = $('<img/>');
        cache[src] = {
            $imh:$img,
            isLoading:true
        };


        $img.on('load',function(){
            $img.hide();
            $frame.removeClass('is-loading').append($img);
            cache[src].isloading = false;

            if (requesr === src) {
                crossfade($img);
            }
        });
        $frame.addClass('is-loading');

        $img.attr({
            'src':src,
            'alt':this.title || ''
        });
    }
});

$('thumb').eq(0).click();