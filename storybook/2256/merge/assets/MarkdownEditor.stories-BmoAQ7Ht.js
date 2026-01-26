import{j as r,r as x}from"./iframe-DqoQz6HB.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-CNSz0hY7.js";import{L as s}from"./Label-Bciq9MXz.js";import{B as l}from"./Button-TzxOXnkY.js";import{S as j}from"./Section-ut8JUHwb.js";import{A as b}from"./ActionGroup-C8LdOn1_.js";import{s as d}from"./Action-DgtVbOuJ.js";import{M as m}from"./MarkdownEditor-KKDbdHEe.js";import{F as g}from"./FieldError-eFMpVXMe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-uyvUxMs1.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./clsx-B-dksMZM.js";import"./index-BvQFjuk4.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./context-BlYILeGE.js";import"./useRef-R9mllTp5.js";import"./utils-OqNg9teq.js";import"./ButtonView-B2hG11WB.js";import"./browser-CwaVi4T-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./Text-CYiIq5CT.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./LoadingSpinner-DERXhFNJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CY3jZXsw.js";import"./ProgressBar-C57Cfwin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./ContextMenuSection-Bjk6b3v9.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./useControlledState-CN54iNBt.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./getActionGroupSlot-6JauDhjj.js";import"./useStatic-DhkP1cmF.js";import"./context-DlAFKpyv.js";import"./Markdown-D9ug5keF.js";import"./CodeBlock-BoU6ioZq.js";import"./CopyButton-Cek5dBSx.js";import"./Tooltip-Dg88Z6Fk.js";import"./react-children-utilities-CabIK64i.js";import"./Heading-BXT238vs.js";import"./Heading-BOKCcgdn.js";import"./InlineCode-CbevM0dI.js";import"./Link-C_qWUNLD.js";import"./Separator-Jd68VUlv.js";import"./TextArea-wFIOiSn9.js";import"./TextFieldBase-BPGusUnF.js";import"./FieldDescription-BKQMjDZO.js";import"./useFieldComponent-X8YFoMoP.js";import"./TextField-pxufkl_I.js";import"./FieldError-WaBW2_7-.js";import"./Form-JBdB4aYd.js";import"./Group-NaJr1bQi.js";import"./Input-C72DEuZz.js";import"./useTextField-CnwBOLmd.js";import"./useFormReset-BpNr6OOM.js";import"./useFormValidation-CMGs1DuG.js";import"./useControlledHostValueProps-BkJGNwZt.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
