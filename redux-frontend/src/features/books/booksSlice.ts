import { createAppSlice } from "../../app/createAppSlice";
import type { Book } from "./Book";
import { fetchBooks, removeBook as removeBookApi } from "./book.api";

export interface BooksSliceState {
  books: Book[];
  status: "idle" | "loading" | "failed";
}

const initialState: BooksSliceState = {
  books: [],
  status: "idle",
};

export const booksSlice = createAppSlice({
  name: "books",
  initialState,
  reducers: create => ({
    removeBook: create.asyncThunk((id: string) => removeBookApi(id), {
      pending: state => {
        state.status = "loading";
      },
      fulfilled: (state, action) => {
        state.status = "idle";
        const index = state.books.findIndex(book => book.id === action.payload);
        state.books.splice(index, 1);
      },
      rejected: state => {
        state.status = "failed";
      },
    }),
    loadBooks: create.asyncThunk(() => fetchBooks(), {
      pending: state => {
        state.status = "loading";
      },
      fulfilled: (state, action) => {
        state.status = "idle";
        state.books = action.payload;
      },
      rejected: state => {
        state.status = "failed";
      },
    }),
  }),
  selectors: {
    selectBooks: sliceState => sliceState.books,
    selectStatus: sliceState => sliceState.status,
  },
});

export const { loadBooks, removeBook } = booksSlice.actions;

export const { selectBooks, selectStatus } = booksSlice.selectors;
