import{j as r}from"./iframe-Dp_ptgTO.js";import{N as o}from"./NumberField-tEtlNo6m.js";import{L as t}from"./Label-Bfe7G6ov.js";import{F as v}from"./FieldDescription-_sE_f3No.js";import{F as K}from"./FieldError-BlMfL7YS.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BdQ__Lc0.js";import{B as k}from"./Button-Bm7Tf187.js";import{T as w}from"./Text-DKCpryII.js";import"./index-Cun1SEai.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./IconWarning-CESkhJY3.js";import"./ReactAriaControlledValueFix-lEod25kb.js";import"./utils-jLhJmKpa.js";import"./Button-CtqZigcv.js";import"./ProgressBar-DMXo3Oxb.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CuGJ_WBQ.js";import"./context-dvnbYm3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DgTBEQGy.js";import"./useFocus-BGDVbxBE.js";import"./useFocusRing-MWP1ZcQm.js";import"./useFocusable-Pd3lvrKn.js";import"./FieldError-Izh2_fYp.js";import"./Text--dlrpEAx.js";import"./Form-v2gdHsY3.js";import"./Group-D-YhKZJB.js";import"./Input-ma6DJJKp.js";import"./useControlledState-rqltzUWl.js";import"./useFormValidation-CyColpPY.js";import"./useSpinButton-DmqohCAh.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./useFormReset-CqaGS40P.js";import"./useEvent-BAkCuTus.js";import"./useTextField-_OLRvzuM.js";import"./Popover-CLhZGReB.js";import"./DialogTriggerView-VHLYNpVx.js";import"./context-DDTw2-bn.js";import"./useStatic-m8l0C_TU.js";import"./RSPContexts-B9nFdFkt.js";import"./ClearPropsContextView-BbJozVRy.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./CollectionBuilder-D4MRH1wH.js";import"./context-DhKk3IGs.js";import"./Separator-BGudjOFK.js";import"./SelectionManager-BktYLEMf.js";import"./LoadingSpinner-CO7k3E9d.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const $r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,$r as __namedExportsOrder,Zr as default};
