

function queryString(parameter) {
  var loc = location.search.substring(1, location.search.length);
  var paramValue = false;
  var params = loc.split('&');
  for (i = 0; i < params.length; i++) {
    paramName = params[i].substring(0, params[i].indexOf('='));
    if (paramName == parameter) {
      paramValue = params[i].substring(params[i].indexOf('=') + 1);
    }
  }

  if (paramValue) {
    return paramValue;
  } else {
    return undefined;
  }
}
