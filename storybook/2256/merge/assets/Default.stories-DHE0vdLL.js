import{r as h,j as r}from"./iframe-D2BYf5-g.js";import{P as m}from"./PasswordCreationField-DP5TDTF1.js";import{L as u}from"./Label-DC-_uf6W.js";import{B as g}from"./Button-CDOjETwV.js";import{m as C}from"./IconWarning-BvAkc2LD.js";import{C as w}from"./CopyButton--wW-QkmG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DsmNOmMb.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./clsx-B-dksMZM.js";import"./index-Bu8wVR5j.js";import"./Action-DS_mMLiR.js";import"./context-DatNKEIi.js";import"./useStatic-DA3fGq-b.js";import"./browser-CRHYBb-w.js";import"./getActionGroupSlot-DYtozdko.js";import"./FieldDescription-BThX7255.js";import"./Text-D6N8Heh9.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./utils-DHZ51AFQ.js";import"./Tooltip-BdrgD5_p.js";import"./OverlayArrow-BMVG_KsN.js";import"./useFocus-ORvRv07U.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./context-DWMR9XE1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-fyUF26L0.js";import"./useFocusable-BL0hS6to.js";import"./useFocusRing-DGJLUvQM.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./ContextualHelpTrigger-Bmzm2KwD.js";import"./Popover-xYzPuiR6.js";import"./useOverlayController-CdWYn5_T.js";import"./OverlayContextProvider-ddiXR-PL.js";import"./Dialog-DmGaLGl4.js";import"./Button-DuBdlowL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wVuL2i-g.js";import"./RSPContexts-Jo-zwAyH.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./VisuallyHidden-DcwEctQc.js";import"./OverlayTrigger-BR1gsJaD.js";import"./Heading-BGLuRqOh.js";import"./Heading-DOzmXv5U.js";import"./useFieldComponent-BFOdLrJ8.js";import"./FieldError-DX5_shM3.js";import"./FieldError-RWcRHk2C.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";import"./useControlledHostValueProps-BRzzD23P.js";import"./TextField-nOc8ZFrV.js";import"./Form-DfX8wS-B.js";import"./Group-CFjwdlwi.js";import"./Input-CmZkYsGH.js";import"./useTextField-CeRk65Nm.js";import"./useFormReset-Dqz1EECq.js";import"./useFormValidation-BTfq9KBg.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./remote-C9AuEG_9.js";import"./react-children-utilities-IdWf7-24.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
