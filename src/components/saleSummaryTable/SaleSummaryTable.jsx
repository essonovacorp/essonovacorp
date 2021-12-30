import React, {useState} from 'react';
import { salesSummary} from "../../DummyData"
import SearchIcon from '@mui/icons-material/Search';
import iconPdf from '../../assets/images/pdf.svg';
import { Input, InputGroup , Table, Pagination,DateRangePicker, Button } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
      alert(`id:${rowData[dataKey]}`);
    }
    return (
      <Cell {...props} className="link-group">
          <button onClick={handleAction} className='bg-transprent' >
            <img src={iconPdf} alt=""  />
            </button>
      </Cell>
    );
  };



export default function SaleSummaryTable() {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
  
    const data = salesSummary.filter((v, i) => {
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
      width: '500px',
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
    const btnGoStyle = {
      width:'100px'
    };
    return (
        <>
        <div className="reactTable my-4">
            <hr />
            <div className="d-md-flex align-items-center text-center">
                <strong>Select Date Range :</strong> <DateRangePicker showOneCalendar className='mx-2 my-2 my-md-0' />     
                <Button appearance="primary" style={btnGoStyle}>Go</Button>

            </div>
            <hr />
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

        <Column width={150} sortable>
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
        <Column width={130} sortable>
          <HeaderCell>Sale Price</HeaderCell>
          <Cell dataKey="salePrice" />
        </Column>
        <Column width={150} sortable>
            <HeaderCell>Agent Comm. Value</HeaderCell>
            <Cell dataKey='otherAgentCommValue'/>
        </Column>
        <Column width={150} sortable>
            <HeaderCell>Rebate to <br/>buyer/seller</HeaderCell>
            <Cell dataKey='rebateBuyerSeller'/>
        </Column>
        <Column width={120} sortable>
            <HeaderCell>Trans. Fee</HeaderCell>
            <Cell dataKey='transactionFee'/>
        </Column>
        <Column width={140} sortable>
            <HeaderCell>Agent Net <br/>Comm.</HeaderCell>
            <Cell dataKey='agentNetCommission'/>
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
          total={salesSummary.length}
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
