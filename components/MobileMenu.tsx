"use client";
import { useState } from "react";
import { Modal, Navbar } from "@/components";
import { MenuIcon } from "@/components/icons";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      <button onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </button>
      <Modal isOpen={isMenuOpen} closeModal={() => setIsMenuOpen(false)} position="right">
        <Navbar isMobile closeMenu={() => setIsMenuOpen(false)} />
      </Modal>
    </div>
  );
};

export default MobileMenu;
