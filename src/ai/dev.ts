import {config} from 'dotenv';
config();

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {genkitNext} from '@genkit-ai/next';

genkit({
  plugins: [googleAI(), genkitNext()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

import './flows/answer-transplant-questions';
import './flows/narrate-content-flow';