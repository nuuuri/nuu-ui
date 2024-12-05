'use client';

import { useState } from 'react';

import Radio from '.';

export default function RadioPage() {
  const [selected, setSelected] = useState<string | number>(3);

  return (
    <div>
      <h3>default</h3>
      <Radio>Radio</Radio>
      <Radio checked disabled>
        Disabled
      </Radio>

      <h3>radio group</h3>
      <Radio.Group value={selected} onChange={(value) => setSelected(value)}>
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>Option D</Radio>
      </Radio.Group>

      <h3>with options</h3>
      <Radio.Group
        options={[
          { label: 'Option A' },
          { label: 'Option B' },
          { label: 'Option C' },
          { label: 'Option D' },
        ]}
      />

      <h3>with legend</h3>
      <Radio.Group legend="Fruits">
        <Radio value={1}>Apple</Radio>
        <Radio value={2}>Banana</Radio>
        <Radio value={3}>Orange</Radio>
      </Radio.Group>

      <h3>button style</h3>
      <Radio.Group optionStyle="button">
        <Radio value={1}>Apple</Radio>
        <Radio value={2}>Banana</Radio>
        <Radio value={3}>Orange</Radio>
      </Radio.Group>
    </div>
  );
}
