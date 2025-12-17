import{r as h,j as r}from"./iframe-DCi2GPXy.js";import{L as u}from"./Label-DgDJIBjn.js";import{B as g}from"./Button-BvlVjfXN.js";import"./IconChevronDown-DONjXQZK.js";import{I as C}from"./IconDanger-RXl46e71.js";import{C as w}from"./CopyButton-KUk3jRYl.js";import{P as m}from"./PasswordCreationField-BSM92Vhj.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./Label-DnXzFWpe.js";import"./utils-vPyJ8qyD.js";import"./Hidden-DFhlcUMl.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./Text-DKbhm8jI.js";import"./browser-rXh1EgRD.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BdJtJUco.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./IconCopy-C4R8Fw52.js";import"./Tooltip-stabicUJ.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./react-children-utilities-DFAp3YLO.js";import"./Action-DSvpN5_w.js";import"./useStatic-jalrqC7_.js";import"./getActionGroupSlot-7vmQNanS.js";import"./context-sCXpQMxk.js";import"./dynamic-68RthJrk.js";import"./FieldDescription-CPk3_hJh.js";import"./TranslationProvider-BqslaO-E.js";import"./IconCircleCheck-CSqkttT0.js";import"./ContextualHelpTrigger-CP56etc3.js";import"./Popover-BnCWtHze.js";import"./OverlayContextProvider-D_GJsvcI.js";import"./Dialog-DTMFojiS.js";import"./RSPContexts-BfriozQD.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./useOverlayController-DBH63_PO.js";import"./OverlayTrigger-DFetn7sb.js";import"./IconInfo-Bx5Ze7ly.js";import"./Heading-NyshyzbT.js";import"./Heading-ogCw2BOE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-D5bCUPLo.js";import"./FieldError-CX3tsRfV.js";import"./FieldError-GB-3lq6u.js";import"./useControlledHostValueProps-BzUlSFsd.js";import"./TextField-DJpGRy0g.js";import"./Form-Dfwyevmy.js";import"./Group-CUVHCniN.js";import"./Input-mbO-O18b.js";import"./useTextField-BKiVsIjU.js";import"./useFormReset-C2pwuPUB.js";import"./useFormValidation-DJEczJgL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
