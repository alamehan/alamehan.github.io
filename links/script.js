// Bootstrap Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//---------- Sweet Alert Js

$('.alert-show-niceref').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-niceref.png) center no-repeat',
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
  });
});

$('.alert-show-nicelist').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-nicelist.png) center no-repeat',
    confirmButtonText: '<a href="https://github.com/alamehan/nice-list">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-nicevizual').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-nicevizual.png) center no-repeat',
    confirmButtonText: '<a href="https://nicevizual.github.io/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-righttr4ck').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-righttr4ck.png) center no-repeat',
    confirmButtonText: '<a href="assets/image-righttr4ck.pdf">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-atozmind').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-atozmind.png) center no-repeat',
    confirmButtonText: '<a href="https://bit.ly/atozmind">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-knowyourself101').click(function () {
  Swal.fire({
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-knowyourself101.png) center no-repeat',
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
  });
});