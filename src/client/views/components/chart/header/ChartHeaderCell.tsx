import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => (
    <span className="p-2 w-16 bg-gradient-to-tl from-secondary-dark to-black text-primary-dark font-bold border border-black flex-shrink-0">{props.value}</span>
);

export default ChartHeaderCell;
