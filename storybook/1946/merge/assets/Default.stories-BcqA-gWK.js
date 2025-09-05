import{j as r}from"./iframe-r9Fl_3r-.js";import{N as o}from"./NumberField-DDcQTUA7.js";import{L as t}from"./Label-DgY637fA.js";import{F as v}from"./FieldDescription-DoaPcd7E.js";import{F as K}from"./FieldError-B_shqPON.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BlRkXjRs.js";import{B as k}from"./Button-D0ktHzCI.js";import{T as w}from"./Text-DD-b1p2M.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./IconWarning-BUxpotmw.js";import"./ReactAriaControlledValueFix-qzhLZtrn.js";import"./utils-DXh-iENK.js";import"./Button-4Qe77JoQ.js";import"./ProgressBar-BsRRuR7U.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DoVt-K4x.js";import"./context-B1eqcBF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjAT5thu.js";import"./useFocus-DRS9ufOF.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocusable-DI-LrkzR.js";import"./FieldError-D3xuSMMg.js";import"./Text-DHfFA3io.js";import"./Form-D9IRbY4n.js";import"./Group-BdAgZaYl.js";import"./useControlledState-Bxg_NaN0.js";import"./useSpinButton-DqNk6p3i.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./useFormReset-DxbIlA0W.js";import"./useEvent-Dowxq_UB.js";import"./useTextField-Bg6cyBen.js";import"./Popover-DRfqiDmT.js";import"./DialogTriggerView-C_n5cTLw.js";import"./context-D7mbIFkz.js";import"./useStatic-Dwli2ElM.js";import"./Dialog-CqKbtFhs.js";import"./RSPContexts-Bz7sSPBE.js";import"./OverlayArrow-HXzjk5ZA.js";import"./Collection-DOWMAROO.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Separator-Z9TJ6XEa.js";import"./SearchField-DOWcWepW.js";import"./TextField-BiW4cyB4.js";import"./SelectionManager-BmeUKben.js";import"./useCollator-B2W9GfqU.js";import"./FocusScope-C8ZyuACd.js";import"./VisuallyHidden-CHwjrWyl.js";import"./LoadingSpinner-zCjOjpaf.js";import"./browser-tiRbxzJD.js";import"./EmulatedBoldText-CDsZBMJH.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Zr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Zr as __namedExportsOrder,Xr as default};
