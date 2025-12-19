import{r as h,j as r}from"./iframe-DyIQYB7R.js";import{P as m}from"./PasswordCreationField-BYKRiE8p.js";import{L as u}from"./Label-Bnl2XRS7.js";import{B as g}from"./Button-C3sAJBlh.js";import{n as C}from"./IconWarning-BlqJF_wS.js";import{C as w}from"./CopyButton-qPlAH-7W.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-tPr8Th1P.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./clsx-B-dksMZM.js";import"./index-BAJQpnn3.js";import"./Action-2iALePMB.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./browser-Dsy2EDmz.js";import"./getActionGroupSlot-D_7amHYE.js";import"./FieldDescription-B_xnTVZs.js";import"./Text-DP5VQe4y.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./utils-Br5k-T_U.js";import"./Tooltip-Dr3MBn-b.js";import"./OverlayArrow-B8joZ1vL.js";import"./useFocus-MkZ0Yize.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./context-DQwa7-Zw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C9rhpCZz.js";import"./useFocusable-BzRC0Akk.js";import"./useFocusRing-Dsvy8-H7.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./ContextualHelpTrigger-CVQs5PL_.js";import"./Popover-BS-N1A-i.js";import"./useOverlayController-BUDO6s9b.js";import"./OverlayContextProvider-D2R86dNb.js";import"./Dialog-Bezv0IMM.js";import"./Button-BuUG1_MS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DBMxrrfH.js";import"./RSPContexts-D0G5Z96Z.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";import"./OverlayTrigger-Dkelca7C.js";import"./Heading-C6tbK1yl.js";import"./Heading-BomgGhUe.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BuMHMJdd.js";import"./FieldError-Drb2NmJE.js";import"./FieldError-CJCkmHNP.js";import"./useControlledHostValueProps-CeGl1VUq.js";import"./TextField-C2Dg2sq1.js";import"./Form-Ce0HMGMO.js";import"./Group-DlHcB2Sx.js";import"./Input-DTEp0DEd.js";import"./useTextField-CiDJOppJ.js";import"./useFormReset-DbNMnmkG.js";import"./useFormValidation-BzfV6dUL.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BJz_a5cm.js";import"./remote-CduUCN7o.js";import"./react-children-utilities-BXSTsKtD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
