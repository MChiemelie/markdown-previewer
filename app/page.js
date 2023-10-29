"use client";

// src/App.js
import React, { Component } from "react";
import { Editor, Preview } from "@/components";

const defaultMarkdown = `
# Heading 1
## Heading 2
[Link to FreeCodeCamp](https://www.freecodecamp.org/)
\`inline code\`
\`\`\`
// Code block
function example() {
  return "Hello, world!";
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold Text**
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown, // You can define the default Markdown content here
    };
  }

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-5xl font-extrabold py-2">Markdown Previewer</h1>
        <div className="flex w-full justify-center gap-4 p-4">
          <Editor markdown={this.state.markdown} handleChange={this.handleChange} />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
