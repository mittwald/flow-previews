import{R as r,a as o,b as t}from"./Radio-BmcbJocM.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as n}from"./Label-BjTAT_L8.js";import{a as j}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as k}from"./FormField.module-DzMLDcfr.js";import{T as p}from"./Text-Kq1Uppf8.js";import{C as R}from"./Content-BaT5-SuQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./ColumnLayout-BAUBZrLX.js";import"./flowComponent-ioG1zo33.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./deepHas-C3achdHB.js";import"./react-children-utilities-CdZndyK3.js";import"./RadioGroup-DL06ub0D.js";import"./utils-Cd8r7pc9.js";import"./FieldError-C27s8X8S.js";import"./Text-Bnjm0IRl.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-CN49erGr.js";import"./useFocusRing-CqFdZJbR.js";import"./useLabel-BA8WH6BO.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DxaEUeh1.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./useFormReset-BmVKDtZT.js";import"./useFocusable-CKybZYMg.js";import"./usePress-Dcn7RY69.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./IconApp-Dl7D1yMd.js";import"./IconWarning-D0l2tnhs.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";const De={title:"Form Controls/RadioGroup",component:r,args:{onChange:j("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},s={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(t,{value:"domain"},e.createElement(p,null,"Book domain"),e.createElement(R,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(t,{value:"virtualHost"},e.createElement(p,null,"Add virtual host"),e.createElement(R,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(t,{value:"subdomain"},e.createElement(p,null,"Add subdomain"),e.createElement(R,null,"Create a subdomain from an existing domain to use for your project.")))},c={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"),e.createElement(k,null,"Select a role to continue"))};var b,v,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,B,A;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var h,D,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(g=(D=u.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var C,y,G;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(G=(y=d.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var x,S,L;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(L=(S=l.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var T,M,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(M=s.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var F,w,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const ge=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError"];export{i as Default,l as RadioButtonDisabled,d as RadioButtons,s as RadioButtonsWithContent,u as RadioDisabled,m as RadioGroupDisabled,c as WithFieldError,ge as __namedExportsOrder,De as default};
