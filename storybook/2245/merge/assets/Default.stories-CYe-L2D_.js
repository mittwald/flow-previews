import{r as h,j as r}from"./iframe-DoM-BIwg.js";import{P as m}from"./PasswordCreationField-C5slyDbW.js";import{L as u}from"./Label-BFVzgZLR.js";import{B as g}from"./Button-CT5Y8uWS.js";import{m as C}from"./IconWarning-BD_MiEVG.js";import{C as w}from"./CopyButton-BDP2eOeh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CkeXur7S.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./clsx-B-dksMZM.js";import"./index-BXuzzWnK.js";import"./Action-KkrISRwO.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./browser-COZAGKbB.js";import"./getActionGroupSlot-CjJPVShT.js";import"./FieldDescription-D7t9gDEh.js";import"./Text-lsEUOuuk.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./utils-D5il_mPj.js";import"./Tooltip-B_DQ0-SF.js";import"./OverlayArrow-Di4XgwVw.js";import"./useFocus-ClxCJYgX.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./context-CSqA08Z3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState--GEywRyg.js";import"./useFocusable-Cy5CQHPW.js";import"./useFocusRing-Bar7hbU_.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./ContextualHelpTrigger-BfMy4wEo.js";import"./Popover-Cl8R87oW.js";import"./useOverlayController-DJQxd8wz.js";import"./OverlayContextProvider-Evthga4H.js";import"./Dialog-BESdyj17.js";import"./Button-BXmw0khj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-v4r7x8aW.js";import"./RSPContexts-BpmX7ICR.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./VisuallyHidden-GPtOnQVg.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./Heading-BBlWC_ix.js";import"./Heading-Bf3wZM4z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CZ4YFclL.js";import"./FieldError-D1hjQVoV.js";import"./FieldError-CHU7gQK7.js";import"./AlertText-DEPqS5ry.js";import"./AlertIcon-Mg7Q3zgv.js";import"./useControlledHostValueProps-DSNqmJy9.js";import"./TextField-CF9DJvmP.js";import"./Form-BRbECj4N.js";import"./Group-B6Ij3cqY.js";import"./Input-V-OR_KLg.js";import"./useTextField-BHoBVWF_.js";import"./useFormReset-DsbUUfuN.js";import"./useFormValidation-lvugQbRf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CPr3D27j.js";import"./remote-BDffDiLd.js";import"./react-children-utilities-DN5WjXff.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
