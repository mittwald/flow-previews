import{j as r}from"./iframe-Cnqm4lFy.js";import{N as o}from"./NumberField-DIeofvub.js";import{L as t}from"./Label-DI5vbAp_.js";import{F as _}from"./FieldDescription-B9zcA8Q-.js";import{F as B}from"./FieldError-BShtxMou.js";import{C as I,a as U}from"./ContextualHelpTrigger-DKq5IRsA.js";import{B as v}from"./Button-GqX5Ed_0.js";import{T as K}from"./Text-BEWqZmc4.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./IconWarning-BGJHeHvx.js";import"./ReactAriaControlledValueFix-D3vmDBN2.js";import"./utils-CnzLW3AP.js";import"./Button-IuJiQec9.js";import"./ProgressBar-DvnI1q4y.js";import"./Label-DR_AMUCZ.js";import"./Hidden-Cs157XWu.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BaQUBcK6.js";import"./context-CV4GK-7T.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./useFocus-_F3heiAA.js";import"./useFocusRing-CPUfygMd.js";import"./useFocusable-BzgCWsb7.js";import"./FieldError-CjkOwEOv.js";import"./Text-CzkkWfVE.js";import"./Form-BSD4Q5fC.js";import"./Group-DTUadKgc.js";import"./useControlledState-BaDEj8YE.js";import"./useSpinButton-74U_zOqA.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./useFormReset-eFY2_Wll.js";import"./useEvent-D6x-_Zc1.js";import"./useTextField-C6ieJdik.js";import"./Popover-CSuX_gIS.js";import"./DialogTriggerView-DiXTTJbN.js";import"./context-p0am_T1z.js";import"./useStatic-Gr7dtALz.js";import"./Dialog-B5ExOuoq.js";import"./RSPContexts-D_hI6riA.js";import"./OverlayArrow-BzYR1xCl.js";import"./Collection-FQ9k0Rtz.js";import"./CollectionBuilder-BxLrnRW8.js";import"./Separator-LafJE-2b.js";import"./SearchField-3la4eIFC.js";import"./TextField-EAqwucdm.js";import"./SelectionManager-ByPZOqoP.js";import"./useCollator-BSKS0jpr.js";import"./FocusScope-BkqoV2HT.js";import"./VisuallyHidden-CPCVsxvc.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./browser-B2d62Nc4.js";import"./EmulatedBoldText-DcBlvLGt.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
