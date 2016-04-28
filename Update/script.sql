SELECT week, c.description, c.id, SUM( s.quantity * pr.price - s.quantity * p.cost ) AS summed_q
FROM  `sales` AS s
INNER JOIN products AS pr ON pr.id = s.product_id
INNER JOIN purchases AS p ON p.product_id = pr.id
INNER JOIN categories AS c ON pr.id = c.id
GROUP BY c.id, week
HAVING week =1
ORDER BY summed_q DESC
LIMIT 1
