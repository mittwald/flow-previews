import{j as r}from"./iframe-XU38G95a.js";import{N as o}from"./NumberField-DlfVmC3z.js";import{L as t}from"./Label-ClqUqVil.js";import{F as _}from"./FieldDescription-HGpWW5AZ.js";import{F as B}from"./FieldError-DDQ8jatw.js";import{C as I,a as U}from"./ContextualHelpTrigger-DwC5jMT-.js";import{B as v}from"./Button-BRSF3HU2.js";import{T as K}from"./Text-BiCu62_D.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./IconWarning-C4sgFplx.js";import"./ReactAriaControlledValueFix-CzL8RpSI.js";import"./utils-CRMz2C-S.js";import"./Button-DXKMbIig.js";import"./ProgressBar-B_1vEsN7.js";import"./Label-B-D8nJqg.js";import"./Hidden-CmYs0ax8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWzTJ_60.js";import"./context-DoEtjPsM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmxXsmze.js";import"./useFocus-BcwSg9Gz.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocusable-bB4ldgF4.js";import"./FieldError-iHvRLgo5.js";import"./Text-BOldZPQm.js";import"./Form-BwQPNTC6.js";import"./Group-CaxTXUah.js";import"./useControlledState-D-ouz_Ia.js";import"./useSpinButton-Bvg3Y1UF.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./useFormReset-CGohrCOb.js";import"./useEvent-BbdxCe-3.js";import"./useTextField-DczSeHlH.js";import"./Popover-B2HVaTEw.js";import"./DialogTriggerView-C6cdj0HA.js";import"./context-C_3J_Isg.js";import"./useStatic-IEgx7F5P.js";import"./Dialog-WotfotBD.js";import"./RSPContexts-Dggqaxhp.js";import"./OverlayArrow-DHjXAVGD.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./SearchField-C9T5dJPC.js";import"./TextField-OEkZHrb0.js";import"./SelectionManager-C40pIXC_.js";import"./useCollator-C7gGvaqP.js";import"./FocusScope-ng_yE7d5.js";import"./VisuallyHidden-DU3qZR-S.js";import"./LoadingSpinner-BHQyVil0.js";import"./browser-DzHUdCJ5.js";import"./EmulatedBoldText-DgdtlBmQ.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
