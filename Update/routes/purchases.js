
/***
 * A very basic CRUD example using MySQL
 */

exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from purchases', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases', {
					no_products : results.length === 0,
					purchases : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from products', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'add_purchases', {
					products : results,
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			product_id : Number(req.body.product_id),
			quantity: Number(req.body.quantity),
			cost: Number(req.body.cost),
			total_cost: Number(req.body.quantity) * Number(req.body.cost),
			shop: req.body.shop
  		};

		connection.query('insert into purchases set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/purchases');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products', [id], function(err, products){
			if(err) return next(err);
			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,purchases){
				if(err) return next(err);
				var purchase= purchases[0];
				products = products.map(function(product){
					product.selected = product.id === purchase.product_id ? "selected" : "";
					return product;
				});
				res.render('edit_purchase', {
					products : products,
					data : purchase
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		product_id : Number(req.body.product_id),
		quantity: Number(req.body.quantity),
		cost: Number(req.body.cost),
		total_cost: Number(req.body.quantity) * Number(req.body.cost),
		shop: req.body.shop
		};
		
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/purchases');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/purchases');
		});
	});
};
