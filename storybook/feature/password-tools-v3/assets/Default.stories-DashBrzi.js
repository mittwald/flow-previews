import{j as r}from"./iframe-BBx9-gCC.js";import{N as o}from"./NumberField-Bro4PJRv.js";import{L as t}from"./Label-CN6ALsUC.js";import{F as _}from"./FieldDescription-jMpf2Cwd.js";import{F as B}from"./FieldError-Db676PEG.js";import{C as I,a as U}from"./ContextualHelpTrigger-BoCENCRy.js";import{B as v}from"./Button-Ddotms0d.js";import{T as K}from"./Text-BRZqhCt6.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./IconWarning-47GPuUwW.js";import"./ReactAriaControlledValueFix-DV_UanZW.js";import"./utils-SrU--Gh3.js";import"./Button-L3SI-iJl.js";import"./ProgressBar-CJ4YAGIN.js";import"./Label-CVor_bqX.js";import"./Hidden-BTXZmZLy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CF_pOETX.js";import"./context-Ck7bCMhf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./useFocus-BXsHwCAW.js";import"./useFocusRing-D6klBOWk.js";import"./useFocusable-D4Fl883K.js";import"./FieldError-CQ-c_qp9.js";import"./Text--Ew1YFd1.js";import"./Form-DewizsXc.js";import"./Group-BE3jiUC2.js";import"./Input-BKE4e8rI.js";import"./useControlledState-DddH35UQ.js";import"./useSpinButton-Bp5Fouru.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./useFormReset-dy85Q4T2.js";import"./useEvent-CbTJhmHg.js";import"./useTextField-Sw__XDSo.js";import"./Popover-CjCquK7b.js";import"./DialogTriggerView-D7E3O5i1.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";import"./Dialog-H4IcaOME.js";import"./RSPContexts-JH7zjLDh.js";import"./OverlayArrow-B_GGjq9s.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./SearchField-CFDyyBZS.js";import"./TextField-D1wRIDn_.js";import"./SelectionManager-Jj460orM.js";import"./useCollator-CBTsDb_F.js";import"./FocusScope-CSSHoYlT.js";import"./VisuallyHidden-DCQ3C4tW.js";import"./LoadingSpinner-AZclZqAu.js";import"./browser-Bo5IRxBw.js";import"./EmulatedBoldText-BvDF2M3d.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
