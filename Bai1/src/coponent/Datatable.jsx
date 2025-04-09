import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import file from "../assets/img/File text 1.png";
import ip from "../assets/img/Download.png";
import ep from "../assets/img/Move up.png";
const Datatable = ()=>{
    const emptyData = [];

    const editButtonTemplate = () => {
        return (
            <button className="p-button p-component p-button-sm p-button-text ">
                <i className="pi pi-pencil"></i>
            </button>
        );
    };
    return(
        <div>
             <div className="flex items-center justify-between bg-white mt-10 mx-5">
          <div className="flex gap-4">
            <img src={file} alt="" className="w-7" />
            <h2 className="text-2xl font-bold">Detailed report</h2>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 border border-pink-500 text-pink-500 px-3 py-1.5 rounded-md hover:bg-pink-50 transition">
              <img src={ip} alt="" />
              Import
            </button>
            <button className="flex items-center gap-1 border border-pink-500 text-pink-500 px-3 py-1.5 rounded-md hover:bg-pink-50 transition">
              <img src={ep} alt="" />
              Export
            </button>
          </div>
        </div>

        <div className="card mx-5 my-5">

        <DataTable value={emptyData}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column header="CUSTOMER NAME" />
                <Column header="COMPANY" />
                <Column header="ORDER VALUE" />
                <Column header="ORDER DATE" />
                <Column header="STATUS" />
                <Column body={editButtonTemplate} style={{ textAlign: 'center', width: '3rem' }} />
            </DataTable>
            </div>
        </div>
    )
}
export default Datatable;