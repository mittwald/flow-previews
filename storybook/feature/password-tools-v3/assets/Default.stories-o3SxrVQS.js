import{j as r}from"./iframe-DaJUcpT8.js";import{N as o}from"./NumberField-BV59lC4y.js";import{L as t}from"./Label-BgQXylnn.js";import{F as _}from"./FieldDescription-gLTg3bBS.js";import{F as B}from"./FieldError-AGeyblw8.js";import{C as I,a as U}from"./ContextualHelpTrigger-CyQ2U54y.js";import{B as v}from"./Button-VCV9ziEp.js";import{T as K}from"./Text-onzY52Lv.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./IconWarning-Di7G1N2l.js";import"./ReactAriaControlledValueFix-a0l-vHrk.js";import"./utils-cm5Xkl-u.js";import"./Button-BRzam8Ar.js";import"./ProgressBar-Cnbrmi-n.js";import"./Label-CVkBl_Lv.js";import"./Hidden-DcO9dlXt.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-prd9XZsG.js";import"./context-BvSX8hdd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEpf8EyH.js";import"./useFocus-BmgQs_EM.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocusable-BAN9nHDM.js";import"./FieldError-CSXHy091.js";import"./Text-D1R_5zV7.js";import"./Form-68wNlegC.js";import"./Group-DcjqWYxF.js";import"./useControlledState-CRRDqDT-.js";import"./useSpinButton-D9EDNOZy.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./useFormReset-wR0NNvKg.js";import"./useEvent-rPQ2UWvx.js";import"./useTextField-D2U5Ytm3.js";import"./Popover-C3BJJ-PT.js";import"./DialogTriggerView-CfzLhP0J.js";import"./context-nDH_4RW_.js";import"./useStatic-llywhH4U.js";import"./Dialog-D9LWMemg.js";import"./RSPContexts-hBgp-JuF.js";import"./OverlayArrow-CK2mB8Cb.js";import"./Collection-Wdd3SW29.js";import"./CollectionBuilder-Bz5wg4gw.js";import"./Separator-DuKCDsxL.js";import"./SearchField-UXIbzWx2.js";import"./TextField-Usv5aNlb.js";import"./SelectionManager-WCXi6IP8.js";import"./useCollator-CWhSIfWE.js";import"./FocusScope-DS_o-PRb.js";import"./VisuallyHidden-DvK-wDtX.js";import"./LoadingSpinner-8zd3RGCO.js";import"./browser-kRBy5Vjm.js";import"./EmulatedBoldText-Dp6a6rFz.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
