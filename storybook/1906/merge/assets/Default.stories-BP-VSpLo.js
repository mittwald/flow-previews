import{r as h,j as r}from"./iframe-DzPnzOIh.js";import{P as m}from"./PasswordCreationField-BOtP_ua-.js";import{L as u}from"./Label-Caopyz4i.js";import{B as g}from"./Button-B0xxYjKh.js";import{m as C}from"./IconWarning-Dnclh3SV.js";import{C as w}from"./CopyButton-BepF7-SO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CR1FGrpS.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./Action-D4qqw_zO.js";import"./context-CvuQDK5p.js";import"./useStatic-B5sjyhg8.js";import"./browser-DO1on-Lg.js";import"./getActionGroupSlot-BseyWuGA.js";import"./FieldDescription-CZk1e185.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./utils-DdPADezN.js";import"./Tooltip-IFGVScVY.js";import"./OverlayArrow--imbHB5-.js";import"./useFocus-lCD3lNhC.js";import"./ProgressBar-BDc0eUXF.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./context-D5QDMciq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-h77ik7V4.js";import"./useControlledState-C5NVaprX.js";import"./useFocusable-DMy60j_I.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./ContextualHelpTrigger-DtsLj3_w.js";import"./Popover-DeK_Y-I_.js";import"./useOverlayController-DuzP2i3a.js";import"./OverlayContextProvider-DbqQHSiT.js";import"./Dialog-BkygjXx5.js";import"./Button-CCOKLUK2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-COgw0Owx.js";import"./RSPContexts-0XiJN6Nh.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./OverlayTrigger-DzqcF9yd.js";import"./Heading-DPjRgByp.js";import"./Heading-Dqw827jw.js";import"./useFieldComponent-DttoHSbm.js";import"./FieldError-CliUFFQL.js";import"./FieldError-BLx5YP6h.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";import"./useControlledHostValueProps-HyXthDFl.js";import"./TextField-ChrDpqIO.js";import"./Form-iisH2EsU.js";import"./Group-BGA5trRo.js";import"./Input-CP7U2NGu.js";import"./useTextField-DtXvs3Hz.js";import"./useFormReset-D5TocNhH.js";import"./useFormValidation-DrH-jwNK.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-3EdJH7-V.js";import"./remote-Df33k4AK.js";import"./react-children-utilities-9EA095Io.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
