
/***
 * A very basic CRUD example using MySQL
 */

exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT s.id, s.quantity, s.week, pr.description from sales AS s INNER JOIN products AS pr ON s.product_id = pr.id', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'sales', {
					no_products : results.length === 0,
					sales : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from products', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'add_sales', {
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

			quantity : Number(req.body.quantity),

			week : Number(req.body.week)
  		};

		connection.query('insert into sales set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/sales');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products', [id], function(err, products){
			if(err) return next(err);
			connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,sales){
				if(err) return next(err);
				var sale= sales[0];
				products = products.map(function(product){
					product.selected = product.id === sale.product_id ? "selected" : "";
					return product;
				});
				res.render('edit_sale', {
					products : products,
					data : sale
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		product_id : Number(req.body.product_id),

		quantity : Number(req.body.quantity),

		week : Number(req.body.week)
		};

  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/sales');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM sales WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/sales');
		});
	});
};
