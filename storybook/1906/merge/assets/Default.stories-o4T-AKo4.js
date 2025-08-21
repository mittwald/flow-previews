import{j as r}from"./iframe-BvdD6qXg.js";import{N as o}from"./NumberField-__9E0sIF.js";import{L as t}from"./Label-BnuyVShl.js";import{F as v}from"./FieldDescription-Bun17LEn.js";import{F as K}from"./FieldError-BU8vkL3I.js";import{C as M,a as Y}from"./ContextualHelpTrigger-05DcjE-S.js";import{B as k}from"./Button-7ivsFGmn.js";import{T as w}from"./Text-CCdgZxrm.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./IconWarning-BNkxb_83.js";import"./ReactAriaControlledValueFix-CeIeXfUd.js";import"./utils-DLyEFlgv.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-qrx4I7MD.js";import"./context-CM85t4Ux.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-2QIW6EnW.js";import"./useFocus-ByAGBV0g.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./FieldError-BhEhBaOS.js";import"./Text-D84jcunx.js";import"./Form-BShbB3hD.js";import"./Group-CrFlWLH5.js";import"./useControlledState-9GcYGGux.js";import"./useSpinButton-DfneBfjJ.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./useFormReset-yMYSmHMi.js";import"./useEvent-DU_k0cnD.js";import"./useTextField-8lhmPbxJ.js";import"./Popover-DcMPgkPU.js";import"./DialogTriggerView-1z2kdnQv.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./Dialog-BGFaL9Kl.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./SearchField-Cf5LxW_o.js";import"./TextField-DFc82d9L.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./LoadingSpinner-BmDETFjn.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
