CREATE DATABASE IF NOT EXISTS `cours_sql`;
USE `cours_sql`;

CREATE TABLE IF NOT EXISTS `table_users`
(
    `id_user` SMALLINT(6) NOT NULL,
    `user_name` VARCHAR(30),
    `user_email` VARCHAR(100) NOT NULL,
    `user_registration` DATE NOT NULL,
    `user_admin` BOOLEAN
);

ALTER TABLE `table_users`
    MODIFY `user_admin` BOOLEAN DEFAULT 0;

ALTER `user_admin` DROP DEFAULT ;