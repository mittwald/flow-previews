import{j as r}from"./iframe-CCJYfocm.js";import{N as o}from"./NumberField-BFIyf95U.js";import{L as t}from"./Label-BdPqFAfu.js";import{F as v}from"./FieldDescription-BHYoePko.js";import{F as K}from"./FieldError-rHcTk1sA.js";import{C as M,a as Y}from"./ContextualHelpTrigger-DzXP0jYo.js";import{B as k}from"./Button-hb7RSFxN.js";import{T as w}from"./Text-oKQCGqUf.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./IconWarning-zKFwDxee.js";import"./ReactAriaControlledValueFix-C6DE_Ocy.js";import"./utils-OhB6egAd.js";import"./Button-Dp1voZV2.js";import"./ProgressBar-Bltfi6Tm.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWLXZ_5I.js";import"./context-CpznRjhe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D-nD__UC.js";import"./useFocus-ByyEn-Pe.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocusable-C8TAEKG6.js";import"./FieldError-BNB-0_Es.js";import"./Text-COyZC_d0.js";import"./Form-OfbaOX07.js";import"./Group-D22NaB6f.js";import"./useControlledState-CXb2Atq5.js";import"./useSpinButton-uGHnEGPO.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./useFormReset-CzFRjtap.js";import"./useEvent-Dxdl7lNs.js";import"./useTextField-wND_NR3Q.js";import"./Popover-DX1tLi1k.js";import"./DialogTriggerView--CAPxN8Q.js";import"./context-BPkPSR0u.js";import"./useStatic-Bygmx728.js";import"./Dialog-1LpWSZns.js";import"./RSPContexts-DtIV_XWn.js";import"./OverlayArrow-BKYRJuLy.js";import"./Collection-BUL5CBgy.js";import"./CollectionBuilder-BSXaKqWH.js";import"./Separator-Cu0Xy5nC.js";import"./SearchField-DFDOPoEe.js";import"./TextField-Cq8rv60r.js";import"./SelectionManager-BWi45uf1.js";import"./useCollator-BUSEmk8n.js";import"./FocusScope-D-ZTlcmj.js";import"./VisuallyHidden-DyP1I_X7.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
