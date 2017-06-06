/*******************************************************************
 * Name   : AverageHeight
 * Author : Hiroshi51
 * ver    : 0.0.1
 *******************************************************************/
(function($) {
  $.fn.averageHeight = function() {
    //declare and assign variables
    var $heightArray = [];
    var $heighest;
    var $title = $(this);
    var $numberOftitles = $title.length;
    $title.css("min-height", "0");
    //fetch all the targets height into the array
    for (var $loop = 0; $loop < $numberOftitles; $loop++) {
      $heightArray[$loop] = $title.eq($loop).height();
    }
    //get the heighest
    var $heighest = getMaxOfArray($heightArray);
    setHeights($heighest, $title);


    function setHeights($heighestValue, $target) {
      //debug console.log($heighestValue);
      var $windowWidth = $(window).width();
      //debug console.log("window width = " + $windowWidth);
      if (($windowWidth + 17) > 420) {
        //debug console.log("less than 420");
        $target.css("min-height", $heighestValue);
      } else {
        //debug console.log("equal or more than 420");
        $target.css("min-height", "0");
      }
    }

    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
  };
}(jQuery));
