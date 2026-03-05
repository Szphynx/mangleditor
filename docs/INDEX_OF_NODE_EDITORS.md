# Index of Related Projects & Inspiration

This document serves as an index of other node-based, audio-visual, and WebGL/Three.js editors. The purpose is to study these tools to identify features, user interface paradigms, and technical capabilities that our editor could improve upon or assimilate.

## eternal (by rob.computer / kousun12)
- **URL**: [https://eternal.rob.computer/](https://eternal.rob.computer/)
- **Description**: A procedural node-based editor for music and graphics on the web. It treats audio-visual processes as programs represented visually as a graph.
- **Key Features & Inspiration**:
  - Combined audio and visual node processing in a single graph.
  - Inspired by procedural art (Sol LeWitt) and ambient music concepts (Brian Eno's "music as gardening").
  - Seamless, graph-based visual programming environment.

## Cables.gl
- **URL**: [https://cables.gl/](https://cables.gl/)
- **Description**: A highly polished online visual programming environment for creating interactive web content. Often compared to TouchDesigner but entirely web-based.
- **Key Features & Inspiration**:
  - Comprehensive operator set covering mathematics, shapes, and complex materials.
  - Robust interactive audiovisual animations.
  - Cloud-based ecosystem allowing users to share, fork, and remix patches easily.

## Polygonjs
- **Description**: A node-based 3D WebGL design tool focused on creating interactive web experiences without writing code, built on Three.js.
- **Key Features & Inspiration**:
  - Dedicated "AUDIO nodes" specifically for generating and modifying audio.
  - Strong support for procedural animations, dynamic textures, and scene event handling.
  - Can be used both fully online and locally.

## Three.js Visual Editor
- **Description**: An open-source, browser-based editor specifically designed for 3D graphics and audio-reactive visuals, utilizing React Three Fiber, React Flow, and the Web Audio API.
- **Key Features & Inspiration**:
  - Purpose-built for audio reactivity, allowing visuals to respond dynamically to music and sound analysis.
  - Tight integration between the 3D rendering engine and sound data streams.

## Nodysseus
- **Description**: A flexible node-based editor for the web featuring integrated Three.js bindings.
- **Key Features & Inspiration**:
  - Allows general JavaScript functionality to be exposed directly as manageable nodes.
  - Highly extensible architecture for web-based creations.

## TSL Graph / Three.js Shader Graph
- **Description**: Emerging node-based editors designed for the new Three.js Shading Language (TSL).
- **Key Features & Inspiration**:
  - visual, drag-and-drop interfaces optimized specifically for building complex shaders.
  - Bridges the gap between visual node tools (like Blender's shader nodes) and writing raw shader code.

## GSN Composer
- **Description**: An online node-based visual programming environment tailored for editing WebGL GLSL shaders.
- **Key Features & Inspiration**:
  - Simplifies the process of injecting uniform variables and routing 3D meshes into shaders.
  - An intuitive, browser-accessible workflow for rapid shader development.

---

### Potential Features to Assimilate
1. **Audio Reactivity Nodes**: Integrating the Web Audio API to allow nodes to extract frequency or waveform data and drive uniform values (e.g., pumping a distortion filter to a kick drum).
2. **Procedural Generation Operators**: Improving our math, noise, and generative nodes to allow more complex, emergent procedural visual art.
3. **Advanced Shader graph Integration**: Moving towards visual shader building or introducing TSL (Three.js Shading Language) integration.
4. **Community Sharing**: Implementing features for easily exporting, sharing, or embedding the graph configurations and resulting web experiences.
5. **Custom Inline Code Nodes**: Giving users the power to write small JavaScript or GLSL snippets within a custom node directly in the graph interface (similar to Nodysseus).
