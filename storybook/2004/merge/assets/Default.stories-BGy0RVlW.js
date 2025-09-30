import{j as r}from"./iframe-Cb4Rgx0e.js";import{N as o}from"./NumberField-ByDOaD3i.js";import{L as t}from"./Label-BaR_Jp0n.js";import{F as v}from"./FieldDescription-CYs7P1qA.js";import{F as K}from"./FieldError-BQp9Q2iV.js";import{C as M,a as Y}from"./ContextualHelpTrigger-B_D-IZrp.js";import{B as k}from"./Button-H4sh-QDS.js";import{T as w}from"./Text-B7bLqwrq.js";import"./index-Cun1SEai.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./IconWarning-BnvsEgCq.js";import"./ReactAriaControlledValueFix-BFlZHtZa.js";import"./utils-ClJ9kHS9.js";import"./Button-CEnLKZ0o.js";import"./ProgressBar-DhcjamRH.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Q8MCvqvF.js";import"./useFocus-DShqRyJ9.js";import"./useFocusRing-BzqCweW_.js";import"./useFocusable-Dx7vOlYc.js";import"./FieldError-BgWprM1s.js";import"./Text-U_OSpJmR.js";import"./Form-Bg0W0weo.js";import"./Group-C_iyrCYK.js";import"./Input-CC07jkqr.js";import"./useControlledState-CQK5P4gM.js";import"./useFormValidation-CF7ZQkcY.js";import"./useSpinButton-CDWFSuW5.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./useFormReset-XDrOOyWm.js";import"./useEvent-DD3xMrdQ.js";import"./useTextField-CtknEU75.js";import"./Popover-CIu4Zu5_.js";import"./DialogTriggerView-BiIifotB.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./RSPContexts-WcRCGlYY.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./context-DsHIbBn4.js";import"./Separator-BKeFtAeg.js";import"./SelectionManager-CDVGcynV.js";import"./LoadingSpinner-CjRzs_7S.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var j,f,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,N,V;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var C,L,y;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var A,E,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,W,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(T=(W=l.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var q,H,_;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var B,I,U;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const $r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,$r as __namedExportsOrder,Zr as default};
