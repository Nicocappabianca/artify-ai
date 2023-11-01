"use client";
import { useState } from "react";
import { Modal, MobileNav } from "@/components";
import { MenuIcon } from "@/components/icons";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="visible sm:hidden flex items-center">
      <button onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </button>
      <Modal isOpen={isMenuOpen} closeModal={() => setIsMenuOpen(false)} position="right">
        <MobileNav />
      </Modal>
    </div>
  );
};

export default MobileMenu;
