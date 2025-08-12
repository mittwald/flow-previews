import{j as r}from"./iframe-DdApAMdB.js";import{N as o}from"./NumberField-D0MEFX2A.js";import{L as t}from"./Label-Yw88ZPyv.js";import{F as _}from"./FieldDescription-C8ajk1oL.js";import{F as B}from"./FieldError-D-Hf7sx5.js";import{C as I,a as U}from"./ContextualHelpTrigger-BdrssJh1.js";import{B as v}from"./Button-BxqrW572.js";import{T as K}from"./Text-BwGnDMAi.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./IconWarning-Cpaydhok.js";import"./ReactAriaControlledValueFix-D9mZmcZN.js";import"./utils-DAIXfBLw.js";import"./Button-C9Xh5N71.js";import"./ProgressBar-Cc1yHw2d.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DpyWwSJM.js";import"./context-DR2Fzh74.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRRHPdfj.js";import"./useFocus-D5He2YFW.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./FieldError-CIX9Q6F5.js";import"./Text-CGWbxphN.js";import"./Form-EknBmRno.js";import"./Group-D5m3Hvm8.js";import"./useControlledState-BEGJzQOc.js";import"./useSpinButton-fXNEk26V.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./useFormReset-BHdeIf20.js";import"./useEvent-L4LWTqTI.js";import"./useTextField-5LH3O4RW.js";import"./Popover-7VI1iAFw.js";import"./DialogTriggerView-B0VPnPVc.js";import"./context-ruD8SKGF.js";import"./useStatic-CD0TvTTa.js";import"./Dialog-BpJkjD9u.js";import"./RSPContexts-BOrJeOok.js";import"./OverlayArrow-C4-25t1a.js";import"./Collection-DGYwVSuD.js";import"./CollectionBuilder-EIxRxNub.js";import"./Separator-S3NhCE8J.js";import"./SearchField-C5uNx_R9.js";import"./TextField-DkSNZzFP.js";import"./SelectionManager-CLIYI5bX.js";import"./useCollator-DB6a0khr.js";import"./FocusScope-CMXbBALw.js";import"./VisuallyHidden-DyxmrKqh.js";import"./LoadingSpinner-BhKvcbL5.js";import"./browser-Bz93nYTI.js";import"./EmulatedBoldText-BU0UeOKO.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
