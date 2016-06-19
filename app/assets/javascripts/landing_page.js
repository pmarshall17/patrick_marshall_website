$(document).ready(function(){
  $('.slider').slider({full_width: true});
});

var options = [
  {selector: '.class', offset: 200, callback: customCallbackFunc } },
  {selector: '.other-class', offset: 200, callback: function() {
    customCallbackFunc();
  } },
];
Materialize.scrollFire(options);
        

var options = [
  {selector: '#staggered-test', offset: 50, callback: function() {
    Materialize.toast("This is our ScrollFire Demo!", 1500 );
  } },
  {selector: '#staggered-test', offset: 205, callback: function() {
    Materialize.toast("Please continue scrolling!", 1500 );
  } },
  {selector: '#staggered-test', offset: 400, callback: function() {
    Materialize.showStaggeredList("#staggered-test");
  } },
  {selector: '#image-test', offset: 500, callback: function() {
    Materialize.fadeInImage("#image-test");
  } }
];
Materialize.scrollFire(options);