import{R as r,a as t,b as o}from"./Radio-BMOwCOj6.js";import{R as e}from"./index-uCp2LrAq.js";import{L as n}from"./Label-BizVKcMA.js";import{a as U}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as Q}from"./FormField.module-Baz52Xvq.js";import{T as v}from"./Text-CzfDsx2u.js";import{C as E}from"./Content-CoGVNSyN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./dynamic-DKDa4OpU.js";import"./ColumnLayout-B78AueES.js";import"./flowComponent-d9koHm8X.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./utils-CRveUs4Q.js";import"./Form-CUMXIWEV.js";import"./useFocusable-DIY1EfD0.js";import"./useLabel-C-G_TB0Q.js";import"./useLabels-CrvI0Xse.js";import"./Text-BxG67LRB.js";import"./Label-B6vS7Cqe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DRFNwxZB.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useFormReset-D51lDO-b.js";import"./usePress-B-418flx.js";import"./VisuallyHidden-BwH5wu93.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Activity-DYbiBj6P.js";const we={title:"Form Controls/RadioGroup",component:r,args:{onChange:U("onChange")},parameters:{controls:{exclude:["onChange"]}},render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},i={},m={args:{isDisabled:!0}},d={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member",isDisabled:!0},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},l={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member"},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},u={render:a=>e.createElement(r,{...a,defaultValue:"admin"},e.createElement(n,null,"Role"),e.createElement(o,{value:"admin"},"Admin"),e.createElement(o,{value:"member",isDisabled:!0},"Member"),e.createElement(o,{value:"accountant"},"Accountant"))},s={render:a=>e.createElement(r,{...a,defaultValue:"domain","aria-label":"Domain"},e.createElement(o,{value:"domain"},e.createElement(v,null,"Book domain"),e.createElement(E,null,"Do you have a desired domain? No problem, we'll help you find the right domain for you.")),e.createElement(o,{value:"virtualHost"},e.createElement(v,null,"Add virtual host"),e.createElement(E,null,"The domain remains with your previous provider, but you can use it for your website in our mStudio.")),e.createElement(o,{value:"subdomain"},e.createElement(v,null,"Add subdomain"),e.createElement(E,null,"Create a subdomain from an existing domain to use for your project.")))},c={render:a=>e.createElement(r,{...a,isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(Q,null,"Select a role to continue"))},p={render:a=>e.createElement(r,{...a,defaultValue:"admin",variant:"segmented"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"))},R={render:a=>e.createElement(r,{...a,defaultValue:"admin",variant:"segmented",containerBreakpointSize:"xs"},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member")),parameters:{viewport:{defaultViewport:"mobile1"}}},b={render:a=>e.createElement(r,{...a,variant:"segmented",isInvalid:!0,isRequired:!0},e.createElement(n,null,"Role"),e.createElement(t,{value:"admin"},"Admin"),e.createElement(t,{value:"member"},"Member"),e.createElement(t,{value:"accountant"},"Accountant"),e.createElement(Q,null,"Select a role to continue"))};var f,A,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var g,h,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const Te=["Default","RadioGroupDisabled","RadioDisabled","RadioButtons","RadioButtonDisabled","RadioButtonsWithContent","WithFieldError","SegmentedVariant","CustomContainerBreakpoint","SegmentedVariantWithFieldError"];export{R as CustomContainerBreakpoint,i as Default,u as RadioButtonDisabled,l as RadioButtons,s as RadioButtonsWithContent,d as RadioDisabled,m as RadioGroupDisabled,p as SegmentedVariant,b as SegmentedVariantWithFieldError,c as WithFieldError,Te as __namedExportsOrder,we as default};
