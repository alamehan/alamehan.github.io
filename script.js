/* ----------------------------- All JavaScript ----------------------------- */

$(document).ready(function () {

  //---------- jQuery Flip Js

  $("#card1").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card2").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card3").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card4").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card5").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card6").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  //---------- Slick JS

  $('.slick-js').slick({
    dots: true,
    arrows: false,
    draggable: true
  });

  $('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [{
        breakpoint: 995,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 771,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 531,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  //---------- Sweet Alert Js

  $(".alert-show").click(function () {
    Swal.fire({
      // icon: 'info',
      title: 'Hello my friend!',
      text: 'To get examples of works, you can contact me 😊👌',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  //---------- Web Animation & Hummber & Muuri Js

  var grid = null,
    wrapper = document.querySelector('.grid-wrapper'),
    searchField = wrapper.querySelector('.search-field'),
    filterField = wrapper.querySelector('.filter-field'),
    sortField = wrapper.querySelector('.sort-field'),
    gridElem = wrapper.querySelector('.grid'),
    searchAttr = 'data-title',
    filterAttr = 'data-color',
    searchFieldValue,
    filterFieldValue,
    sortFieldValue,
    dragOrder = [];

  // Init the grid layout
  grid = new Muuri(gridElem, {
    dragEnabled: true
  });

  // Set inital search query, active filter, active sort value and active layout.
  searchFieldValue = searchField.value.toLowerCase();
  filterFieldValue = filterField.value;
  sortFieldValue = sortField.value;

  // Search field event binding
  searchField.addEventListener('keyup', function () {
    var newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Filter field event binding
  filterField.addEventListener('change', filter);

  // Sort field event binding
  sortField.addEventListener('change', sort);

  // Filtering
  function filter() {
    filterFieldValue = filterField.value;
    grid.filter(function (item) {
      var element = item.getElement(),
        isSearchMatch = !searchFieldValue ? true : (element.getAttribute(searchAttr) || '').toLowerCase().indexOf(searchFieldValue) > -1,
        isFilterMatch = !filterFieldValue ? true : (element.getAttribute(filterAttr) || '') === filterFieldValue;
      return isSearchMatch && isFilterMatch;
    });
  }

  // Sorting
  function sort() {
    // Do nothing if sort value did not change.
    var currentSort = sortField.value;
    if (sortFieldValue === currentSort) {
      return;
    }

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
    if (sortFieldValue === 'order') {
      dragOrder = grid.getItems();
    }

    // Sort the items.
    grid.sort(
      currentSort === 'title' ? compareItemTitle :
      currentSort === 'color' ? compareItemColor :
      dragOrder
    );
    sortFieldValue = currentSort;
  }

  // Compare data-title
  function compareItemTitle(a, b) {
    var aVal = a.getElement().getAttribute(searchAttr) || '';
    var bVal = b.getElement().getAttribute(searchAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;

  }

  // Compare data-color
  function compareItemColor(a, b) {
    var aVal = a.getElement().getAttribute(filterAttr) || '';
    var bVal = b.getElement().getAttribute(filterAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
  }

  //---------- Muuri Js for Imag Dragger

  var grid = new Muuri({
    container: document.getElementsByClassName('grid')[0],
    items: [].slice.call(document.getElementsByClassName('item')),
    dragEnabled: true
  });

  // Prevent native image drag for images inside items.
  var images = document.querySelectorAll('.item img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function (e) {
      e.preventDefault();
    }, false);
  }

  // Refresh item dimensions and do layout after all images have loaded.
  window.addEventListener('load', function () {
    grid.refresh();
    grid.layout();
  });

});