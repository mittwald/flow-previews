import{j as r}from"./iframe-Drlrrc6u.js";import{N as o}from"./NumberField-B6YRaFjz.js";import{L as t}from"./Label-B_vkKa-h.js";import{F as _}from"./FieldDescription-DO_Q9Cso.js";import{F as B}from"./FieldError-CPYhddP5.js";import{C as I,a as U}from"./ContextualHelpTrigger-CYXg722z.js";import{B as v}from"./Button-BZh4lcUb.js";import{T as K}from"./Text-BpnYQtuA.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-7APwv9TL.js";import"./mergeRefs-z-jxhhpD.js";import"./index-Cm4rxf6Y.js";import"./IconWarning-DFClu02m.js";import"./ReactAriaControlledValueFix-CL04ZSp5.js";import"./utils-44JLHIVv.js";import"./Button-BmpQ_XRw.js";import"./ProgressBar-BADn2VXC.js";import"./Label-DVK5kxKu.js";import"./Hidden-DD5LsL7x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BHWpzQCP.js";import"./context-DT5m7DRa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dk26gxo5.js";import"./useFocus-CnY09QFt.js";import"./useFocusRing-CzFnztZj.js";import"./useFocusable-DohvcnRv.js";import"./FieldError-C-dEABlD.js";import"./Text-CC4u2Qzg.js";import"./Form-C4Z2UYxX.js";import"./Group-gluLjbwr.js";import"./useControlledState-CdXpD3vz.js";import"./useSpinButton-CsCzqgBN.js";import"./useLocalizedStringFormatter-BDZHKril.js";import"./useFormReset-DMyooaze.js";import"./useEvent-CTzW67zj.js";import"./useTextField-CgGM2M3-.js";import"./Popover-PSW42Ml5.js";import"./DialogTriggerView-CkmkgVup.js";import"./context-B6ETq0Vi.js";import"./useStatic-CAY7QlrT.js";import"./Dialog-D4Yh2V4Y.js";import"./RSPContexts-BD-SnrRU.js";import"./OverlayArrow-CassYJzw.js";import"./Collection-DU8MwyJ0.js";import"./CollectionBuilder-DAHNGdP0.js";import"./Separator-DU5iT2Hb.js";import"./SearchField-Do9rWkb6.js";import"./TextField-5_ge-qCO.js";import"./SelectionManager-DSfIplwJ.js";import"./useCollator-DFRy-0H3.js";import"./FocusScope-Bhoog2Cx.js";import"./VisuallyHidden-CSm48NDs.js";import"./LoadingSpinner-Btgpjn0K.js";import"./browser-BFksgo5g.js";import"./EmulatedBoldText-Wx7CRY9w.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
