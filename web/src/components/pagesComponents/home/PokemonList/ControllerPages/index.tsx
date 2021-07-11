import { PageIndex } from './PageIndex'
import { SelectItensPerPage } from './SelectItensPerPage'

import { ControllerPagesStyles } from './styles'

export function ControllerPages() {
  return (
    <ControllerPagesStyles>
      <div className="pagination">
        <SelectItensPerPage />
        <PageIndex />
      </div>
    </ControllerPagesStyles>
  )
}
