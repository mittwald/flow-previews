import{j as r}from"./iframe-DkzCwCX4.js";import{N as o}from"./NumberField-Ia0z2VyY.js";import{L as t}from"./Label-BxAVz1UC.js";import{F as v}from"./FieldDescription-CBKqvqxl.js";import{F as K}from"./FieldError-ZxrKxv-k.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BMGkZi7j.js";import{B as k}from"./Button-BnlekXC3.js";import{T as w}from"./Text-nAHNspGp.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./IconWarning-DW3eva0Y.js";import"./ReactAriaControlledValueFix-Bp1vPYDx.js";import"./utils-CLIXtwVU.js";import"./Button-BmtE6ca-.js";import"./ProgressBar-BPpVJdpP.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./context-R4HBJhIj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bo4yNuZG.js";import"./useFocus-ib9l0UKV.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./FieldError-Jo1S5986.js";import"./Text-lQk_ytCv.js";import"./Form-Bd46is8r.js";import"./Group-0pV7udqg.js";import"./useControlledState-BOJEDAaV.js";import"./useSpinButton-3JXrVfh1.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./useFormReset-Dtav30sm.js";import"./useEvent-D_rPsZtc.js";import"./useTextField-DDEFSut-.js";import"./Popover-DLWa551b.js";import"./DialogTriggerView-C0Uk_5SJ.js";import"./context-C3VhVMcy.js";import"./useStatic-DPeMNtEl.js";import"./RSPContexts-ypxcCxo7.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./SearchField-Cdw14afw.js";import"./TextField-DIeR-UPB.js";import"./SelectionManager-Dg3ay1FE.js";import"./LoadingSpinner-CQddXTjo.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
