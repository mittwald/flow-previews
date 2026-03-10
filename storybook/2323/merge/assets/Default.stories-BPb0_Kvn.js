import{r as h,j as r}from"./iframe-EfPcFfHz.js";import{P as m}from"./PasswordCreationField-CfN1Ctih.js";import{L as u}from"./Label-DkribH7U.js";import{B as g}from"./Button-wFzIQtGi.js";import{m as C}from"./IconWarning-73LpV07E.js";import{C as w}from"./CopyButton-Om9duvcX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BKd_XzPu.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./ActionBatch-DG-IZD13.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./browser-hyQhTs1N.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./FieldDescription-CaLE571G.js";import"./Text-CRFCcT-P.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Text-B4oHPq8R.js";import"./utils-Cnkpfm_P.js";import"./Tooltip-DLodUkQ6.js";import"./OverlayArrow-MDNnCdLA.js";import"./useFocus-7edk4FfO.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-8P8y2KFJ.js";import"./useControlledState-WqoJm4pI.js";import"./useFocusable-CT_qKlvn.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./ContextualHelpTrigger-BjVVVkQX.js";import"./Popover-BwjMTXaO.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CzmE2CoS.js";import"./RSPContexts-CIVPcPB5.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./VisuallyHidden-CH2GsO1v.js";import"./OverlayTrigger-DoGZlS98.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./useFieldComponent-BpgXbjM-.js";import"./FieldError-Bm6xTrGY.js";import"./FieldError-DGjeovc7.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";import"./useControlledHostValueProps-BEWm02p_.js";import"./TextField-DroX1W2v.js";import"./Form-DLgE0tCZ.js";import"./Group-CvPJMXy4.js";import"./Input-DZTbr2NP.js";import"./useTextField-jB8aFAKf.js";import"./useFormReset-CDR6jl2x.js";import"./useFormValidation-DvOB0MQU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-5WRu_N9f.js";import"./remote-D3-8ROh8.js";import"./react-children-utilities-Drk3yB3D.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
