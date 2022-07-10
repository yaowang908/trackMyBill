import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SubscriptionState {
  id: string;
  name: string;
  billingRate: string;
  currency?: string;
  billingCycle: string;
  billingDate?: Date;
  startingDate?: Date;
  endingDate?: Date;
  trailEndingDate?: Date;
  paymentMethod?: string;
  url?: string;
}

type sliceState = { [key: string]: SubscriptionState };

const initialState: sliceState = {};

export const subscriptionSlice = createSlice({
  name: 'subscriptionSlice',
  initialState,
  reducers: {
    add: (state: sliceState, action: PayloadAction<SubscriptionState>) => {
      state[action.payload.id] = action.payload;
    },
    remove: (state: sliceState, action: PayloadAction<SubscriptionState>) => {
      delete state[action.payload.id];
    },
  },
});

export const { add, remove } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
