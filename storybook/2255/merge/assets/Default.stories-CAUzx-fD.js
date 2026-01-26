import{r as h,j as r}from"./iframe-CO_SbVCH.js";import{P as m}from"./PasswordCreationField-BVFOqHUU.js";import{L as u}from"./Label-CYi7f71w.js";import{B as g}from"./Button-D1ylE5rB.js";import{m as C}from"./IconWarning-DnAYmwAM.js";import{C as w}from"./CopyButton-DWk7-xtJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7BzGeVfl.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./clsx-B-dksMZM.js";import"./index-CiuYSwxA.js";import"./Action-0SsHJzT_.js";import"./context-BbDJJF8K.js";import"./useStatic-D6cqHfiz.js";import"./browser-DqZUP5aL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./FieldDescription-C20y_Jsx.js";import"./Text-DxwcuI28.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./utils-D6Fob7yO.js";import"./Tooltip-CHjDwHqM.js";import"./OverlayArrow-D4OM36Ak.js";import"./useFocus-CPWqIWXE.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./context-CagKbUB8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BplPLiu_.js";import"./useFocusable-CMm0HKMh.js";import"./useFocusRing-BEFuW2jQ.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./ContextualHelpTrigger-By3Zbu5q.js";import"./Popover-Dm9PqtUw.js";import"./useOverlayController-2Ut0kNT7.js";import"./OverlayContextProvider-6b1aLjhJ.js";import"./Dialog-UmHwq-hs.js";import"./Button-B5AHzCCb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dh95oJrl.js";import"./RSPContexts-BwOC89i_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./VisuallyHidden-DDIsYkXL.js";import"./OverlayTrigger-zJBbildq.js";import"./Heading-CF6gKKdb.js";import"./Heading-Ij8bChZd.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DVhqfPKz.js";import"./FieldError-ApIzqFqI.js";import"./FieldError-C8I7NIV7.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";import"./useControlledHostValueProps-B4-ZmfcU.js";import"./TextField-DUEn72X9.js";import"./Form-BhtxhsPb.js";import"./Group-DHq-dfDY.js";import"./Input-Cf-031DZ.js";import"./useTextField-D7nnFmGf.js";import"./useFormReset-DQMHGRs0.js";import"./useFormValidation-Cv-TUnys.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./remote-CpzHRyGl.js";import"./react-children-utilities-U9-1g4Mm.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
