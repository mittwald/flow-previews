import{j as r}from"./iframe--ZPVLz8g.js";import{N as o}from"./NumberField---sgTn0X.js";import{L as t}from"./Label-CEhk5YLt.js";import{F as v}from"./FieldDescription-CeJeSW2L.js";import{F as K}from"./FieldError-D2ZL0CC8.js";import{C as M,a as Y}from"./ContextualHelpTrigger-Xa9_8uH5.js";import{B as k}from"./Button-ipeD2xQq.js";import{T as w}from"./Text-BWChA6Qp.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./IconWarning-4_E3WNTs.js";import"./ReactAriaControlledValueFix-D0soGR-L.js";import"./utils-CjuahFs2.js";import"./Button-nXFtpqu6.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./context-CYq-vfev.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BT12SUT-.js";import"./useFocus-BI6mVvV1.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./FieldError-jq5pvDUD.js";import"./Text-du_1NL-y.js";import"./Form-CzoyYLrP.js";import"./Group-CTVEw3FJ.js";import"./useControlledState-CTCa-DaJ.js";import"./useSpinButton-CyfErz4A.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./useFormReset-B3ZybcNU.js";import"./useEvent-Co8EjSPm.js";import"./useTextField-DLQgkNBY.js";import"./Popover-CwXjY44O.js";import"./DialogTriggerView-CLfTDJ19.js";import"./context-BCg0Ekp8.js";import"./useStatic-IQie-ZqP.js";import"./Dialog-C5Xh-9_q.js";import"./RSPContexts-4UEDZgUk.js";import"./OverlayArrow-BrvbOkZ-.js";import"./Collection-BOzi5_VH.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Separator-BUnYRuL5.js";import"./SearchField-DDwMLnUN.js";import"./TextField-BusVcIbT.js";import"./SelectionManager-V388soIh.js";import"./useCollator-CfPt7Von.js";import"./FocusScope-C9FAKDVz.js";import"./VisuallyHidden-CbNFz2F0.js";import"./LoadingSpinner-DOWHWybS.js";import"./browser-D6_kvesK.js";import"./EmulatedBoldText-Qqp8fG5V.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
