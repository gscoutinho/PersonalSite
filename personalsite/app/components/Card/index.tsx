import React, { ReactNode } from 'react'

type Props = {
    styles: string;
    children: ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className={props.styles}>{props.children}</div>
  )
}