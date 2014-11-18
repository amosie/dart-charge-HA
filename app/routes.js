module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    app.get('/account/user/personal-standard', function (req, res) {
        res.render('account/user/personal-standard/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/personal', function (req, res) {
      res.render('account/setup/personal/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/payment', function (req, res) {
      res.render('account/setup/payment/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/paygo', function (req, res) {
      res.render('account/setup/paygo/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/one-off', function (req, res) {
      res.render('account/setup/one-off/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/payment/card', function (req, res) {
      res.render('account/setup/payment/card', {'assetPath' : assetPath});
    });

    app.post('/account/setup/vehicle', function (req, res) {
      res.render('account/setup/vehicle/index', {'assetPath' : assetPath});
    });

    app.post('/account/sign-in', function (req, res) {
      res.render('account/sign-in/index', {'assetPath' : assetPath});
    });

    app.post('/account/user/personal-standard/sign-out', function (req, res) {
      res.render('account/sign-out/index', {'assetPath' : assetPath});
    });

    app.post('/fees-exemptions-penalties', function (req, res) {
      res.render('fees-exemptions-penalties/index', {'assetPath' : assetPath});
    });

    app.post('/query', function (req, res) {
      res.render('query/index', {'assetPath' : assetPath});
    });
  }
};
