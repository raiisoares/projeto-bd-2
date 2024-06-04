export function TopSellingProducts () {
  return `
    CREATE VIEW TopSellingProducts AS
    SELECT p.name AS Product, SUM(s.amount) AS TotalQuantitySold
    FROM product p
    JOIN sale s ON p.id = s.id_product
    GROUP BY p.name
    ORDER BY TotalQuantitySold DESC;
  END;`
}
