import { loadEnvs } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

export const load = async () => {
	const env = await loadEnvs();
	for (const key of Object.keys(env)) {
		if (Deno.env.get(key)) continue;
		Deno.env.set(key, env[key]);
	}
}