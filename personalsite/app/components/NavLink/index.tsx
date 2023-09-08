import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    styles: string;
    href: string;
    children: ReactNode;
}

export default function NavLink(props: Props) {
  return (
    <Link className={props.styles} href={props.href}>{props.children}</Link>
  )
}