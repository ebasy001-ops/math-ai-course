# Remotion Calculus Video

This project renders an undergraduate calculus narration video using Remotion.

## Structure

- `src/index.ts` registers the Remotion root.
- `src/Video.tsx` defines the slide sequence and narration text.

## Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start preview:

   ```bash
   npm start
   ```

3. Render the video:

   ```bash
   npm run build
   ```

The rendered output will be written to `out/video.mp4`.
