import { DatasetService } from "./DatasetService";
import {expose} from 'comlink'

export type DatasetServiceType = typeof DatasetService

expose(DatasetService)
