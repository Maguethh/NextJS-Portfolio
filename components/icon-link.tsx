import React from "react";
import Link from "next/link";
import "./icon-link.css";

type IconLinkProps = {
  href: string;
  icon: React.ElementType;
  tooltip: string; // Change 'name' to 'tooltip'
};

const Tooltip = ({ text }: { text: string }) => (
  <div className="tooltip">{text}</div>
);

const IconLink: React.FC<IconLinkProps> = ({ href, icon: Icon, tooltip }) => (
  <Link href={href} passHref>
    <div className="icon-link">
      <Icon className="contact-icon" />
      <Tooltip text={tooltip} /> {/* Change 'name' to 'tooltip' */}
    </div>
  </Link>
);

export default IconLink;
