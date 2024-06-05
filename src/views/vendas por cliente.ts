export function SalesByCustomer  () {
  return `
    CREATE VIEW SalesByCustomer AS
    SELECT c.name AS Customer, SUM(s.amount) AS TotalSales
    FROM customer c
    JOIN sale s ON c.id = s.id_customer
    GROUP BY c.name;
`
}
