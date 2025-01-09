import{R as r,a as o,b as t}from"./Radio-z2F21ZLc.js";import{R as e}from"./index-BbMBc-iG.js";import{L as n}from"./Label-D6uleru1.js";import{a as j}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as k}from"./FieldError-Bxt0_Hqg.js";import{T as p}from"./Text-D6naXSDy.js";import{C as R}from"./Content-BbJKCc-f.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./ColumnLayout-v7sjpQxh.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./deepHas-C0IqBpIg.js";import"./react-children-utilities-BBO5HXrA.js";import"./RadioGroup-C57r1f3b.js";import"./utils-D4Vol65q.js";import"./FieldError-0S5lF-We.js";import"./useFocusRing-DA2rHHrb.js";import"./Text-oWh285ma.js";import"./filterDOMProps-BSfnXAP7.js";import"./Form-4lWAVKAg.js";import"./useLabel-C5NcpKQ2.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./useControlledState-CMnoB41k.js";import"./FocusScope-TaiHum7E.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./useFormReset-BIr5_auz.js";import"./useFocusable-BA3lYSOI.js";import"./usePress-DotMbixf.js";import"./VisuallyHidden-CAwLSgYE.js";import"./IconApp-B_zPpa1A.js";import"./IconWarning-CceziLlX.js";import"./v4-CtRu48qb.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Wrap-DQq6jo70.js";const ge={title:"Form Controls/RadioGroup",component:r,args:{onChange:j("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},s={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(t,{value:"domain"},e.createElement(p,null,"Book domain"),e.createElement(R,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(t,{value:"virtualHost"},e.createElement(p,null,"Add virtual host"),e.createElement(R,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(t,{value:"subdomain"},e.createElement(p,null,"Add subdomain"),e.createElement(R,null,"Create a subdomain from an existing domain to use for your project.")))},c={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"),e.createElement(k,null,"Select a role to continue"))};var b,v,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,B,A;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
