import{j as r}from"./iframe-BjkHoCV_.js";import{N as o}from"./NumberField-JKzlWwMO.js";import{L as t}from"./Label-BYU6zcWR.js";import{F as _}from"./FieldDescription-CbqPGn6F.js";import{F as B}from"./FieldError-mxRvqHca.js";import{C as I,a as U}from"./ContextualHelpTrigger-Ce2Ziogm.js";import{B as v}from"./Button-DVqiRGCO.js";import{T as K}from"./Text-eTJAYSJY.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./IconWarning-CwiGKHoc.js";import"./ReactAriaControlledValueFix-CAFTLK0K.js";import"./utils-CGiEt-XO.js";import"./Button-Di6PObN5.js";import"./ProgressBar-B7PSoMX-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QSzRNK-.js";import"./context-rlbqmEoV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./useFocus-xSbgpmNE.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./FieldError-BxnpY5Jk.js";import"./Text-C4ERGDAc.js";import"./Form-PglXiK24.js";import"./Group-CFG6yZ2f.js";import"./Input-CkroWKbe.js";import"./useControlledState-DGwCCxzP.js";import"./useSpinButton-AJcMAD9w.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./useFormReset-DzRnd0mU.js";import"./useEvent-DmGZIyRy.js";import"./useTextField-DkP6KCaQ.js";import"./Popover-luZqOS3K.js";import"./DialogTriggerView-A1G7QU7L.js";import"./context-CsL7NKVl.js";import"./useStatic-D1q5yxzl.js";import"./Dialog-DTbN5TSI.js";import"./RSPContexts-B3qavTDI.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./SearchField-C9v5dfT_.js";import"./TextField-gOyCtBR-.js";import"./SelectionManager-DffnzBv0.js";import"./useCollator-BsISA5DC.js";import"./FocusScope-mH_5A_-I.js";import"./VisuallyHidden-DAjtA0IX.js";import"./LoadingSpinner-DEvuHU_p.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Pr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Pr as __namedExportsOrder,Jr as default};
