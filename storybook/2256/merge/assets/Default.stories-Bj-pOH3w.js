import{r as h,j as r}from"./iframe-ICCBaEZ0.js";import{P as m}from"./PasswordCreationField-B6cfUBMz.js";import{L as u}from"./Label-CdS4JTo9.js";import{B as g}from"./Button-BPUjkcWl.js";import{m as C}from"./IconWarning-DNTau7lk.js";import{C as w}from"./CopyButton-zL8zslhI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./Action-BI-eqtgf.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./browser-BXZux_wF.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./FieldDescription-CTX2Nbt4.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./utils-Bdyed02U.js";import"./Tooltip-B0ufLVm4.js";import"./OverlayArrow-BzKyLQdS.js";import"./useFocus-sIQn0Mmu.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-0-xiytms.js";import"./useFocusable-Da3kr2d3.js";import"./useFocusRing-C-l0oxpd.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./ContextualHelpTrigger-kLpHcv6Z.js";import"./Popover-BznUFd8V.js";import"./useOverlayController-CTkEh9O7.js";import"./OverlayContextProvider-DutSGNyV.js";import"./Dialog-YdLNLYvV.js";import"./Button-CEB885Bq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bkx3Up2v.js";import"./RSPContexts-yVX-lDWS.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./OverlayTrigger-CZVSbWDN.js";import"./Heading-_OIl0AzZ.js";import"./Heading-BmRm-FE-.js";import"./useFieldComponent-C2gLyH5u.js";import"./FieldError-CXiPiawI.js";import"./FieldError-Uso8nKHu.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";import"./useControlledHostValueProps--FOjf0QU.js";import"./TextField-UgkkafNs.js";import"./Form-Dqb0_Mn-.js";import"./Group-Kcal-yRn.js";import"./Input-CQyHZiU6.js";import"./useTextField-1ZJA7UcR.js";import"./useFormReset-mc9YwuWr.js";import"./useFormValidation-BK0HiA-u.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DZTaEi_R.js";import"./remote-CrBsxa38.js";import"./react-children-utilities-wkult5Iv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
