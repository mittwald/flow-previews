import{j as r}from"./iframe-CPZzz606.js";import{N as o}from"./NumberField-SMW4Soqp.js";import{L as t}from"./Label-B_64PqkQ.js";import{F as _}from"./FieldDescription-BnVwQ09c.js";import{F as B}from"./FieldError-BAlZ7N7p.js";import{C as I,a as U}from"./ContextualHelpTrigger-C0R8jFsn.js";import{B as v}from"./Button-pCBSultP.js";import{T as K}from"./Text-DzdHITqg.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./IconWarning-BPgxt_jx.js";import"./ReactAriaControlledValueFix-DkGPI_QH.js";import"./utils-hIOiRbRa.js";import"./Button-Duf2neHD.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-z4mqv1Jd.js";import"./context-CViJrtm-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./useFocus-C_gNEsKA.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./FieldError-zYKEm-70.js";import"./Text-BoUJhWX_.js";import"./Form-BILDQ_LX.js";import"./Group-C8G6Zc28.js";import"./useControlledState-9qfYMj22.js";import"./useSpinButton-TPigW4jp.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./useFormReset-C84L7XAZ.js";import"./useEvent-7mKEowYR.js";import"./useTextField-BMmwbaof.js";import"./Popover-BrkdeB_0.js";import"./DialogTriggerView-CzpBmyqI.js";import"./context-AQX-vkQB.js";import"./useStatic-Dc3QDw1T.js";import"./Dialog-DwMRnG84.js";import"./RSPContexts-CvcQ69I6.js";import"./OverlayArrow-BDHME5Dc.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./SearchField-AT0aPHjw.js";import"./TextField-DmRYj9dm.js";import"./SelectionManager-aTZIig9u.js";import"./useCollator-B1cTbBXX.js";import"./FocusScope-jLRXpVZJ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./LoadingSpinner-BcRThk1E.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Jr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Jr as __namedExportsOrder,Gr as default};
