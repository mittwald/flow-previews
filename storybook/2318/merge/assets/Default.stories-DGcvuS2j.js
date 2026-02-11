import{r as h,j as r}from"./iframe-CNIcTJYh.js";import{P as m}from"./PasswordCreationField-D9saDKL3.js";import{L as u}from"./Label-Dk1BsiHf.js";import{B as g}from"./Button-DAjUCwya.js";import{m as C}from"./IconWarning-DfNRCo5R.js";import{C as w}from"./CopyButton-01KDGMzX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfddFL0U.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./Action-CB-yo4he.js";import"./context-CHGIk6I_.js";import"./useStatic-J4GDP0vf.js";import"./browser-e5gpn1Ib.js";import"./getActionGroupSlot-BroJtED_.js";import"./FieldDescription-D4T9Jptd.js";import"./Text-6t0QtAeQ.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./utils-BMrW0rs-.js";import"./Tooltip-xebOMeva.js";import"./OverlayArrow-CaHszdLs.js";import"./useFocus-Z0zsAUPg.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./context-C-_0n7Mf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DW-rJUC8.js";import"./useControlledState-aVbBpOCK.js";import"./useFocusable-pw23kKVy.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./ContextualHelpTrigger-Byh6waEB.js";import"./Popover-DmppkICQ.js";import"./useOverlayController-DAzTf57J.js";import"./OverlayContextProvider-DLVotmKz.js";import"./Dialog-C8--keRD.js";import"./Button-BxwMmJez.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-YapnYrtx.js";import"./RSPContexts-BRYZfydm.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./OverlayTrigger-DLlBnUgI.js";import"./Heading-CSBDI-d5.js";import"./Heading-DegGgrrB.js";import"./useFieldComponent-BcSx3cQM.js";import"./FieldError-CRJL1-ZW.js";import"./FieldError-C-WtBUhj.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";import"./useControlledHostValueProps-CCy3mJ8p.js";import"./TextField-BlWPRgiP.js";import"./Form-DFzq_6cf.js";import"./Group-B3nGsmaJ.js";import"./Input-DXXfkxpG.js";import"./useTextField-DUQ7sCSl.js";import"./useFormReset-ClGEeDTe.js";import"./useFormValidation-Cl_ELzYY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D1M8B3tV.js";import"./remote-yIvwWX6j.js";import"./react-children-utilities-D6i7qg5I.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
