import{j as r}from"./iframe-CIFTXvjr.js";import{N as o}from"./NumberField-BtiyfVjM.js";import{L as t}from"./Label-g6wSh2J1.js";import{F as v}from"./FieldDescription-DpShME1e.js";import{F as K}from"./FieldError-Bs2voh_v.js";import{C as M,a as Y}from"./ContextualHelpTrigger-B0zkQtAk.js";import{B as k}from"./Button-mCzyv81-.js";import{T as w}from"./Text-B8fPWk55.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./IconWarning-DOS6fKaS.js";import"./ReactAriaControlledValueFix-Y0n0HC0f.js";import"./utils-B5Zvs6iw.js";import"./Button-4h-pZrvY.js";import"./ProgressBar-CDKMY4TF.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./context-CJ6VsYI4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8HeaTLIH.js";import"./useFocus-D52c6dYL.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";import"./FieldError-CLAhwXWc.js";import"./Text-BPQdMqSt.js";import"./Form-OgeH3cHd.js";import"./Group-Hjqv-RBg.js";import"./useControlledState-D08Ut7L5.js";import"./useSpinButton-CHG-RqVM.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./useFormReset-Bo2I_rci.js";import"./useEvent-Kc6oznrN.js";import"./useTextField-B5q8s_6j.js";import"./Popover-D3VR88Of.js";import"./DialogTriggerView-DF7dHF7c.js";import"./context-u0ncZylp.js";import"./useStatic-DkYuQJEv.js";import"./RSPContexts-BLper1Pa.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./FocusScope-CdIx8Nbp.js";import"./useCollator-BEuuda2G.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./Collection-B0Ce4Su5.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Separator-DlHAiOK1.js";import"./SearchField-CS1y3jZ7.js";import"./TextField-DRuiN1lA.js";import"./SelectionManager-B7qXDdFd.js";import"./LoadingSpinner-DoTPzDls.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
