SELECT week, product_id, COUNT( * ) , SUM( quantity ) AS summed_q
FROM  `sales`
GROUP BY product_id, week
HAVING week =1
ORDER BY summed_q DESC
LIMIT 1
