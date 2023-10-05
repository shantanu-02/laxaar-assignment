import React from 'react'
import "./sidebar.scss"
import { RxDashboard } from 'react-icons/rx';
import { TbFileInvoice } from 'react-icons/tb';
import { BsCartDash, BsFillTicketPerforatedFill, BsCheckSquare } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineExclamationCircle, AiOutlineMessage, AiOutlineFilePdf, AiOutlinePieChart } from 'react-icons/ai';
import { CiDiscount1, CiImageOn, CiWallet } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiUsersThreeThin } from 'react-icons/pi';
import { LiaUserSolid } from 'react-icons/lia';
import { LuArrowUpDown, LuSettings } from 'react-icons/lu';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <RxDashboard style={{color:"grey"}}/>
        <p>Dashboard</p>
      </div>
      <div>
        <GoGraph style={{color:"grey"}}/>
        <p>Service Jobs</p>
      </div>
      <div style={{color:"#F87060", backgroundColor:"#fdf0ef"}}>
        <TbFileInvoice style={{color:"#F87060"}}/>
        <p>Invoices</p>
      </div>
      <div>
        <BsCartDash style={{color:"grey"}}/>
        <p>Customers</p>
      </div>
      <div>
        <AiOutlineStar style={{color:"grey"}}/>
        <p>Products</p>
      </div>
      <div>
        <CiDiscount1 style={{color:"grey"}}/>
        <p>Offered Services</p>
      </div>
      <div>
        <BsFillTicketPerforatedFill style={{color:"grey"}}/>
        <p>Parts</p>
      </div>
      <div>
        <AiOutlineExclamationCircle style={{color:"grey"}}/>
        <p>Enquiries</p>
      </div>
      <div>
       <PiUsersThreeThin style={{color:"grey"}}/>
        <p>Users</p>
      </div>
      <div>
        <BsCheckSquare style={{color:"grey"}}/>
        <p>Permissions</p>
      </div>
      <div>
        <LiaUserSolid style={{color:"grey"}}/>
        <p>Roles</p>
      </div>
      <div>
        <AiOutlineMessage style={{color:"grey"}}/>
        <p>Email Templates</p>
      </div>
      <div>
       <AiOutlineFilePdf style={{color:"grey"}}/>
        <p>PDF Templates</p>
      </div>
      <div>
        <MdOutlineTextsms style={{color:"grey"}}/>
        <p>SMS Templates</p>
      </div>
      <div>
        <CiImageOn style={{color:"grey"}}/>
        <p>Theming</p>
      </div>
      <div>
        <CiWallet style={{color:"grey"}}/>
        <p>Paymnet Gateways</p>
      </div>
      <div>
       <LuArrowUpDown style={{color:"grey"}}/>
        <p>Backup</p>
      </div>
      <div>
        <AiOutlinePieChart style={{color:"grey"}}/>
        <p>Configurations</p>
      </div>
      <div>
        <LuSettings style={{color:"grey"}}/>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default Sidebar