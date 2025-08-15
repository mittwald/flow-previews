import{j as r}from"./iframe-CHDu_H0e.js";import{N as o}from"./NumberField-sg89BCi_.js";import{L as t}from"./Label-C1IZgxKk.js";import{F as _}from"./FieldDescription-D82FO0nU.js";import{F as B}from"./FieldError-CyvcfapH.js";import{C as I,a as U}from"./ContextualHelpTrigger-D7bOpw5i.js";import{B as v}from"./Button-Dmc7YjrG.js";import{T as K}from"./Text-mNtFSOkr.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./IconWarning-Cf1n4vGG.js";import"./ReactAriaControlledValueFix-BjDFD4yr.js";import"./utils-DYZAD9ft.js";import"./Button-Rg6_nSUL.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./context-Bzaz4S39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-UC_sG4c4.js";import"./useFocus-C89269kJ.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./FieldError-CKgwUKxI.js";import"./Text-DpQKzoec.js";import"./Form-BFPhVCnm.js";import"./Group-DC1YgkeM.js";import"./useControlledState-DzyFh4kD.js";import"./useSpinButton-CJOeEb8a.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./useFormReset-Ct9qNa2Y.js";import"./useEvent-CII2lm4p.js";import"./useTextField-bDvKNILe.js";import"./Popover-Cu5EZYnv.js";import"./DialogTriggerView-CT9wuhNv.js";import"./context-BsLhxCGe.js";import"./useStatic-ByFeMtaE.js";import"./Dialog-CCYlg5iI.js";import"./RSPContexts-CZTMu11O.js";import"./OverlayArrow-BpSuH-di.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./SearchField-DemnD7Hf.js";import"./TextField-DCfchb8N.js";import"./SelectionManager-C-zRxePL.js";import"./useCollator-P2wX32qN.js";import"./FocusScope-CpdigEHe.js";import"./VisuallyHidden-BP6BNrRi.js";import"./LoadingSpinner-BjRJkl53.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
