export function customerCashbackTrigger(): string {
  return `CREATE TRIGGER customer_cashback
          AFTER INSERT ON sale
          FOR EACH ROW
          BEGIN
              DECLARE new_spent DECIMAL(10,2);
              
              SET new_spent = NEW.amount * (SELECT value FROM product WHERE id = NEW.id_product);
              
              IF new_spent > 500 THEN
                  IF NOT EXISTS (SELECT 1 FROM specialCustomer WHERE id_customer = NEW.id_customer) THEN
                      INSERT INTO specialCustomer (name, sex, age, id_customer, cashback)
                      SELECT name, sex, age, id, new_spent * 0.02 FROM customer WHERE id = NEW.id_customer;
                  ELSE
                      UPDATE specialCustomer
                      SET cashback = cashback + (new_spent * 0.02)
                      WHERE id_customer = NEW.id_customer;
                  END IF;
              END IF;
          END;`
}