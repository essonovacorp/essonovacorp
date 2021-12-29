import React, {useState} from 'react';
import { rentData} from "../../DummyData"
import SearchIcon from '@mui/icons-material/Search';
import iconPdf from '../../assets/images/pdf.svg';
import { Table, Pagination } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import imgEdit from '../../assets/images/edit.svg';
import imgDelete from '../../assets/images/delete.svg';
import imgKey from '../../assets/images/fxemoji_key.svg';
import viewIcon from '../../assets/images/view.svg';

const { Column, HeaderCell, Cell } = Table;

const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
      alert(`id:${rowData[dataKey]}`);
    }
    return (
      <Cell {...props} className="link-group">
          <button className='bg-transprent' >
            <img src={viewIcon} alt=""  />
            </button>
            <button className='bg-transprent' >
            <img src={imgEdit} alt=""  />
            </button>
            <button className='bg-transprent' >
            <img src={imgDelete} alt=""  />
            </button>
            <button onClick={handleAction} className='bg-transprent' >
            <img src={iconPdf} alt=""  />
            </button>
      </Cell>
    );
  };

export default function RentTable() {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
  
    const data = rentData.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });
  
    
    const getData = () => {
      if (sortColumn && sortType) {
        return data.sort((a, b) => {
          let x = a[sortColumn];
          let y = b[sortColumn];
          if (typeof x === 'string') {
            x = x.charCodeAt();
          }
          if (typeof y === 'string') {
            y = y.charCodeAt();
          }
          if (sortType === 'asc') {
            return x - y;
          } else {
            return y - x;
          }
        });
      }
      return data;
    };
  
    const handleSortColumn = (sortColumn, sortType) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSortColumn(sortColumn);
        setSortType(sortType);
      }, 500);
    };
    const styles = {
      width: 300,
      marginBottom: 10
    };
    const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
      <InputGroup {...props} inside style={styles}>
        <Input placeholder={placeholder} />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    );
    return (
        <>
        <div className="reactTable my-4">
        <CustomInputGroupWidthButton size="md" placeholder="Search" />
        <hr className='mb-0' />
          <Table 
                wordWrap
      data={getData()}
      loading={loading}  
      height={400}
      headerHeight={80}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      onRowClick={data => {
        console.log(data);
      }}>
        {/* <Column width={80} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column> */}

        <Column width={110} fixed sortable>
          <HeaderCell>Date</HeaderCell>
          <Cell dataKey="date" />
        </Column>

        <Column width={150} fixed sortable>
          <HeaderCell>Closing Date</HeaderCell>
          <Cell dataKey="closingDate" />
        </Column>

        <Column width={100} sortable>
          <HeaderCell>Agent</HeaderCell>
          <Cell dataKey="agent" />
        </Column>

        <Column width={110} sortable>
          <HeaderCell>MLS</HeaderCell>
          <Cell dataKey={"MLS"}/>
        </Column>
        <Column width={100} flexGrow={1} sortable>
          <HeaderCell>Sale Price</HeaderCell>
          <Cell dataKey="salePrice" />
        </Column>
        <Column width={150} flexGrow={1} sortable>
            <HeaderCell>Net Commission <br/>Value</HeaderCell>
            <Cell dataKey='netCommissionValue'/>
        </Column>
        <Column width={100} flexGrow={1} sortable>
            <HeaderCell>Other Agent <br/>Comm. Value</HeaderCell>
            <Cell dataKey='otherAgentCommValue'/>
        </Column>
       
       
        <Column width={200} flexGrow={1}>
          <HeaderCell>Action</HeaderCell>
          <ActionCell dataKey="id" />

        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={rentData.length}
          limitOptions={[5,10,15, 20]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
      </div>
        </>
    )
}
