$(document).ready(function(){

/*Initialize*/
  resetStatus();
  
/*Add items*/
  $(".addbutton").click (function(){
    addItem();
  });

  $(document).keypress(function(e){
    if(e.which == 13){
      addItem();
    }
  });

/*Remove all items*/
  $(".resetbutton").click (function(){
    $(".list-item").remove();
    resetStatus();
  });

/*Cross an item off the list*/
  $(document).on('click', ".item-checkbox", function(){
    $(this).parent().children(".list-input").toggleClass("checked-item");
    resetStatus();
  });

/*Remove one item from the list*/
  $(document).on('click', ".deletebutton", function(){
    $(this).parent().remove();
    resetStatus();
  });

/*Helper functions*/ 
  function addItem(){
      var my_text = $(".iteminput").val();
      var my_item = $('<li class="list-item"><input type="checkbox" class="item-checkbox"><input class="list-input" type="text" value="' + my_text + '"><button class="deletebutton">Delete</button></li>');

      if (my_text!=""){
        if (isDuplicateItem(my_text) == false) {
          $(".item-list").append(my_item);
          $(".status-text").text("Item entered: "+my_text);
          $(".iteminput").val("");
          $(".iteminput").focus();
        } 
        else
        {
          $('.status-text').text('Duplicate item discarded: "'+my_text+'"');
          $(".iteminput").val("");
        }
      }
      else{
        resetStatus();
      }
  };

  function isDuplicateItem(my_text){
    var retVal = false;
    $('.list-input').each(function() {
      var txt = $(this).val();
      if (txt == my_text)
        retVal = true;
    });
    return retVal;
  };

  function resetStatus(){
    $(".status-text").text("Please enter an item");
    $(".iteminput").focus();
  };

  /* Make the item listbox sortable */
  $(function() {
    $( ".item-list" ).sortable();
    $( ".item-list" ).disableSelection();
  });

});

