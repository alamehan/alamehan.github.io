$(document).ready(function () {

  $('#ex-editor-theme').DataTable({
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
      [99, 'asc']
    ], // Start to sort data: Disable
  });

  $('#ex-starter-pack').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-formatter').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-time-saving').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-time-saving').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-intellisense').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-useful-tools').DataTable({
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
      [99, 'asc']
    ],
  });

  $('#ex-miscellaneous').DataTable({
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
      [99, 'asc']
    ],
  });

});