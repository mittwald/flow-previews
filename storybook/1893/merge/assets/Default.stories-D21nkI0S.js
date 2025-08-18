import{j as r}from"./iframe-xY198WZi.js";import{N as o}from"./NumberField-C6Gw3Fxq.js";import{L as t}from"./Label-BGqmtZoL.js";import{F as _}from"./FieldDescription-pTH8ocZo.js";import{F as B}from"./FieldError-D_bWmjSL.js";import{C as I,a as U}from"./ContextualHelpTrigger-BLBh34dr.js";import{B as v}from"./Button-Bwr0Tqpq.js";import{T as K}from"./Text-sCeau28A.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./IconWarning-DKtpXb3v.js";import"./ReactAriaControlledValueFix-Dg0VmqhN.js";import"./utils-9eQBP1kk.js";import"./Button-quH8-MSh.js";import"./ProgressBar-D8GoG1d0.js";import"./Label-Dcgw9TtS.js";import"./Hidden-CtG-gAWP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-EZ6qW8_W.js";import"./context-cbiqA6Ma.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./useFocus-Dp6Kb8w7.js";import"./useFocusRing-CNdh1loc.js";import"./useFocusable-BEMuxCdm.js";import"./FieldError-Dq9uru64.js";import"./Text-Caf7sjAz.js";import"./Form-Bh-UgxBm.js";import"./Group-IN_qKSk9.js";import"./useControlledState-DwYELHJ7.js";import"./useSpinButton-Ci9lhZok.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./useFormReset-CwVzgzUX.js";import"./useEvent-B_ZLPh5h.js";import"./useTextField-Q2Y51r8y.js";import"./Popover-LfzPlCkT.js";import"./DialogTriggerView-CQH_y4wT.js";import"./context-DIL7reYg.js";import"./useStatic-BuBW5DuY.js";import"./Dialog-d75pDgMH.js";import"./RSPContexts-CJJdSkVj.js";import"./OverlayArrow-J-8UDj7n.js";import"./Collection-ytNMUbYn.js";import"./CollectionBuilder-BIND5Hyl.js";import"./Separator-b4M5uB6E.js";import"./SearchField-cMs68yGv.js";import"./TextField-CNxjTF-I.js";import"./SelectionManager-DB1_71DO.js";import"./useCollator-CcxdQyrk.js";import"./FocusScope-DirxfVa-.js";import"./VisuallyHidden-vDoGSijP.js";import"./LoadingSpinner-DDnO9vH9.js";import"./browser-CoruqHMI.js";import"./EmulatedBoldText-D19FH_Aq.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,j,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var D,N,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,C,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var T,q,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(y=(q=l.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var H,O,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Jr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Jr as __namedExportsOrder,Gr as default};
