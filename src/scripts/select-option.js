$("body").on("click", ".select ul li.option", function(event){
    $(this).addClass('dafault');
    $(this).siblings().toggle().removeClass('dafault');        
});

$("body").on("click", ".popout_info > a", function(event){
// $('.popout_info > a').click(function() {
    $('.popout_list').slideUp(200);
    var nextPopup = $(this).parent(".popout_info").siblings('.popout_list');
    if (!($(nextPopup).is(':visible'))) {
      $(nextPopup).slideToggle(200);
    }
  });