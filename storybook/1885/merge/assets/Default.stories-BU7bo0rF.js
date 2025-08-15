import{j as r}from"./iframe-Bcy3WBLD.js";import{N as o}from"./NumberField-BnEXJEqd.js";import{L as t}from"./Label-BjUMecpn.js";import{F as _}from"./FieldDescription-D_fUztDn.js";import{F as B}from"./FieldError-ZqRA8FAO.js";import{C as I,a as U}from"./ContextualHelpTrigger-Cl5CDXj5.js";import{B as v}from"./Button-D1gTYi2b.js";import{T as K}from"./Text-BKZvU2Ep.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./IconWarning-Vd06CvkA.js";import"./ReactAriaControlledValueFix-CPjTj3b4.js";import"./utils-DWRY5rRS.js";import"./Button-j-dhdB0v.js";import"./ProgressBar-DOzZ26z9.js";import"./Label-mUSxsxBX.js";import"./Hidden-Dv6inJmm.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJG08svr.js";import"./context-COJrQ54s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA9PIUpq.js";import"./useFocus-Dgw0vV32.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocusable-C_MY2EQ_.js";import"./FieldError-l-G1_SjF.js";import"./Text-B9FmTM8Z.js";import"./Form-PJgehRtv.js";import"./Group-CKjDXA5J.js";import"./useControlledState-gINmRHbE.js";import"./useSpinButton-k3AS87Rr.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./useFormReset-COOu3OXz.js";import"./useEvent-Bt8sVsIM.js";import"./useTextField-KFIXFoXA.js";import"./Popover-BBFOwcYX.js";import"./DialogTriggerView-txSV1TrO.js";import"./context-BOV0Rbpo.js";import"./useStatic-D4VOD2iQ.js";import"./Dialog-D3iEa7Qs.js";import"./RSPContexts-Bts87vXR.js";import"./OverlayArrow-C5shyw1z.js";import"./Collection-CRHqEzPy.js";import"./CollectionBuilder-BpdNBb0a.js";import"./Separator-BMBwVh1p.js";import"./SearchField-uTJdbFFf.js";import"./TextField-OZ5xDcTU.js";import"./SelectionManager-VjBSS0Z5.js";import"./useCollator-sTarHb1o.js";import"./FocusScope-DTvTpHKs.js";import"./VisuallyHidden-B7epvPUM.js";import"./LoadingSpinner-CH6ajn32.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
