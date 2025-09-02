import{j as r}from"./iframe-CPSqmfOl.js";import{N as o}from"./NumberField-Coyf33io.js";import{L as t}from"./Label-Cm39Oetk.js";import{F as v}from"./FieldDescription-BpkS0_Bc.js";import{F as K}from"./FieldError-Cgj32YS9.js";import{C as M,a as Y}from"./ContextualHelpTrigger-CVBqwYe_.js";import{B as k}from"./Button-hKWpSws2.js";import{T as w}from"./Text-CpNtEmk9.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./IconWarning-Dz0_MR_L.js";import"./ReactAriaControlledValueFix-BlDC0iCZ.js";import"./utils-Bp4pxj2u.js";import"./Button-e2WWi27E.js";import"./ProgressBar-BjfkTy0Q.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGlbpXp.js";import"./context-DzKnIoVi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIALPEwc.js";import"./useFocus-BS8EzIP7.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./FieldError-CM7w-aUX.js";import"./Text-BvvdQ7EK.js";import"./Form-1yVZIEH7.js";import"./Group-BmbgIKSk.js";import"./useControlledState-BlXvRNFY.js";import"./useSpinButton-BlZKidIh.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./useFormReset-BUGG2d-X.js";import"./useEvent-COUAymzI.js";import"./useTextField-Dv6BLFv4.js";import"./Popover-8saljIIx.js";import"./DialogTriggerView-DhEtoXKf.js";import"./context-zgsQo9O-.js";import"./useStatic-OfVjkk_J.js";import"./Dialog-BRCyKDs6.js";import"./RSPContexts-D2HT_eZz.js";import"./OverlayArrow-Cn6JJnKz.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./SearchField-DIrZjnJq.js";import"./TextField-nrw2PmZM.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";import"./LoadingSpinner-DLNH37Uk.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
