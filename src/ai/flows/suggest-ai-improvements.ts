'use server';

/**
 * @fileOverview Analyzes company performance data and suggests AI-driven improvements.
 *
 * - suggestAiImprovements - A function that handles the suggestion of AI improvements.
 * - SuggestAiImprovementsInput - The input type for the suggestAiImprovements function.
 * - SuggestAiImprovementsOutput - The return type for the suggestAiImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAiImprovementsInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A description of the company, its industry, and its business model.'),
  historicalPerformanceData: z
    .string()
    .describe(
      'Historical performance data of the company, including key metrics and trends.'
    ),
  pastChallenges: z
    .string()
    .describe(
      'Description of challenges the company has faced and any previous attempts to resolve them.'
    ),
});
export type SuggestAiImprovementsInput = z.infer<typeof SuggestAiImprovementsInputSchema>;

const SuggestAiImprovementsOutputSchema = z.object({
  aiImprovementSuggestions: z
    .string()
    .describe(
      'A list of AI-driven improvements tailored to the company, based on best practices.'
    ),
  justification: z
    .string()
    .describe(
      'A detailed justification for each suggested improvement, explaining the potential benefits and how it addresses current inefficiencies.'
    ),
});
export type SuggestAiImprovementsOutput = z.infer<typeof SuggestAiImprovementsOutputSchema>;

export async function suggestAiImprovements(
  input: SuggestAiImprovementsInput
): Promise<SuggestAiImprovementsOutput> {
  return suggestAiImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAiImprovementsPrompt',
  input: {schema: SuggestAiImprovementsInputSchema},
  output: {schema: SuggestAiImprovementsOutputSchema},
  prompt: `You are an AI consultant tasked with analyzing a company's performance and suggesting AI-driven improvements.

  Company Description: {{{companyDescription}}}
  Historical Performance Data: {{{historicalPerformanceData}}}
  Past Challenges: {{{pastChallenges}}}

  Based on the information provided, suggest specific AI improvements that could address inefficiencies and enhance performance. Provide a detailed justification for each suggestion, explaining the potential benefits and how it aligns with best practices.
  Focus on actionable and practical recommendations that can be implemented to drive tangible results.
  Consider AI solutions such as:
  - Automated data analysis and reporting
  - Predictive maintenance and anomaly detection
  - Personalized customer experiences
  - Streamlined supply chain management
  - Improved fraud detection and risk management
  - Automated Technical Specification Generation
  - Data Visualization Dashboards
  - Service Offering Showcase
  - Low-Code Automation Platform Promotion
  - Accountability Systems
  Ensure the suggestions are realistic and take into account the company's unique circumstances and past experiences.

  Format your response as a list of AI improvement suggestions, each followed by a detailed justification.
  `,
});

const suggestAiImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestAiImprovementsFlow',
    inputSchema: SuggestAiImprovementsInputSchema,
    outputSchema: SuggestAiImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
