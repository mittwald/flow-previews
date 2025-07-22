import{j as r}from"./iframe-DR0piQh8.js";import{N as o}from"./NumberField-DmDD4exd.js";import{L as t}from"./Label-BflZTkh8.js";import{F as _}from"./FieldDescription-Co8Bhrn3.js";import{F as B}from"./FieldError-BkSA8Wen.js";import{C as I,a as U}from"./ContextualHelpTrigger-DATQfxBx.js";import{B as v}from"./Button-YikxumGf.js";import{T as K}from"./Text-6uPYoec8.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./IconWarning-BgT_B94B.js";import"./ReactAriaControlledValueFix-CS6-4LoM.js";import"./utils-B_3T_k5x.js";import"./Button-1sXVFcCN.js";import"./ProgressBar-NTw_CuGV.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-dFBcJ0PQ.js";import"./context-BuOVuQqB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B4R9EPAI.js";import"./useFocus-Drlqt-a_.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";import"./FieldError-DwuKV3Gh.js";import"./Text-Me8NF-Lu.js";import"./Form-B6wqL0ga.js";import"./Group-C4Z-pBhO.js";import"./Input-DGCSbbdR.js";import"./useControlledState-DHSSOs10.js";import"./useSpinButton-DY0M5fWp.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./useFormReset-DGc_F2ms.js";import"./useEvent-DS0BHrpr.js";import"./useTextField-B-D6SiAk.js";import"./Popover-DipyulJr.js";import"./DialogTriggerView-BFIY75rz.js";import"./context-BdW5YDeU.js";import"./useStatic-DJ0ktc6X.js";import"./Dialog-D78Vapha.js";import"./RSPContexts-BmbbCtV6.js";import"./OverlayArrow-4l6fdOKa.js";import"./Collection-CwV6zAW0.js";import"./CollectionBuilder-D0nds9w3.js";import"./Separator-DSMvoxad.js";import"./SearchField-CvXwi28e.js";import"./TextField-CeU2qgF-.js";import"./SelectionManager-Bk9G3wL6.js";import"./useCollator-M--gojr_.js";import"./FocusScope-QqKO2Hp7.js";import"./VisuallyHidden-XA-B9eQQ.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
