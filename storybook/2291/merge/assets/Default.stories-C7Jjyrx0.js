import{r as h,j as r}from"./iframe-BL1IY_6V.js";import{P as m}from"./PasswordCreationField-BsYHo0Vc.js";import{L as u}from"./Label-8Io_X3px.js";import{B as g}from"./Button-B7zQBVb0.js";import{m as C}from"./IconWarning-BTI7YBWG.js";import{C as w}from"./CopyButton-BhOvn3UV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./browser-DogRo3Wh.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./FieldDescription-DBr0KSuv.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./utils-GyL2rjZN.js";import"./Tooltip-D3eoqY2j.js";import"./OverlayArrow-CpLmLaON.js";import"./useFocus-D7_v9YO6.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./context-BeO7KH58.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEMWgzWY.js";import"./useControlledState-CA6yhcg7.js";import"./useFocusable-CUtc6O_Q.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./ContextualHelpTrigger-DisKMuI6.js";import"./Popover-B7Z0vypa.js";import"./useOverlayController-D_GPxB6v.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./Dialog-CDLoJFKu.js";import"./Button-CHtMceZn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxRwZ9-L.js";import"./RSPContexts-BsiO56QH.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./OverlayTrigger-D4p9MH82.js";import"./Heading-Weu1gBHD.js";import"./Heading-CMaaNVI7.js";import"./useFieldComponent-oZ5IqIdY.js";import"./FieldError-D0yWaYHs.js";import"./FieldError-CCCCRqJ9.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./useControlledHostValueProps-BUMS7H49.js";import"./TextField-DMfj3WzX.js";import"./Form-Ca3ASx7C.js";import"./Group-DzRbvT54.js";import"./Input-BFv5VDBN.js";import"./useTextField-vHdyh5zn.js";import"./useFormReset-C4J5P-lS.js";import"./useFormValidation-DCrH4OQY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BFVS5fU_.js";import"./remote-BuZW91cH.js";import"./react-children-utilities-DJpeMoip.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
