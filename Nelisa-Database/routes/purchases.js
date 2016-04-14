
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
					products : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, categories) {
        	if (err) return next(err);
    		res.render( 'add_purchases', {
					categories : categories,
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			category_id : Number(req.body.category_id),
      		description : req.body.description,
			price : Number(req.body.price)
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
		connection.query('SELECT * FROM categories', [id], function(err, categories){
			if(err) return next(err);
			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,purchases){
				if(err) return next(err);
				var purchase= purchase[0];
				categories = categories.map(function(category){
					category.selected = category.id === purchase.category_id ? "selected" : "";
					return category;
				});
				res.render('edit', {
					categories : categories,
					data : purchase
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		category_id : Number(req.body.category_id),
		description : req.body.description,
		price : Number(req.body.price)
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
