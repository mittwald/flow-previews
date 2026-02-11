import{r as h,j as r}from"./iframe-l3dQPg2D.js";import{P as m}from"./PasswordCreationField-CuSviLBE.js";import{L as u}from"./Label-DxyvMbSs.js";import{B as g}from"./Button-CVhESpos.js";import{m as C}from"./IconWarning-C2C4Ye1P.js";import{C as w}from"./CopyButton-CDPSChIG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCyGrJK3.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./clsx-B-dksMZM.js";import"./index-BnwDl3XO.js";import"./Action-BglyJGiG.js";import"./context-BBlsigfO.js";import"./useStatic-BdWyaTNp.js";import"./browser-vgtThTGE.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./FieldDescription-DDFYZqNC.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./utils-BpR6PJXM.js";import"./Tooltip-CRXT4Jo_.js";import"./OverlayArrow-BBo0Td8e.js";import"./useFocus-BoIaqFAK.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./context-bJyTUMD1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Sg4LsORI.js";import"./useControlledState-DV6ufSFw.js";import"./useFocusable-CewhyE_c.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./ContextualHelpTrigger-CIVTotFR.js";import"./Popover-pewrL_I7.js";import"./useOverlayController-Df50joLL.js";import"./OverlayContextProvider-yNeb3roI.js";import"./Dialog-ByCdR2Sm.js";import"./Button-Dfp0w4eo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CLrRc3iw.js";import"./RSPContexts-D9dFuQ_b.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";import"./OverlayTrigger-CR9Slz1y.js";import"./Heading-Cf_VYr3b.js";import"./Heading-D-Y77gHO.js";import"./useFieldComponent-CTh-2D00.js";import"./FieldError-Q6bz3Uf7.js";import"./FieldError-DNTSOotb.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";import"./useControlledHostValueProps-Di36nhEL.js";import"./TextField-BbT6CVIE.js";import"./Form-bbOcDT_r.js";import"./Group-D4YQYKb-.js";import"./Input-AZztYHyS.js";import"./useTextField-4COopty-.js";import"./useFormReset-mKOiKuYb.js";import"./useFormValidation-D7taYq4g.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-p4NafINf.js";import"./remote-VRbYHHBV.js";import"./react-children-utilities-6GFkF6Mz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
