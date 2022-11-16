import React from "react";
import StartFireBase from "../firebase";
import { ref, set, update, remove} from "firebase/database";

export class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            block:'',
            percent:'',
            worker:''
        }
        this.interface = this.interface.bind(this)
    }

    componentDidMount(){
        this.setState({
            db:StartFireBase()
        });
    }
    

    render(){
        return(
            <>
                <h1>Software Engineering Project</h1>
                <label>Enter Block:</label>
                <input type='text' id='block' className="input" value={this.state.block} 
                onChange={e =>{this.setState({block: e.target.value});}}></input>
                <br></br>

                <label>Enter Percentage:</label>
                <input type='text' id='percentage' className="input" value={this.state.percent} 
                onChange={e =>{this.setState({percent: e.target.value});}}></input>
                <br></br>

                <label>Enter Worker:</label>
                <input type='text' id='worker' className="input" value={this.state.worker} 
                onChange={e =>{this.setState({worker: e.target.value});}}></input>
                <br></br>
                <br></br>
                <button id="addBtn" onClick={this.interface}>Add Data</button>
                <button id="updateBtn" onClick={this.interface}>Update Data</button>
                <button id="deleteBtn" onClick={this.interface}>Delete Data</button>
            </>
        )
    }

    interface(event){
        const id = event.target.id;

        if(id=='addBtn'){
            this.insertData();
        }
        else if(id=='updateBtn'){
            this.updateData();
        }
        else if(id=='deleteBtn'){
            this.deleteData();
        }
        else if(id=='selectBtn'){
            this.selectData();
        }
    }

    getAllInputs(){
        return{
            block: this.state.block,
            percent: this.state.percent,
            worker: this.state.worker
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Workers/'+data.worker),{
            Block: data.block,
            Percentage: data.percent,
            Worker: data.worker
        })
        .then(()=>{alert('Data was added successfully!')})
        .catch((error)=>{alert("There was an error, details: "+error)})
        ;
    }

    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Workers/'+data.worker),{
            Block: data.block,
            Percentage: data.percent,
            Worker: data.worker
        })
        .then(()=>{alert('Data was updated successfully!')})
        .catch((error)=>{alert("There was an error, details: "+error)})
        ;
    }

    deleteData(){
        const db = this.state.db;
        const workerNo = this.getAllInputs().worker;

        remove(ref(db, 'Workers/'+workerNo))
        .then(()=>{alert('Data was deleted successfully!')})
        .catch((error)=>{alert("There was an error, details: "+error)})
        ;
    };
}