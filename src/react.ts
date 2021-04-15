import { writer } from "./writer";

interface ComponentProps {
  text: string
}

export interface ReactElement {
  type: string
  props?: ComponentProps
  children?: ReactElement[]
}

export const createElement = ({ type, props, children }: ReactElement) => {
  writer(`type: ${type} props: ${Object.values(props || {}).join(" ")}`);
};

