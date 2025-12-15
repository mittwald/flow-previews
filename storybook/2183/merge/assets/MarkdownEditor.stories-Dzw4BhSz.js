import{j as r,r as x}from"./iframe-CN4G8qqm.js";import{u as n,F as a}from"./Form-BIBDTt_X.js";import{L as s}from"./Label-SrhLxamV.js";import{F as p,t as E}from"./Field-DHx6lHTS.js";import{B as l}from"./Button-Bq80dFyw.js";import{S as j}from"./Section-BzFgBFFU.js";import{A as b}from"./ActionGroup-CwhBesa8.js";import{s as d}from"./Action-Cfr2BBp2.js";import{M as m}from"./MarkdownEditor-CBZM-B3a.js";import{F as g}from"./FieldError-ClazPaCD.js";import{S as u}from"./SubmitButton-DXpxzH2k.js";import{R as c}from"./ResetButton-uasqmqzP.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-4OAE62jj.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./context-CcGGjrZQ.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-D9oGWwUs.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./Text-0Ubm83r2.js";import"./EmulatedBoldText-moUjmeps.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./ContextMenuSection-D61kPd_y.js";import"./lib-90ocxLs-.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./useStatic-CM9-VZa7.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./Markdown-DH1jHG0B.js";import"./CodeBlock-wyC7S0bk.js";import"./CopyButton-qRGIGytt.js";import"./IconCopy-CCUU2cMw.js";import"./Tooltip-ONSp7zQW.js";import"./Activity-BEbOvIp9.js";import"./TranslationProvider-D4PNRj4s.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-BSzC99r6.js";import"./Heading-DbxU3Nde.js";import"./Heading-BTWrK-KI.js";import"./InlineCode-CS9RFczt.js";import"./Link-BRpj7OZb.js";import"./IconDownload-CSUf4bNc.js";import"./Separator-GGEjIhzB.js";import"./TextArea-W8LH9v11.js";import"./TextFieldBase-DVCL_uIk.js";import"./useFieldComponent-TTf0ydYE.js";import"./TextField-CYL1yyAr.js";import"./FieldError-BYURGtTT.js";import"./Form-CGtio7r9.js";import"./Group-CcXOZiUc.js";import"./Input-DrCQZ-OZ.js";import"./useTextField-BcSIXJQ5.js";import"./useFormReset-CiTTEZ9A.js";import"./useFormValidation-Dm9_Tt2c.js";import"./useControlledHostValueProps-D4EY9U9i.js";import"./IconList-Ds7-sRtV.js";import"./IconDanger-BS5-adBO.js";import"./useRef-BiGavIyS.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async F=>{await d(5e3),M(F)},f=n({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=n({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
