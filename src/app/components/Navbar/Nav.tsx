import Link from "next/link";
import style from "./Nav.module.css";
import Logo from "../../../../public/spokat.jpg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={style["navbar"]}>
      <Image src={Logo} width={60} height={50} alt="Logo" />
      <div className={style["navLink"]}>
        <Link className={style["link"]} href="/">
          Home
        </Link>
        <Link className={style["link"]} href="/">
          About
        </Link>
        <Link className={style["link"]} style={{ width: "155px" }} href="/">
          Article List
        </Link>
      </div>
      <div>
        <Link
          className={style["contact"]}
          style={{
            border: "1px solid",
            padding: "10% 25%",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "50px",
          }}
          href="/"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
