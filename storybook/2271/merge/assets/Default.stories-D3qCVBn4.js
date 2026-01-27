import{r as h,j as r}from"./iframe-BK9Ry9wr.js";import{P as m}from"./PasswordCreationField-BrD7Q4wn.js";import{L as u}from"./Label-MHPgjcAC.js";import{B as g}from"./Button-CHbQbW2n.js";import{m as C}from"./IconWarning-ClqYagFF.js";import{C as w}from"./CopyButton-Z8K21_W3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-QikLaQcI.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./clsx-B-dksMZM.js";import"./index-DqsXJ4xp.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./useStatic-D1EtWzUP.js";import"./browser-DDyWafud.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./FieldDescription-urh4LMIG.js";import"./Text-kkda9Q25.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./utils-DO-BnPGQ.js";import"./Tooltip-SzaSakXG.js";import"./OverlayArrow-CRZVDLqR.js";import"./useFocus-C5fN754a.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./context-DsIoSqto.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D5gBJyZQ.js";import"./useFocusable-CjhkSx1Q.js";import"./useFocusRing-Dknf048Z.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./ContextualHelpTrigger-rN60QbmI.js";import"./Popover-BQ3vFjP8.js";import"./useOverlayController-gbn3PAZ_.js";import"./OverlayContextProvider-9n1_NXqk.js";import"./Dialog-CFBRHxwp.js";import"./Button-CnSM8-vw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DlcvFeQS.js";import"./RSPContexts--7QpwlJX.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";import"./OverlayTrigger-CIrGgPkU.js";import"./Heading-DbP6ax1z.js";import"./Heading-AwuUEGOn.js";import"./useFieldComponent-DnU67IFr.js";import"./FieldError-Dlnwp2IY.js";import"./FieldError-jtZpQJaz.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";import"./useControlledHostValueProps-CUu1Ad4Y.js";import"./TextField-BdABkByo.js";import"./Form-DgYJKMgS.js";import"./Group-DCFzKDnc.js";import"./Input-yJFna98K.js";import"./useTextField-BPhFFoYw.js";import"./useFormReset-CaS7VrAz.js";import"./useFormValidation-4onogkfY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-FeF_CDXe.js";import"./remote-BKPS1KcS.js";import"./react-children-utilities-BPC2HviM.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
