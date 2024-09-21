import React, { useState } from "react";
import logoImage from "../../public/images/logoMHRA.png";
import Image from "next/image";
import magnifyingGlassIcon from "../../public/images/magnifyingGlassIcon.png";
import notificationsIcon from "../../public/images/notificationsIcon.png";
import OrangeBtn from "./reusable/OrangeBtn";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import userIcon from "../../public/images/image2.png";

type DropdownOptions = { label: string; href?: string };

interface Dropdowns {
  [key: string]: DropdownOptions[];
}

const Header = () => {
  const router = useRouter();
  const { asPath } = router;
  const { isLoggedIn } = useAuth();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdowns: Dropdowns = {
    "Информативни Содржини": [
      { label: "За нас", href: "/about" },
      { label: "Членство", href: "/login" },
      { label: "Огранок на коучинг" },
      { label: "галерии" },
      { label: "Огласи за работа" },
      { label: "HR награди" },
      { label: "е-весник" },
      { label: "Архива" },
      { label: "FAQ" },
    ],
    "Едукативни Содржини": [
      { label: "Статии" },
      { label: "Истражувања" },
      { label: "Интервјуа" },
      { label: "Обуки" },
      { label: "Македонски академии" },
      { label: "проекти" },
      { label: "Експерти" },
      { label: "Трендови" },
    ],
    "Годишна Конференција": [
      { label: "Годишна Конференција", href: "/annualConference" },
    ],
    Настани: [
      { label: "HR coffee", href: "/events/1" },
      { label: "HR weekend", href: "/events/5"  },
      { label: "HR webinar", href: "/events/9"  },
      { label: "HR conferences", href: "/events/13"  },
    ],
    Блог: [{ label: "Блог", href: "/blogs" }],
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim()) {
        router.push(`/${searchQuery.trim().toLowerCase()}`);
        setSearchQuery("");
        setShowSearchBar(false);
      }
    }
  };

  return (
    <header>
      <div className="headerLogoContainer">
        <Link href="/">
          <Image src={logoImage} alt="logo" />
        </Link>
      </div>

      <div className="headerNavbarContainer">
        <nav>
          <ul>
            {Object.keys(dropdowns).map((menu) => (
              <li
                key={menu}
                onClick={() => toggleDropdown(menu)}
                style={{ position: "relative" }}
              >
                <span className="menu-text">{menu}</span>
                {activeDropdown === menu && (
                  <ul className="dropdown">
                    {dropdowns[menu].map((item, index) =>
                      item.href ? (
                        <li key={index}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ) : (
                        <li key={index} style={{ padding: "10px 0" }}>
                          {item.label}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="searchContainer">
          <Image
            src={magnifyingGlassIcon}
            alt="magnifying glass icon"
            onClick={toggleSearchBar}
          />
          {showSearchBar && (
            <div className="searchDropdown">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchSubmit}
              />
            </div>
          )}
        </div>
      </div>

      <div className="headerLoginContainer">
        <div
          className="notificationsIconContainer"
          onClick={toggleNotifications}
        >
          <Image src={notificationsIcon} alt="notifications icon" />
          {showNotifications && (
            <ul className="notificationsDropdown">
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          )}
        </div>
        <p>
          <span>МК</span>/<span>EN</span>
        </p>

        <div className="headerLogin">
         
          {isLoggedIn ? (
            <Link href="/userDashboard">
              <Image
                src={userIcon}
                alt="User Dashboard"
                width={70}
                height={70}
              />
            </Link>
          ) : (
           
            <OrangeBtn text="Зачлени се" href="/signup" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
