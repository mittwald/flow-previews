import{r as h,j as r}from"./iframe-QQgxjfU-.js";import{P as m}from"./PasswordCreationField-ICmgdmlu.js";import{L as u}from"./Label-TUk01fEf.js";import{B as g}from"./Button-BWu_s2A1.js";import{l as C}from"./IconWarning-CSQYjrC1.js";import{C as w}from"./CopyButton-DVNia6QF.js";import"./index-nuYtCEEu.js";import"./dynamic-BjF6TIyL.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./clsx-B-dksMZM.js";import"./index-3NdHptBj.js";import"./useFieldComponent-B5mMljfV.js";import"./utils-DhA81qjX.js";import"./Text-D_WC5Uss.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-2-HBtGkG.js";import"./ClearPropsContext-C1xOcMSE.js";import"./Group-fEBq4Exh.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocus-0cMRA2DE.js";import"./Input-BMf7xRQe.js";import"./Hidden-4F2-2j_N.js";import"./TextField-Cw982LxM.js";import"./RSPContexts-CsH1Ib1c.js";import"./Form-w-Aai7lh.js";import"./useLabel-BVJbXyTi.js";import"./Label-0zOMPJ7B.js";import"./useTextField-CzPGIxLo.js";import"./useFormReset-C3QpCCH-.js";import"./useControlledState-CkoNAxF1.js";import"./useFocusable-ClkP-4lm.js";import"./useFormValidation-CrlfASAQ.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./useStatic-B5jRDwsJ.js";import"./browser-CvCNE6Dh.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./FieldDescription-ByaGBmYT.js";import"./Text-CRs-OO-e.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Tooltip-DvjUvLQa.js";import"./ClearPropsContextView-DUKOvykV.js";import"./OverlayArrow-8rZ2ifiK.js";import"./ProgressBar-DarvvV7I.js";import"./context-CRx6Bs8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./ReactAriaControlledValueFix-1vIdF7qI.js";import"./ContextualHelpTrigger-D-UPW49D.js";import"./Popover-6OcPTHJw.js";import"./useOverlayController-nxYv6OIh.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./Dialog-D5kgP22k.js";import"./Button-D9YKuqRT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIrX7kgo.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";import"./OverlayTrigger-Kv_JLhIy.js";import"./ControlledNotification-BZ0xiENt.js";import"./Heading-BhecTOma.js";import"./Heading-SF4sVKWG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CZ4gg3S2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DsHmX75T.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
