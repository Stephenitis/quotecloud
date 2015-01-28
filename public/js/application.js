$(document).ready(function() {

  var $spinner = $('#spinner');

  var $editProfile = $('.edit-profile');

  $editProfile.on('submit', 'form.edit-form', function(event) {
    event.preventDefault();
    $spinner.show();

    var $target = $(event.target);
    $.ajax ({
      type: 'PUT',
      url: $target.attr('action'),
      data: $target.serialize()
    }).done(function(response){
      $spinner.hide();
      $target.closest('form').append(response);
      window.location.href="/edit";
    })
  })

  var $likeQuotes = $('.likes');

  $likeQuotes.on('submit', 'form.like-form', function(event) {
    event.preventDefault();
    $spinner.show();

    var $target = $(event.target);
    $.ajax ({
      type: 'DELETE',
      url: $target.attr('action'),
    }).done(function(response){
      $spinner.hide();
      $target.closest('.likes').prepend(response);
      $target.closest('.liked_quote').remove();
    })
  })

  var $allQuotes = $('.all-quotes');

  $allQuotes.on('submit', 'form.like-form', function(event) {
    event.preventDefault();
    $spinner.show();

    var $target = $(event.target);
    $target.hide();

    $.ajax({
      type: 'POST',
      url: $target.attr('action'),
      data: $target.serialize()
    }).done(function(response){
      $spinner.hide();
      $target.closest('.like-link').append(response);
    })
  })

  $(".sign-up-link").on("click", function(event) {
    event.preventDefault();
    $(".sign-up-form").show();
  })
});
