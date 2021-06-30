class Square {
  constructor(length) {
    this.width = length;
    this.height = length;
  }

  static checkIsValidSquare(width, height) {
    return width === height;
  }

  static isAreaEqual(squareA, squareB) {
    const areaA = squareA.width * squareA.height;
    const areaB = squareB.width * squareB.height;

    return areaA === areaB;
  }

}

