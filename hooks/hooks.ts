import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AppDispatch } from "../redux/store";

import {TypedUseSelectorHook, useDispatch,useSelector} from 'react-redux'
import {AppDispatch,RootState} from '../redux/store'

export const useAppDispatch: () => AppDispatch = useDispatch 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector