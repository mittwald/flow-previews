import{j as r}from"./iframe-Iz-jrQ83.js";import{N as o}from"./NumberField-KMf_tfJL.js";import{L as t}from"./Label-BLFOHaT0.js";import{F as v}from"./FieldDescription-CEUkGFJG.js";import{F as K}from"./FieldError-CRVd2q9t.js";import{C as M,a as Y}from"./ContextualHelpTrigger-B5MuAKL1.js";import{B as k}from"./Button-vOPcRaQ8.js";import{T as w}from"./Text-Dk41Q_nF.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./IconWarning-BfmxR99x.js";import"./ReactAriaControlledValueFix-B0uJRkpq.js";import"./utils-Dydu0pBS.js";import"./Button-P11Hto4i.js";import"./ProgressBar-xCJgXxXU.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BXusGe9W.js";import"./context-BdTRL7oB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CAUR_6bc.js";import"./useFocus-p13hF2Sk.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocusable-D1JGAIsJ.js";import"./FieldError-7b0XYa9_.js";import"./Text-DcONEmQQ.js";import"./Form-B2pzq79_.js";import"./Group-Dc1Igsud.js";import"./useControlledState-C1EOK33K.js";import"./useSpinButton-vWFX8VLg.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./useFormReset-Cl_PLqIc.js";import"./useEvent-CCByfuyl.js";import"./useTextField-c8k6OVAk.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./context-DNlUm82J.js";import"./useStatic-D6VuC2u7.js";import"./RSPContexts-BeWSySSO.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./CollectionBuilder-CH12bxgH.js";import"./Separator-CTGwUbop.js";import"./SearchField-CsOWpSNr.js";import"./TextField-DzXCHFtW.js";import"./SelectionManager-DJ3uM6IO.js";import"./LoadingSpinner-BKi8wNla.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
