import { ProgressBarStyles } from './styles'

interface ProgressBarParams {
  type: string
  value: number
}

export function ProgressBar({ type, value }: ProgressBarParams) {
  const percent = (value / 230) * 100
  return (
    <ProgressBarStyles>
      {/* 
        <progress className={type} value={value} max="230" />  
        //styles not work on chrome 
      */}

      <div className={`manually ${type}`}>
        <div className="progress-value" style={{ width: `${percent}%` }}></div>
      </div>
    </ProgressBarStyles>
  )
}
