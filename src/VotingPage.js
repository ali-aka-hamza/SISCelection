import 'antd/dist/antd.css';
import "./App.css";
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import voteImg from "./vote.png";
import panelImg from "./panel.webp";
import React from 'react';
import { useState } from 'react';
import RegisterPanel from './RegisterPanel';
import CasteVote from './CasteVote';
import dummy from './dumy';
//const { Meta } = Card;

function VotingPage(){
  const [panel ,setPanel] = useState(false); 
 const [vote,setVote] = useState(false);
  if(panel)
    {
      return <RegisterPanel/>;
    }
   
    return(
      <>
      {vote?(<CasteVote/>):(
    <div>

    <div className="site-card-wrapper">
    <Row gutter={40}>
      <Col span={12}>
   <Card
    hoverable className='cardStyle'
    style={{width: 280}}
    cover={<img alt="panel" width="500px" height= "200px" src={panelImg} />}
  >
  
    <h1>Create Panel</h1>
    <h4>Create a panel for upcoming elections</h4>
    <center>
   <Button type="primary" shape="round" size='large' onClick={() => setPanel(true)}>
        REGISTER PANEL
      </Button>
      </center>
  </Card>
  </Col>
  <Col span={12}>
   <Card
    hoverable className='cardStyle'
    style={{width: 280}}
    cover={<img alt="panel" width="500px" height= "200px" src={voteImg} />}
  >
  
    <h1>Cast a Vote</h1>
    <h4>Vote to the deserving candidate. Click on the button </h4>
    <center>
   <Button type="primary" shape="round" size='large' onClick={() => setVote(true)}>
        VOTE
      </Button>
      </center>
  </Card>
  </Col>
  {/* <Col span={12}>
  <Card
    hoverable
    style={{ width: 280 }}
    cover={<img alt="vote" width="500px" height= "200px" src={voteImg} />}
  >
     <h1>Cast a Vote</h1>
    <h4>Cast a vote of your choice to the registered panel</h4>
    <center>
    <Button type="primary" shape="round" size='large'  onClick={()=> setVote(true)}>
        VOTE       
      </Button>
      </center>
  </Card>
  </Col> */}

  </Row>
  </div>
 </div>
  )} 
 </>
    );
}
export default VotingPage;