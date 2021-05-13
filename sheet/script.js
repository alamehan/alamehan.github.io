$('.alert-k1').click(function () {
  Swal.fire({
    // title: '<div style="color: #F9F9F9">CSS Layouting</div>',
    // html: '<img src="@original/assets/cover-css-layouting.png" style="width: 300px">',
    imageUrl: '@original/assets/cover-css-layouting.png',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    width: 400,
    background: '#000',
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="@original/assets/css-layouting.pdf">Download</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-k2').click(function () {
  Swal.fire({
    imageUrl: '@original/assets/cover-css-flexbox.png',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    width: 400,
    background: '#000',
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-k3').click(function () {
  Swal.fire({
    imageUrl: '@original/assets/cover-css-grid.png',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    width: 400,
    background: '#000',
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});