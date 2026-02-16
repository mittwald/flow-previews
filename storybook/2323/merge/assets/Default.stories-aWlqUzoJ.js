import{r as h,j as r}from"./iframe-CIhdjqSz.js";import{P as m}from"./PasswordCreationField-BxbC2SSh.js";import{L as u}from"./Label-DvNJKWaN.js";import{B as g}from"./Button--NFWCTgK.js";import{m as C}from"./IconWarning-NrGPSND5.js";import{C as w}from"./CopyButton-DhDlFgoW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DC2aGj60.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./browser-BTfojbbK.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./FieldDescription-CyU-MK8M.js";import"./Text-DgrqnOua.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Text-BWZGL9q7.js";import"./utils-3Ll5mTsj.js";import"./Tooltip-C87kTS20.js";import"./OverlayArrow-C-y_PFkG.js";import"./useFocus-CB1MjZml.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-ChVqcxnp.js";import"./useControlledState-Bhs9bgfq.js";import"./useFocusable-DArPbii_.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./ContextualHelpTrigger-B1ruzjxQ.js";import"./Popover-BtssMKQJ.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./RSPContexts-FgSmVkcq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./VisuallyHidden-Szd7uPuS.js";import"./OverlayTrigger-DlE73CJz.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./useFieldComponent-BDBEatho.js";import"./FieldError-C6Vi3jlh.js";import"./FieldError-BrGZX-9W.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";import"./useControlledHostValueProps-BmBohk80.js";import"./TextField-DShuTezn.js";import"./Form-C-8UFtdt.js";import"./Group-DY21f0zL.js";import"./Input-DGuJ7Hsu.js";import"./useTextField-Bg2pWp0I.js";import"./useFormReset-CCc0UGFI.js";import"./useFormValidation-kYNpgjw2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CnQRgWlh.js";import"./remote-C6ukCFNy.js";import"./react-children-utilities-DApW9Qp0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
