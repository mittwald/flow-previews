import{r as h,j as r}from"./iframe-CLJtUSH1.js";import{P as m}from"./PasswordCreationField-LQGNhQOD.js";import{L as u}from"./Label-CL2lxKWa.js";import{B as g}from"./Button-BdSBoC_f.js";import{m as C}from"./IconWarning-RoA_lEUP.js";import{C as w}from"./CopyButton-C_eWbTDd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6if2hzUD.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./clsx-B-dksMZM.js";import"./index-C5KxKItK.js";import"./Action-B5Dc0NVU.js";import"./context-jvIE4x8v.js";import"./useStatic-Dks4Zmqh.js";import"./browser-BMt8iY1_.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./FieldDescription-Durr1uPe.js";import"./Text-B6Fe6olk.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./utils-DvtEjNbs.js";import"./Tooltip-Cb3T8rMO.js";import"./OverlayArrow-Do6HgTy2.js";import"./useFocus-CAJuP4TC.js";import"./ProgressBar-eED3hhac.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./context-DZMEEftG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-lsntDLZI.js";import"./useControlledState-BRozYY3l.js";import"./useFocusable-DsRGTtrf.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./ContextualHelpTrigger-dVrhj3-l.js";import"./Popover-Drep9alX.js";import"./useOverlayController-DZqu7_3H.js";import"./OverlayContextProvider-BNfa_JMj.js";import"./Dialog-BGKaFNBq.js";import"./Button-DGFUplit.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-bTiOWaRI.js";import"./RSPContexts-CY0Qb7bk.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./OverlayTrigger-B7jN7CHJ.js";import"./Heading-D34LHmW0.js";import"./Heading-4RYn6yie.js";import"./useFieldComponent-BH0Y7qa0.js";import"./FieldError-DOHJV3_t.js";import"./FieldError-DZmbq2tb.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./useControlledHostValueProps-DozfvDTN.js";import"./TextField-8xGAq-zt.js";import"./Form-DsvsQY6J.js";import"./Group-D9i1M0Ig.js";import"./Input-CzVRJw_9.js";import"./useTextField-DNGW8mQ7.js";import"./useFormReset-3JYpIfMS.js";import"./useFormValidation-vO_E-FCH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D1C6LJRF.js";import"./remote-B_1lzL7i.js";import"./react-children-utilities-BD4yyQM_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
