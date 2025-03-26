import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-Dout403D.js";import"./index-CXcpQZ5J.js";import{L as t}from"./Label-BlFJqu_U.js";import{a as O}from"./index-B-lxVbXh.js";import{F as v}from"./FieldDescription-DwkiDR0F.js";import{F as I}from"./FieldError-B3rmrlTw.js";import{C as U,a as _}from"./ContextualHelpTrigger-Cvfkc3zY.js";import{B as k}from"./Button-DoxNqpU5.js";import{T as w}from"./Text-Dr5MNJ9m.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./Button-BcgzNVYq.js";import"./utils-D_n-6U4k.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./FieldError-BGs8e4N-.js";import"./Text-BUuVncJZ.js";import"./Form-czy9A9fl.js";import"./Group-DEpQP6iN.js";import"./Input-B3uAq9ei.js";import"./useControlledState-CHe-wEx1.js";import"./useFormValidation-xTAo0ZUA.js";import"./useSpinButton-B4Y-laSk.js";import"./useFormReset-C7M_aUQL.js";import"./useEvent-9NPw0H85.js";import"./useTextField-Di-fd6ps.js";import"./v4-CtRu48qb.js";import"./Popover-C7hXwPPn.js";import"./OverlayTrigger-Dv9azQvo.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";import"./Dialog-D9rW5YgD.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./useOverlayTriggerState-EP699KjE.js";import"./SelectionManager-DLUrYsh7.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-gOfyQuAV.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-C8RokD4H.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";const ee={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,f,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,D,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var C,L,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,E,W;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,y,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(H=(y=l.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var R,T,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const oe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,n as WithFieldError,l as WithUnit,oe as __namedExportsOrder,ee as default};
