import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Cardlist extends React.Component{
    render(){
        return(
            <div className="taught-by-leaders__card">
                <Card>
                    <Image src={this.props.img} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.name}
                        </Card.Header>
                        <Card.Meta>
        <span className='date'>
            {this.props.date}
        </span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.des}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {this.props.cou}명
                        </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}


Cardlist.defaultProps = {
    img : "",
    name : "",
    date : "",
    cou : 0
}

export default Cardlist;