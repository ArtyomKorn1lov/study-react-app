import React from 'react'; 
import { render } from '@testing-library/react';
import AppComponent from '../../pages/app-component/App';

describe('AppComponent', () => { 
    it('renders correctly', () => { 
      const { getByText } = render(<AppComponent />); 
      expect(getByText('Передаваемый пропсом текст')).toBeInTheDocument(); 
    }); 
  });