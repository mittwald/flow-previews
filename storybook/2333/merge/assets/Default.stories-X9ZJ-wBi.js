import{r as h,j as r}from"./iframe-CaMmm6JB.js";import{P as m}from"./PasswordCreationField-D77EeRC3.js";import{L as u}from"./Label-7z5ZqOim.js";import{B as g}from"./Button-Ccdb4ZyB.js";import{m as C}from"./IconWarning-CjIU5uAw.js";import{C as w}from"./CopyButton-CaWC6c4X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCT0rfWD.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./ActionBatch-Q41d4eeq.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./browser-DBmSqQ-l.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./FieldDescription-ZK4hQ0pT.js";import"./Text-BytpHB1v.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./utils-BWel_6vJ.js";import"./Tooltip-Dc9CQwro.js";import"./OverlayArrow-BudvLkgn.js";import"./useFocus-CsmVawkN.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./context-COlkIlq2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D0nVGfyc.js";import"./useControlledState-DS3iWteE.js";import"./useFocusable-D5loONxI.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./ContextualHelpTrigger-BV_yRWYD.js";import"./Popover-DzUJnTX8.js";import"./OverlayContextProvider-_LkIzv60.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./RSPContexts-HzcDbyvj.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./OverlayTrigger-BDzY0sMA.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./useFieldComponent-l9GEjfOW.js";import"./FieldError-gBRSHyIP.js";import"./FieldError-rN2a2i1l.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";import"./useControlledHostValueProps-CqHjqxx6.js";import"./TextField-CfcKWnss.js";import"./Form-DUaYRZYC.js";import"./Group-CbQ0bY4b.js";import"./Input-BR-ykejl.js";import"./useTextField-Cus2TleU.js";import"./useFormReset-B22K348z.js";import"./useFormValidation-BBrrlMUS.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D3IBMWR2.js";import"./remote-B2IWJRNM.js";import"./react-children-utilities-Cq_ggl1Z.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
