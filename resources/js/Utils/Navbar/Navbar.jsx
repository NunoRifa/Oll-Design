import React, { useState } from "react";
import { brand, menu, socialMedia, lang } from "../../Static/index";
import { useTranslation } from "react-i18next";
import MediaQuery from "@/Components/MediaQuery";

import classes from "./Navbar.module.css";

const Navbar = ({ language }) => {
    const { i18n } = useTranslation();
    const [isHover, setIsHover] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isLanguage = language;

    const generateHoverData = () => {
        const hoverData = {};
        for (let i = 0; i <= isLanguage.navbar_jp.length; i++) {
            hoverData[i.toString()] = i;
        }
        return hoverData;
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleMouseOver = (e) => {
        const hoverData = generateHoverData();
        const targetId = e.target.id;

        if (hoverData.hasOwnProperty(targetId)) {
            setIsHover(hoverData[targetId]);
        }
    };

    const handleMouseOut = () => {
        setIsHover(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <MediaQuery query="(max-width: 768px)">
            {({ matches }) => (
                <>
                    {matches && (
                        <div className={classes["mobile-navbar-container"]}>
                            <div className={classes["mobile-navbar"]}>
                                <div className={classes["mobile-brand"]}>
                                    <a href="/">
                                        <h1>{brand}</h1>
                                    </a>
                                </div>
                                <button
                                    className={`${classes["mobile-menu-toggle"]} ${
                                        isMobileMenuOpen ? classes.active : ""
                                    }`}
                                    onClick={toggleMobileMenu}
                                >
                                    {/* Hamburger */}
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                                {isMobileMenuOpen && (
                                    <div className={classes["mobile-menu"]}>
                                        <div
                                            className={`${classes.language} mt-2`}
                                        >
                                            {lang.map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() =>
                                                        changeLanguage(
                                                            item.lang
                                                                .toString()
                                                                .toLowerCase()
                                                        )
                                                    }
                                                >
                                                    {item.lang}
                                                </button>
                                            ))}
                                        </div>
                                        <div
                                            className={
                                                classes["mobile-sidebar-title"]
                                            }
                                        >
                                            {isLanguage.navbar_jp.map(
                                                (m, index) => (
                                                    <a
                                                        href={m.url}
                                                        className="text-sm"
                                                        id={m.id}
                                                        key={m.id}
                                                        onMouseOver={
                                                            handleMouseOver
                                                        }
                                                        onMouseOut={
                                                            handleMouseOut
                                                        }
                                                    >
                                                        {isHover === m.id
                                                            ? m.title_hover.toUpperCase()
                                                            : m.title.toUpperCase()}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                        <div
                                            className={
                                                classes["mobile-sidebar-socialmedia"]
                                            }
                                        >
                                            {socialMedia.map((sm) => (
                                                <a
                                                    href={sm.url}
                                                    key={sm.id}
                                                    target="_blank"
                                                >
                                                    {sm.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {!matches && (
                        // Tampilan Desktop
                        <div className={classes.sidebar}>
                            <div className={classes["sidebar-content"]}>
                                <div className={classes["sidebar-brand"]}>
                                    <a href="/">
                                        <h1>{brand}</h1>
                                    </a>
                                </div>
                                <div className={`${classes.language} mt-2`}>
                                    {lang.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() =>
                                                changeLanguage(
                                                    item.lang
                                                        .toString()
                                                        .toLowerCase()
                                                )
                                            }
                                        >
                                            {item.lang}
                                        </button>
                                    ))}
                                </div>
                                <div className={classes["sidebar-title"]}>
                                    {isLanguage.navbar_jp.map((m, index) => (
                                        <a
                                            href={m.url}
                                            id={m.id}
                                            key={m.id}
                                            onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut}
                                        >
                                            {isHover === m.id
                                                ? m.title_hover.toUpperCase()
                                                : m.title.toUpperCase()}
                                        </a>
                                    ))}
                                </div>
                                <div
                                    className={classes["sidebar-socialmedia"]}
                                >
                                    {socialMedia.map((sm) => (
                                        <a
                                            href={sm.url}
                                            key={sm.id}
                                            target="_blank"
                                        >
                                            {sm.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </MediaQuery>
    );
};

export default Navbar;
