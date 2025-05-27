import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i,b as a,a as r}from"./RadioButton-B8UdLv2t.js";import"./index-CgfFrydU.js";import{L as n}from"./Label-7YZm-yDa.js";import{a as W}from"./index-B-lxVbXh.js";import{F as k}from"./FieldError-7p7MOcPd.js";import{T as p}from"./Text-D7P1-Ebs.js";import{C as R}from"./Content-DF5MNgWt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DBqjDBJq.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./ColumnLayout-OuhGaDAO.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-0mIgX1TZ.js";import"./utils-DvYDvJ-W.js";import"./FieldError-DQg1rr6h.js";import"./Text-1CJ30n_Q.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-eodUc7lY.js";import"./useLabel-DP9zv8XI.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./useFormReset-BiMHJINb.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./useFormValidation-9a9nu2yD.js";import"./FocusScope-BCiwkv3e.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./VisuallyHidden-B4AzoGqn.js";import"./useControlledState-DjePt-lg.js";import"./IconWarning-CTsWIAx0.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";const De={title:"Form Controls/RadioGroup",component:i,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},t={},d={args:{isDisabled:!0}},s={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},u={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:o=>e.jsxs(i,{...o,defaultValue:"admin",children:[e.jsx(n,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:o=>e.jsxs(i,{...o,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(p,{children:"Book domain"}),e.jsx(R,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(p,{children:"Add virtual host"}),e.jsx(R,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(p,{children:"Add subdomain"}),e.jsx(R,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},c={render:o=>e.jsxs(i,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(n,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"}),e.jsx(k,{children:"Select a role to continue"})]})};var h,b,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
