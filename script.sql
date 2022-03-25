CREATE DATABASE SQLINJECTIONSITE;
CREATE table user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text NOT NULL,
    password TEXT NOT NULL
);

CREATE table vlan(
    name VARCHAR(255) NOT NULL,
    number integer primary key not null,
    FirstIp varchar(255) NOT NULL,
    mask varchar(255) not null,
    LastIp varchar(255) NOT NULL
);