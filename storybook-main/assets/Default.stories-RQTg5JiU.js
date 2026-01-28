import{r as h,j as r}from"./iframe-BrcQhcwR.js";import{P as m}from"./PasswordCreationField-DWwxr8n-.js";import{L as u}from"./Label-eB0oKMGS.js";import{B as g}from"./Button-DdI6TSg5.js";import{m as C}from"./IconWarning-MWZFtagw.js";import{C as w}from"./CopyButton-CX-cmdRk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAxQXs-G.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./Action-EPprNG1t.js";import"./context-C9I6Qco3.js";import"./useStatic-Cr39OxgC.js";import"./browser-BdJDgoMU.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./FieldDescription-8e-MGFTK.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./utils-DM5Jp8EX.js";import"./Tooltip-DRnnxW30.js";import"./OverlayArrow-DY7ECRqq.js";import"./useFocus-BKws8v7-.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./context-DOSLHoOx.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEM6_VkF.js";import"./useControlledState-DsUZezc6.js";import"./useFocusable-BcdgZhOs.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./ContextualHelpTrigger-Bl73vZSZ.js";import"./Popover-Z1FCFlzY.js";import"./useOverlayController-DMZANwi4.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./Dialog-DAgI8QrG.js";import"./Button-CztCXt43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBaWFJWg.js";import"./RSPContexts-CLcTs2D_.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";import"./OverlayTrigger-D_VcfVVD.js";import"./Heading-DeF2rP0f.js";import"./Heading-D_8LxtK-.js";import"./useFieldComponent-CsbQ-7mY.js";import"./FieldError-D24voWaJ.js";import"./FieldError-BZvulriJ.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";import"./useControlledHostValueProps-B_1Yxsae.js";import"./TextField-DAzAMmO8.js";import"./Form-DI5rGqIO.js";import"./Group-kTgIroHk.js";import"./Input-CFsccwbB.js";import"./useTextField-y15xLcpn.js";import"./useFormReset-BHDJFB5Q.js";import"./useFormValidation-CstoYpvO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C-WbSXYT.js";import"./remote-BHShYJ5P.js";import"./react-children-utilities-CETd4T3-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
