import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardList = () => (
    <div className="taught-by-leaders__card">
    <Card>
        <Image src='/static/img/cardlist/1.jpg' />
        <Card.Content>
            <Card.Header>
                Matthew
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
        </Card.Content>
    </Card>
    </div>
)

export default CardList;