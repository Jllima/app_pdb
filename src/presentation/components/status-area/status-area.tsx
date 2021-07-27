import React from 'react'
import {StatusArea, Status} from './styles'

type Props = {
  statusId: number
  statusName: string
}

const StatusOs: React.FC<Props> = ({statusId, statusName}: Props) => {
  return (
    <StatusArea statusId={statusId}>
      <Status>{statusName}</Status>
    </StatusArea>
  )
}

export default StatusOs
