import{r as h,j as r}from"./iframe-B___tkgA.js";import{P as m}from"./PasswordCreationField-BfLWDbY1.js";import{L as u}from"./Label-WD9nd_On.js";import{B as g}from"./Button-CK4qYUON.js";import{m as C}from"./IconWarning-DnK3ATSm.js";import{C as w}from"./CopyButton-DHlJVO_K.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEuCOou2.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./useStatic-DSdFfo4Y.js";import"./browser-C6gsgKxf.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./FieldDescription-C1ZwwWMX.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./utils-BoKG2kRw.js";import"./Tooltip-Cq4vnG-J.js";import"./OverlayArrow-De6KLSjI.js";import"./useFocus-x-GTmi1B.js";import"./ProgressBar-CdmwSyiz.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./context-CHjly9N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BdE9QsVo.js";import"./useControlledState-xG-Gpz3Z.js";import"./useFocusable-DdN6L3mC.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./ContextualHelpTrigger-DroEyUH1.js";import"./Popover-C7J9xDtg.js";import"./useOverlayController-eJqKV_lL.js";import"./OverlayContextProvider-CZtKT-tq.js";import"./Dialog-SqXlQhu9.js";import"./Button-dgLzajPx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-XNzvlEPV.js";import"./RSPContexts-xv2R9swO.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./OverlayTrigger-29xp9YbL.js";import"./Heading-LM5CzMob.js";import"./Heading-2NkxAW1G.js";import"./useFieldComponent-vfbWFIJK.js";import"./FieldError-DrmvSGqW.js";import"./FieldError-Bxvpebgp.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";import"./useControlledHostValueProps-C4-i_rC0.js";import"./TextField-4VWUIDAX.js";import"./Form-Bd7gFKVi.js";import"./Group-CLJgWjIj.js";import"./Input-CKNBze1L.js";import"./useTextField-BSXvhdIQ.js";import"./useFormReset-BMzMnmaN.js";import"./useFormValidation-DPy8gvTm.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-gELkMREc.js";import"./remote-CwYVL4Pl.js";import"./react-children-utilities-Dp_7APfP.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
