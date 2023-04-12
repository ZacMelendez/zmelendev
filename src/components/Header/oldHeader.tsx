// import Link from "next/link";
// import styles from "./Header.module.scss";
// // import classnames from "classnames";
// import ZachOverflow from "../../icons/ZachOverflow";
// import React, { useContext, useEffect, useState } from "react";
// import UIThemeContext from "../../context/UIThemeContext";
// // import { IconMoon, IconSunHigh } from "@tabler/icons-react";
// import Hamburger from "./Hamburger";
// // import { useSession } from "next-auth/react";
// import Account from "../Account/Account";

// export default function Header() {
//     // const { data: session } = useSession();
//     const { theme, setTheme, menuOpen, setMenuOpen } =
//         useContext(UIThemeContext);
//     const [screenSize, setScreenSize] = useState<number>(1200);

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             setScreenSize(window.innerWidth);
//         }
//     }, []);

//     const updateMedia = () => {
//         setScreenSize(window.innerWidth);
//     };

//     useEffect(() => {
//         window.addEventListener("resize", updateMedia);
//         return () => window.removeEventListener("resize", updateMedia);
//     }, []);

//     const handleClick = () => {
//         setTheme(theme === "dark" ? "light" : "dark");
//     };

//     return (
//         <header className={styles.header}>
//             {/* {screenSize > 576 ? ( */}
//                 <div className={styles.div}>
//                     <div className={styles.title}>
//                         <ZachOverflow
//                             primary={theme === "dark" ? "#e5e5e3" : "#454545"}
//                         />
//                         <p>zach</p>
//                         <p style={{ fontWeight: 500 }}>overflow</p>
//                     </div>
//                     <ul className={styles.nav}>
//                         <li>
//                             <Link className="nav-link" href="/">
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link" href="/">
//                                 Posts
//                             </Link>
//                         </li>
//                         {/* {session?.user?.email === "zacmelendez@gmail.com" && (*/}
//                         <li>
//                             <Link className="nav-link" href="/">
//                                 Create
//                             </Link>
//                         </li>
//                         {/*)} */}
//                         <li>
//                             <Account />
//                         </li>
//                         {/* <li>
//                             <ActionIcon
//                                 sx={{
//                                     color: `${
//                                         theme === "dark" ? "#e5e5e3" : "#454545"
//                                     }`,
//                                 }}
//                                 variant="transparent"
//                                 onClick={handleClick}
//                             >
//                                 {theme === "dark" ? (
//                                     <IconSunHigh size={24} />
//                                 ) : (
//                                     <IconMoon size={24} />
//                                 )}
//                             </ActionIcon>
//                         </li> */}
//                     </ul>
//                 </div>
//             // ) : (
//             //     <>
//             //         <div className={styles.mobile}>
//             //             <div className={styles.title}>
//             //                 <ZachOverflow
//             //                     primary={
//             //                         theme === "dark" ? "#e5e5e3" : "#454545"
//             //                     }
//             //                 />
//             //                 <p>zach</p>
//             //                 <p style={{ fontWeight: 500 }}>overflow</p>
//             //             </div>
//             //             <Hamburger />
//             //         </div>
//             //         <ul
//             //             className={classnames(
//             //                 styles.nav,
//             //                 menuOpen && styles.open
//             //             )}
//             //         >
//             //             <li>
//             //                 <Link
//             //                     onClick={() => setMenuOpen(!menuOpen)}
//             //                     className="nav-link"
//             //                     href="/"
//             //                 >
//             //                     About
//             //                 </Link>
//             //             </li>
//             //             <li>
//             //                 <Link
//             //                     onClick={() => setMenuOpen(!menuOpen)}
//             //                     className="nav-link"
//             //                     href="/"
//             //                 >
//             //                     Posts
//             //                 </Link>
//             //             </li>
//             //             <li>
//             //                 <Account />
//             //             </li>
//             //             {/* {session?.user?.email === "zacmelendez@gmail.com" && ( */}
//             //             <li>
//             //                 <Link
//             //                     onClick={() => setMenuOpen(!menuOpen)}
//             //                     className="nav-link"
//             //                     href="/"
//             //                 >
//             //                     Create
//             //                 </Link>
//             //             </li>
//             //             {/* { )}} */}
//             //             <li>
//             //                 {/* <ActionIcon
//             //                     sx={{
//             //                         color: `${
//             //                             theme === "dark" ? "#e5e5e3" : "#454545"
//             //                         }`,
//             //                     }}
//             //                     variant="transparent"
//             //                     onClick={handleClick}
//             //                 >
//             //                     {theme === "dark" ? (
//             //                         <IconSunHigh size={24} />
//             //                     ) : (
//             //                         <IconMoon size={24} />
//             //                     )}
//             //                 </ActionIcon> */}
//             //             </li>
//             //         </ul>
//             //     </>
//             // )}
//         </header>
//     );
// }
