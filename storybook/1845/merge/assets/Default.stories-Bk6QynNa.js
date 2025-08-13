import{j as r}from"./iframe-BsKdyUUo.js";import{N as o}from"./NumberField-BuCfOXeE.js";import{L as t}from"./Label-DJsBJ_92.js";import{F as _}from"./FieldDescription-B2_iTS1r.js";import{F as B}from"./FieldError-IFpwvXo1.js";import{C as I,a as U}from"./ContextualHelpTrigger-D8geYVZ1.js";import{B as v}from"./Button-QyPw2-70.js";import{T as K}from"./Text-DM7V5ibr.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./IconWarning-BNNa1TWi.js";import"./ReactAriaControlledValueFix-DncQW-lX.js";import"./utils-DeHCGthq.js";import"./Button-DLwd4SNh.js";import"./ProgressBar-C4DAHdKI.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BowSekYU.js";import"./context-NhbPwiu7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./useFocus-BvYTyo5a.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./FieldError-CHLtNaA2.js";import"./Text-BeFIQxaH.js";import"./Form-DEii-ghQ.js";import"./Group-Dk0IJ4vM.js";import"./useControlledState-BMR5C57X.js";import"./useSpinButton-DohdIke1.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./useFormReset-BCcZ866S.js";import"./useEvent-Bb929JbC.js";import"./useTextField-BDfBPM-X.js";import"./Popover-DxBNWdCE.js";import"./DialogTriggerView-u1JI-dwi.js";import"./context-LgmDjMSt.js";import"./useStatic-BdSd4Y0O.js";import"./Dialog-CR91adc_.js";import"./RSPContexts-DxWJbArM.js";import"./OverlayArrow-CO3Q51Tz.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./SearchField-DHm90Ej9.js";import"./TextField-DVuykaoA.js";import"./SelectionManager-bkmIMDCG.js";import"./useCollator-vsGgvR80.js";import"./FocusScope-r24VL_U3.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./LoadingSpinner-pItv9nzE.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
