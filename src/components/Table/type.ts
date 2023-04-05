export interface IColumn<T extends { [key: string]: unknown }> {
  dataCol: keyof T;
  name: string;
  align?: "left" | "center" | "right";
  minWidth?: number;
  width?: number;
  className?: string;
  headerClassName?: string;
  footerClassName?: string;
  format?: (value: number) => string;
};
