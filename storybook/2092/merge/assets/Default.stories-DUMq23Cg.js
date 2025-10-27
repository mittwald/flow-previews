import{r as h,j as r}from"./iframe-DCa_XPw0.js";import{P as m}from"./PasswordCreationField-CFlFz2oG.js";import{L as u}from"./Label-vDm2WQu9.js";import{B as g}from"./Button-5vT2-_W4.js";import{l as C}from"./IconWarning-Q2oX1eiS.js";import{C as w}from"./CopyButton-BVKgaJmi.js";import"./index-nuYtCEEu.js";import"./dynamic-DrAw5ycp.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./clsx-B-dksMZM.js";import"./index-d5hFVLIP.js";import"./useFieldComponent-DnSwczmT.js";import"./utils-CHsRUe2b.js";import"./Text-I5qgKc0V.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";import"./Group-DoigBsDb.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocus-m8lB89Ac.js";import"./Input-Btedufej.js";import"./Hidden-DqzRERrR.js";import"./TextField-CcD4MdAG.js";import"./RSPContexts-A2JzYqIb.js";import"./Form-gH1nSwk6.js";import"./useLabel-Cxr0dS9W.js";import"./Label-DCh_0unC.js";import"./useTextField-B0SsZGN0.js";import"./useFormReset-C_Ugenz9.js";import"./useControlledState-CRVJv1rD.js";import"./useFocusable-D6JtitxC.js";import"./useFormValidation-Dya2y-k8.js";import"./Action-woDk9-dG.js";import"./context-Dlf3CpRu.js";import"./useStatic-CrVdgLYB.js";import"./browser-2ZL6lgPg.js";import"./getActionGroupSlot-InsSo2J4.js";import"./FieldDescription-gVsh-1jz.js";import"./Text-DnODaVEe.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Tooltip-Yn6AXLwR.js";import"./ClearPropsContextView-CquQV2OH.js";import"./OverlayArrow-DWeqJ8mt.js";import"./ProgressBar-D1oSpt7t.js";import"./context-CFo6-Xo4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./ReactAriaControlledValueFix-BMN_qpn9.js";import"./ContextualHelpTrigger-Bn9qPpKw.js";import"./Popover-BUV2jDV7.js";import"./useOverlayController-Dv456Rq0.js";import"./OverlayContextProvider-BgGVuEZb.js";import"./Dialog-jvkUQzt2.js";import"./Button-8oNj6zWV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoF43DDZ.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";import"./OverlayTrigger-tJ_bpd3Z.js";import"./ControlledNotification-CwfTViCh.js";import"./Heading-Ev2tnW6a.js";import"./Heading-dctUcVn8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-Dwx_sQtt.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cb4DUvy2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
