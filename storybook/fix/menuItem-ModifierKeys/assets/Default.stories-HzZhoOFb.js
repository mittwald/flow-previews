import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-BbeSPB0H.js";import"./index-BZISi7jw.js";import{L as t}from"./Label-CzYjGm4V.js";import{a as O}from"./index-B-lxVbXh.js";import{F as v}from"./FieldDescription-BV4XyTGq.js";import{F as I}from"./FieldError-DbNWEBso.js";import{C as U,a as _}from"./ContextualHelpTrigger-78tF3dGq.js";import{B as k}from"./Button-CF4ZysTX.js";import{T as w}from"./Text-DKc2hFom.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./IconApp-W8-S6AAB.js";import"./IconWarning-BUA863Ku.js";import"./Button-DlOLKXkK.js";import"./utils-B8p6n-_S.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DjubqfyV.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";import"./useFocus-0lzzAyJ_.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./FieldError-CFxmzwuR.js";import"./Text-CUmgXOYU.js";import"./Form-CQcw_pbg.js";import"./Group-DxLqPfCe.js";import"./Input-DtximQ_K.js";import"./useControlledState-4nfZ-XMX.js";import"./useSpinButton-D_VWpY4-.js";import"./useFormReset-m57alayF.js";import"./useEvent-BxpP-RFo.js";import"./useTextField-ecyK3ZTB.js";import"./v4-CtRu48qb.js";import"./Popover-Bo6e0GAV.js";import"./MenuTrigger-4stFWxuJ.js";import"./context-Cn4G8t_B.js";import"./useStatic-Boalhu8h.js";import"./Dialog-TWm-lwKH.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-BxXqfwgF.js";import"./Collection-B-y1oEx2.js";import"./CollectionBuilder-cVXcHFND.js";import"./Separator-D0eYhWhZ.js";import"./SelectionManager-BB9PAfr3.js";import"./useCollator-CB8NJtcR.js";import"./FocusScope-2Ar0PVcM.js";import"./VisuallyHidden-DCnFJsId.js";import"./DialogTriggerView-BetAvd-7.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";const Yr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,f,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,D,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var C,L,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,y,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(H=(y=l.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var R,T,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const Zr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,n as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,l as WithUnit,Zr as __namedExportsOrder,Yr as default};
