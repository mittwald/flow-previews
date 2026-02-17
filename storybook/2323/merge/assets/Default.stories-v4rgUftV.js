import{r as h,j as r}from"./iframe-BwxXT37i.js";import{P as m}from"./PasswordCreationField-DFHG64lN.js";import{L as u}from"./Label-CT8SIJ3i.js";import{B as g}from"./Button-BPaKVUIt.js";import{m as C}from"./IconWarning-Dl-kSkvo.js";import{C as w}from"./CopyButton-C-huasCi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-dswMj1gt.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./ActionBatch-BYAp_qkn.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./browser-DWx5NGhf.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./FieldDescription-BR2v-b2T.js";import"./Text-COIxE5M6.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Text-CMM9EMAj.js";import"./utils-CJgL2cA6.js";import"./Tooltip-DYOZ-Dsv.js";import"./OverlayArrow-D6upTp02.js";import"./useFocus-Czv-Zofa.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-m35H4vh1.js";import"./useControlledState-NXAAE7WV.js";import"./useFocusable-FNm71Fx1.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./ContextualHelpTrigger-BEVsAG-J.js";import"./Popover-CGrzjmtZ.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./RSPContexts-CqVOzJuC.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./VisuallyHidden-BP4pgppw.js";import"./OverlayTrigger-DDMtWs7A.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./useFieldComponent-CUBWvnpR.js";import"./FieldError-D9vbHNcD.js";import"./FieldError-BR2H8wuy.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";import"./useControlledHostValueProps-C4XwIoTW.js";import"./TextField-DjZwGP6i.js";import"./Form-BRwB9VIC.js";import"./Group-Dxy68sjF.js";import"./Input-C_uCddka.js";import"./useTextField-COT4ct8W.js";import"./useFormReset-BZECQBSr.js";import"./useFormValidation-CcuhNi7t.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C1b88oeC.js";import"./remote-DESTNxfj.js";import"./react-children-utilities-BHjp1LoB.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
