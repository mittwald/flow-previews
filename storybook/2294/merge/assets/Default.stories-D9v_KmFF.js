import{r as h,j as r}from"./iframe-BAsHckrK.js";import{P as m}from"./PasswordCreationField-BFoZJrbx.js";import{L as u}from"./Label-DVOhOuhT.js";import{B as g}from"./Button-CAoYj-yB.js";import{m as C}from"./IconWarning-DHq1gdF3.js";import{C as w}from"./CopyButton-BqLPpRuC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGZuOMtH.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./clsx-B-dksMZM.js";import"./index-Cf_R1xcK.js";import"./Action-WxgR-8km.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./browser-tZCM2k1B.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./FieldDescription-CD7ak6-M.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./utils-AcXTY-LA.js";import"./Tooltip-BcLjeMpf.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useFocus-DSg5hzPG.js";import"./ProgressBar-BYgBobO-.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./context-BKg0mO6Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-PAL8hD_p.js";import"./useControlledState-DIA42IR3.js";import"./useFocusable-DEw7yEFU.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./ContextualHelpTrigger-Bv71cuSP.js";import"./Popover-DEs5TtfY.js";import"./useOverlayController-BBLTL3Hv.js";import"./OverlayContextProvider-BJO-3hwU.js";import"./Dialog-BI9ufNdz.js";import"./Button-v8rEwTVX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BtuPSsUz.js";import"./RSPContexts-CrAnBcro.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./VisuallyHidden-BIPiOxSh.js";import"./OverlayTrigger-DKYW-gxq.js";import"./Heading-CuVtTPS-.js";import"./Heading-D3ETNjbu.js";import"./useFieldComponent-uzP_CJXZ.js";import"./FieldError-ZX2j7DJQ.js";import"./FieldError-Ch8lYR65.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";import"./useControlledHostValueProps-DIe9Ntlu.js";import"./TextField-cyE78KFS.js";import"./Form-BEcGmyNR.js";import"./Group-D8US-dbe.js";import"./Input-DVOtN3yU.js";import"./useTextField-DFE5rIX1.js";import"./useFormReset-BBc75pQ_.js";import"./useFormValidation-l5tjlCjY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-fmonyGhO.js";import"./remote-5f3Q71VQ.js";import"./react-children-utilities-DSAPpFTW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
