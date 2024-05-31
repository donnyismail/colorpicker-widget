# Color Picker Widget

This is a reusable and responsive React component that allows users to select colors from a predefined set of primary and secondary colors, along with their shades. The selected color's hex value is automatically copied to the clipboard for easy use.

## Assessment Guidelines

This project was developed as part of a technical assessment with the following objectives:

1. **Color Selection**: Implement a user-friendly interface that allows selection among three primary colors (red, blue, yellow) and three secondary colors (green, orange, purple). Each color should display four to five shades for users to choose from. When the user selects a color hex value, it should be copied to the clipboard.

2. **Widget Reusability**: Design the widget with modularity in mind, ensuring it can be dropped into any page and work independently. The widget should not rely on global styles or scripts that could interfere with the host page's functionality.

3. **Responsive and Adaptive Design**: The widget should adapt to flexible dimensions, maintaining usability and aesthetic integrity across different screen sizes and resolutions.

4. **Clean and Maintainable Code**: Write clear, maintainable code following best practices and React's design principles. Component structure should be logical and well-organized, with a focus on performance and scalability.

5. **Accessibility**: Ensure the widget is accessible, following WAI-ARIA guidelines where applicable. It should be navigable through keyboard and screen readers.

## Dependencies

This project uses the following dependencies:

- `react-color`: A collection of React UI components for picking colors.

## Installation

1. Clone the repository:
git clone https://github.com/your-repo/color-picker-widget.git
Copy code
2. Navigate to the project directory:
cd color-picker-widget
Copy code
3. Install dependencies:
npm install
Copy code
## Usage

1. Import the `ColorPicker` component into your React app:

```jsx
import ColorPicker from './components/ColorPicker';

Use the ColorPicker component in your JSX:
jsxCopy code<ColorPicker />
This will render the color picker widget with the default set of colors and their shades.

Props
The ColorPicker component accepts the following props:

colors (array, optional): An array of color objects, where each object represents a color group with the following properties:

name (string): The name of the color group.
main (string): The hex code for the main color.
shades (array of strings): An array of hex codes for the shades of the color.


circleSize (number, optional, default: 28): The size of the color circles in pixels.
circleSpacing (number, optional, default: 8): The spacing between the color circles in pixels.

Example with Custom Props
jsxCopy codeimport React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const customColors = [
    {
      name: 'Crimson',
      main: '#DC143C',
      shades: ['#FF6B6B', '#FF8C8C', '#FFB2B2', '#FFD9D9'],
    },
    {
      name: 'Navy',
      main: '#000080',
      shades: ['#4D4D99', '#8080B3', '#B3B3CC', '#E6E6FF'],
    },
  ];

  return (
    <div>
      <h1>Color Picker Widget</h1>
      <ColorPicker colors={customColors} circleSize={32} circleSpacing={12} />
    </div>
  );
};

export default App;
In this example, we're passing a custom array of color groups (customColors) along with a circleSize of 32 and a circleSpacing of 12 to the ColorPicker component.
Development
To start the development server, run:
Copy codenpm start
This will start the development server and open the app in your default browser.
Build
To create a production build, run:
Copy codenpm run build
This will create a optimized production build in the build directory.
Accessibility
The color picker widget follows accessibility best practices, including:

Proper keyboard navigation and focus management.
Appropriate aria-labels and alt text for color circles and interactive elements.
Adherence to color contrast guidelines for improved visibility.

Contributions
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. can you put this in a single block of code for a readme