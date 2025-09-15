import{j as r}from"./iframe-Bok6IQju.js";import{N as o}from"./NumberField-Bip65AEP.js";import{L as t}from"./Label-DIH0HQY4.js";import{F as v}from"./FieldDescription-DvxvWfMm.js";import{F as K}from"./FieldError-BsA8nwGX.js";import{C as M,a as Y}from"./ContextualHelpTrigger-CsSQUmyb.js";import{B as k}from"./Button-I2NsynHm.js";import{T as w}from"./Text-BAsYg4gL.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./IconWarning-DqBq2uRB.js";import"./ReactAriaControlledValueFix-DhxsPYAe.js";import"./utils-Cq7OaFeW.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./context-BMAErJH4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./FieldError-MhOXyUFr.js";import"./Text-DU8LVe1i.js";import"./Form-COiMNxjB.js";import"./Group-_2KGjRtF.js";import"./useControlledState-B8rFPIj3.js";import"./useSpinButton-jEi6CZs8.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./useFormReset-BWLOy0Jx.js";import"./useEvent-Byqgoyh2.js";import"./useTextField-B52zV2BM.js";import"./Popover-C9lDYFV2.js";import"./DialogTriggerView-EJLujKFA.js";import"./context-BE37SzUM.js";import"./useStatic-CXnTBCs5.js";import"./Dialog-CcOFZkKF.js";import"./RSPContexts-DI5gwLuS.js";import"./OverlayArrow-_F5PaUR8.js";import"./Collection-DLNYYfFu.js";import"./CollectionBuilder-DE8Itz9_.js";import"./Separator-BrmCJU2D.js";import"./SearchField-Dn82cF-B.js";import"./TextField-B7RWcShV.js";import"./SelectionManager-YV1jDUXg.js";import"./useCollator-DW_vDOK-.js";import"./FocusScope-BqlGKiq6.js";import"./VisuallyHidden-C0tUvQRs.js";import"./ControlledNotification-CkAH0xrz.js";import"./LoadingSpinner-CodmSJuG.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
