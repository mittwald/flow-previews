import{j as e}from"./iframe-DT0a5lsj.js";import{R as n,b as a,a as r}from"./RadioButton-B0PSLj8i.js";import{L as i}from"./Label-Dszv3nJ4.js";import{F as J}from"./FieldError-xtdcz2l6.js";import{T as v}from"./Text-CWVnGydc.js";import{C as x}from"./Content-CuZQKYJh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./ColumnLayout-CpW9eZKX.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BUn0Y4RQ.js";import"./utils-BDe-fZfW.js";import"./FieldError-Ccza_qSZ.js";import"./Text-C8QSq9Z3.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-BqKRbvb9.js";import"./useFocus-BPGD2VLY.js";import"./useLabel-BMvlVo7d.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./useFormReset-cUnmQGQz.js";import"./usePress-wu8eZQGI.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./FocusScope-BOmeY0Fa.js";import"./context-DtNWionw.js";import"./VisuallyHidden-DDMzvk-a.js";import"./useControlledState-C-X9sbbL.js";import"./IconWarning-CP_9phWh.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,Se={title:"Form Controls/RadioGroup",component:n,args:{onChange:P("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(n,{...o,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},t={},d={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},u={render:o=>e.jsxs(n,{...o,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"})]})},l={render:o=>e.jsxs(n,{...o,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},m={args:{isReadOnly:!0},render:o=>e.jsxs(n,{...o,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},c={render:o=>e.jsxs(n,{...o,defaultValue:"admin",children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},p={render:o=>e.jsxs(n,{...o,defaultValue:"domain","aria-label":"Domain",children:[e.jsxs(r,{value:"domain",children:[e.jsx(v,{children:"Book domain"}),e.jsx(x,{children:"Do you have a desired domain? No problem, we'll help you find the right domain for you."})]}),e.jsxs(r,{value:"virtualHost",children:[e.jsx(v,{children:"Add virtual host"}),e.jsx(x,{children:"The domain remains with your previous provider, but you can use it for your website in our mStudio."})]}),e.jsxs(r,{value:"subdomain",children:[e.jsx(v,{children:"Add subdomain"}),e.jsx(x,{children:"Create a subdomain from an existing domain to use for your project."})]})]})},R={render:o=>e.jsxs(n,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(a,{value:"admin",children:"Admin"}),e.jsx(a,{value:"member",children:"Member"}),e.jsx(a,{value:"accountant",children:"Accountant"}),e.jsx(J,{children:"Select a role to continue"})]})},h={render:o=>e.jsxs(n,{m:[1,1],l:[1,1,1],...o,defaultValue:"1",children:[e.jsx(i,{children:"Options"}),e.jsx(a,{value:"1",children:"Option 1"}),e.jsx(a,{value:"2",children:"Option 2"}),e.jsx(a,{value:"3",children:"Option 3"}),e.jsx(a,{value:"4",children:"Option 4"}),e.jsx(a,{value:"5",children:"Option 5"}),e.jsx(a,{value:"6",children:"Option 6"})]})};var b,j,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var f,O,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var g,y,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,G,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(L=(G=u.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var S,V,M;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(M=(V=l.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var T,E,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  },
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,w,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var I,N,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(N=p.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var q,H,K;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(K=(H=R.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,Y,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <RadioGroup m={[1, 1]} l={[1, 1, 1]} {...props} defaultValue="1">
      <Label>Options</Label>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
      <Radio value="5">Option 5</Radio>
      <Radio value="6">Option 6</Radio>
    </RadioGroup>
}`,...(z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const Ve=["Default","RadioGroupDisabled","ReadOnly","RadioDisabled","RadioButtons","RadioButtonsReadOnly","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","ColumnLayout"];export{h as ColumnLayout,t as Default,c as RadioButtonDisabled,l as RadioButtons,m as RadioButtonsReadOnly,p as RadioButtonsWithContent,u as RadioDisabled,d as RadioGroupDisabled,s as ReadOnly,R as WithFieldError,Ve as __namedExportsOrder,Se as default};
