import{j as r,r as h}from"./iframe-DCa_XPw0.js";import{a,u as p,F as d,t as F}from"./Form-BRygFy9B.js";import{L as s}from"./Label-vDm2WQu9.js";import{B as m}from"./Button-5vT2-_W4.js";import{S as x}from"./Section-DMxoBBTe.js";import{A as E}from"./ActionGroup-B0BJPAOp.js";import{s as l}from"./Action-woDk9-dG.js";import{M as n}from"./MarkdownEditor-Bx7sNa_v.js";import{F as j}from"./useFieldComponent-DnSwczmT.js";import"./index-nuYtCEEu.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./clsx-B-dksMZM.js";import"./index-d5hFVLIP.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./context-CFo6-Xo4.js";import"./browser-2ZL6lgPg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCh_0unC.js";import"./utils-CHsRUe2b.js";import"./Hidden-DqzRERrR.js";import"./IconWarning-Q2oX1eiS.js";import"./Text-DnODaVEe.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Text-I5qgKc0V.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./ContextMenuSection-DAzc5rVw.js";import"./Dialog-jvkUQzt2.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useControlledState-CRVJv1rD.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";import"./dynamic-DrAw5ycp.js";import"./getActionGroupSlot-InsSo2J4.js";import"./useStatic-CrVdgLYB.js";import"./context-Dlf3CpRu.js";import"./Markdown-DMKoJ4Xj.js";import"./CodeBlock-fnvUHwZP.js";import"./CopyButton-BVKgaJmi.js";import"./Tooltip-Yn6AXLwR.js";import"./ClearPropsContextView-CquQV2OH.js";import"./ClearPropsContext-D7TWL38i.js";import"./react-children-utilities-BnxGKhPm.js";import"./Heading-Ev2tnW6a.js";import"./Heading-dctUcVn8.js";import"./InlineCode-D-ROl52u.js";import"./Link-4Tmv8xw7.js";import"./Separator-DVkWvHcw.js";import"./TextArea-DRCBCnk_.js";import"./TextFieldBase-QAPzW9yl.js";import"./FieldDescription-gVsh-1jz.js";import"./TextField-CcD4MdAG.js";import"./Form-gH1nSwk6.js";import"./Group-DoigBsDb.js";import"./Input-Btedufej.js";import"./useTextField-B0SsZGN0.js";import"./useFormReset-C_Ugenz9.js";import"./useFormValidation-Dya2y-k8.js";import"./ReactAriaControlledValueFix-BMN_qpn9.js";import"./useManagedValue-Dwx_sQtt.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,zr as __namedExportsOrder,Yr as default};
