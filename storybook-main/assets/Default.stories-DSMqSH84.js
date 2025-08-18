import{j as e}from"./iframe-giJ3PN41.js";import{R as n,b as o,a as r}from"./RadioButton-BthENqcV.js";import{L as i}from"./Label-DSQuszpE.js";import{F as N}from"./FieldError-BA6Xibs7.js";import{T as R}from"./Text-unBq3m4E.js";import{C as h}from"./Content-GhLztKY1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./ColumnLayout-BhKsZG2Y.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-CrFqpTLy.js";import"./utils-CXDqZ2sl.js";import"./FieldError-nVLUoiBd.js";import"./Text-CPIeRDsX.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-DPXxe_7V.js";import"./useFocus-CuIPz-Kl.js";import"./useLabel-DTs_WTOS.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./useFormReset-ChCBJkpa.js";import"./usePress-D1wL7cKS.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./FocusScope-D6b4m46d.js";import"./context-B5VaUXEx.js";import"./VisuallyHidden-DL0JmpvH.js";import"./useControlledState-BdipClPW.js";import"./IconWarning-Dj_wwKGm.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./browser-DkEs9M37.js";import"./EmulatedBoldText-D-WMJ6En.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Form Controls/RadioGroup",component:n,args:{onChange:k("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.jsxs(n,{...a,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},t={},d={args:{isDisabled:!0}},s={render:a=>e.jsxs(n,{...a,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"})]})},u={render:a=>e.jsxs(n,{...a,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},l={render:a=>e.jsxs(n,{...a,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={render:a=>e.jsxs(n,{...a,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(R,{children:"Book domain"}),e.jsx(h,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(R,{children:"Add virtual host"}),e.jsx(h,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(R,{children:"Add subdomain"}),e.jsx(h,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},c={render:a=>e.jsxs(n,{...a,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(o,{value:"admin",children:"Admin"}),e.jsx(o,{value:"member",children:"Member"}),e.jsx(o,{value:"accountant",children:"Accountant"}),e.jsx(N,{children:"Select a role to continue"})]})},p={render:a=>e.jsxs(n,{m:[1,1],l:[1,1,1],...a,defaultValue:"1",children:[e.jsx(i,{children:"Options"}),e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"}),e.jsx(o,{value:"4",children:"Option 4"}),e.jsx(o,{value:"5",children:"Option 5"}),e.jsx(o,{value:"6",children:"Option 6"})]})};var x,v,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,f,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var A,O,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,g,y;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(y=(g=u.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var G,L,S;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var T,V,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var E,_,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var w,W,I;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <RadioGroup m={[1, 1]} l={[1, 1, 1]} {...props} defaultValue="1">
      <Label>Options</Label>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
      <Radio value="5">Option 5</Radio>
      <Radio value="6">Option 6</Radio>
    </RadioGroup>
}`,...(I=(W=p.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const Oe=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","ColumnLayout"];export{p as ColumnLayout,t as Default,l as RadioButtonDisabled,u as RadioButtons,m as RadioButtonsWithContent,s as RadioDisabled,d as RadioGroupDisabled,c as WithFieldError,Oe as __namedExportsOrder,Ae as default};
