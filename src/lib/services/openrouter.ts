const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export type Model = 'anthropic/claude-3-sonnet' | 'google/gemini-pro' | 'anthropic/claude-2.1';

export async function chatCompletion(messages: any[], model: Model) {
	const response = await fetch(OPENROUTER_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
			'HTTP-Referer': 'http://localhost:5173', // Update this for production
			'X-Title': 'AI Chat App' // Your app name
		},
		body: JSON.stringify({
			model,
			messages,
			temperature: 0.7
		})
	});

	if (!response.ok) {
		throw new Error('Failed to get chat completion');
	}

	return response.json();
}
