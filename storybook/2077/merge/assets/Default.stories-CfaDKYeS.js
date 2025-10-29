import{r as h,j as r}from"./iframe-BYlM8TfH.js";import{P as m}from"./PasswordCreationField-BCRD7BeA.js";import{L as u}from"./Label-CObvhZe8.js";import{B as g}from"./Button-DrjwoUCb.js";import{z as C}from"./IconWarning-WQ4wo7kP.js";import{C as w}from"./CopyButton-Bysoari5.js";import"./index-nuYtCEEu.js";import"./dynamic-BhGDraHV.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useFieldComponent-BoJq1S9B.js";import"./utils-BDqIfUE7.js";import"./Text-Dc8La0ek.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";import"./Group-Bk1pllsG.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocus-B9vfYs8K.js";import"./Input-Dg1gUccH.js";import"./Hidden-CSqzjE-Z.js";import"./TextField--jqwCYSY.js";import"./RSPContexts-BeeOgZFj.js";import"./Form-CqmUY9BV.js";import"./useLabel-IFSjtkUu.js";import"./Label-COiWxsLa.js";import"./useTextField-SWkzlhtV.js";import"./useFormReset-Bl4vFhC1.js";import"./useControlledState-Bs4hSWnz.js";import"./useFocusable-SxOERRg1.js";import"./useFormValidation-wBqhYJyj.js";import"./Action-i4rkq48V.js";import"./context-BILGmIqx.js";import"./useStatic-6sdTMqO6.js";import"./browser-D2sPcOVM.js";import"./getActionGroupSlot-nR5vf13o.js";import"./FieldDescription-DcQaW8xO.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Tooltip-CgdawZ-z.js";import"./ClearPropsContextView-BJe-Torm.js";import"./OverlayArrow-Dcf6I1B8.js";import"./ProgressBar--do5EHZn.js";import"./context-BxRqKeiD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./ReactAriaControlledValueFix-CJCbwxyd.js";import"./ContextualHelpTrigger-bIxyyS-7.js";import"./Popover-D-aIXqDf.js";import"./OverlayContextProvider-Dz9UAd6s.js";import"./Dialog-BSP5EDkY.js";import"./Button-BmIa1mS-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kOJVCjd_.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";import"./OverlayTrigger-B-qRJ8Xp.js";import"./ControlledNotification-Dl6zeRdw.js";import"./Heading-CurQq7EL.js";import"./Heading-BrhKeiNO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DzckZ6nk.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CqJPIXvI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
