import{r as h,j as r}from"./iframe-CTX0Bv2_.js";import{P as m}from"./PasswordCreationField-BE3vStex.js";import{L as u}from"./Label-Dhp6BO4i.js";import{B as g}from"./Button--JyduJMj.js";import{m as C}from"./IconWarning-nHMyX661.js";import{C as w}from"./CopyButton-XmTCAnOA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-izZr6sj3.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./clsx-B-dksMZM.js";import"./index-Cuy-twEi.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./browser-NwcAgtgI.js";import"./getActionGroupSlot-CcrxUumb.js";import"./FieldDescription-4xrer537.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./utils-DEP6wxfF.js";import"./Tooltip-CJrV0EuQ.js";import"./OverlayArrow-B_Rckldo.js";import"./useFocus-Brpf5vcF.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./context-BlMA_qTH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-jdOUMH5T.js";import"./useControlledState-BSzbNF-6.js";import"./useFocusable-C46UWCUq.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./ContextualHelpTrigger-BDNQoqZd.js";import"./Popover-CrXi74XC.js";import"./useOverlayController-DZ6rN5UT.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./Dialog-B47KQ7WD.js";import"./Button-C6E7IXzn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBVfaVqb.js";import"./RSPContexts-FayjYhqz.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./VisuallyHidden-DBqpLolF.js";import"./OverlayTrigger-DD_Axl8O.js";import"./Heading-Dk_R5Gok.js";import"./Heading-BWaAz6go.js";import"./useFieldComponent-mADlv6K1.js";import"./FieldError-BCaKsj_Z.js";import"./FieldError-DPNf_GCP.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";import"./useControlledHostValueProps-Bd2ZZKcS.js";import"./TextField-Bl2_sgE7.js";import"./Form-CEQjTe99.js";import"./Group-BOL-llIy.js";import"./Input-Bb-wn0Gj.js";import"./useTextField-NkWX01z0.js";import"./useFormReset-CFaexdLs.js";import"./useFormValidation-CLweFpah.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./remote-Dp_KpE6s.js";import"./react-children-utilities-BSpjAS3Q.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
