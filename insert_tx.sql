set schema 'shopify';

begin transaction;

insert into apps (id, url, title, developer, developer_link, icon, reviews_count) 
values ('4567', 'alink','aname', 'A Corporation', 'a dev link','icon',
0);

insert into categories (id, title) values ('1234', 'spotify');


commit;
