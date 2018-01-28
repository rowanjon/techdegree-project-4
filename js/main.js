// calling the "abigimage" lightbox plugin
$('a[href$=".jpg"]').abigimage({
  onopen: function (target) {
      this.bottom.html(
          $('img', target).attr('alt') +
          ($('span', target).html() || '')
      );
  },
  zoomMax: 2
});
