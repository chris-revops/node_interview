import { createElement, ReactElement } from './react'

const header: ReactElement = {
  type: "h1",
  props: {
    text: "Header text"
  }
}

createElement({ ...header, children: [header, header, header] });
