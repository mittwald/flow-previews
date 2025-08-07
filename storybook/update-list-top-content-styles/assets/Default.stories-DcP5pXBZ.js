import{j as r}from"./iframe-C7QIGs8p.js";import{N as o}from"./NumberField-c3h_ByG4.js";import{L as t}from"./Label-Bc44wfjj.js";import{F as _}from"./FieldDescription-Dzb0uNYE.js";import{F as B}from"./FieldError-BirN45_p.js";import{C as I,a as U}from"./ContextualHelpTrigger-DvK0zv5Q.js";import{B as v}from"./Button-BGr41c7E.js";import{T as K}from"./Text-CTrM2jC7.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./IconWarning-X_5SFXzD.js";import"./ReactAriaControlledValueFix-BeIThg3D.js";import"./utils-BtsnBH_L.js";import"./Button-B7-ATyHT.js";import"./ProgressBar-IpWCr7qx.js";import"./Label-BSYnHYDD.js";import"./Hidden-DWOQ1i8d.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D-QYQdwI.js";import"./context-C2AKAduY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bh987CF2.js";import"./useFocus-ypxUxEvE.js";import"./useFocusRing-DKwzelHt.js";import"./useFocusable-C2Z9oquv.js";import"./FieldError-DNXr8e-i.js";import"./Text-FQKaNMRy.js";import"./Form-BYQvXm3I.js";import"./Group-C1WKhAvj.js";import"./useControlledState-KNtUQTSK.js";import"./useSpinButton-DKv6okOK.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./useFormReset-DrAuwzZe.js";import"./useEvent-DpcPK9yZ.js";import"./useTextField-DceDZrVQ.js";import"./Popover-D8n-M6I0.js";import"./DialogTriggerView-wftUC24y.js";import"./context-BDfHuVBm.js";import"./useStatic-BWe9m1of.js";import"./Dialog-J3EA-UkZ.js";import"./RSPContexts-vCu29erK.js";import"./OverlayArrow-ZcBTChKb.js";import"./Collection-Boesk9-D.js";import"./CollectionBuilder-DmHyKuX1.js";import"./Separator-l8xhzRbI.js";import"./SearchField-D_-o_-wM.js";import"./TextField-BQAs_udX.js";import"./SelectionManager-jQp60uSJ.js";import"./useCollator-AgXB0Oy1.js";import"./FocusScope-BUYOglmY.js";import"./VisuallyHidden-DORJbjtt.js";import"./LoadingSpinner-Ce2BrOYf.js";import"./browser-C2BAwQT3.js";import"./EmulatedBoldText-_WA-B4P4.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
