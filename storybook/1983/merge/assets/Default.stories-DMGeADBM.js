import{j as r}from"./iframe-CTVhNlXB.js";import{N as o}from"./NumberField-DUTARmGZ.js";import{L as t}from"./Label-BH61eOAw.js";import{F as v}from"./FieldDescription-d0lfKbrQ.js";import{F as K}from"./FieldError-CUzLiqhG.js";import{C as M,a as Y}from"./ContextualHelpTrigger-C7FhUd_r.js";import{B as k}from"./Button-dCi6y-L9.js";import{T as w}from"./Text-BLo0dekR.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./IconWarning-DczNnEus.js";import"./ReactAriaControlledValueFix-BOm2ADcy.js";import"./utils-DolbARJ8.js";import"./Button-D-RdbR2Z.js";import"./ProgressBar-CFHcvSgt.js";import"./Label-BzU31htm.js";import"./Hidden-CCSOhlCd.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cu4D06kD.js";import"./context-OLvSZRNo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-By95yFbD.js";import"./useFocus-B_Alw_Kd.js";import"./useFocusRing-BklgwE0b.js";import"./useFocusable-DI6rxpio.js";import"./FieldError-Db2L6cd5.js";import"./Text-Mnh5Jpbt.js";import"./Form-BPrp3nIT.js";import"./Group-BvpcRFuc.js";import"./useControlledState-L5KsJeFF.js";import"./useSpinButton-BzkKWA9I.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./useFormReset-E2HVy4kF.js";import"./useEvent-Th5L4n2g.js";import"./useTextField-S5PdSn0a.js";import"./Popover-CVq2IpQ_.js";import"./DialogTriggerView-Bcwx9J50.js";import"./context-C7a-dRgh.js";import"./useStatic-DGBPTsqJ.js";import"./RSPContexts-dwc2BRmP.js";import"./ClearPropsContextView-mfz5hcjJ.js";import"./FocusScope-DSxBaVHz.js";import"./useCollator-CEh5JEF4.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./Collection-DZ2C53It.js";import"./CollectionBuilder-CiesGU-z.js";import"./Separator-BvYvyYPM.js";import"./SearchField-BNsFe36r.js";import"./TextField-CCmvbP69.js";import"./SelectionManager-e7sW0Ylz.js";import"./LoadingSpinner-DJM9ERHN.js";import"./browser-DlHr08AR.js";import"./EmulatedBoldText-YiQdYmo2.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
