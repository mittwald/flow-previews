import{r as h,j as r}from"./iframe-BwTc9KkQ.js";import{P as m}from"./PasswordCreationField-B5DSYALy.js";import{L as u}from"./Label-BbbV6hPu.js";import{B as g}from"./Button-Ckvz-MCb.js";import{m as C}from"./IconWarning-CuEgZ9GS.js";import{C as w}from"./CopyButton-BmJxDsXd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE4DvzFx.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./useStatic-D7wzuZGA.js";import"./browser-vKZ8hCbx.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./FieldDescription-B41gpymH.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./utils-CBQcEIVx.js";import"./Tooltip-BeTjs40R.js";import"./OverlayArrow-DC7WkuhA.js";import"./useFocus-BpPHYutm.js";import"./ProgressBar-CaYu3rjO.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./context-BwyA9HG-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DolIE8eq.js";import"./useControlledState-DJoARPq6.js";import"./useFocusable-B00zaX18.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./ContextualHelpTrigger-D7X_sSt5.js";import"./Popover-BUM7xHoq.js";import"./useOverlayController-DcbIZot8.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./Dialog-DfJHDuJ2.js";import"./Button-DqSxrgNL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CJeMKVhz.js";import"./RSPContexts-DUJ8CZ2M.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";import"./OverlayTrigger-D7e37rU3.js";import"./Heading-DdwcYqWJ.js";import"./Heading-DshP_5_D.js";import"./useFieldComponent-D1bp3yFp.js";import"./FieldError-BhKB-hqh.js";import"./FieldError-B40__s1G.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";import"./useControlledHostValueProps-CGmEN8BG.js";import"./TextField-D8A2fYJW.js";import"./Form-CXxVDbS0.js";import"./Group-BaqfBrUe.js";import"./Input-C8bkJupR.js";import"./useTextField-CS5fspsv.js";import"./useFormReset-38634gnl.js";import"./useFormValidation-BAeTIVc2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-lc_9xcB8.js";import"./remote-B0txjFXx.js";import"./react-children-utilities-DXTTJAXw.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
