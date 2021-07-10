import { PageIndex } from './PageIndex'
import { SelectItensPerPage } from './SelectItensPerPage'

import { ControllerPagesStyles } from './styles'

export function ControllerPages() {
  return (
    <ControllerPagesStyles>
      <div className="display">
        <div className="pagination">
          <div className="value">
            <SelectItensPerPage />
          </div>
          <PageIndex limit={10} offsetActually={550} />
        </div>
      </div>
    </ControllerPagesStyles>
  )
}
