import React, { PureComponent } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./RecordList.css";

class RecordList extends PureComponent {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Facility</TableCell>
            <TableCell>Sample Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.recordList.map((record, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{record.facility}</TableCell>
                <TableCell>{record.sampleType}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default RecordList;
