import{r as h,j as r}from"./iframe-DqAMh1gn.js";import{P as m}from"./PasswordCreationField-DGLlG7-_.js";import{L as u}from"./Label-CvBjm4aX.js";import{B as g}from"./Button-BzL2mXU9.js";import{o as C}from"./IconWarning-BV3xGinn.js";import{C as w}from"./CopyButton-1UF4l16H.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAN3WNRI.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./clsx-B-dksMZM.js";import"./index-By9mRA0t.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./useStatic-BuuX2mtG.js";import"./browser-CSMWWW9k.js";import"./getActionGroupSlot-BJX70W99.js";import"./FieldDescription-BxpfmOYv.js";import"./Text-1p9r91sB.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./utils-WhkxUCK6.js";import"./Tooltip-CL4nUyry.js";import"./OverlayArrow-DNiZVgAH.js";import"./useFocus-Cr8fiyXD.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./context-DRhwbml9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ChPR7hzM.js";import"./useFocusable-DO1mJmot.js";import"./useFocusRing-BN14JWVs.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./ContextualHelpTrigger-BItspeul.js";import"./Popover-C4iHg1bq.js";import"./useOverlayController-Dx3SUtDs.js";import"./OverlayContextProvider-BmY6HjYo.js";import"./Dialog-AIPHRx2P.js";import"./Button-DRXTkefG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ClkvTl3z.js";import"./RSPContexts-A1MHH_Cz.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./VisuallyHidden-B3gyx1tV.js";import"./OverlayTrigger-Yhwsf07R.js";import"./Heading-Cop9Lz_q.js";import"./Heading-DO-ilkLm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CgfE5MLg.js";import"./FieldError-DFC5bA5N.js";import"./FieldError-Cat2GNj4.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./useControlledHostValueProps-BDFbuI2N.js";import"./TextField-Cwk09HWt.js";import"./Form-y2x5EeW4.js";import"./Group-BvOirkga.js";import"./Input-OeHygm-T.js";import"./useTextField-CD8wMq8W.js";import"./useFormReset-CllrYVFd.js";import"./useFormValidation-Bmx8yPSj.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BWCnwVbS.js";import"./remote-BXLOBgAx.js";import"./react-children-utilities-DB5uwz-e.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
