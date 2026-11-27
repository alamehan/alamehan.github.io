$('.alert-personalweb').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🦸‍♂️ Raihan\'s Personal Website</h1>',
    imageUrl: 'assets/logo-z-personalweb.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="' + ((location.protocol === 'file:' && String(location.pathname || '').replace(/\\/g, '/').indexOf('/release/') === -1) ? '../../../WORKSHOP.html' : '../../../index.html') + '">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-linkedin').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👨‍🎓 LinkedIn :\n Curriculum Vitae</h1>',
    imageUrl: 'assets/logo-linkedin.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.linkedin.com/in/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-kaggle').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🙋‍♂️ Kaggle :\n Data Science Projects</h1>',
    imageUrl: 'assets/logo-kaggle.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.kaggle.com/raihanallaam">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-github').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👨‍💻 GitHub :\n Web-Based Projects</h1>',
    imageUrl: 'assets/logo-github.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-codepen').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👨‍💻 Codepen :\n Frontend Projects</h1>',
    imageUrl: 'assets/logo-codepen.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://codepen.io/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-behance').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👨‍🎨 Behance :\n Design & Illustration</h1>',
    imageUrl: 'assets/logo-behance.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.behance.net/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-dribbble').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👨‍🎨 Dribbble :\n Design & Illustration</h1>',
    imageUrl: 'assets/logo-dribbble.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://dribbble.com/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

// =============================================================================================== //
// =============================================================================================== //

$('.alert-medium').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">✍️ Medium :\n Insight Stories</h1>',
    imageUrl: 'assets/logo-medium.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://alamehan.medium.com/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-spotify').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🎙️ Spotify :\n Podcast Sunday Today</h1>',
    imageUrl: 'assets/logo-spotify.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://open.spotify.com/show/7fWzskG3FN2GRgqLAj9nLK">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-youtube').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🎬 Youtube :\n AlamehanTuts</h1>',
    imageUrl: 'assets/logo-youtube.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.youtube.com/channel/UC0wdATMzvx8xczyPI2iy3Tw/playlists">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-discord').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">💬 Discord : \n Muda Berkarya</h1>',
    imageUrl: 'assets/logo-discord.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://discord.com/invite/q5xZJHbp">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-instagram').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🎯 Instagram :\n Microblog Plus</h1>',
    imageUrl: 'assets/logo-instagram.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://instagram.com/alamehan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-twitter').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🎭 Twitter</h1>',
    imageUrl: 'assets/logo-twitter.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://twitter.com/alamehan98">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

// =============================================================================================== //
// =============================================================================================== //

$('.alert-anggrekclassifier').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🤖 Anggrek Classifier :\n AI/ML Archive (Kaggle)</h1>',
    imageUrl: 'assets/logo-z-anggrekclassifier.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.kaggle.com/raihanallaam">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-thereaderrr').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">📝 The Readerrr :\n Raihan\'s Notes</h1>',
    imageUrl: 'assets/logo-z-thereaderrr.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../best-book/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-cheatsheet').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">📘 CheatSheet :\n Pocket References</h1>',
    imageUrl: 'assets/logo-z-cheatsheet.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../cheatsheet/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-nicevizual').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🎲 NiceVizual :\n Interactive Apps</h1>',
    imageUrl: 'assets/logo-z-nicevizual.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://nicevizual.github.io/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-nicelist').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">📜 NiceList :\n Curated List</h1>',
    imageUrl: 'assets/logo-z-nicelist.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../nicelist/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-nicebook').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">📚 NiceBook :\n Selected Books</h1>',
    imageUrl: 'assets/logo-z-nicebook.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/alamehan/nice-book">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-atozmind').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🧠 ATOZ Mind :\n Mind Map Collections</h1>',
    imageUrl: 'assets/logo-z-atozmind.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../atoz-mind/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-righttr4ck').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🔥 RightTr4ck :\n Learning Frameworks</h1>',
    imageUrl: 'assets/logo-z-righttr4ck.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../righttr4ck/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-knowyourself101').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">👦 Know Yourself 101 :\n "Best Version of You"</h1>',
    imageUrl: 'assets/logo-z-knowyourself101.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://drive.google.com/drive/folders/1q2XKCioGNsoqeyc-NfiG0BcaAXIfwCwD?usp=share_link">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-designshowcase').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">✒️ Design Showcase :\n Design & Illustration</h1>',
    imageUrl: 'assets/logo-z-designshowcase.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="../../v1/index.html">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-petualanganoemar').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">⚔️ Petualangan Oemar :\n RPG Maker Game</h1>',
    imageUrl: 'assets/logo-z-petualanganoemar.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://petualanganoemar.blogspot.com/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-oldworks').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">📦 Old Works :\n Animation, Graffiti, Etc</h1>',
    imageUrl: 'assets/logo-z-oldworks.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://raihan110598blog.blogspot.com/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-satuklik').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 85%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">🔗 SatuKlik :\n Modern Bio Link</h1>',
    imageUrl: 'assets/logo-z-satuklik.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://satuklik.github.io/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});