'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a technical specification document from a business idea.
 *
 * - generateTechnicalSpec - A function that takes a business idea and returns a structured technical specification document.
 * - GenerateTechnicalSpecInput - The input type for the generateTechnicalSpec function.
 * - GenerateTechnicalSpecOutput - The return type for the generateTechnicalSpec function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTechnicalSpecInputSchema = z.object({
  businessIdea: z
    .string()
    .describe('A detailed description of the business idea.'),
});
export type GenerateTechnicalSpecInput = z.infer<typeof GenerateTechnicalSpecInputSchema>;

const GenerateTechnicalSpecOutputSchema = z.object({
  technicalSpec: z
    .string()
    .describe('A structured technical specification document.'),
});
export type GenerateTechnicalSpecOutput = z.infer<typeof GenerateTechnicalSpecOutputSchema>;

export async function generateTechnicalSpec(
  input: GenerateTechnicalSpecInput
): Promise<GenerateTechnicalSpecOutput> {
  return generateTechnicalSpecFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTechnicalSpecPrompt',
  input: {schema: GenerateTechnicalSpecInputSchema},
  output: {schema: GenerateTechnicalSpecOutputSchema},
  prompt: `You are an expert system analyst.
  Your job is to create a detailed technical specification document from a business idea. The document should include the following sections:

  1. Goals:
  Describe the goals of the project.
  2. Functional Requirements:
  Describe the functions, data flows, and user workflows of the project.
  3. Technical Requirements:
  Describe the technologies to be used in the project.
  4. Acceptance Criteria:
  Describe the requirements to be satisfied to accept the system.

  Here is the business idea:
  {{businessIdea}}`,
});

const generateTechnicalSpecFlow = ai.defineFlow(
  {
    name: 'generateTechnicalSpecFlow',
    inputSchema: GenerateTechnicalSpecInputSchema,
    outputSchema: GenerateTechnicalSpecOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
