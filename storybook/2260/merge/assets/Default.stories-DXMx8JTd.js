import{r as h,j as r}from"./iframe-Q1VSciNm.js";import{P as m}from"./PasswordCreationField-DTw2jRuU.js";import{L as u}from"./Label-CSNGUTYQ.js";import{B as g}from"./Button-BkL5LUHK.js";import{m as C}from"./IconWarning-Bp2wXPUs.js";import{C as w}from"./CopyButton-zy4yY7Uc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3r4dJt.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./clsx-B-dksMZM.js";import"./index-C3b6LhZY.js";import"./Action-DYNAwBsP.js";import"./context-xTt93I09.js";import"./useStatic-DcS9SWFS.js";import"./browser-DUAAaQNQ.js";import"./getActionGroupSlot-gyV-83t6.js";import"./FieldDescription-CuqQgw1Y.js";import"./Text-1lLVDQct.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./utils-Cfx54F97.js";import"./Tooltip-DSmChc5e.js";import"./OverlayArrow-vyusEtHs.js";import"./useFocus-Dgy1zF73.js";import"./ProgressBar-BibYjS7R.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./context-BLO98TmC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cr50bzxN.js";import"./useFocusable-BFiW_6Mc.js";import"./useFocusRing-oK86YNHq.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./ContextualHelpTrigger-C9lRXKTV.js";import"./Popover-D68emFpc.js";import"./useOverlayController-CoiqP3F-.js";import"./OverlayContextProvider-y6JRCx08.js";import"./Dialog-ib05FTRH.js";import"./Button-42pr8eMu.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CkY15rDX.js";import"./RSPContexts-MtiuAHte.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./VisuallyHidden-btJzxMJm.js";import"./OverlayTrigger-DzAIUhz9.js";import"./Heading-D8FX4Qh8.js";import"./Heading-BIQD_zbY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-1pDy4PKz.js";import"./FieldError-RY9dMzjY.js";import"./FieldError-QjdNZ-FN.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";import"./useControlledHostValueProps-Np1uUgIf.js";import"./TextField-DJTUJYn-.js";import"./Form-rX7Gw7MM.js";import"./Group-CKcbXsxe.js";import"./Input-a5vdzoE4.js";import"./useTextField-DunWRHOY.js";import"./useFormReset-C0YD-aRq.js";import"./useFormValidation-DIYVKRGL.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./remote-B8jFwJ6r.js";import"./react-children-utilities-KLBcwqbL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
