import{j as r}from"./iframe-CPpiztA9.js";import{N as o}from"./NumberField-BnZKYgL0.js";import{L as t}from"./Label-BGSD1rhi.js";import{F as _}from"./FieldDescription-kMDhr7Ro.js";import{F as B}from"./FieldError-Ci8tQ9GY.js";import{C as I,a as U}from"./ContextualHelpTrigger-BYUp8aBs.js";import{B as v}from"./Button-C-ub_lVB.js";import{T as K}from"./Text-B9GDlRIl.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./IconWarning-DGFg2xah.js";import"./ReactAriaControlledValueFix-DjLzjh-3.js";import"./utils-DXg4ziAt.js";import"./Button-BpRzT99M.js";import"./ProgressBar-BJkoGjLL.js";import"./Label-DrzbYkyA.js";import"./Hidden-bVSOJLMB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CbuGYTDm.js";import"./context-Dtd4A8DJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bn1QFLmx.js";import"./useFocus-f0syXR1u.js";import"./useFocusRing-ryN7bem9.js";import"./useFocusable-BdzC7gBh.js";import"./FieldError-DNVX5F1U.js";import"./Text-D73bWKdR.js";import"./Form-BF7n3RGH.js";import"./Group-BazAvpcu.js";import"./useControlledState-CvPFcFpa.js";import"./useSpinButton-Ba0O-skQ.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./useFormReset-MeUe0mbs.js";import"./useEvent-BZyVmUT6.js";import"./useTextField-B-d085GV.js";import"./Popover-CWZaEHAV.js";import"./DialogTriggerView-jBIZNPKp.js";import"./context-C5LerLhv.js";import"./useStatic-DpS3r3sC.js";import"./Dialog-CUla8htU.js";import"./RSPContexts-CFiizNM1.js";import"./OverlayArrow-p4WTGnf4.js";import"./Collection-rnaxRpPP.js";import"./CollectionBuilder-B0lIXlwM.js";import"./Separator-CbcELXN4.js";import"./SearchField-BSkiBWnk.js";import"./TextField-CdnmB6pT.js";import"./SelectionManager-CwCMliWC.js";import"./useCollator-B-f7_yfw.js";import"./FocusScope-mK0EKnGk.js";import"./VisuallyHidden-DQWk5n-D.js";import"./LoadingSpinner-CgYhtYh1.js";import"./browser-CCSZxPxO.js";import"./EmulatedBoldText-49ZPQjyJ.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
