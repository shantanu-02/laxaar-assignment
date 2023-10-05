import { Space, Table, Radio, Input, Checkbox,  Tooltip } from 'antd';
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineMail } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { BiPrinter } from 'react-icons/bi';
import "./invoice.scss"
import { SearchOutlined } from '@ant-design/icons';


const { Column, ColumnGroup } = Table;
const data = [
  {
    name:"Rida Talbi",
    date:"04/10/2021;02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Processing",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Cancel",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },{
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Processing",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Cancel",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },{
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Processing",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Cancel",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },{
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Processing",
    selected: true,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Cancel",
    selected: false,
  },
  {
    name:"Rida Talbi",
    date:"04/10/2021; 02.10 PM",
    number:"ABC000006",
    contact:"0661425689",
    status:"Completed",
    selected: false,
  },
];
const Invoice = () => (
  <div className='invoice'>
  <p className='header'>Customer</p>
  <div className='table'>
  <div className='search'>
      <Input
          className="searchbar"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<SearchOutlined />}
        />
  </div>
  <Table dataSource={data} pagination={{pageSize: 6 }} className='custom-table'>
  <Column
        dataIndex="selected"
        key="selected"
        render={(text, record) => (
          <label className="custom-checkbox">
            <Checkbox
             className='checkbox'
              checked={text}
            />
          </label>
        )}
    />
    <Column title="CUSTOMER NAME" dataIndex="name" key="name" />
    <Column title="DATE" dataIndex="date" key="date" />
    <Column title="JOB NUMBER" dataIndex="number" key="number" />
    <Column title="MOBILE NUMBER" dataIndex="contact" key="contact"
    />
    <Column
      title="STATUS"
      dataIndex="status"
      key="status"
      render={(text, record) => {
        let color = '';

        switch (record.status) {
          case 'Completed':
            color = '#3BB900';
            break;
          case 'Processing':
            color = '#FFA319';
            break;
          case 'Cancel':
            color = '#FF1943';
            break;
          default:
            color = 'black';
        }

        return <span style={{ color }}>{text}</span>;
      }}
    />
    <Column
      title="ACTION"
      key="action"
      render={(_, record) => (
        <Space size="middle">
           <Tooltip title="Edit">
                <BsPencil style={{ color: '#F87060', cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="View">
                <AiOutlineEye style={{ color: '#F87060', cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="Delete">
                <MdDeleteOutline style={{ color: '#F87060', cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="Send Email">
                <AiOutlineMail style={{ color: '#F87060', cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="Print">
                <BiPrinter style={{ color: '#F87060', cursor: 'pointer' }} />
              </Tooltip>
        </Space>
      )}
    />
  </Table>
 </div>
</div>
);
export default Invoice;