import{j as r,r as x}from"./iframe-bYrN4iqU.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DRmRwOi9.js";import{L as s}from"./Label-CPmhF0es.js";import{B as l}from"./Button-BXFpqU-p.js";import{S as j}from"./Section-K4GUZgJE.js";import{A as b}from"./ActionGroup-Cgs-Q9B3.js";import{s as d}from"./Action-BReqqCkr.js";import{M as m}from"./MarkdownEditor-Co0Rw3By.js";import{F as g}from"./FieldError-DELvRCSS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CHbvz_qx.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./useRef-2-y0_1ka.js";import"./utils-B3voqzat.js";import"./ButtonView-Dq6BfzVS.js";import"./browser-CHbB-bBA.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./useStatic-ByHvTm37.js";import"./context-CIgtX0DK.js";import"./Markdown-CGxJqPHz.js";import"./CodeBlock-Db-KacP3.js";import"./CopyButton-CxGTlA4y.js";import"./Tooltip-BZOLJrl9.js";import"./react-children-utilities-DFfxOLWp.js";import"./Heading-tEMYcZaF.js";import"./Heading-CY9qodVf.js";import"./InlineCode-7Jt6-up7.js";import"./Link-DPWKKiRI.js";import"./Separator-Diqeq5uG.js";import"./TextArea-Dr95tFgm.js";import"./useFieldComponent-CM1iSrAB.js";import"./useControlledHostValueProps-BerRKa1k.js";import"./FieldDescription-toQACF4D.js";import"./TextField-D0DOtFtH.js";import"./FieldError-BBcT2nDa.js";import"./Form-RNfZ8NGW.js";import"./Group-g7yR8ljX.js";import"./Input-DaDcKDBm.js";import"./useTextField-Cf3_UQe0.js";import"./useFormReset-Cb31B_gj.js";import"./useFormValidation-CAwH-_ip.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
