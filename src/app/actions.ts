'use server';

import {
  analyzeBusinessProcesses,
  type AnalyzeBusinessProcessesInput,
  type AnalyzeBusinessProcessesOutput,
} from '@/ai/flows/analyze-business-processes';
import {
  generateTechnicalSpec,
  type GenerateTechnicalSpecInput,
  type GenerateTechnicalSpecOutput,
} from '@/ai/flows/generate-technical-spec';

export async function handleAnalyzeProcess(
  input: AnalyzeBusinessProcessesInput
): Promise<{ data?: AnalyzeBusinessProcessesOutput; error?: string }> {
  try {
    const result = await analyzeBusinessProcesses(input);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Не удалось проанализировать процесс. Попробуйте еще раз.' };
  }
}

export async function handleGenerateSpec(
  input: GenerateTechnicalSpecInput
): Promise<{ data?: GenerateTechnicalSpecOutput; error?: string }> {
  try {
    const result = await generateTechnicalSpec(input);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Не удалось сгенерировать спецификацию. Попробуйте еще раз.' };
  }
}
