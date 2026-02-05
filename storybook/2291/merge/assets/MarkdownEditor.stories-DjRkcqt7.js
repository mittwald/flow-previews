import{j as r,r as x}from"./iframe-DCk1dltx.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-BskZzvDk.js";import{L as s}from"./Label-CoyrnT1D.js";import{B as l}from"./Button-DZuynozn.js";import{S as j}from"./Section-DrurSGwC.js";import{A as b}from"./ActionGroup-BFgB1RLe.js";import{s as d}from"./Action-CYJGL_dI.js";import{M as m}from"./MarkdownEditor-8jDpxffh.js";import{F as g}from"./FieldError-CH94tTsu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BisWu7fc.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./clsx-B-dksMZM.js";import"./index-CPFdYWIc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./useRef-AiAHEOJG.js";import"./utils-dLBbTpD9.js";import"./ButtonView-mTtK9nwk.js";import"./browser-CviVsCbd.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./Text-BrHbgyhX.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwKHWgOu.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocusable-CjQRw48Z.js";import"./ContextMenuSection-DnWeaq_7.js";import"./Dialog-Cwy0OKAE.js";import"./RSPContexts-DsTbr3uT.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./useStatic-CBlVxf-j.js";import"./context-B-YNLj-l.js";import"./Markdown-D7uhXT5x.js";import"./CodeBlock-DGiN7hai.js";import"./CopyButton-DvidLTSd.js";import"./Tooltip-CXU9dzCj.js";import"./react-children-utilities-C5wuDm4Y.js";import"./Heading-DeB9aMje.js";import"./Heading-CMNPfOZB.js";import"./InlineCode-We57i3XC.js";import"./Link-A1LlWMZC.js";import"./Separator-DvlrJKZv.js";import"./TextArea-C0EoLg_6.js";import"./useFieldComponent-DRONwAvB.js";import"./useControlledHostValueProps-CdKWKK9K.js";import"./FieldDescription-Dyuwn7yW.js";import"./TextField-BOQwYKzc.js";import"./FieldError-BprKDa8q.js";import"./Form-DaC80i58.js";import"./Group-BdCjqrPc.js";import"./Input-B3blwCao.js";import"./useTextField-DpI6Ye3-.js";import"./useFormReset-BYlFqKoc.js";import"./useFormValidation-BQhs4ME7.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
