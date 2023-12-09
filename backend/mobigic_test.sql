-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2023 at 10:25 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobigic_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `mobigic_files`
--

CREATE TABLE `mobigic_files` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `filename` text NOT NULL,
  `generated_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mobigic_files`
--

INSERT INTO `mobigic_files` (`id`, `user_id`, `filename`, `generated_number`) VALUES
(1, 2, 'C:UsersaDownloadsResume (7).pdf', 0),
(5, 2, '8dfae2df1fe8e82c0cdc16e83bff0b28', 844956),
(6, 2, 'd8483d3e44b7904690b9d2263e51411d', 144534),
(7, 2, 'f2e594c3c59f8639cd9306d06f836d81', 778883),
(8, 2, '165ecc1c6f6c9394fb2da63b33b71ae2', 337300),
(9, 2, 'bcb3a9267035538d961bdf96bc05f99c', 238811),
(10, 2, 'a11c58e8d4141490a52b7af7d7121ff4', 957144),
(11, 5, '631d757596283967d05fa65e82706665', 241375),
(12, 6, '65e5f0a6a42bb1d93fa1416f5e6c5ebd', 707812);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `Password`) VALUES
(1, 'sakshi', 'sakshivaidyawar', 'sakshi@123'),
(2, 'harsha', 'harshabhute', '1234'),
(3, '', '', ''),
(4, 'smehal kherkar', 'snehalkherkar', '12345'),
(5, 'nehavaidyawar', 'nevaidyawar', '123456'),
(6, 'bilkis', 'sayyad', 'bilkis');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mobigic_files`
--
ALTER TABLE `mobigic_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mobigic_files`
--
ALTER TABLE `mobigic_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mobigic_files`
--
ALTER TABLE `mobigic_files`
  ADD CONSTRAINT `mobigic_files_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
