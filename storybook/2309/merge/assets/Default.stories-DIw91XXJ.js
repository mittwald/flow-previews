import{r as h,j as r}from"./iframe-CnD5cTjE.js";import{P as m}from"./PasswordCreationField-779l4eq_.js";import{L as u}from"./Label-BZkRYtAq.js";import{B as g}from"./Button-CxHLWJvy.js";import{m as C}from"./IconWarning-K8fT7_bQ.js";import{C as w}from"./CopyButton-BwJUVy3D.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DmWwIwdY.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./clsx-B-dksMZM.js";import"./index-DPBNH-jw.js";import"./Action-DYL0-s8C.js";import"./context-CRbXRYLt.js";import"./useStatic-CR0dXYGS.js";import"./browser-DH0afsgD.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./FieldDescription-rFjAs_3m.js";import"./Text-Bqsx-GQX.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./utils-BYl_EWK3.js";import"./Tooltip-DteRf3GV.js";import"./OverlayArrow-W0sikX14.js";import"./useFocus-BZF2vaC7.js";import"./ProgressBar-CtJNhI05.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./context-uSq5N7U7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./useFocusable-DUJmCsdq.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./ContextualHelpTrigger-LmRSE2cn.js";import"./Popover-BNLVWps9.js";import"./useOverlayController-DeY3Y9Ly.js";import"./OverlayContextProvider-CWXPLkIC.js";import"./Dialog-BpNR7iRs.js";import"./Button-Bk4aZnIo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgDG_638.js";import"./RSPContexts-AjJzFs_t.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";import"./OverlayTrigger-CQqJu3uy.js";import"./Heading-B3KiVvm7.js";import"./Heading-BVBd8bpC.js";import"./useFieldComponent-D1uM9aif.js";import"./FieldError-D8deZX0S.js";import"./FieldError-CkgMvR4A.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./useControlledHostValueProps-DEvY5VUA.js";import"./TextField-x7rIma7v.js";import"./Form-Bj2UuDao.js";import"./Group-CgvC6BGS.js";import"./Input-D96XXoVS.js";import"./useTextField-B2O_v1I6.js";import"./useFormReset-DzGHPNTd.js";import"./useFormValidation-0N4lg69R.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CMDtKY2z.js";import"./remote-CRObq-IF.js";import"./react-children-utilities-DbfMznFd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
