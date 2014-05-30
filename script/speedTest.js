$( document ).ready(function() {
    var connection, connectionSpeed;

    // create a custom object if navigator.connection isn't available
    connection = navigator.connection || navigator.webkitConnection || {'type':'-1'};
    
//     set connectionSpeed
    switch(connection.type) {
      case connection.CELL_3G:
        // 3G
        connectionSpeed = 'mediumbandwidth';
      break;
      case connection.CELL_2G:
    // 2G
        connectionSpeed = 'lowbandwidth';
      break;
      case connection.UNKNOWN:
        // shrug
        connectionSpeed = 'unknown';
      break;
      case '-1':
        // shrug
        connectionSpeed = 'unavailable';
      break;
      default:
    // WIFI, ETHERNET, UNKNOWN
        connectionSpeed = 'highbandwidth';
    }
// turns out this is useless at the moment.
});

