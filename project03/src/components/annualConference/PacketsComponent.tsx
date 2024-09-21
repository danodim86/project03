import { Packet } from '@/interfaces/types';
import React from 'react';
import OrangeBtn from '../reusable/OrangeBtn';

interface PacketsComponentProps{
  packets: Packet[];
}

const PacketsComponent: React.FC<PacketsComponentProps> = ({packets}) => {
  return (
    <section className='packetsContainer'>
      <h2>Пакети за поединци и корпорации</h2>
      <div className="packetsList">
        {packets.map((packet, indexPacket) => (
          <div className='packetItem' key={indexPacket}>
            <h3>{packet.type}</h3>
            <h4>{packet.amount}ден</h4>
            <ul>
              {packet.packetIncludes.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <OrangeBtn text='КУПИ КАРТА' href='/'/>
          </div>
        ))}
      </div>
      <OrangeBtn text='Предложи на пријател' href='/'/>
      <div className="dottedPatternPacketsOne"></div>
      <div className="dottedPatternPacketsTwo"></div>
      <div className="dottedPatternPacketsThree"></div>
    </section>
  )
}

export default PacketsComponent;
