import{r as h,j as r}from"./iframe-BoiTaxGN.js";import{P as m}from"./PasswordCreationField-BZQXLQJl.js";import{L as u}from"./Label-DgN2b341.js";import{B as g}from"./Button-MYsVPgLO.js";import{m as C}from"./IconWarning-DctWBCm0.js";import{C as w}from"./CopyButton-CKTqW97m.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X8snMUB4.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./browser-zBSS86_h.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./FieldDescription-Dh4VnfJe.js";import"./Text-ClfpXeTF.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./utils-RetFhwyR.js";import"./Tooltip-dXWkrauF.js";import"./OverlayArrow-vd9UrCyT.js";import"./useFocus-BSOUAoQt.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./context-hlBZKj-7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-VutGkHGx.js";import"./useControlledState-DJPWuI7p.js";import"./useFocusable-CNuWQ5Vu.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./ContextualHelpTrigger-D9od69x7.js";import"./Popover-CKTt2h1_.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./Dialog-BL8T3CnU.js";import"./Button-BZbFxF4O.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./RSPContexts-9T8dsftx.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./OverlayTrigger-Db6so5Mf.js";import"./Heading-9cwIlFFB.js";import"./Heading-BcC1Qw26.js";import"./useFieldComponent-DiiGd8t3.js";import"./FieldError-DjT7Sc36.js";import"./FieldError-C1wD6V1t.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";import"./useControlledHostValueProps-7MsuqVNT.js";import"./TextField-Dx67xHNQ.js";import"./Form-BMda5et4.js";import"./Group-bhKD4yJJ.js";import"./Input-CHjKW2hG.js";import"./useTextField-DcVWSpBm.js";import"./useFormReset-DsmV2EC6.js";import"./useFormValidation-CX6eZKbg.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BBdroSRA.js";import"./remote-C4jG3DXh.js";import"./react-children-utilities-B8VoHMQu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
