import { Chart } from './Chart';
import { ChartData } from './ChartData';

export interface Datasource{
    chart : Chart,
    data : ChartData[]
}