export interface ITextProps {
  children: any;
  className?: string;
  size?: 16 | 18 | 20 | 24 | 28 | 32 | 40 | 48 | 58;
  fontWeight?: 'font-light' | 'font-bold';
  isItalic?: boolean;
  dangerouslySetInnerHTML?: string;
  type?: 'h1' | 'h2' | 'h3' | 'p';
  noWrap?: boolean;
}
