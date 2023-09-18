set schema 'shopify';
begin transaction;

delete from key_benefits where title = 'Improve order size';

delete from reviews where author = 'Mommymakeup';

commit;