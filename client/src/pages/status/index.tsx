import {Link, useParams} from 'react-router-dom'
import {Button, Result, Row} from 'antd'
import {Paths} from '../../paths'

const Statuses: Record<string, string> = {
  created: 'Employee successfully created',
  updated: 'Employee successfully updated',
  deleted: 'Employee successfully deleted'
}

export const Status = () => {
  const {status} = useParams()

  return (
    <Row align={'middle'} justify={'center'} style={{width: '100%'}}>
      <Result
        status={status ? 'success' : 404}
        title={status ? Statuses[status] : 'No data'}
        extra={
          <Button key={'dashboard'}>
            <Link to={Paths.home}>Back</Link>
          </Button>
        }
      />
    </Row>
  )
}
