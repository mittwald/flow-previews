import{j as r}from"./iframe-CuW8Z7cC.js";import{N as o}from"./NumberField-2TtaOtIA.js";import{L as t}from"./Label-BtRITTXP.js";import{F as _}from"./FieldDescription-D568jYBZ.js";import{F as B}from"./FieldError-B4QQkVwM.js";import{C as I,a as U}from"./ContextualHelpTrigger-9ebTDQ3W.js";import{B as v}from"./Button-D9Fw6D0O.js";import{T as K}from"./Text-BVSFkmOJ.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./IconWarning-zrofpdfr.js";import"./ReactAriaControlledValueFix-CwToo6fE.js";import"./utils-CgS8DRaE.js";import"./Button-XBmqNEFP.js";import"./ProgressBar-BpIwFtNJ.js";import"./Label-CGUx7qQt.js";import"./Hidden-Cabgeqjz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C7dUje6t.js";import"./context-BYWbGN2W.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChUiq42t.js";import"./useFocus-D7WquFnz.js";import"./useFocusRing-DouDeddi.js";import"./useFocusable-GYH2Xp93.js";import"./FieldError-C4CBNnNe.js";import"./Text-DWn8KR_S.js";import"./Form-CVKq_8tp.js";import"./Group-Dq-TZzFP.js";import"./useControlledState-BloqaAdM.js";import"./useSpinButton-7rD94MkV.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./useFormReset-BUJ4pXgh.js";import"./useEvent-CYDGvwkU.js";import"./useTextField-D2_5QzKr.js";import"./Popover-D_vujyJZ.js";import"./DialogTriggerView-C2lPzY4b.js";import"./context-DcAOWEDn.js";import"./useStatic-MQhSGK4y.js";import"./Dialog-D1kraT3B.js";import"./RSPContexts-Cf0WAJYH.js";import"./OverlayArrow-CyeHV5yR.js";import"./Collection-DVSzmKrY.js";import"./CollectionBuilder-B5oNNMRo.js";import"./Separator-BVlyHbVt.js";import"./SearchField-BtIhQoeP.js";import"./TextField-z_7EUq5A.js";import"./SelectionManager-C2yhE_X5.js";import"./useCollator-B1wFiJa6.js";import"./FocusScope-C5C0qsLJ.js";import"./VisuallyHidden-DEeOB75f.js";import"./LoadingSpinner-Cg9hyS_b.js";import"./browser-DxBOFXa_.js";import"./EmulatedBoldText-CK46MGsP.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
