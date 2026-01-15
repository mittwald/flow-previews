import{j as r,r as x}from"./iframe-DA37PzgD.js";import{b as n,u as a,F as p,t as E}from"./Form-CNVzXB2H.js";import{L as s}from"./Label-DPj6ip94.js";import{R as u,S as c}from"./ResetButton-CD2o3ffQ.js";import{B as l}from"./Button-C_3hQ6qU.js";import{S as j}from"./Section-CLHfQYLM.js";import{A as b}from"./ActionGroup-zt1HPiGK.js";import{s as d}from"./Action-hYBLKXUj.js";import{M as m}from"./MarkdownEditor-DQZAUom7.js";import{F as g}from"./FieldError-CnCGw98P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cec-XZha.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./clsx-B-dksMZM.js";import"./index-CccRe4nm.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./context-KzPqYKh3.js";import"./browser-Tq-Ovndo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_nNHFmP.js";import"./utils-DtYp6psM.js";import"./Hidden-CyblAlwf.js";import"./useRef-qcoJkYAs.js";import"./IconWarning-DMc9nDIB.js";import"./remote-BJWo5b31.js";import"./Text-CKy5VQ2_.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./ContextMenuSection-DYM7NU_i.js";import"./Dialog-hpWxHudW.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./useControlledState-izS5uoD6.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./VisuallyHidden-C_Tup-b1.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./useStatic-ChmTLNpH.js";import"./context-Cc9V1wfK.js";import"./Markdown-Cz5lJwkC.js";import"./CodeBlock-DWcbGkEh.js";import"./CopyButton-BgmV9S0f.js";import"./Tooltip-WQCQ-XqN.js";import"./react-children-utilities-BIyLA61P.js";import"./Heading-IQrV0yVS.js";import"./Heading-C-vMGDS8.js";import"./InlineCode-D-SMLvOl.js";import"./Link-yESZXTxq.js";import"./Separator-3sz_tCnn.js";import"./TextArea-Dlv0cR-g.js";import"./TextFieldBase-D_vGziBK.js";import"./FieldDescription-z_r4u74B.js";import"./useFieldComponent-DTrWN6Rf.js";import"./TextField-C4o0vjpo.js";import"./FieldError-jhFQ-VHV.js";import"./Form-DXCSZa8G.js";import"./Group-x45aU-Mx.js";import"./Input-BujLciHZ.js";import"./useTextField-CRU8yiuX.js";import"./useFormReset-ChjOdAw3.js";import"./useFormValidation-2Nc27zh7.js";import"./useControlledHostValueProps-BlueJkLA.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ro=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,ro as __namedExportsOrder,$r as default};
