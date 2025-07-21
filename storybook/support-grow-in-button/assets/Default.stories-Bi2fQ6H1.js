import{j as r}from"./iframe-cREoqKkU.js";import{N as o}from"./NumberField-DZMUAUJr.js";import{L as t}from"./Label-DZvsfDgY.js";import{F as _}from"./FieldDescription-OSjqEANQ.js";import{F as B}from"./FieldError-B5o1ZaV9.js";import{C as I,a as U}from"./ContextualHelpTrigger-CSnLGNp0.js";import{B as v}from"./Button-BiI53Bc2.js";import{T as K}from"./Text-n81s0DiV.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./IconWarning-BZ0g_Se0.js";import"./ReactAriaControlledValueFix-BfrgpB0b.js";import"./utils-yXINXq--.js";import"./Button-Cu-YDSLu.js";import"./ProgressBar-CUbrDEJ6.js";import"./Label-CiJ2ihSa.js";import"./Hidden-lwWUIJBj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-lx63atcd.js";import"./context-B2t2DGfo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDwaJuL4.js";import"./useFocus-DdT7TrV6.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocusable-6okJE7SL.js";import"./FieldError-CvRuj6qL.js";import"./Text-IBVIMvOc.js";import"./Form-FfGMTlZb.js";import"./Group-BI8C3Od1.js";import"./Input-V1vrGjHl.js";import"./useControlledState-CU5MoX31.js";import"./useSpinButton-FcTAFdGm.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./useFormReset-D4g7a1lX.js";import"./useEvent-CzSnF3qn.js";import"./useTextField-RgubrTZC.js";import"./Popover-D0iKC4-k.js";import"./DialogTriggerView-DDpbwryG.js";import"./context-C3KwCnKN.js";import"./useStatic-BAYq7Sdb.js";import"./Dialog-le0_HQU8.js";import"./RSPContexts-BbhueAoC.js";import"./OverlayArrow-C8FHnWmq.js";import"./Collection-DyOpwtKv.js";import"./CollectionBuilder-DBdNKsot.js";import"./Separator-BbGpBOgo.js";import"./SearchField-CSUzKRpw.js";import"./TextField-BSAOaaLk.js";import"./SelectionManager-BiiBfqxw.js";import"./useCollator-JlvF5Y_E.js";import"./FocusScope-D9lXdOdd.js";import"./VisuallyHidden--yTRKci1.js";import"./LoadingSpinner-BEZ9UYVH.js";import"./browser-DLud-_LN.js";import"./EmulatedBoldText-Do4ZwDP6.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
