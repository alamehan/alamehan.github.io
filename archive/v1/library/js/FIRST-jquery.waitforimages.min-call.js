$('root').waitForImages(function() {
    // All descendant images have loaded.
    if (typeof $(this).slideUp === 'function') $(this).slideUp();
});