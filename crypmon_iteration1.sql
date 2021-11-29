use g14_g2;

show tables;
DROP TABLE IF EXISTS `user`;
create table user (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(100) DEFAULT NULL,
	user_email VARCHAR(100) DEFAULT NULL,
	user_password VARCHAR(200) DEFAULT NULL,
	user_profile VARCHAR(100) DEFAULT NULL,
	user_update DATE
);

LOCK TABLES `user` WRITE;
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('1', 'Bobbe MacGahey', 'bklas0@list-manage.com', 'IAb0jA38U', 'https://robohash.org/sintquiest.png?size=50x50&set=set1', '2021-11-11');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('2', 'Ronni Burfitt', 'asmail1@mozilla.com', 'Ky9ifcyieCm', 'https://robohash.org/doloremquodolore.png?size=50x50&set=set1', '2021-11-03');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('3', 'Ibrahim Twittey', 'lianne2@4shared.com', 'IrEtGdE7n', 'https://robohash.org/officiisadipiscidolores.png?size=50x50&set=set1', '2021-11-11');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('4', 'Stormi McKeggie', 'ckenwood3@salon.com', '5A4RJODGEYRE', 'https://robohash.org/ametreiciendismagnam.png?size=50x50&set=set1', '2021-11-17');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('5', 'Madeline O''Reagan', 'ppladen4@clickbank.net', 'cjXR6Ss', 'https://robohash.org/porroarchitectoaccusamus.png?size=50x50&set=set1', '2021-11-18');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('6', 'Sonnie Tongs', 'ozannutti5@acquirethisname.com', '9ZOM0trh', 'https://robohash.org/illumullamasperiores.png?size=50x50&set=set1', '2021-11-22');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('7', 'Sayers Boaler', 'mstruijs6@ibm.com', 'sinjjm1', 'https://robohash.org/voluptaseadoloribus.png?size=50x50&set=set1', '2021-11-23');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('8', 'Melinda Leather', 'cdumphry7@dropbox.com', 'LTsgytYSG080', 'https://robohash.org/sintlaboreet.png?size=50x50&set=set1', '2021-11-23');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('9', 'Marsiella Cornner', 'tronchka8@nasa.gov', 'Nwg873xnqjj7', 'https://robohash.org/rerumquisveritatis.png?size=50x50&set=set1', '2021-11-10');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('10', 'Koralle Greedier', 'koneil9@bluehost.com', 'kf3sDPvh3R', 'https://robohash.org/cupiditateminimarecusandae.png?size=50x50&set=set1', '2021-11-19');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('11', 'Remy Wilkennson', 'dtabretta@google.nl', 'TotJ10G', 'https://robohash.org/adipiscideseruntodio.png?size=50x50&set=set1', '2021-11-05');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('12', 'Desiree Caudell', 'ftriplowb@t-online.de', 'Fq6CFRU7', 'https://robohash.org/autaperiamquas.png?size=50x50&set=set1', '2021-11-12');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('13', 'Wakefield Melburg', 'ipittamc@t-online.de', '4ligZTc', 'https://robohash.org/commodisuscipitaut.png?size=50x50&set=set1', '2021-11-12');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('14', 'Dominik Gostall', 'bfairpoold@rediff.com', 'JDafyC', 'https://robohash.org/oditeiusquis.png?size=50x50&set=set1', '2021-11-13');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('15', 'Aimil Currm', 'jpersente@archive.org', 'OqWRgDxSWL', 'https://robohash.org/quiquiaspernatur.png?size=50x50&set=set1', '2021-11-04');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('16', 'Bamby Bonfield', 'lmercyf@reuters.com', 'IksWcO2f0', 'https://robohash.org/sunteosearum.png?size=50x50&set=set1', '2021-11-06');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('17', 'Krysta Slatter', 'emagnayg@uol.com.br', 'OBok9RNQILlF', 'https://robohash.org/minusaccusamusmolestiae.png?size=50x50&set=set1', '2021-11-17');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('18', 'Curry Hanaford', 'cpackhamh@netscape.com', 'iaZHYHCvWl', 'https://robohash.org/estatquererum.png?size=50x50&set=set1', '2021-11-23');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('19', 'Nicoline Badgers', 'cconnechiei@paginegialle.it', 'vaJrQCby', 'https://robohash.org/enimsintea.png?size=50x50&set=set1', '2021-11-11');
insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values ('20', 'Dix Binnion', 'gdransfieldj@wunderground.com', 'fEGP4IIdUFo', 'https://robohash.org/quietlaborum.png?size=50x50&set=set1', '2021-11-20');

UNLOCK TABLES;

DROP TABLE IF EXISTS `account`;
create table account (
	account_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT DEFAULT NULL,
	account_name VARCHAR(100) DEFAULT NULL,
	wallet_id VARCHAR(100) DEFAULT NULL,
	wallet_balance DECIMAL(19,8) DEFAULT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
  ON DELETE CASCADE
);
LOCK TABLES `account` WRITE;
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('1', '1', 'Bobbe MacGahey', '0xa71fec3a8f3c73b172ada541578620db20fc1a51', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('2', '2', 'Ronni Burfitt', '0x45e876d6dbb2ef637c8d8df4bfdcf967dea6af1c', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('3', '3', 'Ibrahim Twittey', '0x8e2dba3d547cfac6d025574f14f08ed638aecc42', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('4', '4', 'Stormi McKeggie', '0x7c86da9879214b25a5bc7377fec99b948644468b', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('5', '5', 'Madeline O''Reagan', '0x630429dc32a70dfcf252de87a59991fad8fb0da5', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('6', '6', 'Sonnie Tongs', '0x7b33746bb509da2adec8ece042acd1cc9ac38a81', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('7', '7', 'Sayers Boaler', '0x61aadbc3509e758da804f4dc5ee2dbc28eb58d25', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('8', '8', 'Melinda Leather', '0x79f5c6affa080bdf171ef358ad991fa1798336cc', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('9', '9', 'Marsiella Cornner', '0x50cc87325dfede770462889f425734808649362a', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('10', '10', 'Koralle Greedier', '0xd5b7192ff10e061e88cbe572c744d9c303b877ce', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('11', '11', 'Remy Wilkennson', '0x72c7a1f30c650ac4270c5f128aaf5613386d3a8c', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('12', '12', 'Desiree Caudell', '0xc4198c89d505e80799774a9eb0e013c61a3af146', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('13', '13', 'Wakefield Melburg', '0x4e1cbfe6db6330098bfc5d451a31a7822e3237cb', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('14', '14', 'Dominik Gostall', '0x8c8816a6d0b6d0829b48d9b15988a920cd0b7eee', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('15', '15', 'Aimil Currm', '0xa95358aaddc57d2d7a5d1408bb0b24d342692550', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('16', '16', 'Bamby Bonfield', '0xf1e577a3a42dbb1173c7f3b42c95e0a20733633a', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('17', '17', 'Krysta Slatter', '0x727bf8ca0324b551457583fe2815f2f9b30bc01c', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('18', '18', 'Curry Hanaford', '0xc5b405539c0fd8535f10a5333d652c47089dd7b9', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('19', '19', 'Nicoline Badgers', '0x45e149c887fe842d24cf4dbcef8e4fd2988673aa', '0');
insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('20', '20', 'Dix Binnion', '0xcf4b51fec9ca421f3b6280e23dbd43a718df3fe8', '0');

UNLOCK TABLES;

--  -- Table structure for table `wallet`
--   --
--   DROP TABLE IF EXISTS `wallet`;
-- CREATE TABLE `wallet` (
--     `wallet_id` varchar(100) PRIMARY KEY,
--     `account_id` int DEFAULT NULL,
--     `wallet_balance` DECIMAL(19,8) DEFAULT NULL,
--     FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
--   );
-- LOCK TABLES `wallet` WRITE;
-- INSERT INTO
--   `wallet`
-- VALUES
--   ('216718574-X', 1, 0),
--   ('299877940-9', 2, 0),
--   ('379926608-9', 3, 0),
--   ('535429048-1', 4, 0),
--   ('646391776-1', 5, 0);
-- UNLOCK TABLES;

DROP TABLE IF EXISTS `cryptocurrency_market`;
CREATE TABLE `cryptocurrency_market` (
    `cryptocurrency_id` int PRIMARY KEY,
    `coin` varchar(100) DEFAULT NULL,
    `coin_ticker` varchar(20) DEFAULT NULL,
    `coin_price` DECIMAL(19,8) DEFAULT NULL,
    `fiat_currency` varchar(50) DEFAULT NULL,
    `fiat_amount` DECIMAL(19,8) DEFAULT NULL,
    `exchange_rate` DECIMAL(19,8) DEFAULT NULL
  );
LOCK TABLES `cryptocurrency_market` WRITE;
INSERT INTO
  `cryptocurrency_market`
VALUES
  (1, 'Crypcoin', 'CPM', 1, 'USD', 1, 1),
  (2, 'Bitcoin', 'BTC', 0.00001751, 'USD', 1, 57110.22273),
  (3, 'Ethereum', 'ETH', 0.00023420, 'USD', 1, 4269.854825),
  (4, 'Binance Coin', 'BNB', 0.00165621, 'USD', 1, 603.788167);
UNLOCK TABLES;

DROP TABLE IF EXISTS `wallet_transaction`;
CREATE TABLE `wallet_transaction` (
    `transaction_id` int PRIMARY KEY AUTO_INCREMENT,
    `transaction_date` date DEFAULT NULL,
    `account_id` int DEFAULT NULL,
    `cryptocurrency_amount` DECIMAL(19,8) DEFAULT NULL,
    `cryptocurrency_id` int DEFAULT NULL,
    `usd_amount` DECIMAL(19,8) DEFAULT NULL,
    FOREIGN KEY (`cryptocurrency_id`) REFERENCES `cryptocurrency_market` (`cryptocurrency_id`)
  );
LOCK TABLES `wallet_transaction` WRITE;
-- INSERT INTO
--   `wallet_transaction`
-- VALUES
--   (1, now(), 1, 0.005, 1, 286.48),
--   (2, now(), 2, 0.008, 2, 34.24),
--   (3, now(), 3, 0.01, 3, 6.02),
--   (4, now(), 4, 0.05, 3, 30.10),
--   (5, now(), 5, 0.05, 2, 214.01);
UNLOCK TABLES;

DROP TABLE IF EXISTS `pet`;
CREATE TABLE `pet` (
    `pet_id` int PRIMARY KEY AUTO_INCREMENT,
    `pet_name` varchar(100) DEFAULT NULL,
    `picture` varchar(200) DEFAULT NULL,
    `account_id` int DEFAULT NULL,
    `pet_birthday` date DEFAULT NULL,
    `cryptocurrency_id` int DEFAULT 1,
    `total_cpm_paid` DECIMAL(19,8) DEFAULT NULL,
    FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
);
LOCK TABLES `pet` WRITE;

insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('1', 'Crake, african black', 'http://monster.com/jpg1','1', '2021-11-05', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('2', 'Monkey, rhesus', 'http://monster.com/jpg1','2', '2021-11-07', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('3', 'Weaver, white-browed sparrow', 'http://monster.com/jpg1','3', '2021-11-14', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('4', 'Flying fox (unidentified)', 'http://monster.com/jpg1','4', '2021-11-18', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('5', 'Tortoise, burmese black mountain', 'http://monster.com/jpg1','5', '2021-11-02', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('6', 'Australian spiny anteater', 'http://monster.com/jpg1','6', '2021-11-08', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('7', 'Yak', 'http://monster.com/jpg1','7', '2021-11-02', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('8', 'Godwit, hudsonian', 'http://monster.com/jpg1','8', '2021-11-03', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('9', 'Albatross, waved', 'http://monster.com/jpg1','9', '2021-11-18', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('10', 'Bat, little brown', 'http://monster.com/jpg1','10', '2021-11-23', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('11', 'Amazon parrot (unidentified)', 'http://monster.com/jpg1','11', '2021-11-05', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('12', 'Mynah, indian', 'http://monster.com/jpg1','12', '2021-11-03', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('13', 'Grizzly bear', 'http://monster.com/jpg1','13', '2021-11-06', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('14', 'Brindled gnu', 'http://monster.com/jpg1','14', '2021-11-16', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('15', 'Dassie', 'http://monster.com/jpg1','15', '2021-11-08', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('16', 'Langur, gray', 'http://monster.com/jpg1','16', '2021-11-14', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('17', 'Leadbeateri''s ground hornbill', 'http://monster.com/jpg1','17', '2021-11-22', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('18', 'Chestnut weaver', 'http://monster.com/jpg1','18', '2021-11-02', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('19', 'Squirrel, grey-footed', 'http://monster.com/jpg1','19', '2021-11-20', 1, 0);
insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid) values ('20', 'Spider, wolf', 'http://monster.com/jpg1','20', '2021-11-14', 1, 0);

UNLOCK TABLES;

DROP TABLE IF EXISTS `pet_calendar`;
CREATE TABLE `pet_calendar` (
    `feed_id` int PRIMARY KEY AUTO_INCREMENT,
    `pet_id` int DEFAULT NULL,
    `contribution_date` date DEFAULT NULL,
    `contribution_amount` DECIMAL(19,8) DEFAULT NULL,
    FOREIGN KEY (`pet_id`) REFERENCES `pet` (`pet_id`)
);
LOCK TABLES `pet_calendar` WRITE;
-- INSERT INTO
--   `pet_calendar`
-- VALUES
--   (1, 1, now() - INTERVAL 1 DAY, 1),
--   (2, 1, now() - INTERVAL 5 DAY, 3),
--   (3, 1, now() - INTERVAL 8 DAY, 5);
UNLOCK TABLES;

--- SANITISE DATABASE --
DROP TABLE IF EXISTS `pet_calendar`;
DROP TABLE IF EXISTS `pet`;
DROP TABLE IF EXISTS `wallet_transaction`;
DROP TABLE IF EXISTS `cryptocurrency_market`;
DROP TABLE IF EXISTS `account`;
DROP TABLE IF EXISTS `user`;



select * from user;
select * from account;
select * from cryptocurrency_market;
select * from pet;
select * from pet_calendar;
-- select * from wallet;
select * from wallet_transaction;