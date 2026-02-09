import{r as h,j as r}from"./iframe-BTP_Z9Sf.js";import{P as m}from"./PasswordCreationField-C0PBTgmH.js";import{L as u}from"./Label-Cu7NRaqa.js";import{B as g}from"./Button-er0RkDrE.js";import{m as C}from"./IconWarning-CwZb39At.js";import{C as w}from"./CopyButton-C0I8s8Vs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LcJrXyvC.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./browser-eyJ8FPIK.js";import"./getActionGroupSlot-V7kcySO7.js";import"./FieldDescription-DPC9D0sU.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./utils-DP1LA6WE.js";import"./Tooltip-BLtZNxw3.js";import"./OverlayArrow-DzMljQ2A.js";import"./useFocus-BU1lOliM.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./context-BBaC2IfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CQvdF7rp.js";import"./useControlledState-B5h2rUtG.js";import"./useFocusable-Hlf8Yc9h.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./ContextualHelpTrigger-BB31TsW4.js";import"./Popover-6hqQcqfJ.js";import"./useOverlayController-BkO0277u.js";import"./OverlayContextProvider-qUQ07J32.js";import"./Dialog-DITwbnCq.js";import"./Button-DgJw7YNb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BnZLj0Nc.js";import"./RSPContexts-Bn1hDyBd.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./OverlayTrigger-B5XE0ce4.js";import"./Heading-tBPre37B.js";import"./Heading-CcadeVc2.js";import"./useFieldComponent-Da-vFXDP.js";import"./FieldError-DnUQcxCL.js";import"./FieldError-BvNBTK6b.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";import"./useControlledHostValueProps-C_qKEx-0.js";import"./TextField-Bv9Ux1RZ.js";import"./Form-BB65cxFE.js";import"./Group-D6HmZmNZ.js";import"./Input-Cgr_O3PE.js";import"./useTextField-D5-cYn1Z.js";import"./useFormReset-Bo1Ib9da.js";import"./useFormValidation-HNZmieSP.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cv-igvht.js";import"./remote-BmAp8UvO.js";import"./react-children-utilities-DCagrUJJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
