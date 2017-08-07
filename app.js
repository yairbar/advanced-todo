$(function(){

    $(window).keypress(function(e){
        if( e.keyCode=== 13)
         newItem();});
   $('#list').html(localStorage['text'])
   
    setInterval(function(){
     
        localStorage['text']=$('#list').html();
    
    },1000)
    
function newItem(){   
    
    var item =$('input').val();
    var color= getColor();
$('ul').append('<li style="color:' + color + ' " > '+ item +'</li>');
    
 $('input').val('');   
    }
    
  $('ul').on('click','li',function(e){
     $(e.target).remove();
  })
  
  function getColor()
   { console.log(Math.random().toString(16))
       return '#' + Math.random().toString(16).slice(2, 8);
   
   }
    
    

});
