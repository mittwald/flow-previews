import{j as r}from"./iframe-DjexR8Tp.js";import{N as o}from"./NumberField-Cf6pNNdd.js";import{L as t}from"./Label-CLVda-nU.js";import{F as v}from"./FieldDescription-CwiwIRwR.js";import{F as K}from"./FieldError-CesaJiuj.js";import{C as M,a as Y}from"./ContextualHelpTrigger-OB2-_LMo.js";import{B as k}from"./Button-DYqAz9Ax.js";import{T as w}from"./Text-aOHzhDvr.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./IconWarning-iYDgM4y1.js";import"./ReactAriaControlledValueFix-BsvkGL9L.js";import"./utils-T6f7ZmRV.js";import"./Button-B9QzJYPZ.js";import"./ProgressBar-DpKa1PlM.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ott8nG03.js";import"./context-CVxCaAZx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mG8JzCXO.js";import"./useFocus-Bu01zz1F.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocusable-C3y7tw8Z.js";import"./FieldError-By7Lq8z0.js";import"./Text-Xp1USGoa.js";import"./Form-BEAgwaeD.js";import"./Group-CtcjVW7W.js";import"./useControlledState-rTz5CSzi.js";import"./useSpinButton-Co_FGhXh.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./useFormReset-DuzsM7E6.js";import"./useEvent-CO0sOg2Z.js";import"./useTextField-DhOhnSWz.js";import"./Popover-CvxF9MLE.js";import"./DialogTriggerView-B9cJTcHh.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";import"./Dialog-D-o_xP1i.js";import"./RSPContexts-BkQTRtx0.js";import"./OverlayArrow-OIwcMk6i.js";import"./Collection-CuM96cDy.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Separator-BbijxOJI.js";import"./SearchField-CEGXi6ip.js";import"./TextField-DsmYuxt9.js";import"./SelectionManager-BV1kevWQ.js";import"./useCollator-DwaKC1E9.js";import"./FocusScope-CeR_G6vH.js";import"./VisuallyHidden-CwBbURTG.js";import"./LoadingSpinner-D4t9V_YE.js";import"./browser-B8Z7dOtx.js";import"./EmulatedBoldText-DPzl8Gjb.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
