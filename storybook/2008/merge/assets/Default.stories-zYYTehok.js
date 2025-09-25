import{j as r}from"./iframe-CQa7qTJa.js";import{N as o}from"./NumberField-0qjlgtsl.js";import{L as t}from"./Label-DFElwRl3.js";import{F as v}from"./FieldDescription-B9BKUdu7.js";import{F as K}from"./FieldError-j63R-YGj.js";import{C as M,a as Y}from"./ContextualHelpTrigger-phiZiFxL.js";import{B as k}from"./Button-CHgvO37v.js";import{T as w}from"./Text-CH2mDEXN.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./IconWarning-CeyZIf1V.js";import"./ReactAriaControlledValueFix-D6LEN4ep.js";import"./utils-cYx4gHhD.js";import"./Button-DeHwua8T.js";import"./ProgressBar-FMaJOq3V.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGKdhdH_.js";import"./context-BU9KDZsm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D-jgt3FH.js";import"./useFocus-C9JxIGDi.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocusable-FCuKz-qE.js";import"./FieldError-D5-jV0S5.js";import"./Text-BRoIiTz6.js";import"./Form-CF3ngYGn.js";import"./Group-D-4ygLJZ.js";import"./useControlledState-CFUYHrzm.js";import"./useSpinButton-Dh8_nG3x.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./useFormReset-DY9tf8Hl.js";import"./useEvent-CyQldz3u.js";import"./useTextField-DOzcbfzW.js";import"./Popover-DDG0vMkE.js";import"./DialogTriggerView-Cf-mCLAZ.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./RSPContexts-C2Phcdxj.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./SearchField-DroG_a10.js";import"./TextField-BNBlfRPu.js";import"./SelectionManager-CZ4deCBD.js";import"./LoadingSpinner-DVFRCiEF.js";import"./browser-BhSl0yCb.js";import"./EmulatedBoldText-Ce7b_D_t.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Xr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Xr as __namedExportsOrder,Qr as default};
