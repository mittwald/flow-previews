import{j as r}from"./iframe-Dmf5T25c.js";import{N as o}from"./NumberField-BYba0ymt.js";import{L as t}from"./Label-CBoBMaMu.js";import{F as v}from"./FieldDescription-BsTUsqd7.js";import{F as K}from"./FieldError-BrbRFqe2.js";import{C as M,a as Y}from"./ContextualHelpTrigger-DfBDA06d.js";import{B as k}from"./Button-DJAJQ6nX.js";import{T as w}from"./Text-DLrkajvz.js";import"./index-Cun1SEai.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./index-C0-6kTd0.js";import"./IconWarning-1UlzAmnA.js";import"./ReactAriaControlledValueFix-B1bEAAAe.js";import"./utils-DsML-bt_.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CfglF3Ge.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./FieldError-osDHr7AF.js";import"./Text-DgEV6luH.js";import"./Form-CioSAe3u.js";import"./Group-C7lBiOpp.js";import"./Input-CEe4Geo-.js";import"./useControlledState-ncLEgmHX.js";import"./useFormValidation-BlVKI6aj.js";import"./useSpinButton-NC07UgYC.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./useFormReset-BQs2ByJh.js";import"./useEvent-DYLx6Izz.js";import"./useTextField-CxMmeXoO.js";import"./Popover-BaPL_3pu.js";import"./useOverlayController-BP8yeNHr.js";import"./context-DfHcYJaf.js";import"./useStatic-B7bUROdd.js";import"./OverlayContextProvider-ryh_mCsN.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./OverlayTrigger-CaTON9Cj.js";import"./ControlledNotification-C8UUqqPz.js";import"./LoadingSpinner-CneC6UV3.js";import"./browser-DrFxiFmb.js";import"./EmulatedBoldText-B4ifPFjU.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const te=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,te as __namedExportsOrder,oe as default};
