import{j as r}from"./iframe-RErHS549.js";import{N as o}from"./NumberField-k5lI7G3h.js";import{L as t}from"./Label-COqzxAxq.js";import{F as v}from"./FieldDescription-Bsl63wIT.js";import{F as K}from"./FieldError-Da2hJYUR.js";import{C as M,a as Y}from"./ContextualHelpTrigger-DEvRIRlw.js";import{B as k}from"./Button-ICc2foaw.js";import{T as w}from"./Text-CPoMhumh.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./IconWarning-BaoYyhFJ.js";import"./ReactAriaControlledValueFix-uOOxR7qX.js";import"./utils-CdmgfGZ7.js";import"./Button-CLgYLV7x.js";import"./ProgressBar-BrVHyxaL.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-ky1cKMBf.js";import"./context-BoCUnuIe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Qq9By8Rc.js";import"./useFocus-JMpVLlR6.js";import"./useFocusRing-DWSWsOVe.js";import"./useFocusable-D3_285Zs.js";import"./FieldError-CXwIJwJV.js";import"./Text-CT26T-mx.js";import"./Form-CN0G9X2_.js";import"./Group-Co5LQX_Y.js";import"./useControlledState-D306zaQt.js";import"./useSpinButton-CJngYXxV.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./useFormReset-8mkS99ko.js";import"./useEvent-CfCGwGWG.js";import"./useTextField-CpUnEOqT.js";import"./Popover-D5R_X3qF.js";import"./DialogTriggerView-DWnrIBjB.js";import"./context-BXN4gM-G.js";import"./useStatic-BxcMFVdb.js";import"./RSPContexts-B8Y67nNQ.js";import"./ClearPropsContextView-0a_DlM-r.js";import"./FocusScope-CM6IwZZ2.js";import"./useCollator-BIKtW1yK.js";import"./VisuallyHidden-L1E0nJWV.js";import"./Collection-C5b3lBlU.js";import"./CollectionBuilder-CejpnVI0.js";import"./Separator-Bss8HbVG.js";import"./SearchField-tD8L5lUZ.js";import"./TextField-BRNj-bGL.js";import"./SelectionManager-Bhum3Vdb.js";import"./LoadingSpinner-BMdPihtW.js";import"./browser-32b-cNga.js";import"./EmulatedBoldText-JQA-sSfV.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var j,f,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,N,V;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var C,L,y;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var A,E,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,W,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(T=(W=l.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var q,H,_;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var B,I,U;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Xr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Xr as __namedExportsOrder,Qr as default};
