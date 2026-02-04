import{r as h,j as r}from"./iframe-CBdrHiu-.js";import{P as m}from"./PasswordCreationField-Dky_ijcq.js";import{L as u}from"./Label-BnDRrnHY.js";import{B as g}from"./Button-CvrzgGgN.js";import{m as C}from"./IconWarning-B89fpQti.js";import{C as w}from"./CopyButton-TqUBSYPn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cbo9i_64.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./clsx-B-dksMZM.js";import"./index-DbZpFDe3.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./browser-DtunHlVO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./FieldDescription-D24R2cXv.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./utils-DRjcKwJb.js";import"./Tooltip-DKvl7rsT.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useFocus-BOx7sVQU.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./context-p6nKBAyO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CFSl2bW1.js";import"./useControlledState-H50OY390.js";import"./useFocusable-DA2EU5Pw.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./ContextualHelpTrigger-DZlN1zyL.js";import"./Popover-Blf-QLvj.js";import"./useOverlayController-s1zH8rAH.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./Dialog-C9BJ8Byi.js";import"./Button-DGOdyj-q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNG00Dag.js";import"./RSPContexts-B6JknHHE.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./OverlayTrigger-CiCUVE66.js";import"./Heading-B0bk6t16.js";import"./Heading-BzPKH39A.js";import"./useFieldComponent-CkNNSE-6.js";import"./FieldError-OVkxnP3X.js";import"./FieldError-hDU9I6ir.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./useControlledHostValueProps-Ea8I-r_D.js";import"./TextField-D9lyQzqC.js";import"./Form-Dpu47_EF.js";import"./Group-DDiSLZpo.js";import"./Input-3Q4wlXjr.js";import"./useTextField-CEh0Boal.js";import"./useFormReset-DzYWM4EU.js";import"./useFormValidation-BxN5Q1uu.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B7nOYR-m.js";import"./remote-SRpD7Y2I.js";import"./react-children-utilities-CmbNXjxf.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
