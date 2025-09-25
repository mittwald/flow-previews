import{j as r}from"./iframe-DSMxFmCo.js";import{N as o}from"./NumberField-C43C25OV.js";import{L as t}from"./Label-BPw_TKwN.js";import{F as v}from"./FieldDescription-DiMlr0Yy.js";import{F as K}from"./FieldError-CcqfZkr-.js";import{C as M,a as Y}from"./ContextualHelpTrigger-T5dAmm6t.js";import{B as k}from"./Button-B4iADtHJ.js";import{T as w}from"./Text-D_0LfN4x.js";import"./index-Cun1SEai.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./IconWarning-BVk6tlGE.js";import"./ReactAriaControlledValueFix-BewE66gb.js";import"./utils-V6gMnCgM.js";import"./Button-a5-NScD1.js";import"./ProgressBar-X6kaEndn.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CGRenFpR.js";import"./context-64LigRkb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CpWBfHNM.js";import"./useFocus-rqOLNBQE.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./FieldError-BW2b_CY4.js";import"./Text-CUE1Abh-.js";import"./Form-C9nVsKAF.js";import"./Group-BWyHWrMQ.js";import"./Input-BJPqjrJL.js";import"./useControlledState-Bd9qDCZc.js";import"./useFormValidation-64eNngsb.js";import"./useSpinButton-BGEWfQQc.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./useFormReset-BfhIxfM0.js";import"./useEvent-CC0ROtua.js";import"./useTextField-CR5IN1Cj.js";import"./Popover-JtzXSHjL.js";import"./DialogTriggerView-CRRade0J.js";import"./context-eOFRYD3C.js";import"./useStatic-Bf1fNjch.js";import"./RSPContexts-yTBIWgKj.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./FocusScope-DaPMN8_C.js";import"./useCollator-CouZLuEw.js";import"./VisuallyHidden-D9pE8D_t.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./context-n-efbKpz.js";import"./Separator-BzacB-Ho.js";import"./SelectionManager-DnqUUNzH.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
