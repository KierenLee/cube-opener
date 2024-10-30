import React, { useState } from 'react';
import { Form, Button } from '@douyinfe/semi-ui';
import CubeGrid from './CubeGrid';
import FaceSelector from './FaceSelector';

function CubeDesigner() {
  const [faces, setFaces] = useState(Array(6).fill('empty'));
  const [formRef] = useState({ current: null });

  const handleSubmit = () => {
    const values = formRef.current.getValues();
    console.log('Form values:', values);
  };

  const handleFaceSelect = (index, type) => {
    const newFaces = [...faces];
    newFaces[index] = type;
    setFaces(newFaces);
  };

  return (
    <div className="flex gap-4">
      <div className="w-2/3">
        <CubeGrid faces={faces} onFaceSelect={handleFaceSelect} />
      </div>
      <div className="w-1/3">
        <Form getFormApi={formApi => formRef.current = formApi} onSubmit={handleSubmit}>
          <FaceSelector faces={faces} onFaceSelect={handleFaceSelect} />
          <Button theme="solid" type="primary" htmlType="submit" className="mt-4">
            生成预览
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CubeDesigner;
