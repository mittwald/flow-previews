import{R as r,a as t,b as o}from"./Radio-DylKVy8r.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as n}from"./Label-BmQI63wv.js";import{a as U}from"./chunk-454WOBUV-CM0pFb8Z.js";import{F as Q}from"./FormField.module-C8I6FisA.js";import{T as v}from"./Text-B8u3q54x.js";import{C as E}from"./Content-CODxObA8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./dynamic-DKDa4OpU.js";import"./ColumnLayout-C9LwylRg.js";import"./flowComponent-DhdNqvi-.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./IconApp-kHJN8BdN.js";import"./IconWarning-mV0QuYPn.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./utils-CgpzwoFP.js";import"./Form-DbuIRMOS.js";import"./useFocusable-BkYgQ3nW.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-BgIWd_-0.js";import"./Label-BRZ8BO2K.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-BciiliGi.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useFormReset-DlrFI1sj.js";import"./usePress-e9a-mRh7.js";import"./VisuallyHidden-DH_5EOkC.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Activity-CPnWONG0.js";const ke={title:"Form Controls/RadioGroup",component:r,args:{onChange:U("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},s={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(o,{value:"domain"},e.createElement(v,null,"Book domain"),e.createElement(E,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(o,{value:"virtualHost"},e.createElement(v,null,"Add virtual host"),e.createElement(E,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(o,{value:"subdomain"},e.createElement(v,null,"Add subdomain"),e.createElement(E,null,"Create a subdomain from an existing domain to use for your project.")))},c={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(Q,null,"Select a role to continue"))},p={render:a=>e.createElement(r,{...a,defaultValue:"admin",variant:"segmented"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},R={render:a=>e.createElement(r,{...a,defaultValue:"admin",variant:"segmented",containerBreakpointSize:"xs"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member")),parameters:{viewport:{defaultViewport:"mobile1"}}},b={render:a=>e.createElement(r,{...a,variant:"segmented",isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(Q,null,"Select a role to continue"))};var f,A,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var g,h,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(h=m.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,G,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var D,L,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var x,y,F;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(F=(y=u.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,T,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var W,q,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var j,z,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin" variant="segmented">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var N,_,O;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin" variant="segmented" containerBreakpointSize="xs">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(O=(_=R.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var J,K,P;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} variant="segmented" isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const We=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","SegmentedVariant","CustomContainerBreakpoint","SegmentedVariantWithFieldError"];export{R as CustomContainerBreakpoint,i as Default,u as RadioButtonDisabled,l as RadioButtons,s as RadioButtonsWithContent,d as RadioDisabled,m as RadioGroupDisabled,p as SegmentedVariant,b as SegmentedVariantWithFieldError,c as WithFieldError,We as __namedExportsOrder,ke as default};
