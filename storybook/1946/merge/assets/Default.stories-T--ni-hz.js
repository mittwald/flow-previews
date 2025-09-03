import{j as r}from"./iframe-B9WJ5iKj.js";import{N as o}from"./NumberField-BtjUcFuN.js";import{L as t}from"./Label-Txm3TZUN.js";import{F as v}from"./FieldDescription-BeSAjbke.js";import{F as K}from"./FieldError-BOUOKYBY.js";import{C as M,a as Y}from"./ContextualHelpTrigger-BO8ks8oW.js";import{B as k}from"./Button-D_a9cGts.js";import{T as w}from"./Text-CSPzXI-q.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./IconWarning-iA3abBs4.js";import"./ReactAriaControlledValueFix-BPmbd47m.js";import"./utils-DB8fltME.js";import"./Button-BgiaEGOw.js";import"./ProgressBar-C1_1cHyi.js";import"./Label-D_4wO_RK.js";import"./Hidden-DsQKnrr0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-oUVSUbln.js";import"./context-B6-GkfV2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cwd9gmzr.js";import"./useFocus-hMfli9CJ.js";import"./useFocusRing-BfWSMilO.js";import"./useFocusable-uW0l0Nx0.js";import"./FieldError-DavyfSHK.js";import"./Text-COQnmlIw.js";import"./Form-FBD95hlW.js";import"./Group-Cz3tZ_vF.js";import"./useControlledState-DqBsJvcb.js";import"./useSpinButton-BVnIzCJp.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./useFormReset-X7y3l5xq.js";import"./useEvent-CBc3F-6H.js";import"./useTextField-CTUt_DB_.js";import"./Popover-CeU9-gLu.js";import"./DialogTriggerView-C_MYOBvn.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./Dialog-D5fJjWQP.js";import"./RSPContexts-CDVdjyBw.js";import"./OverlayArrow-CE7drKv_.js";import"./Collection-DJgASAUx.js";import"./CollectionBuilder-C14ghNrk.js";import"./Separator-dmjViTlK.js";import"./SearchField-DA0x0iyL.js";import"./TextField-DKiK_bQe.js";import"./SelectionManager-CfvJ92XB.js";import"./useCollator-2x6iNpQz.js";import"./FocusScope-aIFO3fHs.js";import"./VisuallyHidden-BITg658c.js";import"./LoadingSpinner-BLFdik4W.js";import"./browser-BOk1fb3_.js";import"./EmulatedBoldText-C7rcw5Ry.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Xr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
