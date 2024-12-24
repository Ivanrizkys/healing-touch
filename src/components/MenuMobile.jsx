import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function MenuMobile() {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-mobile">
        <nav className="menu-mobile-navigation">
          <DropdownMenu.Root
            open={dropdownMenuOpen}
            onOpenChange={setDropdownMenuOpen}
          >
            <DropdownMenu.Trigger asChild>
              <a href="#">Services & Treatments</a>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="dropdown-sub-menu-content"
                align="start"
                alignOffset={16}
              >
                <DropdownMenu.Group className="dropdown-sub-menu-group">
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Primary Care</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Cancer Care</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Blood Draw</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Heart and Vascular</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Imaging and Radiology</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Imaging and Radiology</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Neurology and Neurosurgery</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Physycal Rehabilitaion</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Baritriaric Surgery and Medical</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Weight Loss</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Digestive Healts</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="dropdown-sub-menu-item">
                    <a href="#">Women&apos;s Healts</a>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <div className="menu-mobile-navigation-divider"></div>
          <a href="#">Consultation Fee Structure</a>

          <div className="menu-mobile-navigation-divider"></div>
          <a href="#">About Us</a>
          <a href="#" className="with-icon">
            <img
              src="/images/calendar.png"
              alt="Calendar"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/padlock.png"
              alt="Padlock"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img src="/images/dollar.png" alt="Dollar" width="12" height="19" />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/giving-love.png"
              alt="Giving Love"
              width="16"
              height="15"
            />
            Content
          </a>
        </nav>
      </div>
    </>
  );
}
