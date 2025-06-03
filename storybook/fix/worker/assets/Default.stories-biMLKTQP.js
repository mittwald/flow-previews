import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i,b as r,a}from"./RadioButton-DGOhwl08.js";import"./index-BdpSHsi2.js";import{L as t}from"./Label-CJuqX6Wd.js";import{a as W}from"./index-B-lxVbXh.js";import{F as k}from"./FieldError-HNNhx60-.js";import{T as p}from"./Text-Ri1j532-.js";import{C as R}from"./Content-C0_f4CRn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6dNDEdK.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-BpIB_rdV.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./ColumnLayout-BMcszJGu.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-BLpA3R1L.js";import"./utils-q_Aud5Js.js";import"./FieldError-D2eBwE7I.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./useFormReset-B9LhY6oC.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FocusScope-D_x47-q0.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./VisuallyHidden-BtcTDQEe.js";import"./useControlledState-rjpdN6qd.js";import"./IconWarning-DGmFPVFP.js";import"./index-BAMY2Nnw.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";const Ce={title:"Form Controls/RadioGroup",component:i,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(t,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},n={},d={args:{isDisabled:!0}},s={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(t,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},u={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(t,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},m={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(t,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},l={render:o=>e.jsxs(i,{...o,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(a,{value:"domain",children:[e.jsx(p,{children:"Book domain"}),e.jsx(R,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(a,{value:"virtualHost",children:[e.jsx(p,{children:"Add virtual host"}),e.jsx(R,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(a,{value:"subdomain",children:[e.jsx(p,{children:"Add subdomain"}),e.jsx(R,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},c={render:o=>e.jsxs(i,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(t,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(k,{children:"Select a role to continue"})]})};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,A,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var g,C,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(y=(C=u.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var G,S,L;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(L=(S=m.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var T,M,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
          Create a subdomain from an existing domain to use for your project.
        </Content>
      </RadioButton>
    </RadioGroup>
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var E,F,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const ye=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError"];export{n as Default,m as RadioButtonDisabled,u as RadioButtons,l as RadioButtonsWithContent,s as RadioDisabled,d as RadioGroupDisabled,c as WithFieldError,ye as __namedExportsOrder,Ce as default};
