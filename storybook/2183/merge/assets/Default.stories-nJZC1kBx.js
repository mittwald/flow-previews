import{r as h,j as r}from"./iframe-CN4G8qqm.js";import{P as m}from"./PasswordCreationField-C79SXZ0G.js";import{L as u}from"./Label-SrhLxamV.js";import{B as g}from"./Button-Bq80dFyw.js";import"./IconChevronDown-oGa76fM6.js";import{I as C}from"./IconDanger-BS5-adBO.js";import{C as w}from"./CopyButton-qRGIGytt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D9oGWwUs.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./TranslationProvider-D4PNRj4s.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./context-CQHW5bQg.js";import"./Button-DbVJWx45.js";import"./utils-DbmEdXKf.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./browser-TeUtxSTm.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./useStatic-CM9-VZa7.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Activity-BEbOvIp9.js";import"./Text-0Ubm83r2.js";import"./EmulatedBoldText-moUjmeps.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Tooltip-ONSp7zQW.js";import"./Action-Cfr2BBp2.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./IconCircleCheck-C7IJvtcp.js";import"./ContextualHelpTrigger-DIvAEDZl.js";import"./Popover-ro5fYKAY.js";import"./OverlayTrigger-D4cmnJfg.js";import"./IconInfo-BhF6VzKQ.js";import"./Heading-DbxU3Nde.js";import"./Heading-BTWrK-KI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-TTf0ydYE.js";import"./FieldError-ClazPaCD.js";import"./FieldError-BYURGtTT.js";import"./useControlledHostValueProps-D4EY9U9i.js";import"./TextField-CYL1yyAr.js";import"./Form-CGtio7r9.js";import"./Group-CcXOZiUc.js";import"./Input-DrCQZ-OZ.js";import"./useTextField-BcSIXJQ5.js";import"./useFormReset-CiTTEZ9A.js";import"./useFormValidation-Dm9_Tt2c.js";import"./Label.module-lamhxTiw.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./remote-DWrodQTa.js";import"./IconCopy-CCUU2cMw.js";import"./react-children-utilities-BSzC99r6.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const yr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,yr as __namedExportsOrder,qr as default};
