import{r as h,j as r}from"./iframe-D7SrQHv2.js";import{L as u}from"./Label-77ddNxr9.js";import{B as g}from"./Button-BDlkh_ZH.js";import"./IconChevronDown-CXRERNRA.js";import{I as C}from"./IconDanger-Bz8n8vBB.js";import{C as w}from"./CopyButton-5hVisBkB.js";import{P as m}from"./PasswordCreationField-uxzst94S.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./Label-mdRoqDLO.js";import"./utils-CiuuAwJm.js";import"./Hidden-4rkKn0h6.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./Text-DGpwmxCB.js";import"./browser-DrK2T41E.js";import"./EmulatedBoldText-ChURRL1S.js";import"./Text-BPF9cVJc.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DGKmlYcY.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./IconCopy-DYW7vyDQ.js";import"./Tooltip-CDyuk9lM.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./react-children-utilities-CY3wtqaS.js";import"./Action-DB8rk5cM.js";import"./useStatic-D8BNL5i4.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./context-CVbxfW-6.js";import"./dynamic-CUG3tgkH.js";import"./FieldDescription-8yynaeWp.js";import"./TranslationProvider-JxhuC6eI.js";import"./IconCircleCheck-xyI2D9cA.js";import"./ContextualHelpTrigger-Cwvr428w.js";import"./Popover-BUg_NIsh.js";import"./OverlayContextProvider-BfbVSJ_X.js";import"./Dialog-CW3mhUGv.js";import"./RSPContexts-BbVjh3iw.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./useOverlayController-BymioyTT.js";import"./OverlayTrigger-DdsmxRpP.js";import"./IconInfo-Da8TkM4N.js";import"./Heading-Bt8iyrDh.js";import"./Heading-CAzYiv_H.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Cu1xRHEa.js";import"./FieldError-Cd_0vMJA.js";import"./FieldError-B-ueBDjj.js";import"./useControlledHostValueProps-WnB_OtyO.js";import"./TextField-Bs7eGWI8.js";import"./Form-DYXfoEHm.js";import"./Group-Ds1F9E5T.js";import"./Input-H0beOHaq.js";import"./useTextField-DipTMMT5.js";import"./useFormReset-icxQof7S.js";import"./useFormValidation-LvcU-ucb.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
