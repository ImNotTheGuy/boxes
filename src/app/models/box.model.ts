export class Box {
  title: string;
  color: string;
  children: Box[] = [];
  parent?: Box | null;

  constructor(title: string, color: string, children?: Box[], parent?: Box | null) {
    this.title = title;
    this.color = color;
    this.children = children || [];
    this.parent = parent || null;
  }
}