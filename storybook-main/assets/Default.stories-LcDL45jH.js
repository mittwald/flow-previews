import{r as h,j as r}from"./iframe-DALqHAyB.js";import{P as m}from"./PasswordCreationField-DTE5wlSO.js";import{L as u}from"./Label-DyIG2v27.js";import{B as g}from"./Button-BbfkfOCO.js";import{l as C}from"./IconWarning-CcDUp5xj.js";import{C as w}from"./CopyButton-BbCA5erN.js";import"./index-nuYtCEEu.js";import"./dynamic-aVFvjRkA.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./useFieldComponent-CuLkv2Wr.js";import"./utils-C0MA_VWy.js";import"./Text-vTixOjUz.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./Group-Co0gZnxS.js";import"./useFocusRing-BpmoLA66.js";import"./useFocus-CR3niFsF.js";import"./Input-D7GaT3Mp.js";import"./Hidden-SLgE1qP8.js";import"./TextField-CjKAtJ6I.js";import"./RSPContexts-CoCveTu3.js";import"./Form-DuNFHANS.js";import"./useLabel-85XHUWXZ.js";import"./Label-D28Pduqa.js";import"./useTextField-Di0sHcGC.js";import"./useFormReset-C8DxwuW7.js";import"./useControlledState-BAMCZ0BN.js";import"./useFocusable-UlymAToY.js";import"./useFormValidation-C14rVgab.js";import"./Action-yEvGmIpX.js";import"./context-CWEo3fLe.js";import"./useStatic-WJbJZsQS.js";import"./browser-pVqjrops.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./FieldDescription-DA7yQQcX.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Tooltip-DftF3NMd.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./OverlayArrow-CD30hPjT.js";import"./ProgressBar-udFHgrmU.js";import"./context-aw0dYPtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./ReactAriaControlledValueFix-BUPP8sB2.js";import"./ContextualHelpTrigger-CCAqSKXi.js";import"./Popover-CrnBVe2l.js";import"./useOverlayController-DLM_LHaF.js";import"./OverlayContextProvider-DuttmE5t.js";import"./Dialog-bs1AaCOv.js";import"./Button-B6bWdLOu.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-RYFgUS1k.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./OverlayTrigger-DCsddSuz.js";import"./ControlledNotification-CAzCaSM8.js";import"./Heading-lDiFG-iI.js";import"./Heading-BEFcq9oy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CMn6PGpE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-K4oR_LJz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
