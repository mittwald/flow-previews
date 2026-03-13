import{j as e}from"./iframe-BFddea_x.js";import{R as i,a as o}from"./Radio--yJXiEga.js";import{R as r}from"./RadioButton-C0UWtQsl.js";import{L as n}from"./Label-Cyz25dCh.js";import{F as h}from"./FieldError-BfmusLP_.js";import{T as t}from"./Text-B70YymId.js";import{C as R}from"./Content-CWzMlKrq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./ColumnLayout-D3SlZPhk.js";import"./useFieldComponent-DrOhnKye.js";import"./utils-D-aZUMcZ.js";import"./useMakeFocusable-8SIFOJjD.js";import"./RadioGroup-CiDEEYNL.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./useFormValidation-CYvJLeFF.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useControlledState-lfI_swTV.js";import"./FocusScope-QY6lrLAj.js";import"./context-CaZH5px0.js";import"./useFormReset-C1U9nA2s.js";import"./usePress-DZQSLH7U.js";import"./useFocusable-D-17EkqH.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Form Controls/RadioGroup",component:i,args:{onChange:x("onChange"),isDisabled:!1,isReadOnly:!1,isRequired:!1},parameters:{controls:{exclude:["onChange"]}},render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},d={},s={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},u={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:a=>e.jsxs(i,{...a,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(t,{children:"Book domain"}),e.jsx(R,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(t,{children:"Add virtual host"}),e.jsx(R,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(t,{children:"Add subdomain"}),e.jsx(R,{children:e.jsx(t,{children:"Create a subdomain from an existing domain to use for your project."})})]})]})},c={render:a=>e.jsxs(i,{...a,isInvalid:!0,isRequired:!0,children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"}),e.jsx(h,{children:"Select a role to continue"})]})},p={render:a=>e.jsxs(i,{m:[1,1],l:[1,1,1],...a,defaultValue:"1",children:[e.jsx(n,{children:"Options"}),e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"}),e.jsx(o,{value:"4",children:"Option 4"}),e.jsx(o,{value:"5",children:"Option 5"}),e.jsx(o,{value:"6",children:"Option 6"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const se=["Default","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","ColumnLayout"];export{p as ColumnLayout,d as Default,l as RadioButtonDisabled,u as RadioButtons,m as RadioButtonsWithContent,s as RadioDisabled,c as WithFieldError,se as __namedExportsOrder,de as default};
