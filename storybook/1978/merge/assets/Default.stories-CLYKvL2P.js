import{j as r}from"./iframe-BwL5TE8j.js";import{N as o}from"./NumberField-Do-jWeVX.js";import{L as t}from"./Label-DWj4cilU.js";import{F as v}from"./FieldDescription-BtKIxAwS.js";import{F as K}from"./FieldError-CJJ4jg0R.js";import{C as M,a as Y}from"./ContextualHelpTrigger-DrpOYYh_.js";import{B as k}from"./Button-aac4MlcR.js";import{T as w}from"./Text-DGokGAz6.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./IconWarning-CFzxGyJP.js";import"./ReactAriaControlledValueFix-CQ1NxDjh.js";import"./utils-D5K6eLjb.js";import"./Button-BJbpMApz.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-0Q5rWqkC.js";import"./context-CLDbs9sm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-H2LW6Ly5.js";import"./useFocus-B2onYDnw.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./FieldError-sKqByAl8.js";import"./Text-lZrUqOdv.js";import"./Form-GeiXMdXB.js";import"./Group-DtaLpYpv.js";import"./useControlledState-B8vyFbA3.js";import"./useSpinButton-DPvjo_KG.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./useFormReset-BObq63rv.js";import"./useEvent-CsEmoHY2.js";import"./useTextField-B_NtZtsZ.js";import"./Popover-yYGh9Pu-.js";import"./DialogTriggerView-Cn2CtqME.js";import"./context-CPjnFp9f.js";import"./useStatic-lPJ6-trN.js";import"./Dialog-CAhtHN7d.js";import"./RSPContexts-twmoior-.js";import"./OverlayArrow-ClAfltY8.js";import"./Collection-D-rOi4Fm.js";import"./CollectionBuilder-BSKAEL2-.js";import"./Separator-BewLs59G.js";import"./SearchField-D9OSv9aH.js";import"./TextField-CoIF75G6.js";import"./SelectionManager-DjWaGKUE.js";import"./useCollator-BVjT8-HM.js";import"./FocusScope-BNA3YsCO.js";import"./VisuallyHidden-kWjY9XjT.js";import"./LoadingSpinner-xuWixoMH.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Zr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Zr as __namedExportsOrder,Xr as default};
