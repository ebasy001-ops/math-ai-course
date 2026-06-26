import React from 'react';
import {AbsoluteFill, Audio, Composition, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

type Scene = {
  title: string;
  lines: string[];
  narration: string;
};

const scenes: Scene[] = [
  {
    title: 'The Fundamental Theorem of Calculus',
    lines: ['A focused lecture for Calculus I students.'],
    narration:
      'Welcome to this lecture on the Fundamental Theorem of Calculus. Today we will connect differentiation and integration.'
  },
  {
    title: 'Learning Objectives',
    lines: [
      'State both parts of the theorem.',
      'Use antiderivatives to evaluate definite integrals.',
      'Interpret accumulation and rates of change.'
    ],
    narration:
      'By the end of this video, you will be able to state both parts of the theorem, use antiderivatives to compute definite integrals, and apply the relationship between accumulation and derivatives.'
  },
  {
    title: 'Review: Definite Integrals',
    lines: [
      'A definite integral computes net area under a curve from a to b.',
      'It measures accumulation of quantity over an interval.'
    ],
    narration:
      'First, we review definite integrals. A definite integral from a to b represents net area under a function between those limits.'
  },
  {
    title: 'FTC Part I',
    lines: ['If F is an antiderivative of f, then F\'(x) = f(x).'],
    narration:
      'Fundamental Theorem of Calculus Part One tells us that if F is an antiderivative of f, then F prime of x equals f of x.'
  },
  {
    title: 'Worked Example: FTC Part I',
    lines: [
      'Let F(x) = x³.',
      'Then F\'(x) = 3x².',
      'This recovers the original function f(x) = 3x².'
    ],
    narration:
      'For example, if F of x equals x cubed, then its derivative F prime of x equals three x squared, showing the derivative recovers the original function.'
  },
  {
    title: 'FTC Part II',
    lines: ['∫ₐᵇ f(x) dx = F(b) - F(a)'],
    narration:
      'Part Two of the theorem says that the definite integral from a to b of f of x dx equals any antiderivative evaluated at b minus its value at a.'
  },
  {
    title: 'Worked Example: ∫₀² 3x² dx',
    lines: [
      'Antiderivative F(x) = x³.',
      'Evaluate from 0 to 2: F(2) - F(0) = 8 - 0.',
      'Result: 8.'
    ],
    narration:
      'As a worked example, the integral from zero to two of three x squared dx equals x cubed evaluated from zero to two, which gives eight.'
  },
  {
    title: 'Applications',
    lines: [
      'Compute areas between curves.',
      'Use velocity to find distance traveled.',
      'Model accumulation in science and economics.'
    ],
    narration:
      'Applications include using the theorem to compute area, solve motion problems with velocity, and model accumulation in physics and economics.'
  },
  {
    title: 'Summary',
    lines: [
      'Part I: F\'(x) = f(x).',
      'Part II: ∫ₐᵇ f(x) dx = F(b) - F(a).',
      'The theorem links derivatives and integrals.'
    ],
    narration:
      'In summary, the Fundamental Theorem of Calculus links derivatives and integrals. Part One recovers the original function from an antiderivative, and Part Two evaluates accumulation using endpoint values.'
  }
];

const SCENE_DURATION = 180;
const FADE_DURATION = 15;

const SceneCard: React.FC<{scene: Scene; opacity: number; translateY: number}> = ({scene, opacity, translateY}) => (
  <AbsoluteFill style={{backgroundColor: '#ffffff', color: '#002855', fontFamily: 'Inter, system-ui, sans-serif'}}>
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          opacity,
          transform: `translateY(${translateY}px)`,
          transition: 'none'
        }}
      >
        <div style={{fontSize: 82, fontWeight: 800, lineHeight: 1.05, marginBottom: 28}}>{scene.title}</div>
        <div style={{height: 6, width: 140, borderRadius: 999, background: 'linear-gradient(90deg, #002855, #1f4fa1)', marginBottom: 42}} />
        {scene.lines.map((line, index) => (
          <div
            key={index}
            style={{
              fontSize: line.includes('∫') || line.includes('F(') ? 58 : 44,
              lineHeight: 1.4,
              marginBottom: 24,
              maxWidth: 1240,
              opacity: 0.96,
              fontFamily: line.includes('∫') ? 'Menlo, ui-monospace, SFMono-Regular, monospace' : 'Inter, system-ui, sans-serif'
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  </AbsoluteFill>
);

export const Video: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneIndex = Math.min(Math.floor(frame / SCENE_DURATION), scenes.length - 1);
  const sceneFrame = frame - sceneIndex * SCENE_DURATION;
  const opacity = interpolate(
    sceneFrame,
    [0, FADE_DURATION, SCENE_DURATION - FADE_DURATION, SCENE_DURATION],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  const translateY = interpolate(
    sceneFrame,
    [0, FADE_DURATION, SCENE_DURATION - FADE_DURATION, SCENE_DURATION],
    [40, 0, 0, -40],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  const scene = scenes[sceneIndex];

  return (
    <>
      <Audio src={staticFile('narration.mp3')} />
      <SceneCard scene={scene} opacity={opacity} translateY={translateY} />
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CalculusNarration"
        component={Video}
        durationInFrames={scenes.length * SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
