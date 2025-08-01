import{j as r}from"./iframe-Ct0YhZ2w.js";import{N as o}from"./NumberField-CUX2-vbU.js";import{L as t}from"./Label-DV38Rr2k.js";import{F as _}from"./FieldDescription-DY9RVQO3.js";import{F as B}from"./FieldError-B73bAD-i.js";import{C as I,a as U}from"./ContextualHelpTrigger-ggJ6ZFxm.js";import{B as v}from"./Button-DzWxEQls.js";import{T as K}from"./Text-c1auIdYf.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./IconWarning-Nibz28Ko.js";import"./ReactAriaControlledValueFix-B67c5BQA.js";import"./utils-ZYq7i5E4.js";import"./Button-BQqMUkU2.js";import"./ProgressBar-BerxnO-h.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CFRZWafb.js";import"./context-C170bgop.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CCIxnJPX.js";import"./useFocus-BOvvpzaY.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./FieldError-GfqWmPDy.js";import"./Text-1hz8XXbQ.js";import"./Form-D5t9IVHW.js";import"./Group-Cb0btd0m.js";import"./useControlledState-BKGcljyy.js";import"./useSpinButton-iMlAAgWc.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./useFormReset-B8uzDw4w.js";import"./useEvent-BiRRHzhl.js";import"./useTextField-CmZz0IWu.js";import"./Popover-BtKD-QEY.js";import"./DialogTriggerView-BGtRBSVG.js";import"./context-DgvMtz2m.js";import"./useStatic-QRqKr9NZ.js";import"./Dialog-CAIBTckX.js";import"./RSPContexts-CSqJcAwc.js";import"./OverlayArrow-Co-RMxdG.js";import"./Collection-CsGYI6W2.js";import"./CollectionBuilder-BcuD1eRh.js";import"./Separator-B99z4htK.js";import"./SearchField-BzrmJ9Dk.js";import"./TextField-BZzrHcv0.js";import"./SelectionManager-CdGGEfbQ.js";import"./useCollator-BztlYHwj.js";import"./FocusScope-CiY9IOxE.js";import"./VisuallyHidden-C2BGRztG.js";import"./LoadingSpinner-BsXh4HZo.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
