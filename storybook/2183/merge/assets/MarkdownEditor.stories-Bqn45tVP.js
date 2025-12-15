import{j as r,r as x}from"./iframe-CH_aTfEL.js";import{u as n,F as a}from"./Form-Dq17XsDi.js";import{L as s}from"./Label-BqL_a1sm.js";import{F as p,t as E}from"./Field-DweWJcaC.js";import{B as l}from"./Button-D53gB1eO.js";import{S as j}from"./Section-B-U_9AN9.js";import{A as b}from"./ActionGroup-DOhwLXSI.js";import{s as d}from"./Action-WNrTLAcY.js";import{M as m}from"./MarkdownEditor-x9XfaMc4.js";import{F as g}from"./FieldError-DGABQFH-.js";import{S as u}from"./SubmitButton-DZnPOQnn.js";import{R as c}from"./ResetButton-CD3Uv-F4.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-DjBCrPYH.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-vwb-6_Ta.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./Markdown-DizYK5Sb.js";import"./CodeBlock-D5-sj2Ft.js";import"./CopyButton-RCYfYMwi.js";import"./IconCopy-DqV9zx5H.js";import"./Tooltip-pIXLIbfV.js";import"./Activity-DkWdwXP6.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-46aolWGB.js";import"./Heading-YtZItkx8.js";import"./Heading-DKHBxjOZ.js";import"./InlineCode-Cnns-tzA.js";import"./Link-Cf9nEZr7.js";import"./IconDownload-rnu0sB2W.js";import"./Separator-ofb0XQRK.js";import"./TextArea-OA0ixn0s.js";import"./TextFieldBase-DhI98Y4Z.js";import"./useFieldComponent-JY3HqOd-.js";import"./TextField-D7FK5Y0z.js";import"./FieldError-CHaTpVnh.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./useTextField-CGjCcs3_.js";import"./useFormReset-P8yugG2W.js";import"./useFormValidation-qjJTrH9J.js";import"./useControlledHostValueProps-CI7mWjRd.js";import"./IconList-GupnOdp6.js";import"./IconDanger-DRvJdcN_.js";import"./useRef-CkIgL8Qx.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async F=>{await d(5e3),M(F)},f=n({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=n({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
