import{r as h,j as r}from"./iframe-DlWpeVbs.js";import{P as m}from"./PasswordCreationField-CMm_99fr.js";import{L as u}from"./Label-BFCtbPkR.js";import{B as g}from"./Button-OB72uiKS.js";import{m as C}from"./IconWarning-CwuMGyll.js";import{C as w}from"./CopyButton-Ch2Puf6p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3tAnWym.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./ActionBatch-C-ID7iPf.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./browser-CHTiPLC9.js";import"./getActionGroupSlot-bYWxcQao.js";import"./FieldDescription-BCbzcEW9.js";import"./Text-BjwiRmws.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./utils-BWqiCJWQ.js";import"./Tooltip-BqOuoq4m.js";import"./OverlayArrow-Bovj8f2H.js";import"./useFocus-DZ2sW_Jx.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./context-w6Z3dllt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BVQNDpKt.js";import"./useControlledState--75VKtTq.js";import"./useFocusable-BrXdRr5r.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./ContextualHelpTrigger-oJx-VEHy.js";import"./Popover-C0He_Yr4.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./RSPContexts-8MG42HPe.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./OverlayTrigger-hKGFSF4k.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./useFieldComponent-CpDSJ5w8.js";import"./FieldError-wdxD7fJg.js";import"./FieldError-CO2oyPLw.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";import"./useControlledHostValueProps-BCwihX90.js";import"./TextField-BweyANNZ.js";import"./Form-IYTHWqtc.js";import"./Group-BNVpNkm_.js";import"./Input-DN6TuXy8.js";import"./useTextField-Cmu1p6Yf.js";import"./useFormReset-CZgOMFUA.js";import"./useFormValidation-7MNrcMSj.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C6D9eT_m.js";import"./remote-Hfn3BG4Y.js";import"./react-children-utilities-CYU5MU0Q.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
