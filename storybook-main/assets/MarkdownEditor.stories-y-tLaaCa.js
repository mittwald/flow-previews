import{j as r,r as x}from"./iframe-Bt_Ape3b.js";import{b as n,u as a,F as p,t as E}from"./Form-B8CwJQM0.js";import{L as s}from"./Label-LBQHmcU0.js";import{R as u,S as c}from"./ResetButton-C8v8M-AR.js";import{B as l}from"./Button-Bm5EggmV.js";import{S as j}from"./Section-fmZi8k9e.js";import{A as b}from"./ActionGroup-BVJwbp62.js";import{s as d}from"./Action-B2h50d-b.js";import{M as m}from"./MarkdownEditor-kLr5F2XD.js";import{F as g}from"./FieldError-DvZju2Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ysZU61.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./browser-BI8hAkYP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bfb_thp3.js";import"./utils-DGGum7sG.js";import"./Hidden-CJIrU941.js";import"./useRef-1CdJSa2G.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./Text-Bs2hbxJA.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./LoadingSpinner-CXrerpwy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pXrc8KX9.js";import"./ProgressBar-DgNpOae2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DErVZDbk.js";import"./useFocus-C-togmBu.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./ContextMenuSection-22Ea6AVl.js";import"./Dialog-3KThjjZh.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./useStatic-DpZVpe0y.js";import"./context-CGPA3PGo.js";import"./Markdown-D5x1Evqg.js";import"./CodeBlock-CwzQ99eU.js";import"./CopyButton-CG_VZ4y8.js";import"./Tooltip-90xC8mRq.js";import"./react-children-utilities-D9rd2J34.js";import"./Heading-C3-uF7Fn.js";import"./Heading-CF5bGxey.js";import"./InlineCode-BhWONWg7.js";import"./Link-BnH-6vvM.js";import"./Separator-CRDeFh9I.js";import"./TextArea-Bp0tCNpF.js";import"./TextFieldBase-BLvJh4XV.js";import"./FieldDescription-BVGH4033.js";import"./useFieldComponent-QpDNRghi.js";import"./TextField-BJdO3hjf.js";import"./FieldError-Cd4omKy3.js";import"./Form-E_SZdIUl.js";import"./Group-MbSsCM3Y.js";import"./Input-DtIcDeFz.js";import"./useTextField-DKaBY6Vl.js";import"./useFormReset-BU_Yh1RY.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useControlledHostValueProps-D-YKizXP.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
