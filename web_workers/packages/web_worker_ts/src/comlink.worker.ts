import { DatasetService } from "./DatasetService";
import {expose} from 'comlink'

export type {DatasetServiceInterface} from "./DatasetService" 

expose(DatasetService)
