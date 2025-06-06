import{R as r,a as o,b as t}from"./Radio-Cr-PCe32.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as n}from"./Label-BFoBZBqy.js";import{a as j}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as k}from"./FieldError-BWRuv_hr.js";import{T as p}from"./Text-DPEzzey4.js";import{C as R}from"./Content-BRrO9N7C.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./ColumnLayout-BdZbx_GF.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./RadioGroup-BTKXbCja.js";import"./utils-CCebJm36.js";import"./FieldError-CjNivrvv.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-CByKVUtS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-B_VAMaUE.js";import"./useLabel-DrlXsFf-.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-Deam_7e8.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./useFormReset-DMREOE0P.js";import"./useFocusable-CjESOWAx.js";import"./usePress-C3EQNDer.js";import"./VisuallyHidden-lWpahT0S.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./v4-CQkTLCs1.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const ge={title:"Form Controls/RadioGroup",component:r,args:{onChange:j("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},s={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(t,{value:"domain"},e.createElement(p,null,"Book domain"),e.createElement(R,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(t,{value:"virtualHost"},e.createElement(p,null,"Add virtual host"),e.createElement(R,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(t,{value:"subdomain"},e.createElement(p,null,"Add subdomain"),e.createElement(R,null,"Create a subdomain from an existing domain to use for your project.")))},c={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"),e.createElement(k,null,"Select a role to continue"))};var b,v,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,B,A;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const Ce=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError"];export{i as Default,l as RadioButtonDisabled,d as RadioButtons,s as RadioButtonsWithContent,u as RadioDisabled,m as RadioGroupDisabled,c as WithFieldError,Ce as __namedExportsOrder,ge as default};
