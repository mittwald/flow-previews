import{j as r}from"./iframe-dcfCh18n.js";import{N as o}from"./NumberField-D2n1_bG8.js";import{L as t}from"./Label-CuZ7LHL3.js";import{F as _}from"./FieldDescription-CrQCJ9Lz.js";import{F as B}from"./FieldError-DGN7u_q3.js";import{C as I,a as U}from"./ContextualHelpTrigger-CyKeIz8U.js";import{B as v}from"./Button-Da273mbx.js";import{T as K}from"./Text-D7p3kvP7.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./IconWarning-BWA_nqvd.js";import"./ReactAriaControlledValueFix-Cfd6kJUL.js";import"./utils-CaaN6tMi.js";import"./Button-D8qJizcb.js";import"./ProgressBar-BcZD8tRU.js";import"./Label-DBNmmXrt.js";import"./Hidden-CnGKQwOV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CpnVZyQW.js";import"./context-BfLqp0TH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BgO5jEhv.js";import"./useFocus-DiEh5oG5.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocusable-Cdnk8Kqp.js";import"./FieldError-jHHw5TXz.js";import"./Text-38QS6QcB.js";import"./Form-k5YG3sGC.js";import"./Group-qqCya-sH.js";import"./useControlledState-CjmCqi1H.js";import"./useSpinButton-DCUqvE5U.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./useFormReset-DV-dKI4G.js";import"./useEvent-9GQqu5so.js";import"./useTextField-BUPKcxtd.js";import"./Popover-DYqV-DcI.js";import"./DialogTriggerView-BB_RmeFU.js";import"./context-TKpdQxdP.js";import"./useStatic-Dqwqzi-C.js";import"./Dialog-DLMrif4z.js";import"./RSPContexts-W4MNUJhM.js";import"./OverlayArrow-NUC550dY.js";import"./Collection-DEoan4F0.js";import"./CollectionBuilder-WRzFhLbw.js";import"./Separator-DQZuDVMG.js";import"./SearchField-DOB9WtIS.js";import"./TextField-DqWSAtzr.js";import"./SelectionManager-BtQR7swA.js";import"./useCollator-DK-_TAlj.js";import"./FocusScope-BOAHQoFR.js";import"./VisuallyHidden-7QHbeduJ.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
