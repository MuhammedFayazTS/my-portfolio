# Blog Code Block Display - Terminal Style

## Overview

The blog now features a premium, terminal-like code block display similar to GitHub and Medium, with the following enhancements:

## Features

### 1. **Terminal-Style Header**

- macOS-style colored dots (red, yellow, green)
- Terminal icon
- Language badge or filename display
- Copy button with visual feedback

### 2. **Syntax Highlighting**

- Uses VS Code Dark Plus theme for professional appearance
- Supports multiple programming languages
- Automatic language detection from Sanity CMS

### 3. **Line Numbers**

- Professional line numbering on the left
- Non-selectable line numbers for easy code copying
- Proper spacing and alignment

### 4. **Copy Functionality**

- One-click copy button
- Visual feedback when code is copied
- Automatic clipboard integration

### 5. **Custom Scrollbars**

- Styled scrollbars matching the terminal theme
- Works in both Chrome/Edge and Firefox
- Smooth scrolling experience

### 6. **Inline Code**

- Styled inline code snippets with `code` tags
- Pink/rose color scheme for visibility
- Subtle background and border

### 7. **Typography**

- Fira Code font for better code readability
- Proper font fallbacks (Consolas, Monaco, Courier New)
- Optimized line height and spacing

## Components

### CodeBlock Component

Location: `src/components/blog/CodeBlock.tsx`

**Props:**

- `code` (string): The code content to display
- `language` (string, optional): Programming language for syntax highlighting
- `filename` (string, optional): Optional filename to display in header

**Features:**

- Client-side component for interactive features
- Copy to clipboard functionality
- Language display name mapping
- Responsive design

### RichTextComponents

Location: `src/components/blog/RichTextComponents.tsx`

**Updates:**

- Integrated CodeBlock component for code blocks
- Added inline code styling
- Maintained existing image, heading, and link renderers

## Styling

### Global Styles

Location: `src/app/globals.css`

**Additions:**

- Fira Code font import from Google Fonts
- Custom scrollbar styling for `<pre>` elements
- Dark theme optimized colors

### Blog Page

Location: `src/app/blogs/[slug]/page.tsx`

**Enhancements:**

- Improved typography with prose-lg
- Dark mode support
- Better spacing and layout
- Gradient text for headings
- Enhanced date formatting

## Usage in Sanity CMS

When creating blog posts in Sanity, code blocks will automatically render with the new terminal-style display. You can:

1. Add code blocks through the Sanity editor
2. Specify the programming language
3. Optionally add a filename (if your schema supports it)

## Supported Languages

The component supports all languages supported by Prism.js, including:

- JavaScript/TypeScript
- Python
- Java
- C/C++/C#
- Go, Rust, Ruby
- HTML/CSS/SCSS
- JSON, YAML
- Bash/Shell
- SQL
- And many more...

## Browser Compatibility

- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)
- ✅ Safari (full support)
- ✅ Mobile browsers (responsive design)

## Future Enhancements

Potential improvements:

- Theme switcher (light/dark code themes)
- Additional language support
- Code diff highlighting
- Collapsible code blocks
- Download code as file option
