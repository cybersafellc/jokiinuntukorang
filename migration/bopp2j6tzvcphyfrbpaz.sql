-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: bopp2j6tzvcphyfrbpaz-mysql.services.clever-cloud.com:3306
-- Generation Time: Jul 02, 2024 at 01:48 PM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bopp2j6tzvcphyfrbpaz`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` varchar(255) NOT NULL,
  `alamat_1` text NOT NULL,
  `alamat_2` text NOT NULL,
  `kota` text NOT NULL,
  `provinsi` text NOT NULL,
  `kode_pos` int NOT NULL,
  `negara` text NOT NULL,
  `telepon` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `alamat_1`, `alamat_2`, `kota`, `provinsi`, `kode_pos`, `negara`, `telepon`) VALUES
('acee669f-0113-4d7f-ba06-113d5bb7daf2', 'Jl. D.I Panjaitan s', 'Rumah No J1', 'pekanbaru', 'riau', 29723, 'indonesia', '+6281261345871');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL,
  `tanggal` datetime NOT NULL,
  `address_id` varchar(255) NOT NULL,
  `users_id` varchar(255) NOT NULL,
  `diskon` int NOT NULL,
  `total_harga` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `tanggal`, `address_id`, `users_id`, `diskon`, `total_harga`) VALUES
('081832dd-ecea-4313-a58d-56049c4eda7e', '2024-07-02 13:06:43', 'acee669f-0113-4d7f-ba06-113d5bb7daf2', '7a6f3422-4460-4182-a76e-737c1c33953c', 45, 71500),
('39426bc7-378f-436b-9263-150a2820dbba', '2024-07-02 08:43:43', 'acee669f-0113-4d7f-ba06-113d5bb7daf2', '6e2ee82b-4ae6-4042-9ddc-128a2795f508', 30, 14000),
('91eab1a8-729e-4c01-99fa-e2a5f225a2b3', '2024-07-02 13:10:43', 'acee669f-0113-4d7f-ba06-113d5bb7daf2', '7a6f3422-4460-4182-a76e-737c1c33953c', 45, 82500),
('dc01635e-eb05-486e-8859-3d73d04b12b3', '2024-07-02 08:43:57', 'acee669f-0113-4d7f-ba06-113d5bb7daf2', '6e2ee82b-4ae6-4042-9ddc-128a2795f508', 30, 35000),
('ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2', '2024-07-02 08:43:51', 'acee669f-0113-4d7f-ba06-113d5bb7daf2', '6e2ee82b-4ae6-4042-9ddc-128a2795f508', 30, 7000);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `nama` text NOT NULL,
  `harga` int NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nama`, `harga`, `img`) VALUES
('913ef096-1d2b-4de2-b7c2-bb0bec62b664', 'Indomie Goreng', 13000, 'https://gambar-ecek-ecek.com/gambar.png'),
('9d77a3a0-34e9-4660-a352-b2278867defb', 'cofee', 10000, 'okdoeaw');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` varchar(255) NOT NULL,
  `orders_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `qty` int NOT NULL,
  `harga_beli` int NOT NULL,
  `total_harga` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `orders_id`, `product_id`, `qty`, `harga_beli`, `total_harga`) VALUES
('06a15583-7128-48f5-82f2-307c437c0581', '91eab1a8-729e-4c01-99fa-e2a5f225a2b3', '9d77a3a0-34e9-4660-a352-b2278867defb', 2, 10000, 20000),
('762ad40d-290e-40c0-bc48-0a815742f884', '39426bc7-378f-436b-9263-150a2820dbba', '9d77a3a0-34e9-4660-a352-b2278867defb', 2, 10000, 20000),
('c371b07e-251a-42f0-8c35-d2b64b092966', '91eab1a8-729e-4c01-99fa-e2a5f225a2b3', '913ef096-1d2b-4de2-b7c2-bb0bec62b664', 10, 13000, 130000),
('c5ec5672-5a68-4737-b186-45ad039ca509', '081832dd-ecea-4313-a58d-56049c4eda7e', '913ef096-1d2b-4de2-b7c2-bb0bec62b664', 10, 13000, 130000),
('e6e148b1-00c0-4368-88c3-8762688c328b', 'ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2', '9d77a3a0-34e9-4660-a352-b2278867defb', 1, 10000, 10000),
('fee41563-b6d0-4105-96d4-2b3f14e5f395', 'dc01635e-eb05-486e-8859-3d73d04b12b3', '9d77a3a0-34e9-4660-a352-b2278867defb', 5, 10000, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`) VALUES
('6e2ee82b-4ae6-4042-9ddc-128a2795f508', 'rusnanda', '$2b$10$RsBWoxsvNZUxYpZEALAkleyub8erJLSN2zDmJNJqIQ3K.xn2OpPcG', 'rusnanda', 'purnama'),
('7a6f3422-4460-4182-a76e-737c1c33953c', 'example', '$2b$10$eMzvDGb/y5.We4zrKYvOKuGTUj429jrb/59e4y2vEYbwHK0PLHzvK', 'example', 'example');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
