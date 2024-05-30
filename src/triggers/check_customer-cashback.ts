export function checkCustomerCashbackTrigger(): string {
  return `CREATE TRIGGER check_customer_cashback
          AFTER UPDATE ON specialCustomer
          FOR EACH ROW
          BEGIN
            IF NEW.cashback <= 0 THEN
              DELETE FROM specialCustomer WHERE id_customer = OLD.id_customer;
            END IF;
          END;`
}