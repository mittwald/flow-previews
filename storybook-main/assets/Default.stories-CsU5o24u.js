import{j as r}from"./iframe-DIlFkKfe.js";import{N as o}from"./NumberField-BbLJHRSb.js";import{L as t}from"./Label-BSjWh_q0.js";import{F as v}from"./FieldDescription-s_Lc-ZQl.js";import{F as K}from"./FieldError-D7S_o8t1.js";import{C as M,a as Y}from"./ContextualHelpTrigger-9-ALuKa_.js";import{B as k}from"./Button-BvaN7Y-D.js";import{T as w}from"./Text-CG4Ucl9p.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./IconWarning-BS6-kuBv.js";import"./ReactAriaControlledValueFix-OIaBx3G8.js";import"./utils-E_0WoXkF.js";import"./Button-pHXSBUAI.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtXixU_d.js";import"./context-BIl-kujG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9JeOi6r.js";import"./useFocus-CiEitWNM.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./FieldError-5aNzky8T.js";import"./Text-DuUlrCBa.js";import"./Form-HyfIN8sB.js";import"./Group-CabJqO_k.js";import"./useControlledState-CWVlWyPG.js";import"./useSpinButton-CgBCfHhG.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./useFormReset-BM0i_QS2.js";import"./useEvent-BZtMxgrD.js";import"./useTextField-Bo95H554.js";import"./Popover-BX6fBO3O.js";import"./DialogTriggerView-B86hnYR6.js";import"./context-SLpiSpKp.js";import"./useStatic-D-gec7Hx.js";import"./Dialog-CjLiSQnW.js";import"./RSPContexts-BFg1cs6H.js";import"./OverlayArrow-C5Az4zJe.js";import"./Collection-BBECU8Th.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Separator-BYxoqALx.js";import"./SearchField-BU427pXg.js";import"./TextField-BSCkD-qq.js";import"./SelectionManager-_Z7bs6df.js";import"./useCollator-CcgJo-Oq.js";import"./FocusScope-C9n1sP7L.js";import"./VisuallyHidden-DzVxkJhT.js";import"./LoadingSpinner-wlCv7fWm.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
