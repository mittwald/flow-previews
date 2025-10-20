import{j as r,r as y}from"./iframe-CuPb25cv.js";import{a,u as p,F as d,t as w}from"./Form-D3dPEjiA.js";import{L as m}from"./Label-BZpLTozc.js";import{B as s}from"./Button-Cy_FSVpl.js";import{S as B}from"./Section-B55_57D7.js";import{A as k}from"./ActionGroup-BCzfYI9o.js";import{s as l}from"./Action-CE7P3CGA.js";import{M as n}from"./MarkdownEditor-DHitZmX2.js";import{F as L}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./Markdown-BKodtpDo.js";import"./CodeBlock-BsM95Q6E.js";import"./CopyButton-DETJwyRw.js";import"./Tooltip-XK3F9AOy.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./react-children-utilities-OY5o0O78.js";import"./Heading-DyK_r6HL.js";import"./Heading-CSLfLI3i.js";import"./InlineCode-Njf1uGRR.js";import"./Link-C-VKV--6.js";import"./Separator-D0Xo8Prf.js";import"./TextArea-DeNqirjp.js";import"./TextFieldBase-Cpr2rxOi.js";import"./FieldDescription-C0wUj9vw.js";import"./TextField-D8WUfi5z.js";import"./Form-BCVzxl1k.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./useTextField-459gVrKP.js";import"./useFormReset-Cj0hiSlt.js";import"./useFormValidation-DUD5vlRz.js";import"./ReactAriaControlledValueFix-DRH_PgL6.js";import"./useManagedValue-Di8zsDa6.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,_=O("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async S=>{await l(5e3),_(S)},g=p({defaultValues:{user:""}}),M=w();return r.jsx(d,{form:g,onSubmit:o,children:r.jsxs(B,{children:[r.jsx(M,{name:"user",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsx(k,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var u,c,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,F,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(F=e.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var E,j,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
