import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    booking: BookingItem[]
}

const initialState: BookState = { booking: []}
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        updateBooking: (state, action:PayloadAction<BookingItem>) => {
            state.booking = [action.payload]
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            const remainItems = state.booking.filter(obj => {
				return obj.ssn !== action.payload.ssn
			})
			state.booking = remainItems
        }
    }
})

export const { updateBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer