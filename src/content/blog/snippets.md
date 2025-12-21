---
title: 'Snippets'
description: ''
pubDate: 'Dec 21 2025'
heroImage: ''
---



```typescript
// Typed Try Catch

import { CustomResult } from "@/types/neverthrow" // May need to figure out what this is?

interface TryCatchOptions {
	errorMessage?: string;
}

export async function asyncTryCatch<T> (
	promise: Promise<T>,
	options: TryCatchOptions,
): Promise<CustomResult<T, Error>> {
	try {
		
		const data = await promise
		return {success: true, data }

	} catch (error: unkown) {
		return {
			success: false,
			error: error instanceof Error ? error : new Error(options?.errorMessage ?? String(error))
		}
	}
}

```