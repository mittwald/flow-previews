import{r as h,j as r}from"./iframe-C-RKPwSE.js";import{P as m}from"./PasswordCreationField-BXKsd3GO.js";import{L as u}from"./Label-BZ9U-QOK.js";import{B as g}from"./Button-C4QFurWq.js";import{m as C}from"./IconWarning-B9kpDIcu.js";import{C as w}from"./CopyButton-DveM6Ot4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4AljtfH.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./clsx-B-dksMZM.js";import"./index-NcfLMdM4.js";import"./Action-fo4y3mrQ.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./browser-BU-qC_3h.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./FieldDescription-B46dqL75.js";import"./Text-DceSOphz.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./utils-BNo7v4Co.js";import"./Tooltip-YcJ1TK9J.js";import"./OverlayArrow-zXeQXnR5.js";import"./useFocus-EK5CVku_.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./context-CG0zmStT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CPvrkvyz.js";import"./useControlledState-PGxEdwVp.js";import"./useFocusable-BqhdVXbn.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./ContextualHelpTrigger-iklS9pBo.js";import"./Popover-IIDmJsK0.js";import"./useOverlayController-DFCL4B8t.js";import"./OverlayContextProvider-wIYWseIw.js";import"./Dialog-5IYWsYFe.js";import"./Button-BUrsQ2n2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8JiKPWZ.js";import"./RSPContexts-7oABi43d.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";import"./OverlayTrigger-DlhOnJ8b.js";import"./Heading-BLLuHX2c.js";import"./Heading-CcYcuTte.js";import"./useFieldComponent-ILpXs27H.js";import"./FieldError-Bk-w_c0r.js";import"./FieldError-BbtVOi4H.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";import"./useControlledHostValueProps-RjkcIy7Z.js";import"./TextField-BHx_WZD2.js";import"./Form-BmIWUPX1.js";import"./Group-Dxij56r3.js";import"./Input-Dl0Z7qPf.js";import"./useTextField-BfBDvC7_.js";import"./useFormReset-Bo6mTD_0.js";import"./useFormValidation-BVV7LE3u.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B5fSKp-d.js";import"./remote-Dp4k7gKv.js";import"./react-children-utilities-BDv0ipg5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
