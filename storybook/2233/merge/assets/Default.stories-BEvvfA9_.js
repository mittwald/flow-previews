import{r as h,j as r}from"./iframe-DpNCYkDX.js";import{P as m}from"./PasswordCreationField-RLmySJRm.js";import{L as u}from"./Label-DxyEdRqz.js";import{B as g}from"./Button-CB8TQqfw.js";import{m as C}from"./IconWarning-CcmUiij-.js";import{C as w}from"./CopyButton-DPnNb6Gx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOXkjdco.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./clsx-B-dksMZM.js";import"./index-lXFaKghW.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./useStatic-C-pVfuV7.js";import"./browser-BfCz5g6M.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./FieldDescription-CTMXceLM.js";import"./Text-Bp6u83O8.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./utils-YaT_C2bO.js";import"./Tooltip-CTUOWqPY.js";import"./OverlayArrow-DaAbsuct.js";import"./useFocus-CLy8_GQ0.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./context-Df7wrknH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CFzFCELG.js";import"./useFocusable-BsZoANuz.js";import"./useFocusRing-DWz_LOyJ.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./ContextualHelpTrigger-_PdyYOVy.js";import"./Popover-DuuviGb9.js";import"./useOverlayController-B8UZSZKi.js";import"./OverlayContextProvider-Cg977AbI.js";import"./Dialog-DtZU9YT9.js";import"./Button-DAbgtjDL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-OMCV4DY8.js";import"./RSPContexts-_XCAh6rU.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./VisuallyHidden-BhiVW_d3.js";import"./OverlayTrigger-BclobJ22.js";import"./Heading-CdQ6Kdnh.js";import"./Heading-Cba33pi1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CtyBuaGz.js";import"./FieldError-CLVEK_uH.js";import"./FieldError-DsNqYoam.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";import"./useControlledHostValueProps-BIankb3Z.js";import"./TextField-KvvlNML-.js";import"./Form-Ce-l7r4o.js";import"./Group-3R2C1nbx.js";import"./Input-BuBJ2CWK.js";import"./useTextField-DCYKGErD.js";import"./useFormReset-BsRaFjct.js";import"./useFormValidation-Db_N1-Xt.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-mT2tjpr6.js";import"./remote-FHZXAXl3.js";import"./react-children-utilities-Cso8Q2ZJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
