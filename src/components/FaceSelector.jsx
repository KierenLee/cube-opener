import React from 'react';
import { RadioGroup } from '@douyinfe/semi-ui';

function FaceSelector({ faces, onFaceSelect }) {
  const faceNames = ['顶面', '正面', '右面', '左面', '底面', '背面'];

  return (
    <div className="space-y-4">
      {faces.map((face, index) => (
        <div key={index} className="flex items-center">
          <span className="w-16">{faceNames[index]}:</span>
          <RadioGroup
            value={face}
            onChange={value => onFaceSelect(index, value)}
            options={[
              { label: '空', value: 'empty' },
              { label: '填充', value: 'filled' },
            ]}
          />
        </div>
      ))}
    </div>
  );
}

export default FaceSelector;
