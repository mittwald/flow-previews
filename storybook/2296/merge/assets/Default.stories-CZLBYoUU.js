import{r as h,j as r}from"./iframe-CJJ5mYnn.js";import{P as m}from"./PasswordCreationField-DwWmeMVd.js";import{L as u}from"./Label-KzCwLrnq.js";import{B as g}from"./Button-Cm9iNCfL.js";import{m as C}from"./IconWarning-7VhmiBC1.js";import{C as w}from"./CopyButton-BM-YULSj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBA_L5x6.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./clsx-B-dksMZM.js";import"./index-BAQeQlIi.js";import"./Action-DnpS_czG.js";import"./context-B6BNwR5M.js";import"./useStatic-DKMjC4UR.js";import"./browser-Dno-4bzG.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./FieldDescription-BR9EjEal.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./utils-CzEQVu_B.js";import"./Tooltip-g0wya-FY.js";import"./OverlayArrow-B9C6jKaR.js";import"./useFocus-CcXCF9Et.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./context-DMBLfBJz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DJCeTTlI.js";import"./useControlledState-Bk661CCw.js";import"./useFocusable-BrXzadpt.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./ContextualHelpTrigger-DNWE6ooX.js";import"./Popover-CSygdiS-.js";import"./useOverlayController-Bt3E6YJk.js";import"./OverlayContextProvider-DxcnF3G9.js";import"./Dialog-BJQKxFLq.js";import"./Button-DBs8-zE9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjSa1aTn.js";import"./RSPContexts-BTWN0Dkl.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";import"./OverlayTrigger-BPzqtZtz.js";import"./Heading-L7ubE5sI.js";import"./Heading-BM0-1eUi.js";import"./useFieldComponent-DJ8W8blY.js";import"./FieldError-DFjBSzci.js";import"./FieldError-C22n8dTl.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";import"./useControlledHostValueProps-CAr8fGsP.js";import"./TextField-chaiVZmp.js";import"./Form-Di0BFhhp.js";import"./Group-Bb48B7zD.js";import"./Input-BDAHDxkc.js";import"./useTextField-RXxXKEvJ.js";import"./useFormReset-Bwb9lNn2.js";import"./useFormValidation-DDUTP5mG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BkLfehTA.js";import"./remote-__48vje9.js";import"./react-children-utilities-BkMZZzNT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
