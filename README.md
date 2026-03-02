# Mangleditor

Mangleditor is a primitive browser-based alternative to TouchDesigner built in Vue. While early in development, it offers node-based image transformation capabilities that can be used almost to the level of an early-stage Resolume or TouchDesigner patch.

## Features

- **Node-Based Processing**: Connect imagery, textures, and math nodes using a Cables.io-inspired dark mode interface.
- **Real-time GPU Shaders**: Image processing is offloaded to the GPU using Three.js and custom GLSL fragment shaders.
- **Mix & Blend Controls**: Bypass toggle and a 0.0 - 1.0 mix slider on every effect node to quickly fade between the original input and the modified output.
- **Lossless Export**: Once you are happy with the mangled image, export it at full 1:1 scale losslessly.

## Current State & Known Issues

⚠️ **Warning: This is an early alpha release.**
Work on this project is sporadic. There are plenty of bugs at the moment!

- **Caching/Refresh Bug**: Sometimes you need to temporarily bypass (⊘) the blend nodes to see changes if a new texture was introduced upstream. 

## Local Development Setup

1. Clone the repository
2. Install the necessary dependencies: `npm install`
3. Start the local development server: `npm run dev`

## Built With

- **Vue 3** + **Vite**
- **Vue Flow** (for the node canvas)
- **Three.js** (for the shader render pipeline FBO chain)
- **Pinia** (for state management and graph serialization)

## Credits

Coded by szphynx
