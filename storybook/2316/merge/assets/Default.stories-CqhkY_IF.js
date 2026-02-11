import{r as h,j as r}from"./iframe-Cq8OhOqi.js";import{P as m}from"./PasswordCreationField-D_LyxQzb.js";import{L as u}from"./Label-D-4zWGkt.js";import{B as g}from"./Button-BU-3gGXz.js";import{m as C}from"./IconWarning-D6WB6H32.js";import{C as w}from"./CopyButton-BIeM_mhj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fC-Lgr30.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./Action-CjFX3pKp.js";import"./context-DR72ScyD.js";import"./useStatic-Dv08VHAH.js";import"./browser-D1jWek88.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./FieldDescription-CU8MDP5d.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./utils-Bubk6yJw.js";import"./Tooltip-CaVr5Y12.js";import"./OverlayArrow-CUm_HcTA.js";import"./useFocus-hSjeZcP9.js";import"./ProgressBar-pI249SR8.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./context-EUTE_30t.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C66f8wZh.js";import"./useControlledState-DRmDoHXV.js";import"./useFocusable-Cka2f_Hf.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./ContextualHelpTrigger-DMa2oDnJ.js";import"./Popover-CtLlX21S.js";import"./useOverlayController-D3DcD62Z.js";import"./OverlayContextProvider-BKoB-iKb.js";import"./Dialog-BglVjZuh.js";import"./Button-RahnnKar.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ChoIOqc4.js";import"./RSPContexts-CKy-IICl.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";import"./OverlayTrigger-DbQZU3bz.js";import"./Heading-Di8lkzs2.js";import"./Heading-CPXM0mEb.js";import"./useFieldComponent-BYb5VnRy.js";import"./FieldError-2IpGOPbh.js";import"./FieldError-BGnsbaLE.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./useControlledHostValueProps-CZhQ_qJq.js";import"./TextField-DBFGOmkp.js";import"./Form-B1CYZolU.js";import"./Group-CJEr304M.js";import"./Input-DDTw6Vbr.js";import"./useTextField-B9xagunm.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DSK_LMeC.js";import"./remote-D-3bgxwF.js";import"./react-children-utilities-B642l1aO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
