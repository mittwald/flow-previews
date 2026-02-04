import{r as h,j as r}from"./iframe-BrRYKFNZ.js";import{P as m}from"./PasswordCreationField-QZljquh4.js";import{L as u}from"./Label-16dSI6nY.js";import{B as g}from"./Button-C60cqGfK.js";import{m as C}from"./IconWarning-BeyOYKIy.js";import{C as w}from"./CopyButton-PGbcg0c-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CVEHQCEx.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./Action-D8nw7HFc.js";import"./context-CrKKxYCQ.js";import"./useStatic-CMNgov9B.js";import"./browser-rpb3JyGK.js";import"./getActionGroupSlot-BX1oqOED.js";import"./FieldDescription-59pme2uS.js";import"./Text-BQhotjr-.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./utils-B1YhIU5r.js";import"./Tooltip-CrR3x0by.js";import"./OverlayArrow-O3cIaLnV.js";import"./useFocus-Br7iUm-k.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./context-CNZG124A.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DN4mDdXp.js";import"./useControlledState-BbGuTZMM.js";import"./useFocusable-NfSEA2Af.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./ContextualHelpTrigger-fTgmQiWg.js";import"./Popover-C9Fh-oR7.js";import"./useOverlayController-Okmjmi6H.js";import"./OverlayContextProvider-Cf_qIYKP.js";import"./Dialog-CrRUDPQZ.js";import"./Button-B8owV-WL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-fw0Lqzwn.js";import"./RSPContexts-Cc3CuTB3.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./OverlayTrigger-D29G-Fo8.js";import"./Heading-BEvNp9N_.js";import"./Heading-DT_vZFGH.js";import"./useFieldComponent-D0nvFHA9.js";import"./FieldError-Ce69irxX.js";import"./FieldError-DMOv5TcV.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";import"./useControlledHostValueProps-S6eu0XJI.js";import"./TextField-CspPj2uB.js";import"./Form-C0F-7ONn.js";import"./Group-DhsxY3hh.js";import"./Input-DUxkIprV.js";import"./useTextField-GgVwnZzD.js";import"./useFormReset-9TaX9dD_.js";import"./useFormValidation-vznVoA4Z.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Djs3hRtr.js";import"./remote-CSM401Gb.js";import"./react-children-utilities-BR1nhUZI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
