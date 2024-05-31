import { createAppSlice } from "../../app/createAppSlice"
import type { Book } from "./Book"
import { fetchBooks } from "./book.api"

export interface BooksSliceState {
  books: Book[]
  status: "idle" | "loading" | "failed"
}

const initialState: BooksSliceState = {
  books: [],
  status: "idle",
}

export const booksSlice = createAppSlice({
  name: "books",
  initialState,
  reducers: create => ({
    loadBooks: create.asyncThunk(() => fetchBooks(), {
      pending: state => {
        state.status = "loading"
      },
      fulfilled: (state, action) => {
        state.status = "idle"
        state.books = action.payload
      },
      rejected: state => {
        state.status = "failed"
      },
    }),
  }),
  selectors: {
    selectBooks: sliceState => sliceState.books,
    selectStatus: sliceState => sliceState.status,
  },
})

export const { loadBooks } = booksSlice.actions

export const { selectBooks, selectStatus } = booksSlice.selectors
