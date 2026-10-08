'use strict';



$(function() {
  $('.ui-box').each(function(i, el) {
    $(el).html(`<div class="easyui-panel" style="width: 100%">GENERATED_PANEL_CONTENT_${i}</div>`)
  })
})




