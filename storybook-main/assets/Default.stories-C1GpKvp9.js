import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i,b as a,a as r}from"./RadioButton-BqcRY11u.js";import"./index-CXcpQZ5J.js";import{L as n}from"./Label-Ccht5eDB.js";import{a as W}from"./index-B-lxVbXh.js";import{F as k}from"./FieldError-Egs4LnTH.js";import{T as p}from"./Text-ilWQSh2o.js";import{C as R}from"./Content-BSOPJRCf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./ColumnLayout-Cd0SXGvS.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DBRfdhfo.js";import"./utils-Df1au6pS.js";import"./FieldError-Cz4aM9kS.js";import"./Text-WoclspSc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-BxoNbjqJ.js";import"./useLabel-DrVJGper.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./useFormReset-McAVcQ-S.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./useFormValidation-CX89bhxE.js";import"./FocusScope-DN1fuaqe.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./VisuallyHidden-D7VTLdOh.js";import"./useControlledState-CHe-wEx1.js";import"./IconWarning-B9HL9CFH.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";const De={title:"Form Controls/RadioGroup",component:i,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},t={},d={args:{isDisabled:!0}},s={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},u={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:o=>e.jsxs(i,{...o,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(p,{children:"Book domain"}),e.jsx(R,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(p,{children:"Add virtual host"}),e.jsx(R,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(p,{children:"Add subdomain"}),e.jsx(R,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},c={render:o=>e.jsxs(i,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"}),e.jsx(k,{children:"Select a role to continue"})]})};var h,b,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const ge=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError"];export{t as Default,m as RadioButtonDisabled,u as RadioButtons,l as RadioButtonsWithContent,s as RadioDisabled,d as RadioGroupDisabled,c as WithFieldError,ge as __namedExportsOrder,De as default};
