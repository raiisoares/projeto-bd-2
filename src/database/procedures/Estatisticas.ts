export function Estatisticas() {
  return `

    CREATE PROCEDURE Statistics()
    BEGIN
    
        -- 1 Produto mais vendido
    
        SELECT p.name AS ProdutoMaisVendido FROM product p INNER JOIN (
            SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount DESC
            LIMIT 1
        ) s ON p.id = s.id_product;
    
        -- 2 Vendedor associado ao produto mais vendido
    
        SELECT e.name AS VendedorProdutoMaisVendido FROM employee e INNER JOIN (
            SELECT e.id AS id_employee, SUM(s.amount) AS total_amount FROM sale s INNER JOIN employee e ON s.id_salesman = e.id INNER JOIN (
                SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount DESC
                LIMIT 1
            ) p ON s.id_product = p.id_product
            GROUP BY e.id
            ORDER BY total_amount DESC
            LIMIT 1
        ) t ON e.id = t.id_employee;
    
        -- 3 Produto menos vendido
    
        SELECT p.name AS ProdutoMenosVendido FROM product p INNER JOIN (
            SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount ASC
            LIMIT 1
        ) s ON p.id = s.id_product;
    
        -- 4 Valor ganho com o produto mais vendido
    
        SELECT SUM(s.amount * p.value) AS ValorGanhoProdutoMaisVendido FROM sale s INNER JOIN product p ON s.id_product = p.id INNER JOIN (
            SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount DESC
            LIMIT 1
        ) t ON s.id_product = t.id_product;
    
        -- 5 Mês de maior vendas do produto mais vendido
    
        SELECT MONTH(date) AS MesMaiorVendasProdutoMaisVendido, COUNT(*) AS TotalSalesLargestMonth FROM sale WHERE id_product = (
            SELECT id_product FROM (
                SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount DESC
                LIMIT 1
            ) t
        )
        GROUP BY MONTH(date)
        ORDER BY TotalSalesLargestMonth DESC
        LIMIT 1;
    
        -- 6 Mês de menor vendas do produto mais vendido
    
        SELECT MONTH(date) AS MesMenorVendasProdutoMaisVendido, COUNT(*) AS TotalSalesSmallestMonth FROM sale WHERE id_product = (
            SELECT id_product FROM (
                SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount DESC
                LIMIT 1
            ) t
        )
        GROUP BY MONTH(date)
        ORDER BY TotalSalesSmallestMonth ASC
        LIMIT 1;
    
        -- 7 Valor ganho com o produto menos vendido
    
        SELECT SUM(s.amount * p.value) AS ValorGanhoProdutoMenosVendido FROM sale s INNER JOIN product p ON s.id_product = p.id INNER JOIN (
            SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount ASC
            LIMIT 1
        ) t ON s.id_product = t.id_product;
    
        -- 8 Mês de maior vendas do produto menos vendido
    
        SELECT MONTH(date) AS MesMaiorVendasProdutoMenosVendido, COUNT(*) AS TotalSalesLargestMonth FROM sale WHERE id_product = (
            SELECT id_product FROM (
                SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount ASC
                LIMIT 1
            ) t
        )
        GROUP BY MONTH(date)
        ORDER BY TotalSalesLargestMonth DESC
        LIMIT 1;
    
        -- 9 Mês de menor vendas do produto menos vendido
    
        SELECT MONTH(date) AS MesMenorVendasProdutoMenosVendido, COUNT(*) AS TotalSalesSmallestMonth FROM sale WHERE id_product = (
            SELECT id_product FROM (
                SELECT id_product, SUM(amount) AS total_amount FROM sale GROUP BY id_product ORDER BY total_amount ASC
                LIMIT 1
            ) t
        )
        GROUP BY MONTH(date)
        ORDER BY TotalSalesSmallestMonth ASC
        LIMIT 1;
    END;
`
}
