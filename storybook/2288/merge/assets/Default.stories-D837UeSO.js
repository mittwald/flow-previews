import{r as h,j as r}from"./iframe-DkT4d7Ot.js";import{P as m}from"./PasswordCreationField-BAPI44Ri.js";import{L as u}from"./Label-BjxJIvYs.js";import{B as g}from"./Button-B3KXRm13.js";import{m as C}from"./IconWarning-K6asu7lY.js";import{C as w}from"./CopyButton-BMf47pPt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-AbOzqnd1.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./clsx-B-dksMZM.js";import"./index-CA8YyeFM.js";import"./Action-BKfs-erd.js";import"./context-CpYzats6.js";import"./useStatic-DmZQ70we.js";import"./browser-CwBpRuL-.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./FieldDescription-BHCuHDvd.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./utils-up3lG_mb.js";import"./Tooltip-CJlwYS3o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useFocus-Bn0bRGba.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./context-BhNnKB4w.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bn6GFEBK.js";import"./useControlledState-B7-cf8QC.js";import"./useFocusable-oFwI_mrj.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./ContextualHelpTrigger-CbkD5Xmu.js";import"./Popover-D3bIYHAi.js";import"./useOverlayController-C-1Q9KjD.js";import"./OverlayContextProvider-CjNcO-pQ.js";import"./Dialog-DEf0gwvq.js";import"./Button-DKCc9Jm1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-loL-ySzv.js";import"./RSPContexts-rkHdJ27o.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./VisuallyHidden-BhWvypZu.js";import"./OverlayTrigger-ChHec0Fn.js";import"./Heading-BxekkuWK.js";import"./Heading-DoshCNUZ.js";import"./useFieldComponent-FHnXwL7q.js";import"./FieldError-BUQThHV3.js";import"./FieldError-BIqVWLlF.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";import"./useControlledHostValueProps-QgeK23Kf.js";import"./TextField-DKJJTMZH.js";import"./Form-CweUcSb7.js";import"./Group-BOYY_LIu.js";import"./Input--3PeXBSI.js";import"./useTextField-Zbiu6rp8.js";import"./useFormReset-DMhhuJvy.js";import"./useFormValidation-UULz_Uq_.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DZGxTG7I.js";import"./remote-B8vjNxTl.js";import"./react-children-utilities-C907rqh9.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
