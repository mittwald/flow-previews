import{j as r,r as x}from"./iframe-BTP_Z9Sf.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-D_dyfali.js";import{L as s}from"./Label-Cu7NRaqa.js";import{B as l}from"./Button-er0RkDrE.js";import{S as j}from"./Section-Bql58_C6.js";import{A as b}from"./ActionGroup-Kh2CN0rv.js";import{s as d}from"./Action-CBjIM5JV.js";import{M as m}from"./MarkdownEditor-Cb78_z89.js";import{F as g}from"./FieldError-DnUQcxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LcJrXyvC.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./useRef-Fcqlcr2u.js";import"./utils-DP1LA6WE.js";import"./ButtonView-B2TbsKhv.js";import"./browser-eyJ8FPIK.js";import"./Label.module-CUYTf9Jc.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./getActionGroupSlot-V7kcySO7.js";import"./useStatic-kc5QKD7I.js";import"./context-BwxZaZwM.js";import"./Markdown-DWqneFSS.js";import"./CodeBlock-BDZgjtKx.js";import"./CopyButton-C0I8s8Vs.js";import"./Tooltip-BLtZNxw3.js";import"./react-children-utilities-DCagrUJJ.js";import"./Heading-tBPre37B.js";import"./Heading-CcadeVc2.js";import"./InlineCode-DZAdpLax.js";import"./Link-C9fmLDrA.js";import"./Separator-CP9PIYgv.js";import"./TextArea-DPff8cil.js";import"./useFieldComponent-Da-vFXDP.js";import"./useControlledHostValueProps-C_qKEx-0.js";import"./FieldDescription-DPC9D0sU.js";import"./TextField-Bv9Ux1RZ.js";import"./FieldError-BvNBTK6b.js";import"./Form-BB65cxFE.js";import"./Group-D6HmZmNZ.js";import"./Input-Cgr_O3PE.js";import"./useTextField-D5-cYn1Z.js";import"./useFormReset-Bo1Ib9da.js";import"./useFormValidation-HNZmieSP.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
