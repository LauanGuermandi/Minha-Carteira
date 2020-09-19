import React from 'react'

import Switch from 'react-switch'

import { 
  Container,
  ToggleLabel 
} from './styles'

export const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <Switch 
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}
    />
    <ToggleLabel>Dark</ToggleLabel> 
  </Container>
)
