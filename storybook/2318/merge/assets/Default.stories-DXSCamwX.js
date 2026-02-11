import{r as h,j as r}from"./iframe-BuRyV86k.js";import{P as m}from"./PasswordCreationField-CR1IUQu7.js";import{L as u}from"./Label-D5Mh9PbX.js";import{B as g}from"./Button-CyndH9Xm.js";import{m as C}from"./IconWarning-DAJxMizk.js";import{C as w}from"./CopyButton-CPJ0jLsy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-clmxwr04.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./clsx-B-dksMZM.js";import"./index-DXDzX26U.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./browser-DvnOBVed.js";import"./getActionGroupSlot-BzS6Espk.js";import"./FieldDescription-DTtWzPY6.js";import"./Text-DPwKDAaR.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./utils-DCjU3VYp.js";import"./Tooltip-DuaPW586.js";import"./OverlayArrow-DmdSnWXA.js";import"./useFocus-CQWcTqjz.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./context-C6SHLczB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CY0UXM2e.js";import"./useControlledState-DYwoO1wA.js";import"./useFocusable-CtKU_QIU.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./ContextualHelpTrigger-C6PxEnH2.js";import"./Popover-BVSj5O_5.js";import"./useOverlayController-BJSaXgbE.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./Dialog-aD4BOG19.js";import"./Button-0f0DNfgK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B_1LlkAk.js";import"./RSPContexts-Czmfvb19.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./OverlayTrigger-BevBDs3M.js";import"./Heading-oMtFtRoB.js";import"./Heading-BErX5OWg.js";import"./useFieldComponent-Duyh6ShH.js";import"./FieldError-CyZxViQf.js";import"./FieldError-BEkkBW9r.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./useControlledHostValueProps-BxMuxOiL.js";import"./TextField-DZvNX4Ri.js";import"./Form-C4eLdnUU.js";import"./Group-Ct0D2Y45.js";import"./Input-BOqi5cwZ.js";import"./useTextField-CPw5IR_g.js";import"./useFormReset-BkHfz2ea.js";import"./useFormValidation-DZRdJrD7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BX044VJ0.js";import"./remote-Cg9OAbJn.js";import"./react-children-utilities-c8JKAa5e.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
