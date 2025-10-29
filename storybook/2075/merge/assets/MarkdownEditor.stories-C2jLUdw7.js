import{j as r,r as h}from"./iframe-C9dYfgSf.js";import{a,u as p,F as d,t as F}from"./Form-BmEbV8bf.js";import{L as s}from"./Label-huPJyomh.js";import{B as m}from"./Button-RNpKkVK8.js";import{S as x}from"./Section-DQdw2BcZ.js";import{A as E}from"./ActionGroup-DjfN3Zb7.js";import{s as l}from"./Action-BrSPa5cY.js";import{M as n}from"./MarkdownEditor-BkYURivM.js";import{F as j}from"./useFieldComponent-Br5YSvi-.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./browser-CNYhznL3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-HJzRYjqm.js";import"./utils-CO6LnGLR.js";import"./Hidden-C5ZQOCSQ.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Dialog-W7ChNaVu.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./dynamic-4HLWwwwW.js";import"./getActionGroupSlot-CRNg2W87.js";import"./useStatic-BaiCJrRH.js";import"./context-BXzGXLkM.js";import"./Markdown-BixfWJ__.js";import"./CodeBlock-BE1g0ZrE.js";import"./CopyButton-kFt2-fFK.js";import"./Tooltip-3RuYs7ja.js";import"./ClearPropsContextView-DPeL6MiY.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./react-children-utilities-DAjt5CEG.js";import"./Heading-Bk9PzEEg.js";import"./Heading-D3uq54pF.js";import"./InlineCode-BbNjsp81.js";import"./Link-XChpnkCx.js";import"./Separator-DgYQywqf.js";import"./TextArea-D-0TJTtk.js";import"./TextFieldBase-sNCN9Rfp.js";import"./FieldDescription-aE3p3Nfy.js";import"./TextField-Cfjxq2lC.js";import"./Form-CYcFTCJ6.js";import"./Group-DC27XkzE.js";import"./Input-B4cpKRwG.js";import"./useTextField-fnhO15Be.js";import"./useFormReset-CCon2GTP.js";import"./useFormValidation-cSt72451.js";import"./ReactAriaControlledValueFix-1U2pzmCq.js";import"./useManagedValue-znAKCBZ4.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
