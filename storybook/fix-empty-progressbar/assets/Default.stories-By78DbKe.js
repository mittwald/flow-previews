import{j as r}from"./iframe-Dx9XfaX_.js";import{N as o}from"./NumberField-C4wI-Swy.js";import{L as t}from"./Label-BC2AwvSS.js";import{F as _}from"./FieldDescription-k8znbLFY.js";import{F as B}from"./FieldError-BkrOXECC.js";import{C as I,a as U}from"./ContextualHelpTrigger-BAZY_CZk.js";import{B as v}from"./Button-MatbmytM.js";import{T as K}from"./Text-DiCJ_7I6.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DO4Dnyvq.js";import"./mergeRefs-Do6vvZAc.js";import"./index-BXqdq2Ma.js";import"./IconWarning-BYDskjWX.js";import"./ReactAriaControlledValueFix-B7uWVe_k.js";import"./utils-CRV-JyXd.js";import"./Button-DbcQ2aGW.js";import"./ProgressBar-CsQvJS_j.js";import"./Label-DwfrzMrM.js";import"./Hidden-Cf6kyMxF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B5pgN2NU.js";import"./context-CaqfYy9P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA1KERpG.js";import"./useFocus-5jQbhqKe.js";import"./useFocusRing-Dq63eQZe.js";import"./useFocusable-B_6jRB6i.js";import"./FieldError-DljPEn2l.js";import"./Text-8Az0PCun.js";import"./Form-DItLtMsi.js";import"./Group-DNiybGdz.js";import"./useControlledState-B-pjTNcE.js";import"./useSpinButton-B9t_bFZM.js";import"./useLocalizedStringFormatter-DXL8o4sQ.js";import"./useFormReset-CJtNuDui.js";import"./useEvent-DGEo5c64.js";import"./useTextField-utlMkyTR.js";import"./Popover-DLaNI3Pf.js";import"./DialogTriggerView-DV5TVcRN.js";import"./context-CC-SH_Jq.js";import"./useStatic-B-mnmZm1.js";import"./Dialog-wXYbJuwK.js";import"./RSPContexts-C2UEl3bJ.js";import"./OverlayArrow-BvGktdbH.js";import"./Collection-DIxctTuu.js";import"./CollectionBuilder-Bwrs6onG.js";import"./Separator-DPSNb7Zj.js";import"./SearchField-HH6yUbMg.js";import"./TextField-C-GKv5_s.js";import"./SelectionManager-Dr9cLJlV.js";import"./useCollator-BpkBnSqV.js";import"./FocusScope-eWFX0WV3.js";import"./VisuallyHidden-BktHc-NH.js";import"./LoadingSpinner-CnF3-Zd6.js";import"./browser-vROwQYx1.js";import"./EmulatedBoldText-Bd1dp7Af.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
