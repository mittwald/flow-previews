import{j as r}from"./iframe-BDw0JWSR.js";import{N as o}from"./NumberField-Bb23gzSC.js";import{L as t}from"./Label-Be_-w5vU.js";import{F as _}from"./FieldDescription-CKlNthzu.js";import{F as B}from"./FieldError-D-ArndZL.js";import{C as I,a as U}from"./ContextualHelpTrigger-DxQ_XQBi.js";import{B as v}from"./Button-yu20EEPl.js";import{T as K}from"./Text-BXVMRRcn.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./IconWarning-C4ko8TBx.js";import"./ReactAriaControlledValueFix-DtrCAPIs.js";import"./utils-D_w6CRD2.js";import"./Button-lKZFx-Lr.js";import"./ProgressBar-CyYOn_uf.js";import"./Label-CUqrwqQ8.js";import"./Hidden-pH7w6Mtj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C5kEgDfJ.js";import"./context-D5nQNM7t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BNZPQqcG.js";import"./useFocus-Dj2Ek65f.js";import"./useFocusRing-52GqPzGX.js";import"./useFocusable-D3-cRXek.js";import"./FieldError-ByToyRq3.js";import"./Text-DEFEolTP.js";import"./Form-Q2KPI748.js";import"./Group-CKyiWQ2U.js";import"./useControlledState-Cvl_BVXS.js";import"./useSpinButton-CgeiY5BG.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./useFormReset-JMYigv_3.js";import"./useEvent-Cw4Az-S_.js";import"./useTextField-qrm6HsnU.js";import"./Popover-BDeGicz_.js";import"./DialogTriggerView-5dEI7enB.js";import"./context-DDduvggu.js";import"./useStatic-D7eirymu.js";import"./Dialog-D8b2kpaQ.js";import"./RSPContexts-0zkktiyR.js";import"./OverlayArrow-CwRuRLsS.js";import"./Collection-DDNNYOGK.js";import"./CollectionBuilder-DuESWRb0.js";import"./Separator-Cydo87Fk.js";import"./SearchField-DqNeviEu.js";import"./TextField-DXLuZ0kd.js";import"./SelectionManager-CoRWAbK4.js";import"./useCollator-DLoPjsqn.js";import"./FocusScope-CC9BsQaO.js";import"./VisuallyHidden-BSZ5GesV.js";import"./LoadingSpinner-CFe72iUG.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
