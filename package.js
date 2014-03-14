Package.describe({
  summary: "Autocomplete using Meteor collections on client and server"
});

Package.on_use(function (api) {
  api.use(['handlebars', 'templating'], 'client');
  api.use(['jquery'], 'client');
  api.use(['coffeescript', 'underscore']); // both

  // Required by caretposition.js right now
  api.use('jquery-migrate');

  // Our files
  api.add_files([
    'autocomplete.css',
    'inputs.html',
    'jquery.caretposition.js',
    'autocomplete-client.coffee',
    'templates.coffee'
  ], 'client');
  
  api.add_files([
    'autocomplete-server.coffee'
  ], 'server');
});
