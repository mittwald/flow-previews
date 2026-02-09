import{j as r,r as x}from"./iframe-CcNHCKoB.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-QovA5GoB.js";import{L as s}from"./Label-F2VOWZsZ.js";import{B as l}from"./Button-DTuLbClr.js";import{S as j}from"./Section-C7V_cxBu.js";import{A as b}from"./ActionGroup-C0eUcCYO.js";import{s as d}from"./Action-XHgAr--T.js";import{M as m}from"./MarkdownEditor-Cida0b1e.js";import{F as g}from"./FieldError-BlodrZIq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nNoo79J6.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./useRef-Cb4CGn_K.js";import"./utils-NnqZ9ZBK.js";import"./ButtonView-BSq0RN-i.js";import"./browser-C0P1LItQ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./Text-BmtlE-88.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./useStatic-BA9Xyuh5.js";import"./context-QFR9DY6D.js";import"./Markdown-CtNSvsmm.js";import"./CodeBlock-Dbz0YI4O.js";import"./CopyButton-C1ei93Vu.js";import"./Tooltip-CvxO1LDU.js";import"./react-children-utilities-C98a-E0h.js";import"./Heading-BmMG8Nl6.js";import"./Heading-CN6CrwNC.js";import"./InlineCode-D5MAKmrv.js";import"./Link-DHksZfNS.js";import"./Separator-B4zK3HNh.js";import"./TextArea-CX50TesA.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./useControlledHostValueProps-DkKi295D.js";import"./FieldDescription-tCT0DlP5.js";import"./TextField-Dxucb5of.js";import"./FieldError--IyvMZRA.js";import"./Form-DRLF_vg9.js";import"./Group-DhbZF5dU.js";import"./Input-D-KHai3o.js";import"./useTextField-CDD3_4OQ.js";import"./useFormReset-CUbMVBNo.js";import"./useFormValidation-PdvsTzHy.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
