export function AvgPurchaseAmountByCustomer  () {
  return `
    CREATE VIEW AvgPurchaseAmountByCustomer AS
    SELECT c.name AS Customer, AVG(s.amount) AS AvgPurchaseAmount
    FROM customer c
    JOIN sale s ON c.id = s.id_customer
    GROUP BY c.name;
  END;`
}
