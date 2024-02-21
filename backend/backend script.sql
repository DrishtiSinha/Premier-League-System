
create database premier;
use premier;
SHOW TABLES;
describe table player;
CREATE TABLE Team
(
team_name VARCHAR(30) not null unique,
team_id varchar(7) primary key,
rating decimal(3,1),
attack int default 00,
defence int default 00,
win_ratio int default 00
);
insert into team(team_name, team_id, rating, attack, defence, win_ratio) values ("Real Madrid", "RM001",4.5,87,81,70), ("Bayern Munich", "BM002",4.1,77,84,60);
CREATE TABLE Management
(
emp_id varchar(5) PRIMARY KEY,
first_name VARCHAR(15) not null,
last_name VARCHAR(15),
Dept_name varchar(15),
phoneno int,
email varchar(35),
gender char(1),
salary int
);
insert into Management (emp_id, first_name, last_name, Dept_name, phoneno, email, gender, salary) values("F101", "Ram", "Sharma", "On-Field", 749358758,"asm@gmal.com","M",13000);
create table venue(
stadium_name varchar(30) primary key,
matchid varchar(7),
city varchar(15) not null,
area_name varchar(20),
humidity decimal(5,2),
temperature decimal(5,2),
weather varchar(10),
capacity int default 40000,
foreign key(matchid) references Matches(matchid)
);
insert into Venue values('Diego Cors', 'DC1ee', 'Costa Rica', 'Peterburg Street',34,23, 'clear',56000);


create table Matches(
matchid varchar(7) primary key, matchdate date not null,
home_team varchar(15) not null,
away_team varchar(15) not null,
host varchar(20),
score varchar(5));
delete from Matches;
insert into Matches values ('DC100', '2001-05-21', 'Paris Fc', 'Bayenr', 'Diego', '2-3');
insert into Matches values ('H200', '2001-05-2', 'Paris Fc', 'Bayenr', 'Diego', '2-3');
select * from Matches;
select * from Management; select * from Venue;
desc Venue;
desc PLAYER;
desc Team;
desc Matches;
desc Management;