
$(function () {
  $('#where').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });
});
$('.dropdown')
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};


(function () {

  function addSeperator(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '1' + '.' + '2');
    }
    return x1 + x2;
  }

  function rangeInputChangeEventHandler(e) {
    var rangeGroup = $(this).attr('name'),
      minBtn = $('.min'),
      maxBtn = $('.max'),
      range_min = $('.range_min'),
      range_max = $('.range_max'),
      minVal = parseInt($(minBtn).val()),
      maxVal = parseInt($(maxBtn).val()),
      origin = $(this).context.className;

    if (origin === 'min' && minVal > maxVal - 5) {
      $(minBtn).val(maxVal - 5);
    }
    var minVal = parseInt($(minBtn).val());
    $(range_min).html("От " + addSeperator(minVal * 1));
    $('#range__from').text("От " + addSeperator(minVal * 1))
    if (origin === 'max' && maxVal - 5 < minVal) {
      $(maxBtn).val(1 + minVal);
    }
    var maxVal = parseInt($(maxBtn).val());
    $(range_max).html("- до " + addSeperator(maxVal * 1));
    $('#range__to').text("до " + addSeperator(maxVal * 1))

  }

  $('input[type="range"]').on('input', rangeInputChangeEventHandler);
})();