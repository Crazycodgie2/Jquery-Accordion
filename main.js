$(document).ready(function() {
  $("accordion").on(`click`, `button`, function() {
    $(`.content`).removeClass(".show")
    $(`button`).removeClass(`active`)
    $(this).addClass(`active`)
    $(this)
      .find(`+ .content`)
      .addClass(`.show`)
  })
})
