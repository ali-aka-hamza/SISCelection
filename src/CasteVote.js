import 'antd/dist/antd.css';
import "./App.css";
import { Checkbox } from 'antd';
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import voteImg from "./vote.png";
import panelImg from "./panel.webp";
import React from 'react';

//const { Meta } = Card;

function CasteVote(){
    return(
     <>
       <div>
        
                    <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={8}>
                  <Card
                   hoverable className='cardStyle'
                    style={{width: 280}}
                    cover={<img alt="panel" width="500px" height= "200px" src={panelImg} />}
                  >
                  
                    <h1>TEAM A</h1>
                    <h4>VOTE FOR TEAM A </h4>
                    <h4>VOTE <Checkbox/></h4>
                  </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                   hoverable className='cardStyle'
                    style={{width: 280}}
                    cover={<img alt="panel" width="500px" height= "200px" src={panelImg} />}
                  >
                  
                  
                  <h1>TEAM B</h1>
                    <h4>VOTE FOR TEAM B</h4>
                    <h4>VOTE <Checkbox/></h4>
                  </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                   hoverable className='cardStyle'
                    style={{width: 280}}
                    cover={<img alt="panel" width="500px" height= "200px" src={panelImg} />}
                  >
                  
                   
                  <h1>TEAM C</h1>
                    <h4>VOTE FOR TEAM C</h4>
                    <h4>VOTE <Checkbox/></h4>
                  </Card>
                  </Col>
                  </Row>
     </div>
     <br/><br/>
     <center>
     <Button type="primary" shape="round" size='large' >
        VOTE
      </Button>
      </center>
     </div>
     </>


    );
}
export default CasteVote;