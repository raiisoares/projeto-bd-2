export function sorteio() {
  return `

    CREATE PROCEDURE Sorteio()
    BEGIN
        DECLARE customer_id INT;
        DECLARE prize INT;
        
        -- Select a random customer
        SELECT id INTO customer_id FROM customer ORDER BY RAND() LIMIT 1;
        
        -- Check if the customer is special and set the prize
        SELECT COUNT(*) INTO prize FROM specialCustomer WHERE id = customer_id;
        
        IF prize > 0 THEN
            -- Prize of 200 dollars
            INSERT INTO prizes (customer_id, value) VALUES (customer_id, 200);
        
        ELSE
            -- Prize of 100 dollars
            INSERT INTO prizes (customer_id, value) VALUES (customer_id, 100);
        
        END IF;
        
        SELECT CONCAT('Customer selected: ', customer_id, '. Prize of ', IF(prize > 0, '200', '100'), ' dollars.') AS Result;
    END;`
}
