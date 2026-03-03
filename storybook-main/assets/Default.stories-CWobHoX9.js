import{r as h,j as r}from"./iframe-DjjV-bH6.js";import{P as m}from"./PasswordCreationField-BGVmsCX9.js";import{L as u}from"./Label-BylmPkwQ.js";import{B as g}from"./Button-B7eEYP7w.js";import{m as C}from"./IconWarning-BVYK-jeQ.js";import{C as w}from"./CopyButton-DnXqLVIK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsvgyJR.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./ActionBatch-YJb9tMXC.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./browser-DMwaewkm.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./FieldDescription-CUJ0cPxq.js";import"./Text-B3EwbE0r.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./utils-Wzr-xt4Q.js";import"./Tooltip-C88oSINM.js";import"./OverlayArrow-CBp_JaqL.js";import"./useFocus-C98Vumo7.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./context-CVfxZLio.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-2GUlH-Oo.js";import"./useControlledState-DuEj2qRm.js";import"./useFocusable-BB_F7Uj3.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./ContextualHelpTrigger-CS-VMmLM.js";import"./Popover-BLR3Up5v.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./RSPContexts-C5x5s972.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./OverlayTrigger-CcgdKfuo.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./useFieldComponent-DlP24hgD.js";import"./FieldError-B3mp1Ofg.js";import"./FieldError-cqIqfLoK.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";import"./useControlledHostValueProps-DfY517eL.js";import"./TextField-D__YUA_k.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useTextField-CEXXySrl.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DTU1PYFj.js";import"./remote-BKpn4CGf.js";import"./react-children-utilities-DHbaZ3r-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
