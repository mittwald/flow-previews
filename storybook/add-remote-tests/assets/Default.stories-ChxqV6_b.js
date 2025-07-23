import{j as r}from"./iframe-CYUlilGp.js";import{N as o}from"./NumberField-B04PuyLM.js";import{L as t}from"./Label-Ciz8t2Io.js";import{F as _}from"./FieldDescription-BJmqulzb.js";import{F as B}from"./FieldError-BBFKNZH-.js";import{C as I,a as U}from"./ContextualHelpTrigger-D3lQj3YB.js";import{B as v}from"./Button-BfM0n2Gx.js";import{T as K}from"./Text-ot4TW2RP.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./IconWarning-ghAEmGH8.js";import"./ReactAriaControlledValueFix-BTEMWuvP.js";import"./utils-IwmXOWz0.js";import"./Button-DY4YyasG.js";import"./ProgressBar-CLAf1-ry.js";import"./Label-BzlJ5vcG.js";import"./Hidden-CtQ_5AUI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ0P6uHm.js";import"./context-D26uRp-g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./useFocus-6n3T7pEK.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocusable-hSKUHOaq.js";import"./FieldError-BpkjstJ1.js";import"./Text-DsFZoYY-.js";import"./Form-CJHBPzNS.js";import"./Group-_cQVCYDW.js";import"./Input-CJk741gA.js";import"./useControlledState-D9dJQ2qs.js";import"./useSpinButton-BMaCO5yz.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./useFormReset-BKFhzP-_.js";import"./useEvent-BKYwrgSI.js";import"./useTextField-BchAki_m.js";import"./Popover-NGc5e56D.js";import"./DialogTriggerView-vjAZqBKE.js";import"./context-CPlmB9Cj.js";import"./useStatic-CaXlYNsR.js";import"./Dialog-E3oWZOKb.js";import"./RSPContexts-8GpZLPll.js";import"./OverlayArrow-DFgxRKys.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./SearchField-B0kT3X35.js";import"./TextField-BqCOguPh.js";import"./SelectionManager-BA-kOSfV.js";import"./useCollator-BxGQV5d9.js";import"./FocusScope-AdChhofX.js";import"./VisuallyHidden-D7ZslAb9.js";import"./LoadingSpinner-CJLXwe_9.js";import"./browser-BP1SPJnQ.js";import"./EmulatedBoldText-CMJy8lEl.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
