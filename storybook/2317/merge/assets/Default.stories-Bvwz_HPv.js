import{r as h,j as r}from"./iframe-Czt-X4mt.js";import{P as m}from"./PasswordCreationField-DYGoxf38.js";import{L as u}from"./Label-DRlzXm2g.js";import{B as g}from"./Button-CD6msFpC.js";import{m as C}from"./IconWarning-CEtgECHE.js";import{C as w}from"./CopyButton-BGQdFxFg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXoid3qz.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./clsx-B-dksMZM.js";import"./index-Dtw36EGp.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./useStatic-C0a0tu6G.js";import"./browser-CPd8oh-y.js";import"./getActionGroupSlot-5QVk2C33.js";import"./FieldDescription-tPhd2u2b.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./utils-CU6JriEK.js";import"./Tooltip-BvJuWnPH.js";import"./OverlayArrow-DFsPHtjC.js";import"./useFocus-En_BVabG.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./context-BsnVI305.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DDb3Exp8.js";import"./useControlledState-DhgMObTD.js";import"./useFocusable-DFLTBTxr.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./ContextualHelpTrigger-B5X4QP-M.js";import"./Popover-B8tcz0Bd.js";import"./useOverlayController-D_3uUTDx.js";import"./OverlayContextProvider-DqUVzQmH.js";import"./Dialog-CYkX7YiI.js";import"./Button-YmddG4Dp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEVH16Jn.js";import"./RSPContexts-BGSIbyEV.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";import"./OverlayTrigger-D2Ur5kvg.js";import"./Heading-53sbNT6w.js";import"./Heading-DpW_T125.js";import"./useFieldComponent-CjTkiSgD.js";import"./FieldError-BFQHJf6J.js";import"./FieldError-8b6ruGQE.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./useControlledHostValueProps-BeczUNsC.js";import"./TextField-uqAgoO2d.js";import"./Form-BeS1FfjY.js";import"./Group-eiH9vP6f.js";import"./Input-BropXuGq.js";import"./useTextField-UfqQ23LP.js";import"./useFormReset-5KG7Gyo5.js";import"./useFormValidation-DyL1ZPxG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B3-O-X86.js";import"./remote-hRcAmPck.js";import"./react-children-utilities-BZ4NoKWU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
