import{j as r}from"./iframe-FeXPLmWJ.js";import{N as o}from"./NumberField-_SNWL8aI.js";import{L as t}from"./Label-DeaIyOHa.js";import{F as v}from"./FieldDescription-Cu45yjjx.js";import{F as K}from"./FieldError-kve_n9nq.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BDnIVH6w.js";import{B as k}from"./Button-DtLhlb3k.js";import{T as w}from"./Text-Bk-26kZZ.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./IconWarning-Bft-d4EJ.js";import"./ReactAriaControlledValueFix-B-Uf8adH.js";import"./utils-CXtn_DQA.js";import"./Button-DC1Hivs6.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./context-CdDLZW_F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CiJ5VmDC.js";import"./useFocus-utUwSX9z.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./FieldError-C1vR0UXv.js";import"./Text-D-W6Oypd.js";import"./Form-1I64UDUq.js";import"./Group-BYKu_D4V.js";import"./useControlledState-Bg7JB_7p.js";import"./useSpinButton-CTTk3Jiq.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./useFormReset-Dq2F4z6p.js";import"./useEvent-VX8xqKP_.js";import"./useTextField-DIQk2fEk.js";import"./Popover-DoIFupUP.js";import"./DialogTriggerView-3szeiVhS.js";import"./context-BnjGRpmB.js";import"./useStatic-LuaoAJ0q.js";import"./Dialog-D0hlM8gs.js";import"./RSPContexts-l4hadVnr.js";import"./OverlayArrow-QfoTus34.js";import"./Collection-BSFTurc1.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Separator-qHYMipPY.js";import"./SearchField-CExAiUx6.js";import"./TextField-EiqUYwfM.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";import"./LoadingSpinner-C0aHJiGC.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
