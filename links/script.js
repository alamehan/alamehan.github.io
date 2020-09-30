//---------- Bootstrap Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//---------- Sweet Alert Js

$('.alert-show-nicelist').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-nicelist.png) center no-repeat',
    confirmButtonText: '<a href="https://github.com/alamehan/nice-list">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-nicebook').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-nicebook.png) center no-repeat',
    confirmButtonText: '<a href="https://github.com/alamehan/nice-book">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-nicevizual').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-nicevizual.png) center no-repeat',
    confirmButtonText: '<a href="https://nicevizual.github.io/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-righttr4ck').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-righttr4ck.png) center no-repeat',
    confirmButtonText: '<a href="assets/image-righttr4ck.pdf">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-atozmind').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-atozmind.png) center no-repeat',
    confirmButtonText: '<a href="https://bit.ly/atozmind">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-knowyourself101').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-knowyourself101.png) center no-repeat',
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
  });
});

$('.alert-show-insightstories').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-insightstories.png) center no-repeat',
    confirmButtonText: '<a href="https://medium.com/@alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-podcastsundaytoday').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-podcastsundaytoday.png) center no-repeat',
    confirmButtonText: '<a href="https://open.spotify.com/show/7fWzskG3FN2GRgqLAj9nLK">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-alamehantuts').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-alamehantuts.png) center no-repeat',
    confirmButtonText: '<a href="https://www.youtube.com/channel/UC0wdATMzvx8xczyPI2iy3Tw/playlists">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-microblogplus').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-microblogplus.png) center no-repeat',
    confirmButtonText: '<a href="http://instagram.com/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-oldworks').click(function () {
  Swal.fire({
    customClass: {
      popup: 'popup-project',
      confirmButton: 'confirm-button-project',
      cancelButton: 'cancel-button-project',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    background: 'url(assets/img-project-oldworks.png) center no-repeat',
    confirmButtonText: '<a href="http://raihan110598blog.blogspot.com/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-twitter').click(function () {
  Swal.fire({
    title: 'Twitter',
    imageUrl: 'assets/logo-twitter.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://twitter.com/alamehan98">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-facebook').click(function () {
  Swal.fire({
    title: 'Facebook',
    imageUrl: 'assets/logo-facebook.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.facebook.com/alamehan98/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-alamehan-black').click(function () {
  Swal.fire({
    title: 'Personal Web',
    imageUrl: 'assets/logo-alamehan-black.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://alamehan.github.io/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-linkedin').click(function () {
  Swal.fire({
    title: 'LinkedIn',
    imageUrl: 'assets/logo-linkedin.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.linkedin.com/in/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-behance').click(function () {
  Swal.fire({
    title: 'Behance',
    imageUrl: 'assets/logo-behance.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.behance.net/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-dribbble').click(function () {
  Swal.fire({
    title: 'Dribbble',
    imageUrl: 'assets/logo-dribbble.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://dribbble.com/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-github').click(function () {
  Swal.fire({
    title: 'GitHub',
    imageUrl: 'assets/logo-github.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-noproject-codepen').click(function () {
  Swal.fire({
    title: 'Codepen',
    imageUrl: 'assets/logo-codepen.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://codepen.io/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});