class Tailwind {
  private classNames: string[] = [];

  static builder(): Tailwind {
    return new Tailwind();
  }

  add(className?: string): Tailwind {
    this.classNames.push(className ?? ``);
    return this;
  }

  addIf(className?: string, condition?: boolean): Tailwind {
    if (condition) this.add(className);
    return this;
  }

  build() {
    return this.classNames.join(` `).trim();
  }
}

export default Tailwind;
