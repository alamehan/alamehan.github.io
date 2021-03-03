//---------- Bootstrap Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//---------- Sweet Alert Js

//=== BAGIAN 1: PORTFOLIOS

$('.alert-show-alamehan-black').click(function () {
  Swal.fire({
    title: '🦸‍♂️ Alamehan\'s\n Personal Website',
    imageUrl: 'assets/logo-alamehan-black.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../index.html">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-linkedin').click(function () {
  Swal.fire({
    title: '👨‍🎓 LinkedIn:\n Curriculum Vitae',
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

$('.alert-show-kaggle').click(function () {
  Swal.fire({
    title: '🙋‍♂️ Kaggle:\n Data Science Projects',
    imageUrl: 'assets/logo-kaggle.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.kaggle.com/raihanallaam">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-github').click(function () {
  Swal.fire({
    title: '👨‍💻 GitHub:\n Personal Projects',
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

$('.alert-show-codepen').click(function () {
  Swal.fire({
    title: '👨‍💻 Codepen:\n Frontend Projects',
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

$('.alert-show-behance').click(function () {
  Swal.fire({
    title: '👨‍🎨 Behance:\n Design & Illustration',
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

$('.alert-show-dribbble').click(function () {
  Swal.fire({
    title: '👨‍🎨 Dribbble:\n Design & Illustration',
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

//=== BAGIAN 2: MEDIA & SOCIAL

$('.alert-show-insightstories').click(function () {
  Swal.fire({
    title: '✍️ Medium:\n Insight Stories',
    imageUrl: 'assets/logo-medium.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://medium.com/@alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-podcastsundaytoday').click(function () {
  Swal.fire({
    title: '🎙️ Spotify:\n Podcast Sunday Today', 
    imageUrl: 'assets/logo-spotify.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://open.spotify.com/show/7fWzskG3FN2GRgqLAj9nLK">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-alamehantuts').click(function () {
  Swal.fire({
    title: '🎬 Youtube:\n AlamehanTuts',
    imageUrl: 'assets/logo-youtube.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.youtube.com/channel/UC0wdATMzvx8xczyPI2iy3Tw/playlists">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-microblogplus').click(function () {
  Swal.fire({
    title: '🎯 Instagram:\n Microblog Plus',
    imageUrl: 'assets/logo-instagram.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://instagram.com/alamehan">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-twitter').click(function () {
  Swal.fire({
    title: '🎭 Twitter',
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

$('.alert-show-facebook').click(function () {
  Swal.fire({
    title: '🎭 Facebook',
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

//=== BAGIAN 3: A LITTLE LEGACY FOR YOU

$('.alert-show-anggrekclassifier').click(function () {
  Swal.fire({
    title: '🤖 Anggrek Classifier:\n Artificial Intelligence',
    imageUrl: 'assets/logo-anggrekclassifier.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://anggrek-classifier.herokuapp.com/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-thereaderrr').click(function () {
  Swal.fire({
    title: '📖 The Readerrr:\n Reader Starter Kit',
    imageUrl: 'assets/logo-thereaderrr.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://alamehan.github.io/epub">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-niceref').click(function () {
  Swal.fire({
    title: '📘 NiceRef:\n Reference Books',
    imageUrl: 'assets/logo-niceref.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
  });
});

$('.alert-show-nicelist').click(function () {
  Swal.fire({
    title: '📜 NiceList:\n Curated List',
    imageUrl: 'assets/logo-nicelist.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/alamehan/nice-list">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-nicebook').click(function () {
  Swal.fire({
    title: '📚 NiceBook:\n Book Recommendation',
    imageUrl: 'assets/logo-nicebook.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/alamehan/nice-book">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-nicevizual').click(function () {
  Swal.fire({
    title: '🎲 NiceVizual:\n Interactive Apps',
    imageUrl: 'assets/logo-nicevizual.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://nicevizual.github.io/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-righttr4ck').click(function () {
  Swal.fire({
    title: '🔎 RightTr4ck:\n "How to Learn"',
    imageUrl: 'assets/logo-righttr4ck.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="assets/image-righttr4ck.pdf">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-atozmind').click(function () {
  Swal.fire({
    title: '🧠 AtozMind:\n Mind Map Collection',
    imageUrl: 'assets/logo-atozmind.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://bit.ly/atozmind">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-show-knowyourself101').click(function () {
  Swal.fire({
    title: '👦 Know Yourself 101:\n "Best of You"',
    imageUrl: 'assets/logo-knowyourself101.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="#">🔒 Upcoming</a>',
  });
});

$('.alert-show-oldworks').click(function () {
  Swal.fire({
    title: '📦 Old Works (2012):\n Game & Arts',
    imageUrl: 'assets/logo-blogger.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://raihan110598blog.blogspot.com/">Open</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});