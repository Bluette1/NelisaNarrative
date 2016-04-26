

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

        connection.query('SELECT product_id, SUM(quantity) total FROM sales WHERE week = ? GROUP BY product_id HAVING total = MAX(SUM(total))', [week], function(err, data){
            if (err) return next(err);
            // connection.query(' SELECT  set ? AS s INNER JOIN products AS p ON s.product_id = p.id GROUP by product_id ', [data], function(err, results){
            //   if (err) return next(err);
              res.render('view_summary', {
                results: data,
        } );


        // });
//SELECT p.description, SUM(s.quantity) total FROM sales AS s INNER JOIN products AS p ON s.product_id = p.id GROUP by product_id HAVING week = ?
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
