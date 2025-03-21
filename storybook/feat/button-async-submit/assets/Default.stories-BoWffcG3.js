import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-BkqLj4H-.js";import"./index-BZISi7jw.js";import{L as t}from"./Label-Awo8DmgK.js";import{a as O}from"./index-B-lxVbXh.js";import{F as v}from"./FieldDescription-DtEGO0XD.js";import{F as I}from"./FieldError-D27MoMaZ.js";import{C as U,a as _}from"./ContextualHelpTrigger-v_zH60Ur.js";import{B as k}from"./Button-GjZOW2uO.js";import{T as w}from"./Text-BPAvSiAh.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./Button-Bd7GnYjT.js";import"./utils-BAtcVSHo.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./FieldError-DGtg9YPD.js";import"./Text-CxIdO6ok.js";import"./Form-qm5cnMB7.js";import"./Group-Cwv9Jqui.js";import"./Input-njpPCLyw.js";import"./useControlledState-4nfZ-XMX.js";import"./useFormValidation-CbU_Acnh.js";import"./useSpinButton-CFBcqo5F.js";import"./useFormReset-4n_yD9ws.js";import"./useEvent-0eO3yNkM.js";import"./useTextField--bi5H5bl.js";import"./v4-CtRu48qb.js";import"./Popover-gSINIlSC.js";import"./OverlayTrigger-CI-Ah9mp.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";import"./Dialog-CI6Vrv3H.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-B-bZ71PV.js";import"./Collection-BHsfcKmd.js";import"./CollectionBuilder-C_ibKIdv.js";import"./Separator-BH0DZ6tu.js";import"./SelectionManager-DjqhJ6FU.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-FOL1CxoP.js";import"./VisuallyHidden-FconPwXt.js";import"./DialogTriggerView-erLGigvv.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";const $r={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var C,L,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,E,W;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,y,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const re=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,n as WithFieldError,l as WithUnit,re as __namedExportsOrder,$r as default};
