set schema 'shopify';
begin transaction;

update pricing_plans set price=price*5 where price!=0;

update pricing_plans set title=concat(title, 'Five Times the Price') where price!=0;

commit;