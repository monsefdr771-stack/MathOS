"use client";

import { motion } from "framer-motion";

import Greeting from "./header/Greeting";
import SearchBar from "./header/SearchBar";
import StreakBadge from "./header/StreakBadge";
import NotificationButton from "./header/NotificationButton";
import ProfileButton from "./header/ProfileButton";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full"
    >
      <div className="flex items-start justify-between">

        {/* Greeting */}

        <Greeting />

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <StreakBadge />

          <NotificationButton />

          <ProfileButton />

        </div>

      </div>

      {/* Search */}

      <div className="mt-8 flex justify-center">

        <SearchBar />

      </div>

    </motion.header>
  );
}