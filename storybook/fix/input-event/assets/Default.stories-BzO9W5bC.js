import{j as r}from"./iframe-H6s4LegX.js";import{N as o}from"./NumberField-DNYu0thi.js";import{L as t}from"./Label-BPnhZAtM.js";import{F as _}from"./FieldDescription-CYV9rp28.js";import{F as B}from"./FieldError-HR0koHM9.js";import{C as I,a as U}from"./ContextualHelpTrigger-4O67_73m.js";import{B as v}from"./Button-BfyS9OW4.js";import{T as K}from"./Text-Wzcs2ORX.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./IconWarning-BOAgarfH.js";import"./ReactAriaControlledValueFix-D11w85dl.js";import"./utils-UMD8tMdI.js";import"./Button-D43Lcc_s.js";import"./ProgressBar-D5gyotl2.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BPkUN2gP.js";import"./context-ByOQKEDv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B_R4nnaN.js";import"./useFocus-CgMx6KCt.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./FieldError-Dt9y-hnT.js";import"./Text-W_tYTgvJ.js";import"./Form-DQJn-VxA.js";import"./Group-Cl4o1nBF.js";import"./useControlledState-CVjmrtmN.js";import"./useSpinButton-DKJs67Lv.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./useFormReset-iDdXzUQ2.js";import"./useEvent-B4EMUzkK.js";import"./useTextField-D6v9RXcK.js";import"./Popover-By6BH1UV.js";import"./DialogTriggerView-D6-ZN5ak.js";import"./context-ByVpJXr1.js";import"./useStatic-DkayqYPl.js";import"./Dialog-CNl9Rue_.js";import"./RSPContexts-B4jRuJIy.js";import"./OverlayArrow-CJ9pmdXw.js";import"./Collection-C7wh_wcR.js";import"./CollectionBuilder-D60ucnzT.js";import"./Separator-BxffjzOt.js";import"./SearchField-DznnLjI8.js";import"./TextField-2cDCflSd.js";import"./SelectionManager-CXLxGtrQ.js";import"./useCollator-5lRk6LtQ.js";import"./FocusScope-BRfTPPDJ.js";import"./VisuallyHidden-BsO4eIaj.js";import"./LoadingSpinner-BtBwTXqe.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
