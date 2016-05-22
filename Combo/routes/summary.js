

exports.show = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT DISTINCT week from sales', [], function(err, sales) {
        	if (err) return next(err);
    		res.render( 'summary', {
					sales : sales,
    		});
      	});
	});
};

exports.showSummary = function(req,res,next){
  req.getConnection(function(err, connection){
    	if (err) return next(err);
      var week = req.body.week;

        connection.query('SELECT week, p.description, product_id, COUNT( * ) , SUM( quantity ) AS summed_q FROM  sales INNER JOIN products AS p ON p.id = sales.product_id GROUP BY product_id, week HAVING week =? ORDER BY summed_q DESC LIMIT 1', [week], function(err, mostPopularProduct){
            if (err) return next(err);


				connection.query('SELECT week, p.description, product_id, COUNT( * ) , SUM( quantity ) AS summed_q FROM  sales INNER JOIN products AS p ON p.id = sales.product_id GROUP BY product_id, week HAVING week =? ORDER BY summed_q ASC LIMIT 1', [week], function(err, leastPopularProduct){
						if (err) return next(err);
        connection.query('SELECT week, c.description, p.category_id, COUNT( * ) , SUM( quantity ) AS summed_q FROM  sales INNER JOIN products AS p ON p.id = sales.product_id INNER JOIN categories AS c ON p.category_id = c.id GROUP BY p.category_id, week HAVING week =? ORDER BY summed_q DESC LIMIT 1 ', [week], function(err,mostPopularCategory){
            if (err) return next(err);
				connection.query('SELECT week, c.description, p.category_id, COUNT( * ) , SUM( quantity ) AS summed_q FROM  sales INNER JOIN products AS p ON p.id = sales.product_id INNER JOIN categories AS c ON p.category_id = c.id GROUP BY p.category_id, week HAVING week =? ORDER BY summed_q ASC LIMIT 1 ', [week], function(err,leastPopularCategory){
		        if (err) return next(err);
				connection.query('SELECT week, pr.description, s.product_id, p.shop, SUM( s.quantity * pr.price - s.quantity * p.cost ) AS summed_q FROM  sales AS s INNER JOIN products AS pr ON pr.id = s.product_id INNER JOIN purchases AS p ON p.product_id = pr.id GROUP BY product_id, week, p.shop HAVING week =? ORDER BY summed_q DESC LIMIT 1',[week], function(err, mostProfitableProduct){
	          if (err) return next(err);
        connection.query('SELECT week, c.description, c.id, SUM( s.quantity * pr.price - s.quantity * p.cost ) AS summed_q FROM  `sales` AS s INNER JOIN products AS pr ON pr.id = s.product_id INNER JOIN purchases AS p ON p.product_id = pr.id INNER JOIN categories AS c ON pr.id = c.id GROUP BY c.id, week HAVING week =? ORDER BY summed_q DESC LIMIT 1', [week], function(err, mostProfitableCategory){
	          if (err) return next(err);
							res.render('view_summary', {
							week: week,
							mostPopularProduct: mostPopularProduct,
							leastPopularProduct: leastPopularProduct,
							mostPopularCategory: mostPopularCategory,
							leastPopularCategory:leastPopularCategory,
							mostProfitableProduct: mostProfitableProduct,
							mostProfitableCategory: mostProfitableCategory
				} );
			});
			});
			});
			});
        });
      });
  });
};

//HAVING SUM(quantity) = MAX(SUM(quantity)


// exports.add = function (req, res, next) {
// 	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		var data = {
// 			category_id : Number(req.body.category_id),
//       		description : req.body.description,
// 			price : Number(req.body.price)
//   		};
//
// 		connection.query('insert into products set ?', data, function(err, results) {
//   			if (err) return next(err);
// 				res.redirect('/products');
// 		});
// 	});
// };
//
// exports.get = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('SELECT * FROM categories', [id], function(err, categories){
// 			if(err) return next(err);
// 			connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,products){
// 				if(err) return next(err);
// 				var product = products[0];
// 				categories = categories.map(function(category){
// 					category.selected = category.id === product.category_id ? "selected" : "";
// 					return category;
// 				});
// 				res.render('edit', {
// 					categories : categories,
// 					data : product
// 				});
// 			});
// 		});
// 	});
// };
//
// exports.update = function(req, res, next){
//
// 	var data = {
// 		category_id : Number(req.body.category_id),
// 		description : req.body.description,
// 		price : Number(req.body.price)
// 	};
//   	var id = req.params.id;
//   	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows){
// 			if (err) return next(err);
//       		res.redirect('/products');
// 		});
//     });
// };
//
// exports.delete = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
// 			if(err) return next(err);
// 			res.redirect('/products');
// 		});
// 	});
// };
