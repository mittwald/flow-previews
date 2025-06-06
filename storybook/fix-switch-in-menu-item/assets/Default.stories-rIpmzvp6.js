import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i,b as o,a as r}from"./RadioButton-DojcbMGM.js";import"./index-BdpSHsi2.js";import{L as n}from"./Label-CowEq1IA.js";import{a as H}from"./index-B-lxVbXh.js";import{F as I}from"./FieldError-lrT2U8YF.js";import{T as R}from"./Text-DeaNheZ5.js";import{C as h}from"./Content-tLZ2UgeE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL6oyv_5.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-BwWt-Nck.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./ColumnLayout-BayVsf4Q.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CCpKxIOR.js";import"./utils-q_Aud5Js.js";import"./FieldError-D2eBwE7I.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./useFormReset-B9LhY6oC.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FocusScope-D_x47-q0.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./useControlledState-rjpdN6qd.js";import"./IconWarning-C8AvogJ0.js";import"./index-BAMY2Nnw.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";const Le={title:"Form Controls/RadioGroup",component:i,args:{onChange:H("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},t={},d={args:{isDisabled:!0}},s={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},u={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:a=>e.jsxs(i,{...a,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:a=>e.jsxs(i,{...a,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(R,{children:"Book domain"}),e.jsx(h,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(R,{children:"Add virtual host"}),e.jsx(h,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(R,{children:"Add subdomain"}),e.jsx(h,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},c={render:a=>e.jsxs(i,{...a,isInvalid:!0,isRequired:!0,children:[e.jsx(n,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"}),e.jsx(I,{children:"Select a role to continue"})]})},p={render:a=>e.jsxs(i,{m:[1,1],l:[1,1,1],...a,defaultValue:"1",children:[e.jsx(n,{children:"Options"}),e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"}),e.jsx(o,{value:"4",children:"Option 4"}),e.jsx(o,{value:"5",children:"Option 5"}),e.jsx(o,{value:"6",children:"Option 6"})]})};var x,v,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,f,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var A,g,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var D,y,G;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(G=(y=u.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var O,L,S;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var V,T,M;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var E,F,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,k,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <RadioGroup m={[1, 1]} l={[1, 1, 1]} {...props} defaultValue="1">
      <Label>Options</Label>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
      <Radio value="5">Option 5</Radio>
      <Radio value="6">Option 6</Radio>
    </RadioGroup>
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Se=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","ColumnLayout"];export{p as ColumnLayout,t as Default,l as RadioButtonDisabled,u as RadioButtons,m as RadioButtonsWithContent,s as RadioDisabled,d as RadioGroupDisabled,c as WithFieldError,Se as __namedExportsOrder,Le as default};
