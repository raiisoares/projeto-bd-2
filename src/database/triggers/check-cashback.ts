export function checkCashback() {
  return `
      CREATE TRIGGER check_cashback
      AFTER UPDATE ON specialCustomer
      FOR EACH ROW
      BEGIN
          IF NEW.cashback = 0 THEN
              DELETE FROM specialCustomer WHERE id = NEW.id;
          END IF;
      END;`
}