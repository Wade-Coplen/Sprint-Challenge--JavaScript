// 1. Copy and paste your prototype in here and refactor into class syntax.
class Parent {
		constructor(properties) {
		this.newLength = properties.length;
		this.newWidth = properties.width;
		this.newHeight = properties.height
		}
		volume(num1, num2, num3) {
			return (num1 * num2 * num3);
			}
			surfaceArea(length, width, height) {
			return (2 * (length * width + length * height + width * height));
			}
	}
	const a = new Parent ({
	  length: 4,
	  width: 5,
	  height: 5
	});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(a.volume(4, 5, 5)); // 100
console.log(a.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.