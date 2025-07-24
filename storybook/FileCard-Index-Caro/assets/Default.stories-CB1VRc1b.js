import{j as r}from"./iframe-vEDY1jTX.js";import{N as o}from"./NumberField-D6Bk4uff.js";import{L as t}from"./Label-DkEv0v7K.js";import{F as _}from"./FieldDescription-cIrJEjrj.js";import{F as B}from"./FieldError-BpiRfXIY.js";import{C as I,a as U}from"./ContextualHelpTrigger-fE4vdEpT.js";import{B as v}from"./Button-xQdRWtXu.js";import{T as K}from"./Text-75grQ_r_.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./IconWarning-Br_z56yn.js";import"./ReactAriaControlledValueFix-G-bJsIDm.js";import"./utils-gfhUS_KB.js";import"./Button-CkK3LebK.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./context-DTpTEKQR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocus-bOn2kcoo.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./FieldError-QhGTfIPV.js";import"./Text-C6tNNGeu.js";import"./Form-CA3We__k.js";import"./Group-Bwqfb8JX.js";import"./Input-CX0hj3qY.js";import"./useControlledState-CQf3r7ZL.js";import"./useSpinButton-D4VGYN29.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./useFormReset-CgZBEhDH.js";import"./useEvent-7vAcQsYf.js";import"./useTextField-DyXRlqMQ.js";import"./Popover-C5GydJN0.js";import"./DialogTriggerView-BCIqYBll.js";import"./context-CCKbj613.js";import"./useStatic-BCP0-isc.js";import"./Dialog-BJmoKeFy.js";import"./RSPContexts-DWSs-nZQ.js";import"./OverlayArrow-twlWLGKk.js";import"./Collection-CGUFB12f.js";import"./CollectionBuilder-Czcc5V6M.js";import"./Separator-CcFrx14D.js";import"./SearchField-CjtC4DwQ.js";import"./TextField-wFSW5he1.js";import"./SelectionManager-Co-ck4zL.js";import"./useCollator-F0CDxzTU.js";import"./FocusScope-DqjTzzUX.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./LoadingSpinner-DEOdZhCL.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,j,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var D,N,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,C,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var T,q,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(y=(q=l.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var H,O,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Pr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Pr as __namedExportsOrder,Jr as default};
