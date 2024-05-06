import{R as r,a as t,b as o}from"./index-CtLmKdNP.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-CNAQugcr.js";import{a as J}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as z}from"./FormField.module-CUA8W2mV.js";import"./index-C0kgWbNG.js";import"./index-CbGrRnEJ.js";import{L as n}from"./Label-d-PIMz94.js";import{T as b}from"./Text-B0HvyfcO.js";import{C as v}from"./Content-DvzNxvwK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3-LTTWn.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./dynamic-DKDa4OpU.js";import"./index-DZx38vip.js";import"./ColumnLayout-B-_pjxL2.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./IconApp-D-kcT16p.js";import"./IconWarning-Cw7drCLR.js";import"./utils-D7InqjV7.js";import"./Form-BGMe3SSh.js";import"./useFocusable-Ddi47NB9.js";import"./useLabel-lOoP3iJB.js";import"./useLabels-DFbr5jK-.js";import"./Text-nCCH5eH7.js";import"./Label-Ce3BVkqc.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-4iKrC6rw.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./useFormReset-C6n9I88d.js";import"./usePress-BZaguEpt.js";import"./VisuallyHidden-DV81ojJ5.js";import"./v4-CQkTLCs1.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";const Me={title:"Form Controls/RadioGroup",component:r,args:{onChange:J("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},c={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(o,{value:"domain"},e.createElement(b,null,"Book domain"),e.createElement(v,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(o,{value:"virtualHost"},e.createElement(b,null,"Add virtual host"),e.createElement(v,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(o,{value:"subdomain"},e.createElement(b,null,"Add subdomain"),e.createElement(v,null,"Create a subdomain from an existing domain to use for your project.")))},s={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(z,null,"Select a role to continue"))},p={render:a=>e.createElement(r,{...a,defaultValue:"admin",variant:"segmented"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},R={render:a=>e.createElement(r,{...a,variant:"segmented",isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(z,null,"Select a role to continue"))};var E,f,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(A=(f=i.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var g,B,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(B=m.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var S,D,G;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member" isDisabled>
        Member
      </Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var C,V,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member">Member</RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var L,M,x;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin">
      <Label>Role</Label>
      <RadioButton value="admin">Admin</RadioButton>
      <RadioButton value="member" isDisabled>
        Member
      </RadioButton>
      <RadioButton value="accountant">Accountant</RadioButton>
    </RadioGroup>
}`,...(x=(M=u.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var F,T,w;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var W,q,I;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var j,k,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="admin" variant="segmented">
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
    </RadioGroup>
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var N,_,O;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} variant="segmented" isInvalid isRequired>
      <Label>Role</Label>
      <Radio value="admin">Admin</Radio>
      <Radio value="member">Member</Radio>
      <Radio value="accountant">Accountant</Radio>
      <FieldError>Select a role to continue</FieldError>
    </RadioGroup>
}`,...(O=(_=R.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const xe=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","SegmentedVariant","SegmentedVariantWithFieldError"];export{i as Default,u as RadioButtonDisabled,l as RadioButtons,c as RadioButtonsWithContent,d as RadioDisabled,m as RadioGroupDisabled,p as SegmentedVariant,R as SegmentedVariantWithFieldError,s as WithFieldError,xe as __namedExportsOrder,Me as default};
