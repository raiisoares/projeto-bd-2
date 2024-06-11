export function deleteCustomerCashback() {
  return `
        CREATE PROCEDURE check_and_delete_customer(IN id_customer INT)  
        BEGIN
          DECLARE cashback_value INT;
          DECLARE done BOOLEAN DEFAULT FALSE;
        
          SELECT cashback INTO cashback_value FROM specialCustomer WHERE id_customer = id_customer;
        
          IF cashback_value <= 0 THEN
          SET done = TRUE;
          END IF;
        
          IF done THEN
          DELETE FROM specialCustomer WHERE id_customer = id_customer;
          END IF;
         END;`
}