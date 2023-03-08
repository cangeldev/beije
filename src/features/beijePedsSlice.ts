import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IBeijePedsState {
    beijePed: {
        standartPed: {
            count: number;
            title: string;
            price: number;
        }
        superPed: {
            count: number;
            title: string;
            price: number;
        }
        ultraPed: {
            count: number;
            title: string;
            price: number;
        }
    },
    beijeDailyPed: {
        dailyPed: {
            count: number;
            title: string;
            price: number;
        }
        superDailyPed: {
            count: number;
            title: string;
            price: number;
        }
    },
    beijeTamponPed: {
        miniTampon: {
            count: number;
            title: string;
            price: number;
        }
        standartTampon: {
            count: number;
            title: string;
            price: number;
        }
    },
    total: number;
}
const initialState: IBeijePedsState = {

    beijePed: {
        standartPed: {
            count: 0,
            title: 'Standart Ped',
            price: 2.973,
        },
        superPed: {
            count: 0,
            title: 'Süper Ped',
            price: 3.327,
        },
        ultraPed: {
            count: 0,
            title: 'Süper+ Ped',
            price: 3.748,
        }
    },
    beijeDailyPed: {
        dailyPed: {
            count: 0,
            title: 'Günlük Ped',
            price: 1.972,
        },
        superDailyPed: {
            count: 0,
            title: 'Süper Günlük Ped',
            price: 2.092,
        }
    },
    beijeTamponPed: {
        miniTampon: {
            count: 0,
            title: 'Mini Tampon',
            price: 3.377,
        },
        standartTampon: {
            count: 0,
            title: 'Standart Tampon',
            price: 3.701,
        }
    },
    total: 0
}
export const beijePedsSlice = createSlice({
    name: 'beijePeds',
    initialState,
    reducers: {
        changeCount: (state, action) => {
            const { packages, product, intCount } = action.payload;
            state[packages][product].count = intCount
            totalprice()
        },
        totalprice: (state) => {
            const products = [
                state.beijePed.standartPed,
                state.beijePed.superPed,
                state.beijePed.ultraPed,
                state.beijeDailyPed.dailyPed,
                state.beijeDailyPed.superDailyPed,
                state.beijeTamponPed.miniTampon,
                state.beijeTamponPed.standartTampon,
            ];
            state.total = products.reduce((total, { count, price }) => total + (count * price), 0).toFixed(2);
        },
        setCount: (state, action) => {
            const { packages, product } = action.payload;
            state[packages][product].count = 0
            totalprice()
        },

    },
})

export const { changeCount, totalprice, setCount } = beijePedsSlice.actions
export default beijePedsSlice.reducer