import{j as r}from"./iframe-BmySKFCq.js";import{N as o}from"./NumberField-CeHrEYSE.js";import{L as t}from"./Label-D07kElwt.js";import{F as _}from"./FieldDescription-DZSCJ8f9.js";import{F as B}from"./FieldError-DoR06PZF.js";import{C as I,a as U}from"./ContextualHelpTrigger-B47tAZud.js";import{B as v}from"./Button-wwRASOhM.js";import{T as K}from"./Text-VzeX0aJg.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOmyjk4c.js";import"./mergeRefs-B6V94bK_.js";import"./index-BzrGOqLm.js";import"./IconWarning-DwPTlpqV.js";import"./ReactAriaControlledValueFix-CzAP8Z_t.js";import"./utils-DoYwLUW3.js";import"./Button-PXGB-mGz.js";import"./ProgressBar-CRcrCKjd.js";import"./Label-BqzVWqzc.js";import"./Hidden-CRzIvDGy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH0aVX1E.js";import"./context-CMcVAeGU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMuaLZjl.js";import"./useFocus-XVtYQ6Ak.js";import"./useFocusRing-C4oIu2i3.js";import"./useFocusable-DwzVkHoA.js";import"./FieldError-l_dSmRSM.js";import"./Text-DabCaf9H.js";import"./Form-mecE9jTR.js";import"./Group-DXKI6wUk.js";import"./useControlledState-CAYoIw9O.js";import"./useSpinButton-CEH9HHBg.js";import"./useLocalizedStringFormatter-DQn86H97.js";import"./useFormReset-LQ-kKN_o.js";import"./useEvent-BQlUDiGM.js";import"./useTextField-CAqvvnqS.js";import"./Popover-BPmkp0NS.js";import"./DialogTriggerView-MdBspzTk.js";import"./context-BePneJT8.js";import"./useStatic-D7ToV0Cs.js";import"./Dialog-BeGSh39F.js";import"./RSPContexts-BM6OcLSl.js";import"./OverlayArrow-RMxusYD6.js";import"./Collection-Cyg6AXNz.js";import"./CollectionBuilder-D9VQY6hP.js";import"./Separator-Dtd7OmID.js";import"./SearchField-w_ZoQukU.js";import"./TextField-EWYq_6o7.js";import"./SelectionManager-DI5u0v70.js";import"./useCollator-CmZhOI3C.js";import"./FocusScope-Bruj9SRJ.js";import"./VisuallyHidden-CTALs_-h.js";import"./LoadingSpinner-8ONEDUJ3.js";import"./browser-Bc8vbUyQ.js";import"./EmulatedBoldText-DPhJV8kT.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
