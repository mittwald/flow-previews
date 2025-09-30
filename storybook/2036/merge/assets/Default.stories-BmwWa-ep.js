import{j as r}from"./iframe-Co5olYEg.js";import{N as o}from"./NumberField-oQUb9euS.js";import{L as t}from"./Label-BiorYBBr.js";import{F as v}from"./FieldDescription-BesRHQ6n.js";import{F as K}from"./FieldError-ozznJ0Nd.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BlPJ-xDo.js";import{B as k}from"./Button-W4WIo1el.js";import{T as w}from"./Text-D64yDBkh.js";import"./index-Cun1SEai.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./IconWarning-Deg5RPPa.js";import"./ReactAriaControlledValueFix-DZySu1uE.js";import"./utils-CfsHCmXQ.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./filterDOMProps-CghfNOdR.js";import"./context-VmB2ki6S.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BWYiyAlu.js";import"./useFocus-D_PcVBPO.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./FieldError-Clh4ku1F.js";import"./Text-DL7aZegp.js";import"./Form-XAAYfRmY.js";import"./Group-BEO1bpjW.js";import"./Input-B4YaMKko.js";import"./useControlledState-BLXlsrOK.js";import"./useFormValidation-CpjqECXn.js";import"./useSpinButton-DnhWLSwg.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./useFormReset-CgjW6y2V.js";import"./useEvent-DsDRYPQb.js";import"./useTextField-kPi4VDlP.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./LoadingSpinner-CRLYV60Z.js";import"./browser-Lvchr8XH.js";import"./EmulatedBoldText-m8x9dOVA.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
