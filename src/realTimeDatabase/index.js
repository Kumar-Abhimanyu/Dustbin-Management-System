import StartFireBase from "../firebase";
import React from "react";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

const db = StartFireBase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbref = ref(db, 'Workers');

        onValue(dbref, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyname = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyname, "data":data})
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Block</th>
                        <th>Percentage</th>
                        <th>Worker</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{row.data.Block}</td>
                            <td>{row.data.Percentage}</td>
                            <td>{row.data.Worker}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}