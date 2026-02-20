import{r as h,j as r}from"./iframe-BF3zk0it.js";import{P as m}from"./PasswordCreationField-B9ze9K6x.js";import{L as u}from"./Label-DcRc8bay.js";import{B as g}from"./Button-ZNdemegp.js";import{m as C}from"./IconWarning-BmoaMC54.js";import{C as w}from"./CopyButton-BlgHSm04.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DMyjxIhV.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./ActionBatch-DvnrQlZS.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./browser-Cxel5Cqf.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./FieldDescription-CYCZIfgJ.js";import"./Text-C9_U4GIb.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./utils-Ds629Okb.js";import"./Tooltip-8u-WMwOu.js";import"./OverlayArrow-CX6asWYb.js";import"./useFocus-BGqYFkhn.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./context-B_W42rBs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C8HzCuNM.js";import"./useControlledState-ChKdFYY_.js";import"./useFocusable-BWie7cw6.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./ContextualHelpTrigger-BsLN_BVx.js";import"./Popover-CIOQTdzG.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./RSPContexts-ssfE85JL.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./OverlayTrigger-C5NrL7-k.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./useFieldComponent-Z2yLJYUo.js";import"./FieldError-C2kAtlyK.js";import"./FieldError-WTvIa9hl.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";import"./useControlledHostValueProps-C-DklFre.js";import"./TextField-CN-_Qj1L.js";import"./Form-r-oZJvOh.js";import"./Group-Bhaa4wBz.js";import"./Input-Q6yM49Eu.js";import"./useTextField-CQuzVOOK.js";import"./useFormReset-Dd7cUUSK.js";import"./useFormValidation-Clvn3NKc.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BryS_W8u.js";import"./remote-CJL-gtYq.js";import"./react-children-utilities-CMhDhYTN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
