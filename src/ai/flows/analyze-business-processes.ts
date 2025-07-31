// src/ai/flows/analyze-business-processes.ts
'use server';

/**
 * @fileOverview Analyzes business processes to identify AI automation opportunities.
 *
 * - analyzeBusinessProcesses - Analyzes business processes and identifies areas for AI automation.
 * - AnalyzeBusinessProcessesInput - The input type for the analyzeBusinessProcesses function.
 * - AnalyzeBusinessProcessesOutput - The return type for the analyzeBusinessProcesses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeBusinessProcessesInputSchema = z.object({
  businessProcessesDescription: z
    .string()
    .describe(
      'A detailed description of the current business processes, including inputs, outputs, and steps.'
    ),
});
export type AnalyzeBusinessProcessesInput = z.infer<typeof AnalyzeBusinessProcessesInputSchema>;

const AnalyzeBusinessProcessesOutputSchema = z.object({
  aiAutomationOpportunities: z
    .string()
    .describe(
      'A list of opportunities for AI automation within the described business processes, including specific recommendations and potential benefits.'
    ),
});
export type AnalyzeBusinessProcessesOutput = z.infer<typeof AnalyzeBusinessProcessesOutputSchema>;

export async function analyzeBusinessProcesses(
  input: AnalyzeBusinessProcessesInput
): Promise<AnalyzeBusinessProcessesOutput> {
  return analyzeBusinessProcessesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeBusinessProcessesPrompt',
  input: {schema: AnalyzeBusinessProcessesInputSchema},
  output: {schema: AnalyzeBusinessProcessesOutputSchema},
  prompt: `You are an expert business analyst specializing in identifying opportunities for AI automation.

  Analyze the following business processes and identify areas that are most suitable for AI automation. Provide specific recommendations and potential benefits.

  Business Processes Description: {{{businessProcessesDescription}}}
  `,
});

const analyzeBusinessProcessesFlow = ai.defineFlow(
  {
    name: 'analyzeBusinessProcessesFlow',
    inputSchema: AnalyzeBusinessProcessesInputSchema,
    outputSchema: AnalyzeBusinessProcessesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
