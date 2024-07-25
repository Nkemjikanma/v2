import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BOOKS_API, bookShelf } from "./constants"
import { BookVolume, BookVolumeResponse } from "./types"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getCurrentlyReadingBooks = async () => {
	const currentReads = bookShelf.current
	const booksList = []

	for (const currentRead of currentReads) {
		const currentReadFetch = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${currentRead.title}+inauthor:${currentRead.author}&key=${BOOKS_API}&maxResults=1`, {
			method: "GET"
		})

		if (!currentReadFetch.ok) {
			throw new Error("Failed to fetch current read");
		}

		const bookData: BookVolumeResponse[] = await currentReadFetch.json()

		booksList.push(bookData)
	}

	return booksList
}
