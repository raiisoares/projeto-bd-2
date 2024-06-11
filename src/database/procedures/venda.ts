export function venda() {
  return `

    CREATE PROCEDURE Venda(IN id_product INT)
    BEGIN
        DECLARE product_quantity INT;
        
        -- Get the current quantity of the product
        SELECT quantity INTO product_quantity FROM product WHERE id = id_product;
        
        -- Check if the product exists and has available quantity
        IF product_quantity IS NOT NULL AND product_quantity > 0 THEN

            -- Reduce the quantity of the product by 1
            UPDATE product SET quantity = quantity - 1 WHERE id = id_product;
            
            SELECT CONCAT('Sale successful! Product ', id_product, ' quantity reduced by 1.') AS Result;
            
        ELSE
            SELECT 'Error: Product not exist!' AS Result;
        END IF;
        
      END;`
}
