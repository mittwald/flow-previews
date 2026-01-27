import{r as h,j as r}from"./iframe-COrLnxQ5.js";import{P as m}from"./PasswordCreationField-CvJyGLaw.js";import{L as u}from"./Label-D_znJf4n.js";import{B as g}from"./Button-B5T-9t49.js";import{m as C}from"./IconWarning-CG-OJrgb.js";import{C as w}from"./CopyButton-BYqSbQL1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6q-iLiJj.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./clsx-B-dksMZM.js";import"./index-C_Qn4vD5.js";import"./Action-DL1crjzC.js";import"./context-Dy8NilHt.js";import"./useStatic-CZwWlCB5.js";import"./browser-_tQTAo3E.js";import"./getActionGroupSlot-CizQjHpL.js";import"./FieldDescription-BK-1FDkp.js";import"./Text-xUIxpGpZ.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./utils-VsjjISTT.js";import"./Tooltip-D-uWNW3F.js";import"./OverlayArrow-B9AznsvA.js";import"./useFocus-D07Nw9k2.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./context-BGD9bWhq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DLXXvYqO.js";import"./useControlledState-B-eslxlj.js";import"./useFocusable-BKqCzfQc.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./ContextualHelpTrigger-BbAdjmOz.js";import"./Popover-CaemaVhn.js";import"./useOverlayController-JMrb6iCJ.js";import"./OverlayContextProvider-BtJ2k2E0.js";import"./Dialog-CXGseDzt.js";import"./Button-XrgEKXm-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYo5WNMt.js";import"./RSPContexts-Ds5AG3kQ.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";import"./OverlayTrigger-Dx3VRxcY.js";import"./Heading--g-KOjmd.js";import"./Heading-B77ZBR05.js";import"./useFieldComponent-CTuZy_pY.js";import"./FieldError-CF8bH68v.js";import"./FieldError-Ed5Dpq4f.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";import"./useControlledHostValueProps-BXV19N0X.js";import"./TextField-CeJRoU-4.js";import"./Form-nqQow0mS.js";import"./Group-Bxis-9K0.js";import"./Input-CS1DBvPY.js";import"./useTextField-CN826EJi.js";import"./useFormReset-CUYGlILL.js";import"./useFormValidation-Cve5G398.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BLCck0My.js";import"./remote-DmDOnO_p.js";import"./react-children-utilities-Dkb7KmMl.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
