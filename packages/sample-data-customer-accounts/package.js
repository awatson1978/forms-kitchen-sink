Package.describe({
  summary: "Meteorite package that adds 500 records to a CustomerAccounts collection."
});

Package.on_use(function (api) {
    api.add_files('customer.accounts.server.js', "server");
    api.add_files('customer.accounts.client.js', "client");
});
