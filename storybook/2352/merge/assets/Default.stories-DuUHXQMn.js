import{r as h,j as r}from"./iframe-DhXHhh1w.js";import{P as m}from"./PasswordCreationField-BQu13my9.js";import{L as u}from"./Label-B97zndYQ.js";import{B as g}from"./Button-DK8hND6e.js";import{m as C}from"./IconWarning-Cq0bATFd.js";import{C as w}from"./CopyButton-BZRh8aUN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DY1DU2Hc.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./ActionBatch-CBOUg1fp.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./browser-DC-Dnn5c.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./FieldDescription-Cpq8h0bA.js";import"./Text-VjJbV_1P.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./utils--GApMcJ9.js";import"./Tooltip-CpPl1ruP.js";import"./OverlayArrow-D0YkTT7M.js";import"./useFocus-CCcmXvuL.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./context-C0JBe_V4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C0Ptw1X0.js";import"./useControlledState-BAaAMcGs.js";import"./useFocusable-DaonITQz.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./ContextualHelpTrigger-b40qHGBo.js";import"./Popover-JroSLm89.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./Dialog-CefhgDMJ.js";import"./Button-B72XzUR4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuFsm5YE.js";import"./RSPContexts-BISy0hbD.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./Heading-W2uFhXaO.js";import"./Heading-CrXwA3a4.js";import"./useFieldComponent-CXGCADuw.js";import"./FieldError-NwdeaE8Z.js";import"./FieldError-DoyTFare.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./useControlledHostValueProps-Bz_KAzkR.js";import"./TextField-DASBnPfa.js";import"./Form-Cr93Lgju.js";import"./Group-Bojaf2qr.js";import"./Input-CeMR8XUm.js";import"./useTextField-DHL_UDQT.js";import"./useFormReset-BhTKQiKR.js";import"./useFormValidation-Bi2teCon.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BQo0GQZs.js";import"./remote-3lBAaKOS.js";import"./react-children-utilities-DIDr8h0c.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
