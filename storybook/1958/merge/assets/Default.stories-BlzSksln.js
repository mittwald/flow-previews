import{j as r}from"./iframe-BAzLYubM.js";import{N as o}from"./NumberField-lWnmaDRO.js";import{L as t}from"./Label-D53E6W3R.js";import{F as v}from"./FieldDescription-DXJ1TO7X.js";import{F as K}from"./FieldError-Cejs8W8V.js";import{C as M,a as Y}from"./ContextualHelpTrigger-CVD5Y8oy.js";import{B as k}from"./Button-DJgbNtOP.js";import{T as w}from"./Text-CjPbBUZt.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./IconWarning-C8vW1cGr.js";import"./ReactAriaControlledValueFix-B9YsNFT5.js";import"./utils-b3dZQxDg.js";import"./Button-DEcgbODe.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Fj3twa-e.js";import"./context-dTk8Xbgu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DP_wKln7.js";import"./useFocus-DNlriqLN.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./FieldError-CY1AiRgy.js";import"./Text-BrSTDiHS.js";import"./Form-VFHeLX6B.js";import"./Group-C36tMHps.js";import"./useControlledState-Ca8ITVoa.js";import"./useSpinButton-CJispgHp.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./useFormReset-BLDHXQeI.js";import"./useEvent-zmd_ZeyS.js";import"./useTextField-9L1zHPzc.js";import"./Popover-Bfr7_pQf.js";import"./DialogTriggerView-MnquLDuj.js";import"./context-Cca8XENB.js";import"./useStatic-Ck2rgCkC.js";import"./Dialog-CNBL61sA.js";import"./RSPContexts-DL_RbNY6.js";import"./OverlayArrow-DVbPN0at.js";import"./Collection-CQV8aK6u.js";import"./CollectionBuilder-B31VuGbq.js";import"./Separator-CRdY-Wkq.js";import"./SearchField-DJpeDF7e.js";import"./TextField-RDj9bqu6.js";import"./SelectionManager-CYYX1vob.js";import"./useCollator-BFbm-Er3.js";import"./FocusScope-Bn06IbqX.js";import"./VisuallyHidden-sQyJVZKI.js";import"./LoadingSpinner-BkZn8ran.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
