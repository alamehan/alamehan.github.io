$(document).ready(function () {

  $('#100-in-history').DataTable({
    'bPaginate': false, // Hide paginate
    "bLengthChange": false,
    "bInfo": false, // Hide entry text
    "bAutoWidth": false,
    "bFilter": false, // Hide search box
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }], // Hide sort icon on header of first column
    'aaSorting': [
      [3, 'asc']
    ], // Start to sort data in fourth column
  });

  $('#behind-the-scene').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#big-ideas-simply-explained').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#dk-essential-managers').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#dk-life-stories').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });
});