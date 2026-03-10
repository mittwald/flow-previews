import{j as e}from"./iframe-Bge_iwzq.js";import{R as i,a as o}from"./Radio-3tyucN9e.js";import{R as r}from"./RadioButton-C4wZvYg1.js";import{L as n}from"./Label-DsCIDP_n.js";import{F as h}from"./FieldError-D2SilRMV.js";import{T as t}from"./Text-Bo3CKbUr.js";import{C as R}from"./Content-CuNOzgqd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./ColumnLayout-DR49IgRS.js";import"./useFieldComponent-DrAtnMqi.js";import"./utils-rhPAe061.js";import"./useMakeFocusable-D6KSzyjC.js";import"./RadioGroup-UCIo66iv.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./SelectionIndicator-HpycCnAD.js";import"./useFormValidation-SyV8SqLU.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useControlledState-CyAGSHwZ.js";import"./FocusScope-DsvOCLtc.js";import"./context-gG1Mi2B7.js";import"./useFormReset-CAOi_S_S.js";import"./usePress-BXEJU3rI.js";import"./useFocusable-BPbhPIus.js";import"./VisuallyHidden-BL5eqrat.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,te={title:"Form Controls/RadioGroup",component:i,args:{onChange:x("onChange"),isDisabled:!1,isReadOnly:!1,isRequired:!1},parameters:{controls:{exclude:["onChange"]}},render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},d={},s={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},u={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:a=>e.jsxs(i,{...a,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(t,{children:"Book domain"}),e.jsx(R,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(t,{children:"Add virtual host"}),e.jsx(R,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(t,{children:"Add subdomain"}),e.jsx(R,{children:e.jsx(t,{children:"Create a subdomain from an existing domain to use for your project."})})]})]})},c={render:a=>e.jsxs(i,{...a,isInvalid:!0,isRequired:!0,children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"}),e.jsx(h,{children:"Select a role to continue"})]})},p={render:a=>e.jsxs(i,{m:[1,1],l:[1,1,1],...a,defaultValue:"1",children:[e.jsx(n,{children:"Options"}),e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"}),e.jsx(o,{value:"4",children:"Option 4"}),e.jsx(o,{value:"5",children:"Option 5"}),e.jsx(o,{value:"6",children:"Option 6"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="domain" aria-label="Domain">
      <RadioButton value="domain">
        <Text>Book domain</Text>
        <Content>
          Do you have a desired domain? No problem, we'll help you find the
          right domain for you.
        </Content>
      </RadioButton>
      <RadioButton value="virtualHost">
        <Text>Add virtual host</Text>
        <Content>
          The domain remains with your previous provider, but you can use it for
          your website in our mStudio.
        </Content>
      </RadioButton>
      <RadioButton value="subdomain">
        <Text>Add subdomain</Text>
        <Content>
          <Text>
            Create a subdomain from an existing domain to use for your project.
          </Text>
        </Content>
      </RadioButton>
    </RadioGroup>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup m={[1, 1]} l={[1, 1, 1]} {...props} defaultValue="1">
      <Label>Options</Label>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
      <Radio value="5">Option 5</Radio>
      <Radio value="6">Option 6</Radio>
    </RadioGroup>
}`,...p.parameters?.docs?.source}}};const de=["Default","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","ColumnLayout"];export{p as ColumnLayout,d as Default,l as RadioButtonDisabled,u as RadioButtons,m as RadioButtonsWithContent,s as RadioDisabled,c as WithFieldError,de as __namedExportsOrder,te as default};
