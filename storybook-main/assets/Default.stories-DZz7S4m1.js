import{j as r}from"./iframe-CIziUxb4.js";import{N as o}from"./NumberField-oRxYmJtN.js";import{L as t}from"./Label-CDKeaBWT.js";import{F as _}from"./FieldDescription-A2U3bIvB.js";import{F as B}from"./FieldError-Dr7dAG6C.js";import{C as I,a as U}from"./ContextualHelpTrigger-CjuxQRV9.js";import{B as v}from"./Button-Bo5QyJiI.js";import{T as K}from"./Text-BbvPR7fy.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./IconWarning-Bo3R4dY7.js";import"./ReactAriaControlledValueFix-dweYB-6u.js";import"./utils-CDtaCsrA.js";import"./Button-Cv6Z8Boo.js";import"./ProgressBar-Cyf_qqmn.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-xKHqVDKV.js";import"./context-COqsJpPE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBbw6zuw.js";import"./useFocus-C2EjpkOi.js";import"./useFocusRing-GixRvSCg.js";import"./useFocusable-CTkb3k3n.js";import"./FieldError-D98nnMcy.js";import"./Text-CgaJS0Gc.js";import"./Form-B_FAPEGw.js";import"./Group-OTUHyQEq.js";import"./Input-BwarHJUi.js";import"./useControlledState-DVvxwSwc.js";import"./useSpinButton-DKbOWEO-.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./useFormReset-TpB1RScY.js";import"./useEvent-CS1uc1JE.js";import"./useTextField-a1-urwSv.js";import"./Popover-BEiJ1yaF.js";import"./DialogTriggerView-BBwhD0Uy.js";import"./context-DRI9dj_K.js";import"./useStatic-jzgjWO-I.js";import"./Dialog-DrnAiCXy.js";import"./RSPContexts-C-PXoOC4.js";import"./OverlayArrow-Crxssx6c.js";import"./Collection-DWx577Su.js";import"./CollectionBuilder-juJreXU3.js";import"./Separator-DwuryqiD.js";import"./SearchField-B6_Arn2l.js";import"./TextField-BmMhD-pd.js";import"./SelectionManager-DkqMHGWK.js";import"./useCollator-Bw9Jdjt0.js";import"./FocusScope-BxmYTtWO.js";import"./VisuallyHidden-D_XOb9iP.js";import"./LoadingSpinner-CF4f6GZw.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
