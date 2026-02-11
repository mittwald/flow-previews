import{r as h,j as r}from"./iframe-CtuK0rEJ.js";import{P as m}from"./PasswordCreationField-B_72zGLp.js";import{L as u}from"./Label-Cngj9T_J.js";import{B as g}from"./Button-CC2cGGC1.js";import{m as C}from"./IconWarning-BSe4G4Pm.js";import{C as w}from"./CopyButton-BkfbWA1t.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6fOzfTlj.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./clsx-B-dksMZM.js";import"./index-DPf65gvx.js";import"./Action-PwkWFif3.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./browser-Up8UMddv.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./FieldDescription-BqM7i6ko.js";import"./Text-CyAseKfN.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./utils-C1DNWP44.js";import"./Tooltip-DQ7Jfv76.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useFocus-N-Pc0sLJ.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./context-BLHFXQwL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dq2x8hiG.js";import"./useControlledState-Cc_BEFH0.js";import"./useFocusable-AhKszEdS.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./ContextualHelpTrigger-Ci-04t-O.js";import"./Popover-fZyy-KqV.js";import"./useOverlayController-B6-IGISv.js";import"./OverlayContextProvider-C66rhlmO.js";import"./Dialog-DqwEKDxA.js";import"./Button-CSRC_w1a.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Da2cRPrr.js";import"./RSPContexts-Ci8ojbfD.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./Heading-BbatUer_.js";import"./Heading-BKLVTPfM.js";import"./useFieldComponent-CPjzSNK0.js";import"./FieldError-BKJxUnBZ.js";import"./FieldError-AgjktxA6.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";import"./useControlledHostValueProps-DO0HHcXX.js";import"./TextField-BZp_AUMa.js";import"./Form-8SXxse9a.js";import"./Group-CRx_nl1e.js";import"./Input-BchQzUPE.js";import"./useTextField-Dry1ib5S.js";import"./useFormReset-C6F9Oqzr.js";import"./useFormValidation-uULaRcd4.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CJNtrFTB.js";import"./remote-DD8nhYq_.js";import"./react-children-utilities-BGpanPxz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
