
jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );

    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text') {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

$(document).ready(function() {
  $('body').textWalk(function() {
      if (this.data.indexOf('bacon') >= 0) {
        console.log("FOUND BACON!");
      }
      this.data = this.data.replace(/bacon/gi, 'CANCER');
  });
});

