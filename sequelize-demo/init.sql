create table user
(
    id int not null
        primary key,
    password varchar(32) not null,
    username varchar(32) not null,
)
engine=innodb;

