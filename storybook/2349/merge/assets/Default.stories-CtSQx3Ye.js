import{r as h,j as r}from"./iframe-gtGtPSGX.js";import{P as m}from"./PasswordCreationField-eJjED511.js";import{L as u}from"./Label-ezDYxAqR.js";import{B as g}from"./Button-CvhKZeTQ.js";import{m as C}from"./IconWarning-BtUUciVj.js";import{C as w}from"./CopyButton-XOSpz6S6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLlIyxqz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./ActionBatch-C6WY1Daf.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./browser-BLXRbgM1.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./FieldDescription-ClA4Wtvf.js";import"./Text-QzTdDFQg.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./utils-1b_KoCGs.js";import"./Tooltip-_9vCQN7d.js";import"./OverlayArrow-D9TvGvP1.js";import"./useFocus-BGYZap87.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./context-B_6Y7rB4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-jJpNIKKF.js";import"./useControlledState-a_M_Sxv2.js";import"./useFocusable-uEYYPBvA.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./ContextualHelpTrigger-mr5JyjKz.js";import"./Popover-C2tFcXbP.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./RSPContexts-L8MWaJ6n.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./OverlayTrigger-CmRNrsxN.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./useFieldComponent-BaX-M8wV.js";import"./FieldError-co03Ctd_.js";import"./FieldError-DenhE7nb.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";import"./useControlledHostValueProps-CP2C8WYU.js";import"./TextField-BDt0lpmD.js";import"./Form-BRxvySUZ.js";import"./Group-Dg14tYxa.js";import"./Input-1coMMItc.js";import"./useTextField-DQThDcRz.js";import"./useFormReset-TvJ_gIa-.js";import"./useFormValidation-BQy4AKy0.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DnqSg6_k.js";import"./remote-DGcAtBID.js";import"./react-children-utilities-INriXgfR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
