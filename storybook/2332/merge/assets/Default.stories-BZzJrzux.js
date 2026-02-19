import{r as h,j as r}from"./iframe-CXQlTNqj.js";import{P as m}from"./PasswordCreationField-DmTjm3K4.js";import{L as u}from"./Label-Dp8rzwUw.js";import{B as g}from"./Button-BlafpMbq.js";import{m as C}from"./IconWarning-qWu7I_Pu.js";import{C as w}from"./CopyButton-D0roPz7P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UE7lg7x0.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./clsx-B-dksMZM.js";import"./index-AYGk-Z4X.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./browser-C0g7jXxm.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./FieldDescription-Ct_r0eGl.js";import"./Text-B3somVi7.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Text-QCBVP_aW.js";import"./utils-DV_byzth.js";import"./Tooltip-7DJBrIsj.js";import"./OverlayArrow-sIEanX_d.js";import"./useFocus-DfPsdBQQ.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./context-CCBj18N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D1AlgOvW.js";import"./useControlledState-CC0ueLns.js";import"./useFocusable-D7YkDf-E.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./ContextualHelpTrigger-C9cwcU6i.js";import"./Popover-Dd_o8eTz.js";import"./OverlayContextProvider-97FigBld.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./RSPContexts-CaXq0cAk.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";import"./OverlayTrigger-CeJmnxGE.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./useFieldComponent-Cn71_kOc.js";import"./FieldError-BB5Q0mgv.js";import"./FieldError-CtbrQfSs.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";import"./useControlledHostValueProps-yWnOktoO.js";import"./TextField-BoxW8OPP.js";import"./Form-CN1ucAgL.js";import"./Group-COTR0fAc.js";import"./Input-CLvZry-y.js";import"./useTextField-C4aZ5CwP.js";import"./useFormReset-BDdgSN6q.js";import"./useFormValidation-CRz2e402.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./remote-aElBUAr6.js";import"./react-children-utilities-Bo6p2vQK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
