import './story.css';
import { action, storiesOf, module } from '@storybook/react';
import React from 'react';
import { FormikConsumer } from 'formik';
import AsyncValidation from '../examples/AsyncValidation';
import Arrays from '../examples/Arrays';
import Basic from '../examples/Basic.js';
import Basic2 from '../examples/Basic2.js';
import CustomInputs from '../examples/CustomInputs';
import ErrorMessage from '../examples/ErrorMessage';
import FastField from '../examples/FastField';
import MultistepWizard from '../examples/MultistepWizard';
import SchemaValidation from '../examples/SchemaValidation';
import SyncValidation from '../examples/SyncValidation';
import FieldLevelValidation from '../examples/FieldLevelValidation';
import CombinedValidations from '../examples/CombinedValidations';
import DebouncedAutoSave from '../examples/DebouncedAutoSave';

const AsyncValidationCode = require('!raw-loader!../examples/AsyncValidation')
  .default;
const ArraysCode = require('!raw-loader!../examples/Arrays').default;
const BasicCode = require('!raw-loader!../examples/Basic.js').default;
const BasicCode2 = require('!raw-loader!../examples/Basic2.js').default;
const DebouncedAutoSaveCode = require('!raw-loader!../examples/DebouncedAutoSave.js')
  .default;
const CustomInputsCode = require('!raw-loader!../examples/CustomInputs')
  .default;
const ErrorMessageCode = require('!raw-loader!../examples/ErrorMessage')
  .default;
const FastFieldCode = require('!raw-loader!../examples/FastField').default;
const MultistepWizardCode = require('!raw-loader!../examples/MultistepWizard')
  .default;
const SchemaValidationCode = require('!raw-loader!../examples/SchemaValidation')
  .default;
const SyncValidationCode = require('!raw-loader!../examples/SyncValidation')
  .default;
const FieldLevelValidationCode = require('!raw-loader!../examples/FieldLevelValidation')
  .default;
const CombinedValidationsCode = require('!raw-loader!../examples/CombinedValidations')
  .default;

function cleanExample(str) {
  return str
    .replace(`import { Debug } from './Debug';`, '')
    .replace(`<Debug />`, '');
}

const Code = props => (
  <div
    style={{
      margin: '0 12px',
      borderRadius: 4,
      background: '#f6f8fa',
      boxShadow: '0 0 1px  #eee inset',
    }}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: '.5rem',
        background: '#555',
        color: '#fff',
        letterSpacing: '1px',
      }}
    >
      Example Code
    </div>
    <pre
      style={{
        overflowX: 'scroll',
        fontSize: 11,
        padding: '.5rem',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  </div>
);

storiesOf('Example', module)
  .add('Basic-Formik', () => {
    return (
      <div className="formik-example">
        <main>
          <Basic />
        </main>
        <Code>{cleanExample(BasicCode)}</Code>
      </div>
    );
  })
  .add('Basic-Redux', () => {
    return (
      <div className="formik-example">
        <main>
          <Basic2 />
        </main>
        <Code>{cleanExample(BasicCode2)}</Code>
      </div>
    );
  });
