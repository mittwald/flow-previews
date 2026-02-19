import{r as h,j as r}from"./iframe-DepdzLEL.js";import{P as m}from"./PasswordCreationField-DKGyzlSD.js";import{L as u}from"./Label-CprHQXm7.js";import{B as g}from"./Button-CNIywMH8.js";import{m as C}from"./IconWarning-DzJyip11.js";import{C as w}from"./CopyButton-BlAfYqem.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DyShJQHT.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./clsx-B-dksMZM.js";import"./index-QBVvmMGX.js";import"./ActionBatch-CxGdjV-j.js";import"./useOverlayController-Br9LJhfN.js";import"./useStatic-D2N_z3eO.js";import"./browser-DxvLCkxH.js";import"./getActionGroupSlot-DngwkT4-.js";import"./FieldDescription-DtFiJJAO.js";import"./Text-DQklyFH_.js";import"./EmulatedBoldText-MhUupop4.js";import"./Text-CHX4WGB5.js";import"./utils-7tdA0jB4.js";import"./Tooltip-DMn_6Wie.js";import"./OverlayArrow-D9XOfekb.js";import"./useFocus-ZpAuijkN.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./context-BDIAQ50e.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DGi1wLvD.js";import"./useControlledState-BNsQxzmb.js";import"./useFocusable-Cun53ew4.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./ContextualHelpTrigger-BJ4R4_mj.js";import"./Popover-D-HE80pU.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./Dialog-pPKxFXOM.js";import"./Button-BTig9cwD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BqHqHS4f.js";import"./RSPContexts-C4BguXQB.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./OverlayTrigger-BeYMVPU4.js";import"./Heading-BfiUETdQ.js";import"./Heading-Dfg4FmbO.js";import"./useFieldComponent-PSzBC9V7.js";import"./FieldError-BU6iaS9f.js";import"./FieldError-BblJXfzn.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";import"./useControlledHostValueProps-3YWZEOQ_.js";import"./TextField-B2V589l8.js";import"./Form-C_wI2Oz7.js";import"./Group-Q1-Bo2i3.js";import"./Input-Dj03zPrR.js";import"./useTextField-DNUcA_YH.js";import"./useFormReset-BQp6BNc9.js";import"./useFormValidation-C9ltsd1k.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CFbq72U2.js";import"./remote-BQ4RO_kW.js";import"./react-children-utilities-B7O9v8H2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
