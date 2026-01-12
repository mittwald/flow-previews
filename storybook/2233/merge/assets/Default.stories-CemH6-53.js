import{r as h,j as r}from"./iframe-DkC9HeFh.js";import{P as m}from"./PasswordCreationField-CpvYuT0y.js";import{L as u}from"./Label-Bmyd95n1.js";import{B as g}from"./Button-B7ieOWfK.js";import{m as C}from"./IconWarning-6DY0-AAa.js";import{C as w}from"./CopyButton-DDCtj1zp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDaduNaQ.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./Action-BeqMUzE-.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./browser-tA6G_ksz.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./FieldDescription-DzNmSyg3.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./utils-CQbe0cgS.js";import"./Tooltip-qvCrGnxX.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useFocus-DkNOoSBL.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./context-FwWFVwDs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Ul0j90Sg.js";import"./useFocusable-CeYJrI7n.js";import"./useFocusRing-C9ROKOON.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./ContextualHelpTrigger-MdBpXza_.js";import"./Popover-nq4j79nG.js";import"./useOverlayController-CKW4WHoS.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./Dialog-BJyrAoE0.js";import"./Button-1sEra0ij.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-zXWrYZpb.js";import"./RSPContexts-CKa7E1cC.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";import"./OverlayTrigger-BY_bjwFe.js";import"./Heading-C5UH4Hr2.js";import"./Heading-C_Zexpqw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-eCPWR12U.js";import"./FieldError-Dbnkzdo1.js";import"./FieldError-CNoEBaIo.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";import"./useControlledHostValueProps-CcqRfY0b.js";import"./TextField-BuskeFhM.js";import"./Form-D5R2a4m8.js";import"./Group-C_JnVwTY.js";import"./Input-BPPE0u71.js";import"./useTextField-DbxlREwJ.js";import"./useFormReset-BF2XnUgU.js";import"./useFormValidation-DmYU2vdY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-lFYILNSp.js";import"./remote-C2KQESr1.js";import"./react-children-utilities-DZp9i3kA.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
