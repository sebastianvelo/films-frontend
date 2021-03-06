import { FunctionComponent } from "react";

interface BodyCellProps {
    text: string;
}
 
const BodyCell: FunctionComponent<BodyCellProps> = (props: BodyCellProps) => ( 
        <td>
            {props.text}
        </td>
     )
 
export default BodyCell;