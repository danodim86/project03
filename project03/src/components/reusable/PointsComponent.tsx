import React from 'react'

interface PointsComponentProps{
  number: string;
  color: string;
}
const PointsComponent: React.FC<PointsComponentProps> = ({number, color}) => {
  return (
    <div className='pointComponentOuter'>
      <div className="silverPart"></div>
      <div className="colouredPart" style={{ backgroundColor: color }}></div>
      <div className="pointComponentInner">
        <div className="pointComponentContent"  style={{ border: `7px solid ${color}`, color: `${color}` }} >
          {number}
        </div>
      </div>
    </div>
  )
}

export default PointsComponent;
